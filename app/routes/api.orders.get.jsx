import { data } from "@remix-run/node";
import db from "../db.server";
import axios from "axios";

const prisma = db;

export async function loader({ request }) {
  const url = new URL(request.url);
  
  try {
    // Extract all possible query parameters
    const searchParams = Object.fromEntries(url.searchParams);
    
    const {
      // Order filters
      shop_id,
      shopify_order_id,
      order_number,
      customer_name,
      customer_phone,
      status,
      date_from,
      date_to,
      placed_at_from,
      placed_at_to,
      created_at_from,
      created_at_to,
      
      // Fulfillment filters
      fulfillment_status,
      courier_name,
      courier_code,
      tracking_number,
      delivery_date_from,
      delivery_date_to,
      estimated_delivery_from,
      estimated_delivery_to,
      
      // Include options
      with_fulfillments = "true",
      with_stores = "false",
      with_whatsapp_messages = "false",
      
      // Sorting & Pagination
      sort_by = "placed_at",
      sort_direction = "desc",
      fulfillment_sort_by,
      fulfillment_sort_direction = "desc",
      
      page = "1",
      limit = "20",
    } = searchParams;

    const hasFulfillmentFilters = fulfillment_status || courier_name || courier_code || tracking_number || delivery_date_from || delivery_date_to || estimated_delivery_from || estimated_delivery_to;


    // Parse pagination parameters
    const pageInt = Math.max(1, parseInt(page) || 1);
    const limitInt = Math.min(100, Math.max(1, parseInt(limit) || 20)); // Cap at 100 for performance

    // Build order filters
    const orderWhere = {};

    // Numeric filters
    if (shop_id) {
      const shopIdInt = parseInt(shop_id);
      if (!isNaN(shopIdInt)) orderWhere.shop_id = shopIdInt;
    }

    if (shopify_order_id) {
      const shopifyOrderIdBigInt = BigInt(shopify_order_id);
      orderWhere.shopify_order_id = shopifyOrderIdBigInt;
    }

    // String filters
    if (order_number) {
      orderWhere.order_number = {
        contains: String(order_number),
        mode: "insensitive",
      };
    }

    if (customer_name) {
      orderWhere.customer_name = {
        contains: String(customer_name),
        mode: "insensitive",
      };
    }

    if (customer_phone) {
      orderWhere.customer_phone = {
        contains: String(customer_phone),
        mode: "insensitive",
      };
    }

    if (status) {
      orderWhere.status = String(status);
    }

    // Date filters for placed_at
    if (date_from || date_to || placed_at_from || placed_at_to) {
      orderWhere.placed_at = {};
      
      const fromDate = date_from || placed_at_from;
      const toDate = date_to || placed_at_to;
      
      if (fromDate) {
        const parsedFromDate = new Date(fromDate);
        if (!isNaN(parsedFromDate.getTime())) {
          orderWhere.placed_at.gte = parsedFromDate;
        }
      }
      
      if (toDate) {
        const parsedToDate = new Date(toDate);
        if (!isNaN(parsedToDate.getTime())) {
          // Set to end of day for inclusive range
          parsedToDate.setHours(23, 59, 59, 999);
          orderWhere.placed_at.lte = parsedToDate;
        }
      }
    }

    // Date filters for created_at
    if (created_at_from || created_at_to) {
      orderWhere.created_at = {};
      
      if (created_at_from) {
        const parsedFromDate = new Date(created_at_from);
        if (!isNaN(parsedFromDate.getTime())) {
          orderWhere.created_at.gte = parsedFromDate;
        }
      }
      
      if (created_at_to) {
        const parsedToDate = new Date(created_at_to);
        if (!isNaN(parsedToDate.getTime())) {
          parsedToDate.setHours(23, 59, 59, 999);
          orderWhere.created_at.lte = parsedToDate;
        }
      }
    }

    // Build include object
    const include = {};

    // Fulfillments include with filters
    if (with_fulfillments === "true") {
      // If we have fulfillment filters, apply them to the include as well to filter the returned fulfillments
      const fulfillmentWhere = {};
      
      if (hasFulfillmentFilters) {
        // Apply the same filters to the include
        if (fulfillment_status) {
          fulfillmentWhere.status = String(fulfillment_status);
        }
        
        if (courier_name) {
          fulfillmentWhere.courier_name = {
            contains: String(courier_name),
            mode: "insensitive",
          };
        }
        
        if (courier_code) {
          fulfillmentWhere.courier_code = {
            contains: String(courier_code),
            mode: "insensitive",
          };
        }
        
        if (tracking_number) {
          fulfillmentWhere.tracking_number = {
            contains: String(tracking_number),
            mode: "insensitive",
          };
        }

        // Date filters for delivered_at
        if (delivery_date_from || delivery_date_to) {
          fulfillmentWhere.delivered_at = {};
          
          if (delivery_date_from) {
            const parsedFromDate = new Date(delivery_date_from);
            if (!isNaN(parsedFromDate.getTime())) {
              fulfillmentWhere.delivered_at.gte = parsedFromDate;
            }
          }
          
          if (delivery_date_to) {
            const parsedToDate = new Date(delivery_date_to);
            if (!isNaN(parsedToDate.getTime())) {
              parsedToDate.setHours(23, 59, 59, 999);
              fulfillmentWhere.delivered_at.lte = parsedToDate;
            }
          }
        }

        // Date filters for estimated_delivery
        if (estimated_delivery_from || estimated_delivery_to) {
          fulfillmentWhere.estimated_delivery = {};
          
          if (estimated_delivery_from) {
            const parsedFromDate = new Date(estimated_delivery_from);
            if (!isNaN(parsedFromDate.getTime())) {
              fulfillmentWhere.estimated_delivery.gte = parsedFromDate;
            }
          }
          
          if (estimated_delivery_to) {
            const parsedToDate = new Date(estimated_delivery_to);
            if (!isNaN(parsedToDate.getTime())) {
              fulfillmentWhere.estimated_delivery.lte = parsedToDate;
            }
          }
        }
      }

      include.fulfillments = {
        where: Object.keys(fulfillmentWhere).length > 0 ? fulfillmentWhere : undefined,
        orderBy: fulfillment_sort_by ? {
          [fulfillment_sort_by]: fulfillment_sort_direction === "asc" ? "asc" : "desc",
        } : undefined,
        include: {
          tracking_events: true, // Include tracking events for fulfillments
        },
      };
    }

    // Store include
    if (with_stores === "true") {
      include.stores = true;
    }

    // WhatsApp messages include
    if (with_whatsapp_messages === "true") {
      include.whatsapp_messages = {
        orderBy: {
          created_at: "desc",
        },
      };
    }

    // Validate sort_by field
    const validOrderSortFields = [
      "id", "shop_id", "shopify_order_id", "order_number", 
      "customer_name", "customer_phone", "status", "placed_at", "created_at"
    ];
    
    const sortBy = validOrderSortFields.includes(sort_by) ? sort_by : "placed_at";
    const sortDirection = sort_direction === "asc" ? "asc" : "desc";

    // Check if we have fulfillment filters that should affect order selection
    
    if (hasFulfillmentFilters && with_fulfillments === "true") {
      // When we have fulfillment filters, we need to filter orders that have matching fulfillments
      // Build the fulfillment filter conditions
      const fulfillmentFilterWhere = {};
      
      if (fulfillment_status) {
        fulfillmentFilterWhere.status = String(fulfillment_status);
      }
      
      if (courier_name) {
        fulfillmentFilterWhere.courier_name = {
          contains: String(courier_name),
          mode: "insensitive",
        };
      }
      
      if (courier_code) {
        fulfillmentFilterWhere.courier_code = {
          contains: String(courier_code),
          mode: "insensitive",
        };
      }
      
      if (tracking_number) {
        fulfillmentFilterWhere.tracking_number = {
          contains: String(tracking_number),
          mode: "insensitive",
        };
      }

      // Date filters for delivered_at
      if (delivery_date_from || delivery_date_to) {
        fulfillmentFilterWhere.delivered_at = {};
        
        if (delivery_date_from) {
          const parsedFromDate = new Date(delivery_date_from);
          if (!isNaN(parsedFromDate.getTime())) {
            fulfillmentFilterWhere.delivered_at.gte = parsedFromDate;
          }
        }
        
        if (delivery_date_to) {
          const parsedToDate = new Date(delivery_date_to);
          if (!isNaN(parsedToDate.getTime())) {
            parsedToDate.setHours(23, 59, 59, 999);
            fulfillmentFilterWhere.delivered_at.lte = parsedToDate;
          }
        }
      }

      // Date filters for estimated_delivery
      if (estimated_delivery_from || estimated_delivery_to) {
        fulfillmentFilterWhere.estimated_delivery = {};
        
        if (estimated_delivery_from) {
          const parsedFromDate = new Date(estimated_delivery_from);
          if (!isNaN(parsedFromDate.getTime())) {
            fulfillmentFilterWhere.estimated_delivery.gte = parsedFromDate;
          }
        }
        
        if (estimated_delivery_to) {
          const parsedToDate = new Date(estimated_delivery_to);
          if (!isNaN(parsedToDate.getTime())) {
            fulfillmentFilterWhere.estimated_delivery.lte = parsedToDate;
          }
        }
      }

      // Add fulfillment filter to order where clause
      orderWhere.fulfillments = {
        some: fulfillmentFilterWhere,
      };
    }

    // Execute the query
    const [orders, total] = await Promise.all([
      prisma.orders.findMany({
        where: orderWhere,
        include: Object.keys(include).length > 0 ? include : undefined,
        skip: (pageInt - 1) * limitInt,
        take: limitInt,
        orderBy: {
          [sortBy]: sortDirection,
        },
      }),
      prisma.orders.count({ where: orderWhere }),
    ]);

    const filteredOrders = orders;

    return data({
      meta: {
        total,
        page: pageInt,
        limit: limitInt,
        pages: Math.ceil(total / limitInt),
        filters_applied: {
          order_filters: Object.keys(orderWhere).length,
          fulfillment_filters: hasFulfillmentFilters ? 
            Object.keys(include.fulfillments?.where || {}).length : 0,
          includes: Object.keys(include).length,
        },
      },
      data: sanitizeBigInt(filteredOrders),
    });

  } catch (err) {
    console.error("Error fetching orders:", err);
    
    // Return more specific error information in development
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return data(
      { 
        error: "Internal server error",
        ...(isDevelopment && { details: err.message, stack: err.stack }),
      },
      { status: 500 }
    );
  }
}



// Helper function to sanitize BigInt values for JSON serialization
function sanitizeBigInt(obj) {
  if (obj === null || obj === undefined) return obj;
  
  if (typeof obj === 'bigint') {
    return obj.toString();
  }
  
  if (Array.isArray(obj)) {
    return obj.map(sanitizeBigInt);
  }
  
  if (typeof obj === 'object') {
    const sanitized = {};
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = sanitizeBigInt(value);
    }
    return sanitized;
  }
  
  return obj;
}

// Expexted data comes from post request. If
// customerID, productID, shop
