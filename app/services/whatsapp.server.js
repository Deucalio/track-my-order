// app/services/whatsapp.server.js
import whatsappWeb from 'whatsapp-web.js';
import QRCode from 'qrcode';
import db from "../db.server";

const prisma = db;

// Extract Client and LocalAuth from the default export
const Client = whatsappWeb.Client;
const LocalAuth = whatsappWeb.LocalAuth;

class WhatsAppService {
  constructor() {
    this.client = null;
    this.isReady = false;
    this.qrCode = null;
    this.isInitializing = false;
    this.currentSession = null;
  }

  async initialize(storeId = null, clientId = 'whatsapp-session') {
    if (this.isInitializing) {
      return;
    }

    this.isInitializing = true;

    try {
      // Check if session exists in database
      let sessionRecord = await prisma.whatsapp_sessions.findUnique({
        where: { client_id: clientId }
      });

      // Create or update session record
      if (!sessionRecord) {
        sessionRecord = await prisma.whatsapp_sessions.create({
          data: {
            store_id: storeId,
            client_id: clientId,
            status: 'initializing',
            session_path: `.wwebjs_auth/session-${clientId}`,
            last_seen: new Date(),
            meta_data: {}
          }
        });
      } else {
        // Update existing session
        sessionRecord = await prisma.whatsapp_sessions.update({
          where: { client_id: clientId },
          data: {
            status: 'initializing',
            last_seen: new Date()
          }
        });
      }

      this.currentSession = sessionRecord;

      this.client = new Client({
        authStrategy: new LocalAuth({
          clientId: clientId,
          dataPath: '.wwebjs_auth'
        }),
        puppeteer: {
          headless: true,
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu'
          ]
        }
      });

      // Handle QR Code generation
      this.client.on('qr', async (qr) => {
        console.log('QR Code received');
        try {
          // Generate QR code as data URL
          this.qrCode = await QRCode.toDataURL(qr, {
            width: 256,
            margin: 2,
            color: {
              dark: '#000000',
              light: '#FFFFFF'
            }
          });
          
          // Update session status in database
          await prisma.whatsapp_sessions.update({
            where: { client_id: clientId },
            data: {
              status: 'qr_generated',
              last_seen: new Date(),
              meta_data: {
                qr_generated_at: new Date().toISOString()
              }
            }
          });
          
          console.log('QR Code generated successfully');
        } catch (error) {
          console.error('Error generating QR code:', error);
          
          // Update session status to error
          await prisma.whatsapp_sessions.update({
            where: { client_id: clientId },
            data: {
              status: 'error',
              last_seen: new Date(),
              meta_data: {
                error: error.message,
                error_at: new Date().toISOString()
              }
            }
          });
        }
      });

      // Handle successful authentication
      this.client.on('authenticated', async () => {
        console.log('WhatsApp authenticated successfully');
        this.qrCode = null; // Clear QR code after authentication
        
        try {
          await prisma.whatsapp_sessions.update({
            where: { client_id: clientId },
            data: {
              status: 'authenticated',
              last_seen: new Date(),
              meta_data: {
                authenticated_at: new Date().toISOString()
              }
            }
          });
        } catch (error) {
          console.error('Error updating session status:', error);
        }
      });

      // Handle ready state
      this.client.on('ready', async () => {
        console.log('WhatsApp client is ready');
        this.isReady = true;
        
        try {
          await prisma.whatsapp_sessions.update({
            where: { client_id: clientId },
            data: {
              status: 'ready',
              last_seen: new Date(),
              meta_data: {
                ready_at: new Date().toISOString()
              }
            }
          });
        } catch (error) {
          console.error('Error updating session status:', error);
        }
      });

      // Handle disconnection
      this.client.on('disconnected', async (reason) => {
        console.log('WhatsApp disconnected:', reason);
        this.isReady = false;
        this.qrCode = null;
        
        try {
          await prisma.whatsapp_sessions.update({
            where: { client_id: clientId },
            data: {
              status: 'disconnected',
              last_seen: new Date(),
              meta_data: {
                disconnected_at: new Date().toISOString(),
                reason: reason
              }
            }
          });
        } catch (error) {
          console.error('Error updating session status:', error);
        }
      });

      // Handle authentication failure
      this.client.on('auth_failure', async (message) => {
        console.error('WhatsApp authentication failed:', message);
        this.isReady = false;
        this.qrCode = null;
        
        try {
          await prisma.whatsapp_sessions.update({
            where: { client_id: clientId },
            data: {
              status: 'auth_failed',
              last_seen: new Date(),
              meta_data: {
                auth_failed_at: new Date().toISOString(),
                failure_message: message
              }
            }
          });
        } catch (error) {
          console.error('Error updating session status:', error);
        }
      });

      // Initialize the client
      await this.client.initialize();
      this.isInitializing = false;
      
    } catch (error) {
      console.error('Error initializing WhatsApp client:', error);
      this.isInitializing = false;
      
      // Update session status to error
      if (this.currentSession) {
        try {
          await prisma.whatsapp_sessions.update({
            where: { id: this.currentSession.id },
            data: {
              status: 'error',
              last_seen: new Date(),
              meta_data: {
                initialization_error: error.message,
                error_at: new Date().toISOString()
              }
            }
          });
        } catch (dbError) {
          console.error('Error updating session status:', dbError);
        }
      }
      
      throw error;
    }
  }

  async getQRCode() {
    if (!this.client && !this.isInitializing) {
      await this.initialize();
    }
    return this.qrCode;
  }

  async sendMessage(phoneNumber, message) {
    if (!this.isReady) {
      throw new Error('WhatsApp client is not ready. Please scan QR code first.');
    }

    try {
      // Format phone number (remove + and add @c.us)
      const formattedNumber = phoneNumber.replace('+', '') + '@c.us';
      
      const response = await this.client.sendMessage(formattedNumber, message);
      
      // Update last seen
      if (this.currentSession) {
        await prisma.whatsapp_sessions.update({
          where: { id: this.currentSession.id },
          data: {
            last_seen: new Date()
          }
        });
      }
      
      return {
        success: true,
        messageId: response.id.id,
        timestamp: response.timestamp
      };
    } catch (error) {
      console.error('Error sending message:', error);
      throw new Error(`Failed to send message: ${error.message}`);
    }
  }

  async getStatus() {
    return {
      isReady: this.isReady,
      hasQRCode: !!this.qrCode,
      isInitializing: this.isInitializing,
      currentSession: this.currentSession
    };
  }

  async disconnect(clientId = 'whatsapp-session') {
    try {
      // Destroy the client first
      if (this.client) {
        await this.client.destroy();
        this.client = null;
      }
      
      // Reset state
      this.isReady = false;
      this.qrCode = null;
      this.isInitializing = false;
      this.currentSession = null;
      
      // Remove session from database
      const deletedSession = await prisma.whatsapp_sessions.delete({
        where: { client_id: clientId }
      });
      
      console.log('WhatsApp session disconnected and removed from database');
      return deletedSession;
      
    } catch (error) {
      // If record doesn't exist, that's okay
      if (error.code === 'P2025') {
        console.log('Session was already removed from database');
        return null;
      }
      throw error;
    }
  }

  async getAllSessions() {
    try {
      return await prisma.whatsapp_sessions.findMany({
        orderBy: { last_seen: 'desc' }
      });
    } catch (error) {
      console.error('Error fetching sessions:', error);
      throw error;
    }
  }

  async getSessionByClientId(clientId) {
    try {
      return await prisma.whatsapp_sessions.findUnique({
        where: { client_id: clientId }
      });
    } catch (error) {
      console.error('Error fetching session:', error);
      throw error;
    }
  }
}

// Create singleton instance
const whatsappService = new WhatsAppService();

export default whatsappService;