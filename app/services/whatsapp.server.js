// app/services/whatsapp.server.js
import whatsappWeb from 'whatsapp-web.js';
import QRCode from 'qrcode';

// Extract Client and LocalAuth from the default export
const Client = whatsappWeb.Client;
const LocalAuth = whatsappWeb.LocalAuth;

class WhatsAppService {
  constructor() {
    this.client = null;
    this.isReady = false;
    this.qrCode = null;
    this.isInitializing = false;
  }

  async initialize() {
    if (this.isInitializing) {
      return;
    }

    this.isInitializing = true;

    try {
      this.client = new Client({
        authStrategy: new LocalAuth({
          clientId: "whatsapp-session"
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
          console.log('QR Code generated successfully');
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      });

      // Handle successful authentication
      this.client.on('authenticated', () => {
        console.log('WhatsApp authenticated successfully');
        this.qrCode = null; // Clear QR code after authentication
      });

      // Handle ready state
      this.client.on('ready', () => {
        console.log('WhatsApp client is ready');
        this.isReady = true;
      });

      // Handle disconnection
      this.client.on('disconnected', (reason) => {
        console.log('WhatsApp disconnected:', reason);
        this.isReady = false;
        this.qrCode = null;
      });

      // Handle authentication failure
      this.client.on('auth_failure', (message) => {
        console.error('WhatsApp authentication failed:', message);
        this.isReady = false;
        this.qrCode = null;
      });

      // Initialize the client
      await this.client.initialize();
      
    } catch (error) {
      console.error('Error initializing WhatsApp client:', error);
      this.isInitializing = false;
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
      isInitializing: this.isInitializing
    };
  }

  async disconnect() {
    if (this.client) {
      await this.client.destroy();
      this.client = null;
      this.isReady = false;
      this.qrCode = null;
      this.isInitializing = false;
    }
  }
}

// Create singleton instance
const whatsappService = new WhatsAppService();

export default whatsappService;