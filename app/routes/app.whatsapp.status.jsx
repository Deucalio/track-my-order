// app/routes/app.whatsapp.status.jsx
import { json } from "@remix-run/node";
import whatsappService from "../services/whatsapp.server.js";

export async function loader() {
  try {
    const status = await whatsappService.getStatus();
    return json({
      success: true,
      status: status,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

export async function action({ request }) {
  const method = request.method;

  switch (method) {
    case "DELETE":
      try {
        await whatsappService.disconnect();
        return json({
          success: true,
          message: "WhatsApp service disconnected"
        });
      } catch (error) {
        return json({
          success: false,
          error: error.message
        }, { status: 500 });
      }

    case "POST":
      try {
        await whatsappService.initialize();
        return json({
          success: true,
          message: "WhatsApp service initialized"
        });
      } catch (error) {
        return json({
          success: false,
          error: error.message
        }, { status: 500 });
      }

    default:
      return json({ error: "Method not allowed" }, { status: 405 });
  }
}