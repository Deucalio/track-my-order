import { json } from "@remix-run/node"
import whatsappService from "../services/whatsapp.server.js"

export async function loader({ request }) {
  try {
    const url = new URL(request.url)
    const storeId = 1234

    const status = await whatsappService.getStatus(storeId)

    return json({
      success: true,
      status: status,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}

export async function action({ request }) {
  const method = request.method

  try {
    const formData = await request.formData()
    const storeId = formData.get("storeId")

    if (!storeId) {
      return json({ success: false, error: "storeId is required" }, { status: 400 })
    }

    switch (method) {
      case "DELETE":
        await whatsappService.disconnect(storeId)
        return json({
          success: true,
          message: `WhatsApp service disconnected for store ${storeId}`,
        })

      case "POST":
        await whatsappService.initialize(storeId)
        return json({
          success: true,
          message: `WhatsApp service initialized for store ${storeId}`,
        })

      default:
        return json({ error: "Method not allowed" }, { status: 405 })
    }
  } catch (error) {
    return json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
