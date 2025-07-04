import { data } from "@remix-run/node";
import db from "../db.server";
import axios from "axios";

// get request: accept request with request: customerId, shop, productId.
// read database and return wishlist items for that customer.
export async function loader({ request }) {
  const url = new URL(request.url);
  const store_id = url.searchParams.get("storeID");

  if (!store_id) {
    return data({
      message: "Missing data. Required data: storeID",
      method: "GET",
    });
  }

  let couriers;
  try {
    couriers = await db.couriers.findMany({
      where: {
        store_id: Number(store_id),
      },
      select: {
        id: true,
        name: true,
        code: true,
        store_id: true,
        description: true,
        created_at: true,
        updated_at: true,
        meta_data: true,
      },
    });
  } catch (e) {
    console.error("Error fetching couriers:", e);
    return data({
      success: false,
      message: "Error fetching couriers",
      method: "GET",
    });
  }

  return data({
    success: true,
    couriers,
    method: "GET",
  });
}

// Expexted data comes from post request. If
// customerID, productID, shop
export async function action({ request }) {
  let data_ = await request.json();

  //   Test the API call to the courier service

  return data({
    success: true,
    method: "Post",
  });
}
