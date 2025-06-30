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

    const { storeId } = data

    if (!storeId) {
      return json({ success: false, error: "storeId is required" }, { status: 400 })
    }

    console.log(`Attempting to disconnect WhatsApp session for store: ${storeId}`)

    const deletedSession = await whatsappService.disconnect(storeId)

    if (deletedSession) {
      console.log("WhatsApp session disconnected and removed from database successfully")

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
      })
    } else {
      return json({
        success: true,
        message: "WhatsApp session was already disconnected or didn't exist",
      })
    }
  } catch (error) {
    console.error("Error disconnecting WhatsApp session:", error)

    return json(
      {
        success: false,
        error: "Failed to disconnect WhatsApp session",
        details: error.message,
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
          body: {
            storeId: "your_store_id_here",
          },
        },
      })
    } else {
      const sessions = await whatsappService.getAllSessions()
      const currentStatus = await whatsappService.getStatus()

      return json({
        message: "Use POST method to disconnect WhatsApp session",
        currentStatus: currentStatus,
        allSessions: sessions,
        instructions: {
          method: "POST",
          endpoint: "/app/whatsapp/disconnect",
          body: {
            storeId: "your_store_id_here",
          },
        },
      })
    }
  } catch (error) {
    console.error("Error fetching WhatsApp sessions:", error)

    return json(
      {
        error: "Failed to fetch WhatsApp sessions",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
