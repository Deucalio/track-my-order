import { json } from "@remix-run/node"
import whatsappService from "../services/whatsapp.server.js"

export async function action({ request }) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 })
  }

  try {
    const contentType = request.headers.get("content-type")
    let data

    if (contentType?.includes("application/json")) {
      data = await request.json()
    } else {
      const formData = await request.formData()
      data = Object.fromEntries(formData)
    }

    const { phoneNumber, message, storeId } = data

    if (!phoneNumber || !message || !storeId) {
      return json(
        {
          success: false,
          error: "Phone number, message, and storeId are required",
        },
        { status: 400 },
      )
    }

    // Check if session exists and is ready
    const status = await whatsappService.getStatus(storeId)

    if (!status.session) {
      return json(
        {
          success: false,
          error: `No WhatsApp session found for store "${storeId}". Please scan QR code first.`,
        },
        { status: 404 },
      )
    }

    if (!status.isReady) {
      return json(
        {
          success: false,
          error: `WhatsApp session for store "${storeId}" is not ready (current status: ${status.session.status}). Please scan QR code first.`,
          status,
        },
        { status: 400 },
      )
    }

    // Send message
    const result = await whatsappService.sendMessage(storeId, phoneNumber, message)

    return json({
      success: true,
      message: "Message sent successfully",
      data: result,
      clientId: whatsappService.generateClientId(storeId),
    })
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    return json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
