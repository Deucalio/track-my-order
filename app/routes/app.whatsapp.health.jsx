import { json } from "@remix-run/node"
import whatsappService from "../services/whatsapp.server.js"

export async function loader() {
  try {
    const healthCheck = await whatsappService.healthCheck()
    const status = await whatsappService.getStatus()

    return json({
      ...healthCheck,
      detailedStatus: status,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return json(
      {
        healthy: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
