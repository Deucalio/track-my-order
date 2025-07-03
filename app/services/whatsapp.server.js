import pkg from "whatsapp-web.js";
import QRCode from "qrcode";
import db from "../db.server.js";

// Handle different import patterns for whatsapp-web.js
const { Client, LocalAuth } = pkg.default || pkg;
const prisma = db;

// Custom session handler that stores everything in database
class DatabaseSessionHandler {
  constructor(clientId, prisma) {
    this.clientId = clientId;
    this.prisma = prisma;
    this.sessionData = null;
  }

  async saveSession(sessionData) {
    try {
      await this.prisma.whatsapp_sessions.update({
        where: { client_id: this.clientId },
        data: {
          session_data: sessionData,
          last_seen: new Date(),
          meta_data: {
            session_saved_at: new Date().toISOString(),
            session_size: JSON.stringify(sessionData).length,
          },
        },
      });
      this.sessionData = sessionData;
      console.log(`✅ Session saved for ${this.clientId}`);
      return true;
    } catch (error) {
      console.error(`❌ Error saving session for ${this.clientId}:`, error);
      return false;
    }
  }

  async loadSession() {
    try {
      const session = await this.prisma.whatsapp_sessions.findUnique({
        where: { client_id: this.clientId },
      });

      if (session && session.session_data) {
        this.sessionData = session.session_data;
        console.log(`✅ Session loaded for ${this.clientId}`);
        return session.session_data;
      }

      console.log(`ℹ️ No session data found for ${this.clientId}`);
      return null;
    } catch (error) {
      console.error(`❌ Error loading session for ${this.clientId}:`, error);
      return null;
    }
  }

  async deleteSession() {
    try {
      await this.prisma.whatsapp_sessions.update({
        where: { client_id: this.clientId },
        data: {
          session_data: null,
          status: "disconnected",
          last_seen: new Date(),
        },
      });
      this.sessionData = null;
      console.log(`✅ Session deleted for ${this.clientId}`);
      return true;
    } catch (error) {
      console.error(`❌ Error deleting session for ${this.clientId}:`, error);
      return false;
    }
  }
}

class WhatsAppService {
  constructor() {
    this.clients = new Map();
    this.qrCodes = new Map();
    this.initializingClients = new Set();
    this.sessionHandlers = new Map();
  }

  generateClientId(storeId) {
    return `store-${storeId}`;
  }

  async ensureSessionRecord(storeId, clientId) {
    try {
      let sessionRecord = await prisma.whatsapp_sessions.findUnique({
        where: { client_id: clientId },
      });

      if (!sessionRecord) {
        sessionRecord = await prisma.whatsapp_sessions.create({
          data: {
            stores: {
              connect: { id: 1 }  // ✅ Correct way to link the store
            },
            client_id: clientId,
            status: "initializing",
            session_path: "database",
            last_seen: new Date(),
            meta_data: {},
            session_data: null,
          },
        });
        console.log(`✅ Created new session record for ${clientId}`);
      } else {
        await prisma.whatsapp_sessions.update({
          where: { client_id: clientId },
          data: {
            status: "initializing",
            last_seen: new Date(),
          },
        });
        console.log(`✅ Updated existing session record for ${clientId}`);
      }

      return sessionRecord;
    } catch (error) {
      console.error(`❌ Error ensuring session record for ${clientId}:`, error);
      throw new Error(
        `Failed to create/update session record: ${error.message}`,
      );
    }
  }

  async initialize(storeId) {
    if (!storeId) {
      throw new Error("storeId is required");
    }

    const clientId = this.generateClientId(storeId);

    // Prevent multiple initializations
    if (this.initializingClients.has(clientId)) {
      console.log(`⏳ Client ${clientId} is already initializing`);
      return { clientId, status: "initializing" };
    }

    // Check if client exists and is connected
    if (this.clients.has(clientId)) {
      const existingClient = this.clients.get(clientId);
      try {
        const state = await existingClient.getState();
        if (state === "CONNECTED") {
          console.log(`✅ Client ${clientId} is already connected`);
          return { clientId, status: "ready" };
        }
      } catch (error) {
        console.log(
          `⚠️ Existing client ${clientId} is not responsive, reinitializing`,
        );
        await this.cleanup(clientId);
      }
    }

    this.initializingClients.add(clientId);

    try {
      console.log(`🚀 Initializing WhatsApp client for store: ${storeId}`);

      // Ensure database session exists
      await this.ensureSessionRecord(storeId, clientId);

      // Create session handler
      const sessionHandler = new DatabaseSessionHandler(clientId, prisma);
      this.sessionHandlers.set(clientId, sessionHandler);

      // Create client with LocalAuth but using our custom session handling
      const client = new Client({
        authStrategy: new LocalAuth({
          clientId: clientId,
          dataPath: "./temp_sessions", // Temporary path, we'll override with database
        }),
        puppeteer: {
          headless: true,
          args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-accelerated-2d-canvas",
            "--no-first-run",
            "--no-zygote",
            "--single-process",
            "--disable-gpu",
            "--disable-web-security",
            "--disable-features=VizDisplayCompositor",
            "--disable-background-timer-throttling",
            "--disable-backgrounding-occluded-windows",
            "--disable-renderer-backgrounding",
          ],
        },
      });

      // Override the auth strategy's session handling
      this.overrideAuthStrategy(client, sessionHandler);

      this.setupEventHandlers(client, clientId, storeId);
      this.clients.set(clientId, client);

      // Initialize client
      await client.initialize();

      console.log(`✅ Client ${clientId} initialization started`);
      return { clientId, status: "initializing" };
    } catch (error) {
      console.error(`❌ Error initializing client ${clientId}:`, error);

      await this.updateSessionStatus(clientId, "error", {
        error: error.message,
        error_at: new Date().toISOString(),
      });

      throw new Error(`Failed to initialize WhatsApp client: ${error.message}`);
    } finally {
      this.initializingClients.delete(clientId);
    }
  }

  overrideAuthStrategy(client, sessionHandler) {
    // Override the auth strategy methods to use our database handler
    const originalAuthStrategy = client.authStrategy;

    if (originalAuthStrategy) {
      // Override save method
      const originalSave =
        originalAuthStrategy.save?.bind(originalAuthStrategy);
      originalAuthStrategy.save = async (data) => {
        await sessionHandler.saveSession(data);
        if (originalSave) {
          try {
            await originalSave(data);
          } catch (error) {
            console.warn(
              `⚠️ Original save failed, but database save succeeded:`,
              error.message,
            );
          }
        }
      };

      // Override extract method
      const originalExtract =
        originalAuthStrategy.extract?.bind(originalAuthStrategy);
      originalAuthStrategy.extract = async () => {
        const dbData = await sessionHandler.loadSession();
        if (dbData) {
          return dbData;
        }
        if (originalExtract) {
          try {
            return await originalExtract();
          } catch (error) {
            console.warn(`⚠️ Original extract failed:`, error.message);
            return null;
          }
        }
        return null;
      };
    }
  }

  setupEventHandlers(client, clientId, storeId) {
    client.on("qr", async (qr) => {
      console.log(`📱 QR code generated for ${clientId}`);
      try {
        const qrCodeData = await QRCode.toDataURL(qr);
        this.qrCodes.set(clientId, qrCodeData);

        await this.updateSessionStatus(clientId, "qr_generated", {
          qr_generated_at: new Date().toISOString(),
        });
      } catch (error) {
        console.error(`❌ QR generation error for ${clientId}:`, error);
      }
    });

    client.on("authenticated", async () => {
      console.log(`🔐 Authentication successful for ${clientId}`);
      this.qrCodes.delete(clientId);

      await this.updateSessionStatus(clientId, "authenticated", {
        authenticated_at: new Date().toISOString(),
      });
    });

    client.on("ready", async () => {
      console.log(`✅ Client ready for ${clientId}`);

      try {
        const info = client.info;
        await this.updateSessionStatus(clientId, "ready", {
          ready_at: new Date().toISOString(),
          phone_number: info?.wid?.user || null,
          platform: info?.platform || null,
          pushname: info?.pushname || null,
        });
      } catch (error) {
        console.error(`❌ Error updating ready status for ${clientId}:`, error);
      }
    });

    client.on("disconnected", async (reason) => {
      console.log(`🔌 Client disconnected ${clientId}:`, reason);
      await this.cleanup(clientId);

      await this.updateSessionStatus(clientId, "disconnected", {
        disconnected_at: new Date().toISOString(),
        reason: reason,
      });
    });

    client.on("auth_failure", async (msg) => {
      console.error(`❌ Authentication failed for ${clientId}:`, msg);
      await this.cleanup(clientId);

      await this.updateSessionStatus(clientId, "auth_failed", {
        failed_at: new Date().toISOString(),
        error: msg,
      });
    });

    client.on("loading_screen", (percent, message) => {
      console.log(`⏳ Loading ${clientId}: ${percent}% - ${message}`);
    });

    client.on("change_state", (state) => {
      console.log(`🔄 State changed for ${clientId}: ${state}`);
    });
  }

  async updateSessionStatus(clientId, status, metaData = {}) {
    try {
      await prisma.whatsapp_sessions.update({
        where: { client_id: clientId },
        data: {
          status: status,
          last_seen: new Date(),
          meta_data: metaData,
        },
      });
    } catch (error) {
      console.error(`❌ Error updating session status for ${clientId}:`, error);
    }
  }

  async cleanup(clientId) {
    this.qrCodes.delete(clientId);
    this.initializingClients.delete(clientId);
    this.sessionHandlers.delete(clientId);

    if (this.clients.has(clientId)) {
      this.clients.delete(clientId);
    }
  }

  async getQRCode(storeId) {
    if (!storeId) {
      throw new Error("storeId is required");
    }

    const clientId = this.generateClientId(storeId);

    try {
      // Check current session status
      const session = await prisma.whatsapp_sessions.findUnique({
        where: { client_id: clientId },
      });

      if (session?.status === "ready") {
        console.log(`✅ Session ${clientId} is already ready`);
        return null;
      }

      // Initialize if needed
      if (!this.clients.has(clientId) || !this.qrCodes.has(clientId)) {
        console.log(`🚀 Initializing client for QR generation: ${clientId}`);
        await this.initialize(storeId);

        // Wait for QR generation
        let attempts = 0;
        const maxAttempts = 15; // 15 seconds
        while (!this.qrCodes.has(clientId) && attempts < maxAttempts) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          attempts++;
        }
      }

      const qrCode = this.qrCodes.get(clientId);
      if (qrCode) {
        console.log(`📱 QR code ready for ${clientId}`);
      } else {
        console.log(`⏳ QR code still generating for ${clientId}`);
      }

      return qrCode || null;
    } catch (error) {
      console.error(`❌ Error getting QR code for ${clientId}:`, error);
      throw new Error(`Failed to get QR code: ${error.message}`);
    }
  }

  async sendMessage(storeId, phoneNumber, message) {
    const clientId = this.generateClientId(storeId);

    try {
      const client = this.clients.get(clientId);

      if (!client) {
        throw new Error(
          `WhatsApp client not found for store ${storeId}. Please scan QR code first.`,
        );
      }

      // Check client state
      const state = await client.getState();
      if (state !== "CONNECTED") {
        throw new Error(
          `WhatsApp client not ready for store ${storeId}. Current state: ${state}`,
        );
      }

      // Format phone number
      let formattedNumber = phoneNumber.replace(/\D/g, "");

      // Add country code if missing (assuming US numbers)
      if (formattedNumber.length === 10) {
        formattedNumber = "1" + formattedNumber;
      }

      const chatId = formattedNumber + "@c.us";

      console.log(`📤 Sending message from ${clientId} to ${chatId}`);

      // Check if number is registered on WhatsApp
      const isRegistered = await client.isRegisteredUser(chatId);
      if (!isRegistered) {
        throw new Error(
          `Phone number ${phoneNumber} is not registered on WhatsApp`,
        );
      }

      // Send message
      const sent = await client.sendMessage(chatId, message);

      // Update session
      await this.updateSessionStatus(clientId, "ready", {
        last_message_sent: new Date().toISOString(),
        last_message_to: phoneNumber,
        total_messages_sent: (await this.getMessageCount(clientId)) + 1,
      });

      console.log(`✅ Message sent successfully from ${clientId}`);

      return {
        success: true,
        messageId: sent.id.id,
        timestamp: sent.timestamp,
        to: sent.to,
        chatId: chatId,
        body: sent.body,
      };
    } catch (error) {
      console.error(`❌ Send message error for ${clientId}:`, error);
      throw new Error(`Failed to send message: ${error.message}`);
    }
  }

  async getMessageCount(clientId) {
    try {
      const session = await prisma.whatsapp_sessions.findUnique({
        where: { client_id: clientId },
      });
      return session?.meta_data?.total_messages_sent || 0;
    } catch (error) {
      return 0;
    }
  }

  async getStatus(storeId = null) {
    try {
      if (storeId) {
        const clientId = this.generateClientId(storeId);
        const client = this.clients.get(clientId);
        const session = await prisma.whatsapp_sessions.findUnique({
          where: { client_id: clientId },
        });

        let isReady = false;
        let clientState = "UNKNOWN";

        if (client) {
          try {
            clientState = await client.getState();
            isReady = clientState === "CONNECTED";
          } catch (error) {
            console.warn(
              `⚠️ Could not get state for ${clientId}:`,
              error.message,
            );
          }
        }

        return {
          clientId,
          storeId,
          isReady,
          clientState,
          hasQRCode: this.qrCodes.has(clientId),
          isInitializing: this.initializingClients.has(clientId),
          session: session,
        };
      }

      // Return all sessions
      const sessions = await prisma.whatsapp_sessions.findMany({
        orderBy: { last_seen: "desc" },
      });

      const sessionsWithStatus = await Promise.all(
        sessions.map(async (session) => {
          const client = this.clients.get(session.client_id);
          let isReady = false;
          let clientState = "UNKNOWN";

          if (client) {
            try {
              clientState = await client.getState();
              isReady = clientState === "CONNECTED";
            } catch (error) {
              // Client exists but not responsive
            }
          }

          return {
            ...session,
            isReady,
            clientState,
            hasQRCode: this.qrCodes.has(session.client_id),
            isInitializing: this.initializingClients.has(session.client_id),
          };
        }),
      );

      return {
        sessions: sessionsWithStatus,
        totalSessions: sessions.length,
        activeSessions: sessionsWithStatus.filter((s) => s.isReady).length,
      };
    } catch (error) {
      console.error(`❌ Error getting status:`, error);
      throw new Error(`Failed to get status: ${error.message}`);
    }
  }

  async disconnect(storeId) {
    const clientId = this.generateClientId(storeId);

    try {
      console.log(`🔌 Disconnecting client ${clientId}`);

      const client = this.clients.get(clientId);
      if (client) {
        try {
          await client.destroy();
          console.log(`✅ Client ${clientId} destroyed`);
        } catch (error) {
          console.warn(
            `⚠️ Error destroying client ${clientId}:`,
            error.message,
          );
        }
      }

      // Clean up session handler
      const sessionHandler = this.sessionHandlers.get(clientId);
      if (sessionHandler) {
        await sessionHandler.deleteSession();
      }

      await this.cleanup(clientId);

      // Delete from database
      const deletedSession = await prisma.whatsapp_sessions.delete({
        where: { client_id: clientId },
      });

      console.log(`✅ Session ${clientId} deleted from database`);
      return deletedSession;
    } catch (error) {
      if (error.code === "P2025") {
        console.warn(`⚠️ Session ${clientId} not found in database`);
        await this.cleanup(clientId);
        return null;
      }
      console.error(`❌ Error disconnecting ${clientId}:`, error);
      throw new Error(`Failed to disconnect: ${error.message}`);
    }
  }

  async getAllSessions() {
    try {
      return await prisma.whatsapp_sessions.findMany({
        orderBy: { last_seen: "desc" },
      });
    } catch (error) {
      console.error(`❌ Error getting all sessions:`, error);
      throw new Error(`Failed to get sessions: ${error.message}`);
    }
  }

  async getSessionByStoreId(storeId) {
    try {
      const clientId = this.generateClientId(storeId);
      return await prisma.whatsapp_sessions.findUnique({
        where: { client_id: clientId },
      });
    } catch (error) {
      console.error(`❌ Error getting session for store ${storeId}:`, error);
      throw new Error(`Failed to get session: ${error.message}`);
    }
  }

  // Health check method
  async healthCheck() {
    try {
      const sessions = await this.getAllSessions();
      const activeClients = this.clients.size;
      const qrCodes = this.qrCodes.size;
      const initializing = this.initializingClients.size;

      return {
        healthy: true,
        totalSessions: sessions.length,
        activeClients,
        qrCodes,
        initializing,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      return {
        healthy: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }
}

// Create singleton instance
const whatsappService = new WhatsAppService();

// Graceful shutdown handling
process.on("SIGINT", async () => {
  console.log("🛑 Shutting down WhatsApp service...");
  try {
    const sessions = await whatsappService.getAllSessions();
    for (const session of sessions) {
      if (whatsappService.clients.has(session.client_id)) {
        await whatsappService.disconnect(session.store_id);
      }
    }
  } catch (error) {
    console.error("❌ Error during shutdown:", error);
  }
  process.exit(0);
});

export default whatsappService;
