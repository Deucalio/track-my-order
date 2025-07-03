import { json } from "@remix-run/node"
import whatsappService from "../services/whatsapp.server.js"

export async function loader({ request }) {
  try {
    const url = new URL(request.url)
    const storeId = Number(url.searchParams.get("storeId"))

    console.log(`📊 Status request${storeId ? ` for store: ${storeId}` : " (all sessions)"}`)

    const status = await whatsappService.getStatus(storeId)

    return json({
      success: true,
      status,
      timestamp: new Date().toISOString(),
      ...(storeId && { storeId }),
    })
  } catch (error) {
    console.error("❌ Status route error:", error)
    return json(
      {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

export async function action({ request }) {
  const method = request.method

  try {
    const contentType = request.headers.get("content-type")
    let data

    if (contentType?.includes("application/json")) {
      data = await request.json()
    } else {
      const formData = await request.formData()
      data = Object.fromEntries(formData)
    }

    const { storeId } = data

    if (!storeId) {
      return json({ success: false, error: "storeId is required" }, { status: 400 })
    }

    console.log(`🔧 ${method} action for store: ${storeId}`)

    switch (method) {
      case "DELETE":
        await whatsappService.disconnect(storeId)
        return json({
          success: true,
          message: `WhatsApp service disconnected for store ${storeId}`,
          action: "disconnected",
        })

      case "POST":
        await whatsappService.initialize(storeId)
        return json({
          success: true,
          message: `WhatsApp service initialized for store ${storeId}`,
          action: "initialized",
        })

      case "PUT":
        // Restart service
        await whatsappService.disconnect(storeId)
        await whatsappService.initialize(storeId)
        return json({
          success: true,
          message: `WhatsApp service restarted for store ${storeId}`,
          action: "restarted",
        })

      default:
        return json({ error: `Method ${method} not allowed` }, { status: 405 })
    }
  } catch (error) {
    console.error(`❌ Status action error:`, error)
    return json(
      {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
