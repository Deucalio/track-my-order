import { data } from "@remix-run/node";
import db from "../db.server";
import axios from "axios";
import { create } from "domain";

// get request: accept request with request: customerId, shop, productId.
// read database and return wishlist items for that customer.
export async function loader({ request }) {
  console.log("Wishlist GET request hit!");

  return data({
    method: "GET",
  });

  const url = new URL(request.url);
  const customerId = url.searchParams.get("customerId");
  const shop = url.searchParams.get("shop");
  const productId = url.searchParams.get("productId");

  if (!customerId || !shop || !productId) {
    return json({
      message: "Missing data. Required data: customerId, productId, shop",
      method: "GET",
    });
  }

  // If customerId, shop, productId is provided, return wishlist items for that customer.
  const wishlist = await db.wishlist.findMany({
    where: {
      customerId: customerId,
      shop: shop,
      productId: productId,
    },
  });

  const response = data({
    ok: true,
    message: "Success",
    data: wishlist,
  });

  return cors(request, response);
}

// Expexted data comes from post request. If
// customerID, productID, shop
export async function action({ request }) {
  let data_ = await request.json();

  const { storeID, courierCode, meta_data } = data_;

  console.log("Wishlist POST request hit!", data_);

  //   Test the API call to the courier service

  if (courierCode === undefined || meta_data === undefined) {
    return data({
      message: "Missing data. Required data: courierCode, meta_data",
      method: "Post",
      success: false,
    });
  }

  if (courierCode === "LCS") {
    // Test a Connecting by Getting All Cities
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://merchantapi.leopardscourier.com/api/getAllCities/format/json/?api_key=${meta_data.apiKey}&api_password=${meta_data.apiPassword}`,
        headers: {},
      };

      const res = await axios.request(config);
      if (res.data.status === 0) {
        return data({
          success: false,
          message: "Invalid API Key or Password",
          method: "Post",
        });
      }
    } catch (error) {
      console.error("Error connecting to LCS API:", error);
      return data({
        success: false,
        message: "Invalid API Key or Password",
        method: "Post",
      });
    }
  }

  if (courierCode === "TCS") {
    // Test Connection by Getting All Cities
    try {
      let data = "";

      // let config = {
      //   method: "get",
      //   maxBodyLength: Infinity,
      //   url: "https://api.tcscourier.com/production/v1/cod/cities",
      //   headers: {
      //     "X-IBM-Client-Id": meta_data.xIbmClientId,
      //   },
      //   data: data,
      // };

      const res = await axios.get(
        "https://api.tcscourier.com/production/v1/cod/cities",
        {
          headers: {
            "X-IBM-Client-Id": meta_data.xIbmClientId,
          },
        },
      );
      console.log("TCS API Response:", res.data);
      if (res.data?.httpCode) {
        return data({
          success: false,
          message: "Invalid API Key or Password",
          method: "Post",
        });
      }
    } catch (error) {
      console.error("Error connecting to TCS API:", error);
      return data({
        success: false,
        message: "Invalid API Key or Password",
        method: "Post",
      });
    }
  }

  //   code        String    @db.VarChar(100)
  //   store_id    Int?
  //   description String?   @db.Text
  //   created_at  DateTime? @default(now()) @db.Timestamp(6)
  //   updated_at  DateTime? @default(now()) @db.Timestamp(6)
  //   meta_data   Json?

  console.log("Saving courier data to the database...");
  //   Save the courier data to the database
  let courier_;
  try {
    courier_ = await db.couriers.create({
      data: {
        name: courierCode === "LCS" ? "Leopards Courier Service" : "TCS",
        code: courierCode,
        store_id: storeID,
        description: "",
        meta_data: meta_data, // Ensure meta_data is stored as a JSON string
      },
    });
  } catch (error) {
    console.error("Error saving courier data:", error);
    return data({
      success: false,
      message: "Error saving courier data",
      method: "Post",
    });
  }

  return data({
    success: true,
    message: "Courier connected successfully",
    courier: courier_,
    method: "Post",
  });
}
