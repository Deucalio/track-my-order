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

    const { storeId } = data

    if (!storeId) {
      return json(
        {
          success: false,
          error: "storeId is required",
          example: { storeId: "your-store-id" },
        },
        { status: 400 },
      )
    }

    console.log(`🔌 Disconnect request for store: ${storeId}`)

    // Check if session exists
    const session = await whatsappService.getSessionByStoreId(storeId)
    if (!session) {
      return json({
        success: true,
        message: `No WhatsApp session found for store ${storeId}`,
        action: "nothing_to_disconnect",
      })
    }

    const deletedSession = await whatsappService.disconnect(storeId)

    if (deletedSession) {
      console.log("✅ WhatsApp session disconnected and removed successfully")

      return json({
        success: true,
        message: "WhatsApp session disconnected and removed successfully",
        deletedSession: {
          id: deletedSession.id,
          client_id: deletedSession.client_id,
          store_id: deletedSession.store_id,
          status: deletedSession.status,
          last_seen: deletedSession.last_seen,
        },
        timestamp: new Date().toISOString(),
      })
    } else {
      return json({
        success: true,
        message: "WhatsApp session was already disconnected",
        action: "already_disconnected",
        timestamp: new Date().toISOString(),
      })
    }
  } catch (error) {
    console.error("❌ Disconnect error:", error)

    return json(
      {
        success: false,
        error: "Failed to disconnect WhatsApp session",
        details: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

export async function loader({ request }) {
  try {
    const url = new URL(request.url)
    const storeId = url.searchParams.get("storeId")

    if (storeId) {
      const session = await whatsappService.getSessionByStoreId(storeId)

      return json({
        message: "Use POST method to disconnect WhatsApp session",
        session: session,
        instructions: {
          method: "POST",
          endpoint: "/app/whatsapp/disconnect",
          contentType: "application/json",
          body: {
            storeId: storeId,
          },
        },
      })
    } else {
      const sessions = await whatsappService.getAllSessions()
      const healthCheck = await whatsappService.healthCheck()

      return json({
        message: "Use POST method to disconnect WhatsApp session",
        healthCheck,
        allSessions: sessions,
        instructions: {
          method: "POST",
          endpoint: "/app/whatsapp/disconnect",
          contentType: "application/json",
          body: {
            storeId: "your-store-id",
          },
        },
      })
    }
  } catch (error) {
    console.error("❌ Disconnect loader error:", error)

    return json(
      {
        error: "Failed to fetch WhatsApp sessions",
        details: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
