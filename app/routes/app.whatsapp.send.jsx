import { json } from "@remix-run/node";
import whatsappService from "../services/whatsapp.server.js";
import db from "../db.server";

const prisma = db;

export async function action({ request }) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const contentType = request.headers.get("content-type");
    let data;

    if (contentType?.includes("application/json")) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData);
    }

    const { phoneNumber, message, clientId } = data;

    if (!phoneNumber || !message || !clientId) {
      return json({
        success: false,
        error: "Phone number, message, and clientId are required"
      }, { status: 400 });
    }

    // STEP 1: Fetch session from DB
    const session = await prisma.whatsapp_sessions.findUnique({
      where: { client_id: clientId }
    });

    if (!session) {
      return json({
        success: false,
        error: `No WhatsApp session found for clientId "${clientId}"`
      }, { status: 404 });
    }

    if (session.status !== 'ready') {
      return json({
        success: false,
        error: `Session "${clientId}" is not ready (current status: ${session.status})`,
        session
      }, { status: 400 });
    }

    // STEP 2: Initialize client (will attach to saved session path)
    await whatsappService.initialize(null, clientId);

    // STEP 3: Ensure it's ready
    const status = await whatsappService.getStatus();
    if (!status.isReady) {
      return json({
        success: false,
        error: "WhatsApp is not ready. Please scan QR code first.",
        status
      }, { status: 400 });
    }

    // STEP 4: Send message
    const result = await whatsappService.sendMessage(phoneNumber, message);

    return json({
      success: true,
      message: "Message sent successfully",
      data: result
    });

  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
