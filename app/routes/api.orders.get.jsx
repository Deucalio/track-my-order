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
      
      // Duration filters (in hours)
      duration_from,
      duration_to,
      
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
    const hasDurationFilter = duration_from || duration_to;

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
      const placedAtFilter = {};
      
      const fromDate = date_from || placed_at_from;
      const toDate = date_to || placed_at_to;
      
      if (fromDate) {
        const parsedFromDate = new Date(fromDate);
        if (!isNaN(parsedFromDate.getTime())) {
          placedAtFilter.gte = parsedFromDate;
        }
      }
      
      if (toDate) {
        const parsedToDate = new Date(toDate);
        if (!isNaN(parsedToDate.getTime())) {
          // Set to end of day for inclusive range
          parsedToDate.setHours(23, 59, 59, 999);
          placedAtFilter.lte = parsedToDate;
        }
      }
      
      // Only add to orderWhere if we have valid filters
      if (Object.keys(placedAtFilter).length > 0) {
        orderWhere.placed_at = placedAtFilter;
      }
    }

    // Date filters for created_at
    if (created_at_from || created_at_to) {
      const createdAtFilter = {};
      
      if (created_at_from) {
        const parsedFromDate = new Date(created_at_from);
        if (!isNaN(parsedFromDate.getTime())) {
          createdAtFilter.gte = parsedFromDate;
        }
      }
      
      if (created_at_to) {
        const parsedToDate = new Date(created_at_to);
        if (!isNaN(parsedToDate.getTime())) {
          parsedToDate.setHours(23, 59, 59, 999);
          createdAtFilter.lte = parsedToDate;
        }
      }
      
      // Only add to orderWhere if we have valid filters
      if (Object.keys(createdAtFilter).length > 0) {
        orderWhere.created_at = createdAtFilter;
      }
    }

    // Build include object
    const include = {};

    // Fulfillments include with filters
    if (with_fulfillments === "true") {
      const fulfillmentWhere = {};
      
      if (hasFulfillmentFilters) {
        // Apply fulfillment filters to the include
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

        // Date filters for delivered_at (using correct field name from schema)
        if (delivery_date_from || delivery_date_to) {
          const deliveredAtFilter = {};
          
          if (delivery_date_from) {
            const parsedFromDate = new Date(delivery_date_from);
            if (!isNaN(parsedFromDate.getTime())) {
              deliveredAtFilter.gte = parsedFromDate;
            }
          }
          
          if (delivery_date_to) {
            const parsedToDate = new Date(delivery_date_to);
            if (!isNaN(parsedToDate.getTime())) {
              parsedToDate.setHours(23, 59, 59, 999);
              deliveredAtFilter.lte = parsedToDate;
            }
          }
          
          if (Object.keys(deliveredAtFilter).length > 0) {
            fulfillmentWhere.delivered_at = deliveredAtFilter;
          }
        }

        // Date filters for estimated_delivery
        if (estimated_delivery_from || estimated_delivery_to) {
          const estimatedDeliveryFilter = {};
          
          if (estimated_delivery_from) {
            const parsedFromDate = new Date(estimated_delivery_from);
            if (!isNaN(parsedFromDate.getTime())) {
              estimatedDeliveryFilter.gte = parsedFromDate;
            }
          }
          
          if (estimated_delivery_to) {
            const parsedToDate = new Date(estimated_delivery_to);
            if (!isNaN(parsedToDate.getTime())) {
              estimatedDeliveryFilter.lte = parsedToDate;
            }
          }
          
          if (Object.keys(estimatedDeliveryFilter).length > 0) {
            fulfillmentWhere.estimated_delivery = estimatedDeliveryFilter;
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
        const deliveredAtFilter = {};
        
        if (delivery_date_from) {
          const parsedFromDate = new Date(delivery_date_from);
          if (!isNaN(parsedFromDate.getTime())) {
            deliveredAtFilter.gte = parsedFromDate;
          }
        }
        
        if (delivery_date_to) {
          const parsedToDate = new Date(delivery_date_to);
          if (!isNaN(parsedToDate.getTime())) {
            parsedToDate.setHours(23, 59, 59, 999);
            deliveredAtFilter.lte = parsedToDate;
          }
        }
        
        if (Object.keys(deliveredAtFilter).length > 0) {
          fulfillmentFilterWhere.delivered_at = deliveredAtFilter;
        }
      }

      // Date filters for estimated_delivery
      if (estimated_delivery_from || estimated_delivery_to) {
        const estimatedDeliveryFilter = {};
        
        if (estimated_delivery_from) {
          const parsedFromDate = new Date(estimated_delivery_from);
          if (!isNaN(parsedFromDate.getTime())) {
            estimatedDeliveryFilter.gte = parsedFromDate;
          }
        }
        
        if (estimated_delivery_to) {
          const parsedToDate = new Date(estimated_delivery_to);
          if (!isNaN(parsedToDate.getTime())) {
            estimatedDeliveryFilter.lte = parsedToDate;
          }
        }
        
        if (Object.keys(estimatedDeliveryFilter).length > 0) {
          fulfillmentFilterWhere.estimated_delivery = estimatedDeliveryFilter;
        }
      }

      // Add fulfillment filter to order where clause
      if (Object.keys(fulfillmentFilterWhere).length > 0) {
        orderWhere.fulfillments = {
          some: fulfillmentFilterWhere,
        };
      }
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

    // Process orders to add duration calculation and apply duration filter
    let processedOrders = orders.map(order => {
      const orderWithDuration = { ...order };
      
      if (order.fulfillments && order.fulfillments.length > 0) {
        // Calculate duration for each fulfillment
        orderWithDuration.fulfillments = order.fulfillments.map(fulfillment => {
          const fulfillmentWithDuration = { ...fulfillment };
          
          // Calculate duration from order created_at to fulfillment delivered_at (or now if not delivered)
          if (order.created_at) {
            const startTime = new Date(order.created_at);
            const endTime = fulfillment.delivered_at ? new Date(fulfillment.delivered_at) : new Date();
            
            // Duration in hours
            const durationHours = Math.round((endTime - startTime) / (1000 * 60 * 60));
            fulfillmentWithDuration.duration_hours = durationHours;
            
            // Duration in days (for easier reading)
            fulfillmentWithDuration.duration_days = Math.round(durationHours / 24 * 10) / 10;
            
            // Duration status
            fulfillmentWithDuration.duration_status = fulfillment.delivered_at ? 'completed' : 'ongoing';
          }
          
          return fulfillmentWithDuration;
        });
        
        // Calculate order-level duration (using the latest fulfillment or ongoing)
        const latestFulfillment = orderWithDuration.fulfillments.reduce((latest, current) => {
          if (!latest) return current;
          if (current.delivered_at && (!latest.delivered_at || new Date(current.delivered_at) > new Date(latest.delivered_at))) {
            return current;
          }
          if (!current.delivered_at && latest.delivered_at) {
            return current; // Ongoing fulfillment takes precedence
          }
          return latest;
        });
        
        if (latestFulfillment && latestFulfillment.duration_hours !== undefined) {
          orderWithDuration.duration_hours = latestFulfillment.duration_hours;
          orderWithDuration.duration_days = latestFulfillment.duration_days;
          orderWithDuration.duration_status = latestFulfillment.duration_status;
        }
      } else if (order.created_at) {
        // Order without fulfillments - calculate duration from created_at to now
        const startTime = new Date(order.created_at);
        const endTime = new Date();
        
        const durationHours = Math.round((endTime - startTime) / (1000 * 60 * 60));
        orderWithDuration.duration_hours = durationHours;
        orderWithDuration.duration_days = Math.round(durationHours / 24 * 10) / 10;
        orderWithDuration.duration_status = 'no_fulfillment';
      }
      
      return orderWithDuration;
    });

    // Apply duration filter if specified
    if (hasDurationFilter) {
      processedOrders = processedOrders.filter(order => {
        if (order.duration_hours === undefined) return false;
        
        let matchesDuration = true;
        
        if (duration_from) {
          const durationFromHours = parseInt(duration_from);
          if (!isNaN(durationFromHours)) {
            matchesDuration = matchesDuration && order.duration_hours >= durationFromHours;
          }
        }
        
        if (duration_to) {
          const durationToHours = parseInt(duration_to);
          if (!isNaN(durationToHours)) {
            matchesDuration = matchesDuration && order.duration_hours <= durationToHours;
          }
        }
        
        return matchesDuration;
      });
    }

    // Adjust total count if duration filter is applied (this is an approximation)
    const finalTotal = hasDurationFilter ? processedOrders.length : total;

    return data({
      meta: {
        total: finalTotal,
        page: pageInt,
        limit: limitInt,
        pages: Math.ceil(finalTotal / limitInt),
        filters_applied: {
          order_filters: Object.keys(orderWhere).filter(key => key !== 'fulfillments').length,
          fulfillment_filters: hasFulfillmentFilters ? 
            Object.keys(include.fulfillments?.where || {}).length : 0,
          duration_filter: hasDurationFilter,
          includes: Object.keys(include).length,
        },
        duration_stats: hasDurationFilter ? {
          duration_from_hours: duration_from ? parseInt(duration_from) : null,
          duration_to_hours: duration_to ? parseInt(duration_to) : null,
          filtered_count: processedOrders.length,
        } : null,
      },
      data: sanitizeBigInt(processedOrders),
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

  if (obj instanceof Date) {
    return obj; // Or obj.toISOString() if you want to serialize
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