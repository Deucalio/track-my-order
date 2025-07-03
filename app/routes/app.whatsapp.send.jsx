import { json } from "@remix-run/node"
import whatsappService from "../services/whatsapp.server.js"

export async function action({ request }) {
  if (request.method !== "POST") {
    return json({ error: "Only POST method allowed" }, { status: 405 })
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

    // Validate required fields
    if (!phoneNumber || !message || !storeId) {
      return json(
        {
          success: false,
          error: "Missing required fields",
          required: ["phoneNumber", "message", "storeId"],
          received: { phoneNumber: !!phoneNumber, message: !!message, storeId: !!storeId },
        },
        { status: 400 },
      )
    }

    // Validate phone number format
    const cleanPhone = phoneNumber.replace(/\D/g, "")
    if (cleanPhone.length < 10) {
      return json(
        {
          success: false,
          error: "Invalid phone number format",
          example: "+1234567890 or 1234567890",
        },
        { status: 400 },
      )
    }

    // Validate message length
    if (message.length > 4096) {
      return json(
        {
          success: false,
          error: "Message too long. Maximum 4096 characters allowed.",
          currentLength: message.length,
        },
        { status: 400 },
      )
    }

    console.log(`📤 Send message request - Store: ${storeId}, To: ${phoneNumber}`)

    // Check session status first
    const status = await whatsappService.getStatus(storeId)

    if (!status.session) {
      return json(
        {
          success: false,
          error: `No WhatsApp session found for store "${storeId}"`,
          action: "Please scan QR code first",
          qrUrl: `/app/whatsapp/qr?storeId=${storeId}`,
        },
        { status: 404 },
      )
    }

    if (!status.isReady) {
      return json(
        {
          success: false,
          error: `WhatsApp session not ready for store "${storeId}"`,
          currentStatus: status.session.status,
          clientState: status.clientState,
          action: status.session.status === "qr_generated" ? "Please scan QR code" : "Please wait for initialization",
          qrUrl: `/app/whatsapp/qr?storeId=${storeId}`,
        },
        { status: 400 },
      )
    }

    // Send message
    const result = await whatsappService.sendMessage(storeId, phoneNumber, message)

    return json({
      success: true,
      message: "Message sent successfully",
      data: {
        messageId: result.messageId,
        timestamp: result.timestamp,
        to: result.to,
        chatId: result.chatId,
        sentAt: new Date().toISOString(),
      },
      clientId: whatsappService.generateClientId(storeId),
    })
  } catch (error) {
    console.error("❌ Send message error:", error)

    // Provide specific error messages
    let errorMessage = error.message
    let statusCode = 500

    if (error.message.includes("not registered")) {
      statusCode = 400
      errorMessage = "Phone number is not registered on WhatsApp"
    } else if (error.message.includes("not ready")) {
      statusCode = 400
      errorMessage = "WhatsApp client is not ready. Please scan QR code first."
    } else if (error.message.includes("not found")) {
      statusCode = 404
      errorMessage = "WhatsApp session not found. Please scan QR code first."
    }

    return json(
      {
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: statusCode },
    )
  }
}

// GET method to show send message instructions
export async function loader({ request }) {
  return json({
    message: "Use POST method to send WhatsApp messages",
    endpoint: "/app/whatsapp/send",
    method: "POST",
    contentType: "application/json",
    requiredFields: {
      storeId: "Your store identifier",
      phoneNumber: "Recipient phone number (with country code)",
      message: "Message text (max 4096 characters)",
    },
    example: {
      storeId: "my-store-123",
      phoneNumber: "+1234567890",
      message: "Hello from WhatsApp API!",
    },
  })
}
