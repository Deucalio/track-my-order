import whatsappWeb from "whatsapp-web.js"
import QRCode from "qrcode"
import db from "../db.server.js"

const { Client, LocalAuth } = whatsappWeb
const prisma = db


class WhatsAppService {
  constructor() {
    this.clients = new Map() // Store multiple clients by clientId
    this.qrCodes = new Map() // Store QR codes by clientId
  }

  // Generate clientId from storeId to keep them almost the same
  generateClientId(storeId=1234) {
    return `store-${storeId}`
  }

  async initialize(storeId) {
    if (!storeId) {
      throw new Error("storeId is required")
    }

    const clientId = this.generateClientId(storeId)

    // Check if client already exists and is ready
    if (this.clients.has(clientId)) {
      const existingClient = this.clients.get(clientId)
      if (existingClient.info && existingClient.info.wid) {
        return { clientId, status: "ready" }
      }
    }

    try {
      // Ensure database session exists
      let sessionRecord = await prisma.whatsapp_sessions.findUnique({
        where: { client_id: clientId },
      })

      if (!sessionRecord) {
        sessionRecord = await prisma.whatsapp_sessions.create({
          data: {
            store_id: 1234,
            client_id: clientId,
            status: "initializing",
            session_path: `./sessions/${clientId}`,
            last_seen: new Date(),
            meta_data: {},
          },
        })
      } else {
        await prisma.whatsapp_sessions.update({
          where: { client_id: clientId },
          data: {
            status: "initializing",
            last_seen: new Date(),
          },
        })
      }

      // Create new client with LocalAuth for file-based session storage
      const client = new Client({
        authStrategy: new LocalAuth({
          clientId: clientId,
          dataPath: `./sessions`,
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
          ],
        },
      })

      this.setupEventHandlers(client, clientId, storeId)
      this.clients.set(clientId, client)

      // Initialize client
      await client.initialize()

      return { clientId, status: "initializing" }
    } catch (error) {
      console.error(`Error initializing WhatsApp client ${clientId}:`, error)

      // Update database with error
      await prisma.whatsapp_sessions
        .update({
          where: { client_id: clientId },
          data: {
            status: "error",
            last_seen: new Date(),
            meta_data: {
              error: error.message,
              error_at: new Date().toISOString(),
            },
          },
        })
        .catch(console.error)

      throw error
    }
  }

  setupEventHandlers(client, clientId, storeId) {
    client.on("qr", async (qr) => {
      console.log(`[QR] Generated for ${clientId}`)
      try {
        const qrCodeData = await QRCode.toDataURL(qr)
        this.qrCodes.set(clientId, qrCodeData)

        await prisma.whatsapp_sessions.update({
          where: { client_id: clientId },
          data: {
            status: "qr_generated",
            last_seen: new Date(),
            meta_data: {
              qr_generated_at: new Date().toISOString(),
            },
          },
        })
      } catch (error) {
        console.error(`QR Error for ${clientId}:`, error)
      }
    })

    client.on("authenticated", async () => {
      console.log(`[Auth] Success for ${clientId}`)
      this.qrCodes.delete(clientId)

      await prisma.whatsapp_sessions.update({
        where: { client_id: clientId },
        data: {
          status: "authenticated",
          last_seen: new Date(),
          meta_data: {
            authenticated_at: new Date().toISOString(),
          },
        },
      })
    })

    client.on("ready", async () => {
      console.log(`[Client] Ready for ${clientId}`)

      await prisma.whatsapp_sessions.update({
        where: { client_id: clientId },
        data: {
          status: "ready",
          last_seen: new Date(),
          meta_data: {
            ready_at: new Date().toISOString(),
            phone_number: client.info?.wid?.user || null,
          },
        },
      })
    })

    client.on("disconnected", async (reason) => {
      console.log(`[Client] Disconnected ${clientId}:`, reason)
      this.qrCodes.delete(clientId)

      await prisma.whatsapp_sessions.update({
        where: { client_id: clientId },
        data: {
          status: "disconnected",
          last_seen: new Date(),
          meta_data: {
            disconnected_at: new Date().toISOString(),
            reason: reason,
          },
        },
      })
    })

    client.on("auth_failure", async (msg) => {
      console.error(`[Auth Failure] ${clientId}:`, msg)
      this.qrCodes.delete(clientId)

      await prisma.whatsapp_sessions.update({
        where: { client_id: clientId },
        data: {
          status: "auth_failed",
          last_seen: new Date(),
          meta_data: {
            failed_at: new Date().toISOString(),
            error: msg,
          },
        },
      })
    })
  }

  async getQRCode(storeId) {
    if (!storeId) {
      throw new Error("storeId is required")
    }

    const clientId = this.generateClientId(storeId)

    // Initialize if not exists
    if (!this.clients.has(clientId)) {
      await this.initialize(1234)
    }

    return this.qrCodes.get(clientId) || null
  }

  async sendMessage(storeId, phoneNumber, message) {
    const clientId = this.generateClientId(storeId)
    const client = this.clients.get(clientId)

    if (!client) {
      throw new Error(`WhatsApp client not found for store ${storeId}`)
    }

    if (!client.info || !client.info.wid) {
      throw new Error(`WhatsApp client not ready for store ${storeId}`)
    }

    try {
      const chatId = phoneNumber.includes("@") ? phoneNumber : `${phoneNumber.replace(/\D/g, "")}@c.us`
      const sent = await client.sendMessage(chatId, message)

      // Update last seen
      await prisma.whatsapp_sessions.update({
        where: { client_id: clientId },
        data: { last_seen: new Date() },
      })

      return {
        success: true,
        messageId: sent.id.id,
        timestamp: sent.timestamp,
        to: sent.to,
      }
    } catch (error) {
      console.error(`Send Error for ${clientId}:`, error)
      throw new Error(`Failed to send message: ${error.message}`)
    }
  }

  async getStatus(storeId = null) {
    if (storeId) {
      const clientId = this.generateClientId(storeId)
      const client = this.clients.get(clientId)
      const session = await prisma.whatsapp_sessions.findUnique({
        where: { client_id: clientId },
      })

      return {
        clientId,
        storeId,
        isReady: client && client.info && client.info.wid ? true : false,
        hasQRCode: this.qrCodes.has(clientId),
        session: session,
      }
    }

    // Return all sessions
    const sessions = await prisma.whatsapp_sessions.findMany({
      orderBy: { last_seen: "desc" },
    })

    return {
      sessions: sessions.map((session) => ({
        ...session,
        isReady:
          this.clients.has(session.client_id) &&
          this.clients.get(session.client_id).info &&
          this.clients.get(session.client_id).info.wid
            ? true
            : false,
        hasQRCode: this.qrCodes.has(session.client_id),
      })),
    }
  }

  async disconnect(storeId) {
    const clientId = this.generateClientId(storeId)
    const client = this.clients.get(clientId)

    if (client) {
      try {
        await client.destroy()
      } catch (error) {
        console.error(`Error destroying client ${clientId}:`, error)
      }
      this.clients.delete(clientId)
    }

    this.qrCodes.delete(clientId)

    try {
      const deletedSession = await prisma.whatsapp_sessions.delete({
        where: { client_id: clientId },
      })
      return deletedSession
    } catch (error) {
      if (error.code === "P2025") {
        console.warn(`Session ${clientId} not found to delete`)
        return null
      }
      throw error
    }
  }

  async getAllSessions() {
    return prisma.whatsapp_sessions.findMany({
      orderBy: { last_seen: "desc" },
    })
  }

  async getSessionByStoreId(storeId) {
    const clientId = this.generateClientId(storeId)
    return prisma.whatsapp_sessions.findUnique({
      where: { client_id: clientId },
    })
  }
}

const whatsappService = new WhatsAppService()
export default whatsappService
