import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  Page,
  Card,
  BlockStack,
  InlineStack,
  Text,
  Badge,
  Button,
  Checkbox,
  Divider,
  Avatar,
} from "@shopify/polaris";

const mockOrderDetails = {
  id: "1",
  orderNumber: "#1001",
  customerName: "John Doe",
  courierName: "TCS Express",
  courierLogo: "/placeholder.svg?height=40&width=40",
  trackingNumber: "TCS123456789",
  trackingUrl: "https://tcs.com.pk/track",
  status: "in_transit",
  notificationsEnabled: true,
  events: [
    {
      id: "1",
      status: "Package Delivered",
      location: "Karachi, Pakistan",
      timestamp: "2024-01-15 2:30 PM",
      description: "Package delivered to customer",
    },
    {
      id: "2",
      status: "Out for Delivery",
      location: "Karachi Hub",
      timestamp: "2024-01-15 9:00 AM",
      description: "Package is out for delivery",
    },
    {
      id: "3",
      status: "In Transit",
      location: "Lahore Hub",
      timestamp: "2024-01-14 6:45 PM",
      description: "Package in transit to destination city",
    },
    {
      id: "4",
      status: "Package Picked Up",
      location: "Islamabad Origin",
      timestamp: "2024-01-14 10:30 AM",
      description: "Package picked up from sender",
    },
  ],
  notificationHistory: [
    {
      type: "email",
      timestamp: "2024-01-15 2:35 PM",
      status: "sent",
    },
    {
      type: "whatsapp",
      timestamp: "2024-01-15 9:05 AM",
      status: "sent",
    },
  ],
};

/**
 * Simulates fetching order data from a database or API.
 *
 * @param {string} orderId - The ID of the order to fetch.
 *
 * @returns {Promise<object>} The order data with the following properties:
 *   - id: string
 *   - orderNumber: string
 *   - customerName: string
 *   - courierName: string
 *   - courierLogo: string
 *   - trackingNumber: string
 *   - trackingUrl: string
 *   - status: string
 *   - notificationsEnabled: boolean
 *   - events: object[]
 *   - notificationHistory: object[]
 */
const getOrderById = async (orderId) => {
  // Simulate fetching order data from a database or API

  return mockOrderDetails; // Replace with actual data fetching logic
};

// This file defines a route for displaying order details in a Remix application.
// It uses the Remix loader function to fetch order data based on the order ID from the URL parameters.
// The order data is then passed to the component via `useLoaderData` for rendering.

// Loader function to fetch order data
export async function loader({ params }) {
  const orderId = params.id;

  // Fetch your order data here
  const order = await getOrderById(orderId); // Replace with your data fetching logic

  if (!order) {
    throw new Response("Order not found", { status: 404 });
  }

  return { order };
}

// The component
export default function OrderDetail() {
  const { order } = useLoaderData();

  const [orderDetails] = useState(mockOrderDetails);
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    orderDetails.notificationsEnabled,
  );

  const getStatusBadge = (status) => {
    if (status.toLowerCase().includes("delivered")) {
      return <Badge tone="success">Delivered</Badge>;
    } else if (status.toLowerCase().includes("transit")) {
      return <Badge tone="info">In Transit</Badge>;
    } else if (status.toLowerCase().includes("picked")) {
      return <Badge tone="attention">Picked Up</Badge>;
    }
    return <Badge>{status}</Badge>;
  };

  return (
    <Page
      backAction={{
        content: "Dashboard",
        onAction: () => window.history.back(),
      }}
      title={`Order ${orderDetails.orderNumber}`}
      subtitle={`Customer: ${orderDetails.customerName}`}
    >
      <BlockStack gap="400">
        {/* Order Summary Card */}
        <Card>
          <BlockStack gap="400">
            <InlineStack align="space-between">
              <InlineStack gap="300" align="center">
                <Avatar
                  source={orderDetails.courierLogo}
                  size="md"
                  name={orderDetails.courierName}
                />
                <BlockStack gap="100">
                  <Text variant="headingMd" as="h3">
                    {orderDetails.courierName}
                  </Text>
                  <Text variant="bodyMd" as="p" tone="subdued">
                    Tracking: {orderDetails.trackingNumber}
                  </Text>
                </BlockStack>
              </InlineStack>
              {orderDetails.trackingUrl && (
                <Button
                  url={orderDetails.trackingUrl}
                  target="_blank"
                  variant="primary"
                >
                  Track on Courier Site
                </Button>
              )}
            </InlineStack>

            <Divider />

            <InlineStack align="space-between">
              <Text variant="bodyMd" as="p">
                Customer Notifications
              </Text>
              <Checkbox
                label="Send notifications to customer"
                checked={notificationsEnabled}
                onChange={setNotificationsEnabled}
              />
            </InlineStack>
          </BlockStack>
        </Card>

        {/* Tracking Timeline */}
        <Card>
          <BlockStack gap="400">
            <Text variant="headingMd" as="h3">
              Tracking Timeline
            </Text>

            <BlockStack gap="300">
              {orderDetails.events.map((event, index) => (
                <div key={event.id} style={{ position: "relative" }}>
                  <InlineStack gap="300" align="start">
                    {/* Timeline dot */}
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: index === 0 ? "#008060" : "#E1E3E5",
                        marginTop: "4px",
                        flexShrink: 0,
                        position: "relative",
                        zIndex: 2,
                      }}
                    />

                    {/* Event content */}
                    <BlockStack gap="200" style={{ flex: 1 }}>
                      <InlineStack align="space-between" blockAlign="start">
                        <Text variant="bodyMd" fontWeight="bold" as="span">
                          {event.status}
                        </Text>
                        {getStatusBadge(event.status)}
                      </InlineStack>
                      <Text variant="bodyMd" as="p" tone="subdued">
                        {event.location} • {event.timestamp}
                      </Text>
                      <Text variant="bodyMd" as="p">
                        {event.description}
                      </Text>
                    </BlockStack>
                  </InlineStack>

                  {/* Timeline line */}
                  {index < orderDetails.events.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: "5px",
                        top: "16px",
                        width: "2px",
                        height: "60px",
                        backgroundColor: "#E1E3E5",
                        zIndex: 1,
                      }}
                    />
                  )}
                </div>
              ))}
            </BlockStack>
          </BlockStack>
        </Card>

        {/* Notification History */}
        <Card>
          <BlockStack gap="400">
            <Text variant="headingMd" as="h3">
              Notification History
            </Text>

            {orderDetails.notificationHistory.length > 0 ? (
              <BlockStack gap="300">
                {orderDetails.notificationHistory.map((notification, index) => (
                  <InlineStack key={index} align="space-between">
                    <InlineStack gap="200">
                      <Text variant="bodyMd" as="span">
                        {notification.type === "email" ? "📧" : "📱"}
                      </Text>
                      <Text variant="bodyMd" as="span">
                        {notification.type.charAt(0).toUpperCase() +
                          notification.type.slice(1)}{" "}
                        notification
                      </Text>
                    </InlineStack>
                    <InlineStack gap="200">
                      <Text variant="bodyMd" as="span" tone="subdued">
                        {notification.timestamp}
                      </Text>
                      <Badge
                        tone={
                          notification.status === "sent"
                            ? "success"
                            : "critical"
                        }
                      >
                        {notification.status}
                      </Badge>
                    </InlineStack>
                  </InlineStack>
                ))}
              </BlockStack>
            ) : (
              <Text variant="bodyMd" as="p" tone="subdued">
                No notifications sent yet
              </Text>
            )}
          </BlockStack>
        </Card>
      </BlockStack>
    </Page>
  );
}
