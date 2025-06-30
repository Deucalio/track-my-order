import { json } from "@remix-run/node"
import whatsappService from "../services/whatsapp.server.js"

export async function loader({ request }) {
  const url = new URL(request.url)
  const storeId = 1234

  if (!storeId) {
    return json({ success: false, error: "storeId is required" }, { status: 400 })
  }

  try {
    // Initialize WhatsApp service for this store
    await whatsappService.initialize(storeId)

    // Get QR code
    const qrCode = await whatsappService.getQRCode(storeId)
    const status = await whatsappService.getStatus(storeId)

    if (qrCode) {
      return json({
        success: true,
        qrCode,
        status,
        clientId: whatsappService.generateClientId(storeId),
      })
    } else if (status.isReady) {
      return json({
        success: true,
        message: "WhatsApp is already authenticated and ready",
        status,
        clientId: whatsappService.generateClientId(storeId),
      })
    } else {
      return json({
        success: false,
        message: "QR code is being generated, please wait...",
        status,
        clientId: whatsappService.generateClientId(storeId),
      })
    }
  } catch (error) {
    console.error("Error in QR route:", error)
    return json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function action({ request }) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 })
  }

  try {
    const formData = await request.formData()
    const storeId = formData.get("storeId")

    if (!storeId) {
      return json({ success: false, error: "storeId is required" }, { status: 400 })
    }

    // Disconnect and reinitialize
    await whatsappService.disconnect(storeId)
    await whatsappService.initialize(storeId)

    return json({
      success: true,
      message: "WhatsApp service reinitialized for store " + storeId,
    })
  } catch (error) {
    return json({ success: false, error: error.message }, { status: 500 })
  }
}
