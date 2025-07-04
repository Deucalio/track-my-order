import { data } from "@remix-run/node";
import db from "../db.server";
import axios from "axios";

// Expexted data comes from post request. If
// customerID, productID, shop
export async function action({ request }) {
  let data_ = await request.json();

  const { courierID } = data_;

  try {
    const c = await db.couriers.delete({
      where: {
        id: courierID,
      },
    });

    return data({
      success: true,
      message: "Courier disconnected successfully",
    });
  } catch (e) {
    console.error("Error disconnecting courier:", e);
    return data({
      success: false,
      message: "Error disconnecting courier",
    });
  }
}
