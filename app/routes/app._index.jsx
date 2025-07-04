import { useEffect, useState } from "react";
import { useFetcher } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
} from "@shopify/polaris";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import { Badge, ProgressBar, DataTable } from "@shopify/polaris";

const MetricCard = ({ title, value, change, changeType, icon, subtitle }) => (
  <Card>
    <BlockStack gap="300">
      <InlineStack align="space-between">
        <InlineStack gap="200" align="center">
          <div style={{ color: "#008060", fontSize: "20px" }}>{icon}</div>
          <Text variant="bodyMd" as="p" tone="subdued">
            {title}
          </Text>
        </InlineStack>
        {change && (
          <Badge
            tone={
              changeType === "positive"
                ? "success"
                : changeType === "negative"
                  ? "critical"
                  : "info"
            }
          >
            {change}
          </Badge>
        )}
      </InlineStack>
      <Text variant="heading2xl" as="h3">
        {value}
      </Text>
      {subtitle && (
        <Text variant="bodyMd" as="p" tone="subdued">
          {subtitle}
        </Text>
      )}
    </BlockStack>
  </Card>
);

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const color = ["Red", "Orange", "Yellow", "Green"][
    Math.floor(Math.random() * 4)
  ];
  const response = await admin.graphql(
    `#graphql
      mutation populateProduct($product: ProductCreateInput!) {
        productCreate(product: $product) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        product: {
          title: `${color} Snowboard`,
        },
      },
    },
  );
  const responseJson = await response.json();
  const product = responseJson.data.productCreate.product;
  const variantId = product.variants.edges[0].node.id;
  const variantResponse = await admin.graphql(
    `#graphql
    mutation shopifyRemixTemplateUpdateVariant($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants) {
        productVariants {
          id
          price
          barcode
          createdAt
        }
      }
    }`,
    {
      variables: {
        productId: product.id,
        variants: [{ id: variantId, price: "100.00" }],
      },
    },
  );
  const variantResponseJson = await variantResponse.json();

  return {
    product: responseJson.data.productCreate.product,
    variant: variantResponseJson.data.productVariantsBulkUpdate.productVariants,
  };
};

export default function Index() {
  const fetcher = useFetcher();
  const shopify = useAppBridge();
  const isLoading =
    ["loading", "submitting"].includes(fetcher.state) &&
    fetcher.formMethod === "POST";
  const productId = fetcher.data?.product?.id.replace(
    "gid://shopify/Product/",
    "",
  );

  useEffect(() => {
    if (productId) {
      shopify.toast.show("Product created");
    }
  }, [productId, shopify]);
  const generateProduct = () => fetcher.submit({}, { method: "POST" });

  const [liveAlerts, setLiveAlerts] = useState([
    {
      id: "1",
      orderNumber: "#1234",
      message: "Left Lahore Hub",
      timestamp: "2 mins ago",
      type: "info",
    },
    {
      id: "2",
      orderNumber: "#1235",
      message: "Out for delivery in Karachi",
      timestamp: "5 mins ago",
      type: "success",
    },
    {
      id: "3",
      orderNumber: "#1236",
      message: "Arrived at Islamabad Hub",
      timestamp: "8 mins ago",
      type: "info",
    },
    {
      id: "4",
      orderNumber: "#1237",
      message: "Delivered successfully",
      timestamp: "12 mins ago",
      type: "success",
    },
  ]);

  const courierPerformance = [
    {
      name: "Leopards",
      deliveryRate: 93,
      avgTime: "2.2 days",
      logo: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "TCS",
      deliveryRate: 88,
      avgTime: "2.9 days",
      logo: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "CallCourier",
      deliveryRate: 84,
      avgTime: "3.1 days",
      logo: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "M&P",
      deliveryRate: 81,
      avgTime: "3.4 days",
      logo: "/placeholder.svg?height=32&width=32",
    },
  ];

  const courierTableRows = courierPerformance.map((courier) => [
    <InlineStack key={`courier-${courier.name}`} gap="200" align="center">
      <img
        src={courier.logo || "/placeholder.svg"}
        alt={courier.name}
        style={{ width: "24px", height: "24px" }}
      />
      <Text variant="bodyMd" fontWeight="medium" as="span">
        {courier.name}
      </Text>
    </InlineStack>,
    <InlineStack key={`rate-${courier.name}`} gap="200" align="center">
      <Text variant="bodyMd" as="span">
        {courier.deliveryRate}%
      </Text>
      <div style={{ width: "60px" }}>
        <ProgressBar progress={courier.deliveryRate} size="small" />
      </div>
    </InlineStack>,
    <Text key={`time-${courier.name}`} variant="bodyMd" as="span">
      {courier.avgTime}
    </Text>,
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now().toString(),
        orderNumber: `#${Math.floor(Math.random() * 9000) + 1000}`,
        message: [
          "Left Karachi Hub",
          "Arrived at destination city",
          "Out for delivery",
          "Package delivered",
          "In transit to next hub",
        ][Math.floor(Math.random() * 5)],
        timestamp: "Just now",
        type: Math.random() > 0.7 ? "success" : "info",
      };

      setLiveAlerts((prev) => [newAlert, ...prev.slice(0, 4)]);
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Page
      title="Dashboard"
      subtitle="Merchant analytics and insights"
    >
      <BlockStack gap="500">
        {/* Key Metrics Row 1 */}
        <InlineStack gap="400" align="fill">
          <MetricCard
            title="Total Shipments"
            value="2,847"
            change="+12.5%"
            changeType="positive"
            icon="📦"
            subtitle="Last 30 days"
          />
          <MetricCard
            title="Delivery Success Rate"
            value="91%"
            change="+2.1%"
            changeType="positive"
            icon="✅"
            subtitle="9% Failed/RTO"
          />
          <MetricCard
            title="Average Delivery Time"
            value="2.4 days"
            change="-0.3 days"
            changeType="positive"
            icon="⏱️"
            subtitle="Faster than last month"
          />
        </InlineStack>

        {/* Key Metrics Row 2 */}
        <InlineStack gap="400" align="fill">
          <MetricCard
            title="Orders In Transit"
            value="156"
            change="+8"
            changeType="neutral"
            icon="🚚"
            subtitle="Currently moving"
          />
          <MetricCard
            title="Late Deliveries"
            value="6"
            change="This week"
            changeType="negative"
            icon="⚠️"
            subtitle="Beyond expected date"
          />
          <MetricCard
            title="WhatsApp Messages"
            value="320"
            change="5 failed"
            changeType="positive"
            icon="💬"
            subtitle="This month • 1.2s avg delay"
          />
        </InlineStack>

        {/* Live Tracking Alerts & Courier Performance */}
        <InlineStack gap="400" align="fill">
          {/* Live Tracking Alerts */}
          <Card>
            <BlockStack gap="400">
              <InlineStack align="space-between">
                <Text variant="headingMd" as="h3">
                  📡 Live Tracking Alerts
                </Text>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#008060",
                    animation: "pulse 2s infinite",
                  }}
                />
              </InlineStack>

              <BlockStack gap="300">
                {liveAlerts.map((alert) => (
                  <InlineStack
                    key={alert.id}
                    align="space-between"
                    blockAlign="center"
                  >
                    <InlineStack gap="200">
                      <Badge
                        tone={alert.type === "success" ? "success" : "info"}
                      >
                        {alert.orderNumber}
                      </Badge>
                      <Text variant="bodyMd" as="span">
                        {alert.message}
                      </Text>
                    </InlineStack>
                    <Text variant="bodyMd" as="span" tone="subdued">
                      {alert.timestamp}
                    </Text>
                  </InlineStack>
                ))}
              </BlockStack>

              <style jsx>{`
                @keyframes pulse {
                  0% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 0.5;
                  }
                  100% {
                    opacity: 1;
                  }
                }
              `}</style>
            </BlockStack>
          </Card>

          {/* Top Couriers Performance */}
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h3">
                🏆 Top Couriers Performance
              </Text>

              <DataTable
                columnContentTypes={["text", "text", "text"]}
                headings={["Courier", "Delivery Rate", "Avg Time"]}
                rows={courierTableRows}
                hideScrollIndicator
              />
            </BlockStack>
          </Card>
        </InlineStack>

        {/* Detailed Analytics Cards */}
        <InlineStack gap="400" align="fill">
          {/* Delivery Success Breakdown */}
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h3">
                📊 Delivery Success Breakdown
              </Text>

              <BlockStack gap="300">
                <InlineStack align="space-between">
                  <InlineStack gap="200">
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "2px",
                        backgroundColor: "#008060",
                      }}
                    />
                    <Text variant="bodyMd" as="span">
                      Delivered
                    </Text>
                  </InlineStack>
                  <Text variant="bodyMd" fontWeight="bold" as="span">
                    91%
                  </Text>
                </InlineStack>
                <ProgressBar progress={91} size="medium" />

                <InlineStack align="space-between">
                  <InlineStack gap="200">
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "2px",
                        backgroundColor: "#D72C0D",
                      }}
                    />
                    <Text variant="bodyMd" as="span">
                      Failed/RTO
                    </Text>
                  </InlineStack>
                  <Text
                    variant="bodyMd"
                    fontWeight="bold"
                    as="span"
                    tone="critical"
                  >
                    9%
                  </Text>
                </InlineStack>
                <ProgressBar progress={9} size="medium" tone="critical" />
              </BlockStack>
            </BlockStack>
          </Card>

          {/* WhatsApp Notification Details */}
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h3">
                📱 WhatsApp Notifications
              </Text>

              <BlockStack gap="300">
                <InlineStack align="space-between">
                  <Text variant="bodyMd" as="span">
                    Total Sent (This Month)
                  </Text>
                  <Text variant="bodyMd" fontWeight="bold" as="span">
                    320
                  </Text>
                </InlineStack>

                <InlineStack align="space-between">
                  <Text variant="bodyMd" as="span">
                    Failed Messages
                  </Text>
                  <Text
                    variant="bodyMd"
                    fontWeight="bold"
                    as="span"
                    tone="critical"
                  >
                    5
                  </Text>
                </InlineStack>

                <InlineStack align="space-between">
                  <Text variant="bodyMd" as="span">
                    Average Delay
                  </Text>
                  <Text variant="bodyMd" fontWeight="bold" as="span">
                    1.2s
                  </Text>
                </InlineStack>

                <InlineStack align="space-between">
                  <Text variant="bodyMd" as="span">
                    Success Rate
                  </Text>
                  <Text
                    variant="bodyMd"
                    fontWeight="bold"
                    as="span"
                    tone="success"
                  >
                    98.4%
                  </Text>
                </InlineStack>

                <div style={{ marginTop: "12px" }}>
                  <ProgressBar progress={98.4} size="medium" />
                </div>
              </BlockStack>
            </BlockStack>
          </Card>
        </InlineStack>
      </BlockStack>
    </Page>
  );
}
