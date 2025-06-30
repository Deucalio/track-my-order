// app/routes/app.whatsapp.qr.jsx
import { json } from "@remix-run/node";
import whatsappService from "../services/whatsapp.server.js";

export async function loader({ request }) {
  try {
    // Initialize WhatsApp service if not already done
    const qrCode = await whatsappService.getQRCode();
    const status = await whatsappService.getStatus();

    if (qrCode) {
      // Return the QR code as base64 data URL
      return json({
        success: true,
        qrCode: qrCode,
        status: status
      });
    } else if (status.isReady) {
      return json({
        success: true,
        message: "WhatsApp is already authenticated and ready",
        status: status
      });
    } else {
      return json({
        success: false,
        message: "QR code is being generated, please wait...",
        status: status
      });
    }
  } catch (error) {
    console.error('Error in QR route:', error);
    return json({
      success: false,
      error: error.message,
      status: await whatsappService.getStatus()
    }, { status: 500 });
  }
}

// Optional: Handle POST requests to reinitialize
export async function action({ request }) {
  const method = request.method;

  if (method === "POST") {
    try {
      // Reinitialize WhatsApp service
      await whatsappService.disconnect();
      await whatsappService.initialize();
      
      return json({
        success: true,
        message: "WhatsApp service reinitialized"
      });
    } catch (error) {
      return json({
        success: false,
        error: error.message
      }, { status: 500 });
    }
  }

  return json({ error: "Method not allowed" }, { status: 405 });
}