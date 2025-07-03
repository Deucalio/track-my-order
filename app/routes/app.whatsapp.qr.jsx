import { json } from "@remix-run/node"
import whatsappService from "../services/whatsapp.server.js"

export async function loader({ request }) {
  const url = new URL(request.url)
  const storeId = Number(url.searchParams.get("storeId"))

  if (!storeId) {
    return json(
      {
        success: false,
        error: "storeId parameter is required",
        example: "/app/whatsapp/qr?storeId=your-store-id",
      },
      { status: 400 },
    )
  }

  try {
    console.log(`📱 QR request for store: ${storeId}`)

    const qrCode = await whatsappService.getQRCode(storeId)
    const status = await whatsappService.getStatus(storeId)

    if (qrCode) {
      return json({
        success: true,
        qrCode,
        status,
        clientId: whatsappService.generateClientId(storeId),
        message: "Scan this QR code with your WhatsApp mobile app",
        instructions: [
          "1. Open WhatsApp on your phone",
          "2. Go to Settings > Linked Devices",
          "3. Tap 'Link a Device'",
          "4. Scan this QR code",
        ],
      })
    } else if (status.isReady) {
      return json({
        success: true,
        message: "WhatsApp is already authenticated and ready to send messages",
        status,
        clientId: whatsappService.generateClientId(storeId),
      })
    } else {
      return json({
        success: false,
        message: "QR code is being generated. Please wait a moment and refresh.",
        status,
        clientId: whatsappService.generateClientId(storeId),
        retry: true,
      })
    }
  } catch (error) {
    console.error("❌ QR route error:", error)
    return json(
      {
        success: false,
        error: error.message,
        storeId,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

export async function action({ request }) {
  if (request.method !== "POST") {
    return json({ error: "Only POST method allowed" }, { status: 405 })
  }

  try {
    const formData = await request.formData()
    const storeId = formData.get("storeId")
    const action = formData.get("action") || "reinitialize"

    if (!storeId) {
      return json({ success: false, error: "storeId is required" }, { status: 400 })
    }

    console.log(`🔄 ${action} request for store: ${storeId}`)

    if (action === "reinitialize") {
      await whatsappService.disconnect(storeId)
      await whatsappService.initialize(storeId)

      return json({
        success: true,
        message: `WhatsApp service reinitialized for store ${storeId}`,
        clientId: whatsappService.generateClientId(storeId),
      })
    }

    return json({ success: false, error: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("❌ QR action error:", error)
    return json({ success: false, error: error.message }, { status: 500 })
  }
}
