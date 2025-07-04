import {
  Badge,
  Box,
  Button,
  Card,
  Collapsible,
  DatePicker,
  EmptyState,
  IndexTable,
  InlineStack,
  Layout,
  Page,
  Pagination,
  Popover,
  Select,
  Spinner,
  Text,
  TextField,
  Tooltip,
  useIndexResourceState,
  BlockStack,
  Icon,
} from "@shopify/polaris";
import {
  SearchIcon,
  FilterIcon,
  ExportIcon,
  ViewIcon,
  CalendarIcon,
} from "@shopify/polaris-icons";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  Link as RemixLink,
  useLoaderData,
  useNavigate,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import { useState, useCallback, useMemo, useEffect } from "react";

// Loader function
export async function loader({ request }) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  // Build API URL with all search params
  const apiUrl = new URL("/api/orders/get", url.origin);
  searchParams.forEach((value, key) => {
    apiUrl.searchParams.set(key, value);
  });

  try {
    const response = await fetch(apiUrl.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Response:", data);
    return json(data.data);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return json({
      meta: {
        total: 0,
        page: 1,
        limit: 20,
        pages: 0,
        filters_applied: {
          order_filters: 0,
          fulfillment_filters: 0,
          includes: 0,
        },
      },
      data: [],
      error: "Failed to fetch orders",
    });
  }
}

export default function OrdersIndex() {
  const loaderData = useLoaderData();
  const { meta = {}, data: orders = [], error } = loaderData || {};

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const submit = useSubmit();

  // State management
  const [loading, setLoading] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [deliveryDatePickerOpen, setDeliveryDatePickerOpen] = useState(false);

  // Filter states - initialize from URL params
  const [queryValue, setQueryValue] = useState(
    searchParams.get("customer_name") || "",
  );
  const [orderNumber, setOrderNumber] = useState(
    searchParams.get("order_number") || "",
  );
  const [customerPhone, setCustomerPhone] = useState(
    searchParams.get("customer_phone") || "",
  );
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [fulfillmentStatus, setFulfillmentStatus] = useState(
    searchParams.get("fulfillment_status") || "",
  );
  const [courierName, setCourierName] = useState(
    searchParams.get("courier_name") || "",
  );
  const [trackingNumber, setTrackingNumber] = useState(
    searchParams.get("tracking_number") || "",
  );
  const [sortBy, setSortBy] = useState(
    searchParams.get("sort_by") || "placed_at",
  );
  const [sortDirection, setSortDirection] = useState(
    searchParams.get("sort_direction") || "desc",
  );

  // Date states
  const [dateRange, setDateRange] = useState({
    start: searchParams.get("date_from")
      ? new Date(searchParams.get("date_from"))
      : undefined,
    end: searchParams.get("date_to")
      ? new Date(searchParams.get("date_to"))
      : undefined,
  });

  const [deliveryDateRange, setDeliveryDateRange] = useState({
    start: searchParams.get("delivery_date_from")
      ? new Date(searchParams.get("delivery_date_from"))
      : undefined,
    end: searchParams.get("delivery_date_to")
      ? new Date(searchParams.get("delivery_date_to"))
      : undefined,
  });

  // Resource state for bulk actions
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders || []);

  // Status options
  const statusOptions = [
    { label: "All Statuses", value: "" },
    { label: "Pending", value: "pending" },
    { label: "Confirmed", value: "confirmed" },
    { label: "Processing", value: "processing" },
    { label: "Shipped", value: "shipped" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];

  const fulfillmentStatusOptions = [
    { label: "All Fulfillment Statuses", value: "" },
    { label: "Pending", value: "pending" },
    { label: "In Transit", value: "in_transit" },
    { label: "Out for Delivery", value: "out_for_delivery" },
    { label: "Delivered", value: "delivered" },
    { label: "Failed Delivery", value: "failed_delivery" },
    { label: "Returned", value: "returned" },
  ];

  const sortOptions = [
    { label: "Order Date (Newest)", value: "placed_at:desc" },
    { label: "Order Date (Oldest)", value: "placed_at:asc" },
    { label: "Order Number (A-Z)", value: "order_number:asc" },
    { label: "Order Number (Z-A)", value: "order_number:desc" },
    { label: "Customer Name (A-Z)", value: "customer_name:asc" },
    { label: "Customer Name (Z-A)", value: "customer_name:desc" },
    { label: "Status", value: "status:asc" },
  ];

  // Update URL with filters - Enhanced version
  const updateFilters = useCallback(() => {
    setLoading(true);
    const newSearchParams = new URLSearchParams();

    // Add all filter parameters
    if (queryValue.trim())
      newSearchParams.set("customer_name", queryValue.trim());
    if (orderNumber.trim())
      newSearchParams.set("order_number", orderNumber.trim());
    if (customerPhone.trim())
      newSearchParams.set("customer_phone", customerPhone.trim());
    if (status) newSearchParams.set("status", status);
    if (fulfillmentStatus)
      newSearchParams.set("fulfillment_status", fulfillmentStatus);
    if (courierName.trim())
      newSearchParams.set("courier_name", courierName.trim());
    if (trackingNumber.trim())
      newSearchParams.set("tracking_number", trackingNumber.trim());

    // Date filters
    if (dateRange.start) {
      newSearchParams.set(
        "date_from",
        dateRange.start.toISOString().split("T")[0],
      );
    }
    if (dateRange.end) {
      newSearchParams.set("date_to", dateRange.end.toISOString().split("T")[0]);
    }
    if (deliveryDateRange.start) {
      newSearchParams.set(
        "delivery_date_from",
        deliveryDateRange.start.toISOString().split("T")[0],
      );
    }
    if (deliveryDateRange.end) {
      newSearchParams.set(
        "delivery_date_to",
        deliveryDateRange.end.toISOString().split("T")[0],
      );
    }

    // Sorting
    newSearchParams.set("sort_by", sortBy);
    newSearchParams.set("sort_direction", sortDirection);

    // Include options
    newSearchParams.set("with_fulfillments", "true");
    newSearchParams.set("with_stores", "true");

    // Pagination - Reset to first page when filtering
    newSearchParams.set("page", "1");
    newSearchParams.set("limit", "20");

    // Navigate with new params
    navigate(`?${newSearchParams.toString()}`, { replace: true });
    
    // Reset loading state after navigation
    setTimeout(() => setLoading(false), 500);
  }, [
    queryValue,
    orderNumber,
    customerPhone,
    status,
    fulfillmentStatus,
    courierName,
    trackingNumber,
    dateRange,
    deliveryDateRange,
    sortBy,
    sortDirection,
    navigate,
  ]);

  // Auto-apply filters when query changes (for real-time search)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (queryValue.trim() !== (searchParams.get("customer_name") || "")) {
        updateFilters();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [queryValue]);

  // Clear all filters
  const handleClearFilters = useCallback(() => {
    setQueryValue("");
    setOrderNumber("");
    setCustomerPhone("");
    setStatus("");
    setFulfillmentStatus("");
    setCourierName("");
    setTrackingNumber("");
    setDateRange({ start: undefined, end: undefined });
    setDeliveryDateRange({ start: undefined, end: undefined });
    setSortBy("placed_at");
    setSortDirection("desc");
    navigate("/app/orders", { replace: true });
  }, [navigate]);

  // Handle pagination - Enhanced version
  const handlePagination = useCallback(
    (direction) => {
      setLoading(true);
      const currentPage = meta?.page || 1;
      const newPage = direction === "next" ? currentPage + 1 : currentPage - 1;

      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", newPage.toString());

      navigate(`?${newSearchParams.toString()}`, { replace: true });
      
      // Reset loading state after navigation
      setTimeout(() => setLoading(false), 500);
    },
    [meta?.page, searchParams, navigate],
  );

  // Handle sort change - Enhanced version
  const handleSortChange = useCallback((value) => {
    const [field, direction] = value.split(":");
    setSortBy(field);
    setSortDirection(direction);
    
    // Auto-apply sort change
    setTimeout(() => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("sort_by", field);
      newSearchParams.set("sort_direction", direction);
      newSearchParams.set("page", "1"); // Reset to first page
      navigate(`?${newSearchParams.toString()}`, { replace: true });
    }, 100);
  }, [searchParams, navigate]);

  // Handle date range changes
  const handleDateRangeChange = (range) => {
    setDateRange(range);
    setDatePickerOpen(false);
  };

  const handleDeliveryDateRangeChange = (range) => {
    setDeliveryDateRange(range);
    setDeliveryDatePickerOpen(false);
  };

  // Enhanced status badge with better colors
  const getStatusBadge = (status) => {
    const statusLower = status?.toLowerCase() || "";

    switch (statusLower) {
      case "fulfilled":
        return (
          <Badge tone="success" size="small">
            Delivered
          </Badge>
        );
      case "shipped":
        return (
          <Badge tone="info" size="small">
            Shipped
          </Badge>
        );
      case "in_transit":
        return (
          <Badge tone="info" size="small">
            In Transit
          </Badge>
        );
      case "processing":
        return (
          <Badge tone="attention" size="small">
            Processing
          </Badge>
        );
      case "pending":
        return (
          <Badge tone="warning" size="small">
            Pending
          </Badge>
        );
      case "cancelled":
        return (
          <Badge tone="critical" size="small">
            Cancelled
          </Badge>
        );
      case "returned":
        return (
          <Badge tone="critical" size="small">
            Returned
          </Badge>
        );
      case "confirmed":
        return (
          <Badge tone="success" size="small">
            Confirmed
          </Badge>
        );
      default:
        return (
          <Badge size="small">
            {status || "Unknown"}
          </Badge>
        );
    }
  };

  // Get fulfillment status badge
  const getFulfillmentStatusBadge = (fulfillments) => {
    if (!fulfillments || fulfillments.length === 0) {
      return (
        <Badge tone="warning" size="small">
          No Fulfillment
        </Badge>
      );
    }

    const latestFulfillment = fulfillments[0];
    return getStatusBadge(latestFulfillment.status);
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return "Invalid Date";
    }
  };

  // Applied filters count
  const appliedFiltersCount = useMemo(() => {
    let count = 0;
    if (queryValue.trim()) count++;
    if (orderNumber.trim()) count++;
    if (customerPhone.trim()) count++;
    if (status) count++;
    if (fulfillmentStatus) count++;
    if (courierName.trim()) count++;
    if (trackingNumber.trim()) count++;
    if (dateRange.start || dateRange.end) count++;
    if (deliveryDateRange.start || deliveryDateRange.end) count++;
    return count;
  }, [
    queryValue,
    orderNumber,
    customerPhone,
    status,
    fulfillmentStatus,
    courierName,
    trackingNumber,
    dateRange,
    deliveryDateRange,
  ]);

  // Bulk actions
  const bulkActions = [
    {
      content: "Export selected",
      onAction: () => {
        console.log("Export selected orders:", selectedResources);
        // Add export functionality here
      },
    },
    {
      content: "Update status",
      onAction: () => {
        console.log("Update status for selected orders:", selectedResources);
        // Add status update functionality here
      },
    },
  ];

  // Handle copy tracking number
  const handleCopyTracking = async (trackingNumber) => {
    try {
      await navigator.clipboard.writeText(trackingNumber);
      // You can add a toast notification here
      console.log("Tracking number copied:", trackingNumber);
    } catch (error) {
      console.error("Failed to copy tracking number:", error);
    }
  }

  // Table headings
  const headings = [
    { title: "Order #" },
    { title: "Customer" },
    { title: "Status" },
    { title: "Fulfillment" },
    { title: "Courier" },
    { title: "Tracking #" },
    { title: "Order Date" },
    { title: "Actions" },
  ];

  // Table rows
  const rowMarkup = (orders || []).map((order, index) => (
    <IndexTable.Row
      id={order.id}
      key={order.id}
      selected={selectedResources.includes(order.id)}
      position={index}
    >
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {order.order_number}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <BlockStack gap="100">
          <Text variant="bodyMd" fontWeight="medium" as="span">
            {order.customer_name}
          </Text>
          {order.customer_phone && (
            <Text variant="bodySm" tone="subdued" as="span">
              {order.customer_phone}
            </Text>
          )}
        </BlockStack>
      </IndexTable.Cell>
      <IndexTable.Cell>{getStatusBadge(order.status)}</IndexTable.Cell>
      <IndexTable.Cell>
        {getFulfillmentStatusBadge(order.fulfillments || [])}
      </IndexTable.Cell>
      <IndexTable.Cell>
        {order.fulfillments && order.fulfillments.length > 0 ? (
          <Text variant="bodyMd" as="span">
            {order.fulfillments[0].courier_name || "N/A"}
          </Text>
        ) : (
          <Text variant="bodyMd" tone="subdued" as="span">
            N/A
          </Text>
        )}
      </IndexTable.Cell>
      <IndexTable.Cell>
        {order.fulfillments &&
        order.fulfillments.length > 0 &&
        order.fulfillments[0].tracking_number ? (
          <Tooltip content="Click to copy tracking number">
            <Button
              variant="plain"
              size="slim"
              onClick={() =>
                handleCopyTracking(order.fulfillments[0].tracking_number)
              }
            >
              <Text variant="bodyMd" fontWeight="medium">
                {order.fulfillments[0].tracking_number}
              </Text>
            </Button>
          </Tooltip>
        ) : (
          <Text variant="bodyMd" tone="subdued" as="span">
            N/A
          </Text>
        )}
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodyMd" as="span">
          {formatDate(order.placed_at)}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <InlineStack gap="200">
          <RemixLink to={`/app/orders/${order.id}`}>
            <Button size="slim" icon={ViewIcon} variant="primary">
              View
            </Button>
          </RemixLink>
        </InlineStack>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  // Empty state
  const emptyStateMarkup = (
    <EmptyState
      heading="No orders found"
      action={{
        content: "Clear filters",
        onAction: handleClearFilters,
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    >
      <p>
        Try adjusting your search or filter criteria to find what you're looking
        for.
      </p>
    </EmptyState>
  );

  // Safe defaults for meta
  const safeTotal = meta?.total || 0;
  const safePage = meta?.page || 1;
  const safePages = meta?.pages || 0;
  const safeLimit = meta?.limit || 20;

  return (
    <Page
      title="Orders"
      subtitle={`${safeTotal} orders`}
      primaryAction={{
        content: "Export",
        icon: ExportIcon,
        onAction: () => console.log("Export all orders"),
      }}
      secondaryActions={[
        {
          content: "Import",
          onAction: () => console.log("Import orders"),
        },
      ]}
    >
      <TitleBar title="Orders Management" />

      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              {/* Filters */}
              <InlineStack gap="300" align="space-between">
                <InlineStack gap="200">
                  <div style={{ minWidth: "300px" }}>
                    <TextField
                      label=""
                      placeholder="Search by customer name..."
                      value={queryValue}
                      onChange={setQueryValue}
                      prefix={<Icon source={SearchIcon} />}
                      clearButton
                      onClearButtonClick={() => setQueryValue("")}
                    />
                  </div>
                  <Button
                    icon={FilterIcon}
                    onClick={() => setFiltersOpen(!filtersOpen)}
                    pressed={filtersOpen}
                  >
                    Filters{" "}
                    {appliedFiltersCount > 0 && (
                      <Badge size="small" tone="info">
                        {appliedFiltersCount}
                      </Badge>
                    )}
                  </Button>
                  <Select
                    label=""
                    options={sortOptions}
                    value={`${sortBy}:${sortDirection}`}
                    onChange={handleSortChange}
                  />
                </InlineStack>
                <InlineStack gap="200">
                  <Button
                    onClick={updateFilters}
                    variant="primary"
                    loading={loading}
                  >
                    Apply Filters
                  </Button>
                  {appliedFiltersCount > 0 && (
                    <Button onClick={handleClearFilters}>Clear All</Button>
                  )}
                </InlineStack>
              </InlineStack>

              {/* Advanced Filters Collapsible */}
              <Collapsible open={filtersOpen} id="advanced-filters">
                <Card background="bg-surface-secondary">
                  <BlockStack gap="400">
                    <Text variant="headingMd" as="h3">
                      Advanced Filters
                    </Text>

                    <Layout>
                      <Layout.Section oneHalf>
                        <BlockStack gap="300">
                          <TextField
                            label="Order Number"
                            value={orderNumber}
                            onChange={setOrderNumber}
                            placeholder="Search by order number..."
                          />
                          <TextField
                            label="Customer Phone"
                            value={customerPhone}
                            onChange={setCustomerPhone}
                            placeholder="Search by phone number..."
                          />
                          <Select
                            label="Order Status"
                            options={statusOptions}
                            value={status}
                            onChange={setStatus}
                          />
                          <Select
                            label="Fulfillment Status"
                            options={fulfillmentStatusOptions}
                            value={fulfillmentStatus}
                            onChange={setFulfillmentStatus}
                          />
                        </BlockStack>
                      </Layout.Section>

                      <Layout.Section oneHalf>
                        <BlockStack gap="300">
                          <TextField
                            label="Courier Name"
                            value={courierName}
                            onChange={setCourierName}
                            placeholder="Search by courier..."
                          />
                          <TextField
                            label="Tracking Number"
                            value={trackingNumber}
                            onChange={setTrackingNumber}
                            placeholder="Search by tracking number..."
                          />

                          {/* Date Range Picker */}
                          <Popover
                            active={datePickerOpen}
                            activator={
                              <Button
                                onClick={() =>
                                  setDatePickerOpen(!datePickerOpen)
                                }
                                disclosure
                                icon={CalendarIcon}
                                fullWidth
                              >
                                Order Date Range
                                {(dateRange.start || dateRange.end) && (
                                  <Badge size="small" tone="info">
                                    Selected
                                  </Badge>
                                )}
                              </Button>
                            }
                            onClose={() => setDatePickerOpen(false)}
                          >
                            <Box padding="400">
                              <DatePicker
                                month={
                                  dateRange.start?.getMonth() ||
                                  new Date().getMonth()
                                }
                                year={
                                  dateRange.start?.getFullYear() ||
                                  new Date().getFullYear()
                                }
                                selected={dateRange}
                                onMonthChange={(month, year) => {
                                  // Handle month change if needed
                                }}
                                onChange={handleDateRangeChange}
                                allowRange
                              />
                            </Box>
                          </Popover>

                          {/* Delivery Date Range Picker */}
                          <Popover
                            active={deliveryDatePickerOpen}
                            activator={
                              <Button
                                onClick={() =>
                                  setDeliveryDatePickerOpen(
                                    !deliveryDatePickerOpen,
                                  )
                                }
                                disclosure
                                icon={CalendarIcon}
                                fullWidth
                              >
                                Delivery Date Range
                                {(deliveryDateRange.start ||
                                  deliveryDateRange.end) && (
                                  <Badge size="small" tone="info">
                                    Selected
                                  </Badge>
                                )}
                              </Button>
                            }
                            onClose={() => setDeliveryDatePickerOpen(false)}
                          >
                            <Box padding="400">
                              <DatePicker
                                month={
                                  deliveryDateRange.start?.getMonth() ||
                                  new Date().getMonth()
                                }
                                year={
                                  deliveryDateRange.start?.getFullYear() ||
                                  new Date().getFullYear()
                                }
                                selected={deliveryDateRange}
                                onMonthChange={(month, year) => {
                                  // Handle month change if needed
                                }}
                                onChange={handleDeliveryDateRangeChange}
                                allowRange
                              />
                            </Box>
                          </Popover>
                        </BlockStack>
                      </Layout.Section>
                    </Layout>
                  </BlockStack>
                </Card>
              </Collapsible>

              {/* Error State */}
              {error && (
                <Card>
                  <Box padding="400">
                    <Text tone="critical" as="p">
                      {error}
                    </Text>
                  </Box>
                </Card>
              )}

              {/* Loading State */}
              {loading && (
                <Card>
                  <Box padding="400">
                    <InlineStack gap="200" align="center">
                      <Spinner size="small" />
                      <Text as="p">Loading orders...</Text>
                    </InlineStack>
                  </Box>
                </Card>
              )}

              {/* Orders Table */}
              {!loading && (
                <div
                  style={{
                    border: "1px solid #e1e3e5",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <IndexTable
                    resourceName={{
                      singular: "order",
                      plural: "orders",
                    }}
                    itemCount={orders?.length || 0}
                    selectedItemsCount={
                      allResourcesSelected ? "All" : selectedResources.length
                    }
                    onSelectionChange={handleSelectionChange}
                    bulkActions={bulkActions}
                    headings={headings}
                    emptyState={emptyStateMarkup}
                  >
                    {rowMarkup}
                  </IndexTable>
                </div>
              )}

              {/* Pagination */}
              {safePages > 1 && (
                <Card>
                  <Box padding="400">
                    <InlineStack align="center">
                      <Pagination
                        hasPrevious={safePage > 1}
                        onPrevious={() => handlePagination("previous")}
                        hasNext={safePage < safePages}
                        onNext={() => handlePagination("next")}
                        label={`Page ${safePage} of ${safePages} (${safeTotal} total orders)`}
                      />
                    </InlineStack>
                  </Box>
                </Card>
              )}

              {/* Summary */}
              <Card background="bg-surface-secondary">
                <Box padding="400">
                  <InlineStack gap="400" align="space-between">
                    <Text variant="bodyMd" as="p" fontWeight="medium">
                      Showing {orders?.length || 0} of {safeTotal} orders
                    </Text>
                    <InlineStack gap="400">
                      <Text variant="bodySm" tone="subdued" as="span">
                        Filters applied: {appliedFiltersCount}
                      </Text>
                      <Text variant="bodySm" tone="subdued" as="span">
                        Page {safePage} of {safePages}
                      </Text>
                    </InlineStack>
                  </InlineStack>
                </Box>
              </Card>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}