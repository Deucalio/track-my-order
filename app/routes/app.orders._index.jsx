import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { Link as Link_ } from "@remix-run/react";

import { useState, useCallback } from "react";
import {
  IndexTable,
  Badge,
  Button,
  useIndexResourceState,
  Pagination,
} from "@shopify/polaris";

const mockOrders = [
  {
    id: "1",
    orderNumber: "#1001",
    customerName: "John Doe",
    courierName: "TCS Express",
    trackingNumber: "TCS123456789",
    status: "in_transit",
    lastUpdated: "2024-01-15 10:30 AM",
  },
  {
    id: "2",
    orderNumber: "#1002",
    customerName: "Jane Smith",
    courierName: "Leopards Courier",
    trackingNumber: "LEO987654321",
    status: "delivered",
    lastUpdated: "2024-01-14 3:45 PM",
  },
  {
    id: "3",
    orderNumber: "#1003",
    customerName: "Ahmed Ali",
    courierName: "M&P Courier",
    trackingNumber: "MNP456789123",
    status: "returned",
    lastUpdated: "2024-01-13 9:15 AM",
  },
  {
    id: "4",
    orderNumber: "#1004",
    customerName: "Sarah Khan",
    courierName: "Postex",
    trackingNumber: "PTX789123456",
    status: "pending",
    lastUpdated: "2024-01-12 2:20 PM",
  },
  {
    id: "5",
    orderNumber: "#1005",
    customerName: "Ali Hassan",
    courierName: "Leopards Courier",
    trackingNumber: "LEO555666777",
    status: "delivered",
    lastUpdated: "2024-01-11 1:15 PM",
  },
];

export default function AdditionalPage() {
  const [orders] = useState(mockOrders);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  const getStatusBadge = (status) => {
    switch (status) {
      case "delivered":
        return <Badge tone="success">Delivered</Badge>;
      case "in_transit":
        return <Badge tone="info">In Transit</Badge>;
      case "returned":
        return <Badge tone="critical">Returned</Badge>;
      case "pending":
        return <Badge tone="attention">Pending</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const rowMarkup = orders.map((order, index) => (
    <IndexTable.Row
      id={order.id}
      key={order.id}
      selected={selectedResources.includes(order.id)}
      position={index}
    >
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {order.orderNumber}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>{order.customerName}</IndexTable.Cell>
      <IndexTable.Cell>{order.courierName}</IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodyMd" as="span">
          {order.trackingNumber}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>{getStatusBadge(order.status)}</IndexTable.Cell>
      <IndexTable.Cell>{order.lastUpdated}</IndexTable.Cell>
      <IndexTable.Cell>

        <Link_ to={`/app/orders/${order.id}`}>

        <Button
          variant="primary"
          size="slim"
          onClick={() => console.log(`Viewing details for order ${order.id}`)}
        >
          View Details
        </Button>
        </Link_>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <Page
      title="Orders Management"
      subtitle="View and manage all tracked orders"
    >
      <Card>
        <IndexTable
          resourceName={{
            singular: "order",
            plural: "orders",
          }}
          itemCount={orders.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: "Order #" },
            { title: "Customer Name" },
            { title: "Courier Name" },
            { title: "Tracking #" },
            { title: "Current Status" },
            { title: "Last Updated" },
            { title: "Actions" },
          ]}
        >
          {rowMarkup}
        </IndexTable>

        {orders.length > itemsPerPage && (
          <div style={{ padding: "16px", textAlign: "center" }}>
            <Pagination
              hasPrevious={currentPage > 1}
              onPrevious={() => setCurrentPage(currentPage - 1)}
              hasNext={currentPage < Math.ceil(orders.length / itemsPerPage)}
              onNext={() => setCurrentPage(currentPage + 1)}
            />
          </div>
        )}
      </Card>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
