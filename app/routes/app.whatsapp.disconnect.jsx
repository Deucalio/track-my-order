// app/routes/whatsapp.disconnect.jsx
import { json } from "@remix-run/node";
import whatsappService from "../services/whatsapp.server.js";

export async function action({ request }) {
  // Only allow POST method for security
  if (request.method !== "POST") {
    return json(
      { error: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    // Parse request body to get client_id (optional)
    const body = await request.json().catch(() => ({}));
    const clientId = body.client_id || 'whatsapp-session';
    
    console.log(`Attempting to disconnect WhatsApp session: ${clientId}`);
    
    // Disconnect the WhatsApp service and remove from database
    const deletedSession = await whatsappService.disconnect(clientId);
    
    if (deletedSession) {
      console.log("WhatsApp session disconnected and removed from database successfully");
      
      return json({
        success: true,
        message: "WhatsApp session disconnected and removed successfully",
        deletedSession: {
          id: deletedSession.id,
          client_id: deletedSession.client_id,
          status: deletedSession.status,
          last_seen: deletedSession.last_seen
        }
      });
    } else {
      return json({
        success: true,
        message: "WhatsApp session was already disconnected or didn't exist"
      });
    }
    
  } catch (error) {
    console.error("Error disconnecting WhatsApp session:", error);
    
    return json(
      {
        success: false,
        error: "Failed to disconnect WhatsApp session",
        details: error.message
      },
      { status: 500 }
    );
  }
}

// Handle GET requests to show disconnect information and current sessions
export async function loader({ request }) {
  try {
    // Get URL parameters
    const url = new URL(request.url);
    const clientId = url.searchParams.get('client_id');
    
    if (clientId) {
      // Get specific session info
      const session = await whatsappService.getSessionByClientId(clientId);
      
      return json({
        message: "Use POST method to disconnect WhatsApp session",
        session: session,
        instructions: {
          method: "POST",
          endpoint: "/whatsapp/disconnect",
          body: {
            client_id: "optional_client_id_here"
          }
        }
      });
    } else {
      // Get all sessions
      const sessions = await whatsappService.getAllSessions();
      const currentStatus = await whatsappService.getStatus();
      
      return json({
        message: "Use POST method to disconnect WhatsApp session",
        currentStatus: currentStatus,
        allSessions: sessions,
        instructions: {
          method: "POST",
          endpoint: "/whatsapp/disconnect",
          body: {
            client_id: "optional_client_id_here (defaults to 'whatsapp-session')"
          }
        }
      });
    }
    
  } catch (error) {
    console.error("Error fetching WhatsApp sessions:", error);
    
    return json(
      {
        error: "Failed to fetch WhatsApp sessions",
        details: error.message
      },
      { status: 500 }
    );
  }
}