"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useLocation } from "@remix-run/react";

import {
  Page,
  Card,
  BlockStack,
  TextField,
  Checkbox,
  Button,
  Text,
  Divider,
  InlineStack,
  Banner,
  Avatar,
  Modal,
  Spinner,
  Badge,
  Tabs,
  Icon,
  Tooltip,
  ButtonGroup,
  Box,
  Grid,
  ProgressBar,
  EmptyState,
  InlineError,
  Collapsible,
} from "@shopify/polaris";
import actions from "./utils/actions";

import {
  DeliveryFilledIcon,
  ChatIcon,
  EmailIcon,
  SettingsIcon,
  CheckIcon,
  ViewIcon,
  HideIcon,
  ExternalIcon,
  QuestionCircleIcon,
  ConnectIcon,
  ExitIcon,
  MobileIcon,
  NoteIcon,
  AlertTriangleIcon,
} from "@shopify/polaris-icons";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import prisma from "../db.server";

const customerName = "{{customerName}}";
const orderNumber = "{{orderNumber}}";
const trackingUrl = "{{trackingUrl}}";
const status = "{{status}}";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  const { session } = await authenticate.admin(request);

  const shopData = await prisma.stores.findFirst({
    where: { shopify_domain: session.shop },
  });

  return { shopData, WHATSAPP_API_URL: process.env.WHATSAPP_API_URL };
};

export default function Settings() {
  // All the Data that e'll be fetching from Backend
  const [connectedCouriers, setConnectedCouriers] = useState(null);

  // ___________________

  // REFS
  const couriersRef = useRef(null);
  const [isTabLoading, setIsTabLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const { shopData, WHATSAPP_API_URL } = useLoaderData();
  // console.log("shopData", shopData, "WHATSAPP_API_URL", WHATSAPP_API_URL);

  const [showQRModal, setShowQRModal] = useState(false);
  const [whatsappConnection, setWhatsappConnection] = useState({
    isConnecting: false,
    isConnected: false,
    qrCode: null,
    error: null,
    accountName: null,
    phoneNumber: null,
    profilePicture: null,
  });

  // Function to fetch QR code
  const fetchQRCode = useCallback(async () => {
    setWhatsappConnection((prev) => ({
      ...prev,
      isConnecting: true,
      error: null,
      qrCode: null,
    }));

    try {
      const storeId = window.location;
      console.log("Fetching QR code for storeId:", storeId, shopData);
      const response = await fetch(`${WHATSAPP_API_URL}/qr/${shopData.id}`);
      const data = await response.json();

      if (data.success) {
        if (data.qrCode) {
          setWhatsappConnection((prev) => ({
            ...prev,
            qrCode: data.qrCode,
            isConnecting: false,
            isConnected: false,
          }));
        } else if (data.data?.isReady) {
          // Already connected
          setWhatsappConnection((prev) => ({
            ...prev,
            isConnected: true,
            isConnecting: false,
            qrCode: null,
            accountName: data.status.accountName || "WhatsApp Business",
            phoneNumber: data.status.phoneNumber || "+92 XXX XXXXXXX",
            profilePicture:
              data.status.profilePicture ||
              "/placeholder.svg?height=40&width=40",
          }));
          setShowQRModal(false);
        } else {
          // Still generating, try again in 2 seconds
          setTimeout(fetchQRCode, 2000);
        }
      } else {
        setWhatsappConnection((prev) => ({
          ...prev,
          error: data.error || "Failed to generate QR code",
          isConnecting: false,
        }));
      }
    } catch (error) {
      setWhatsappConnection((prev) => ({
        ...prev,
        error: "Network error: " + error.message,
        isConnecting: false,
      }));
    }
  }, []);

  // Function to check connection status
  const checkConnectionStatus = useCallback(async () => {
    try {
      const response = await fetch(`${WHATSAPP_API_URL}/status/${shopData.id}`);
      const data = await response.json();

      if (data.success && data.data?.isReady) {
        setWhatsappConnection((prev) => ({
          ...prev,
          isConnected: true,
          isConnecting: false,
          qrCode: null,
          accountName:
            data.data?.session?.meta_data?.pushname || "WhatsApp Business",
          phoneNumber:
            `+${data.data?.session?.meta_data?.phone_number}` ||
            "+92 XXX XXXXXXX",
          profilePicture:
            data.data?.session?.meta_data?.profile_picture_url ||
            "/placeholder.svg?height=40&width=40",
        }));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error checking status:", error);
      return false;
    }
  }, []);

  // Function to disconnect WhatsApp
  const disconnectWhatsApp = useCallback(async () => {
    try {
      // const response = await fetch("/app/whatsapp/disconnect", {
      //   method: "POST",
      // });

      // send storeId to backend using POST in data

      const response = await fetch(
        `${WHATSAPP_API_URL}/disconnect/${shopData.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ storeId: shopData.id }),
        },
      );

      const data = await response.json();

      if (data.success) {
        setWhatsappConnection({
          isConnected: false,
          isConnecting: false,
          qrCode: null,
          error: null,
          accountName: null,
          phoneNumber: null,
          profilePicture: null,
        });
        setNotifications((prev) => ({ ...prev, whatsappEnabled: false }));
      } else {
        setWhatsappConnection((prev) => ({
          ...prev,
          error: data.error || "Failed to disconnect WhatsApp",
        }));
      }
    } catch (error) {
      setWhatsappConnection((prev) => ({
        ...prev,
        error: "Network error: " + error.message,
      }));
    }
  }, []);

  // Effect to handle modal opening
  useEffect(() => {
    if (showQRModal) {
      // First check if already connected
      checkConnectionStatus().then((isConnected) => {
        if (!isConnected) {
          fetchQRCode();
        }
      });
    }
  }, [showQRModal, checkConnectionStatus, fetchQRCode]);

  // Poll for connection status when QR is shown
  useEffect(() => {
    let interval;

    if (
      showQRModal &&
      whatsappConnection.qrCode &&
      !whatsappConnection.isConnected
    ) {
      interval = setInterval(async () => {
        const isConnected = await checkConnectionStatus();
        if (isConnected) {
          // Close modal after successful connection
          setTimeout(() => {
            setShowQRModal(false);
          }, 2000);
        }
      }, 3000); // Check every 3 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    showQRModal,
    whatsappConnection.qrCode,
    whatsappConnection.isConnected,
    checkConnectionStatus,
  ]);

  // Check connection status on component mount
  useEffect(() => {
    checkConnectionStatus();
  }, [checkConnectionStatus]);

  const [credentials, setCredentials] = useState({
    tcs: {
      requiredData: {
        apiKey: "",
        apiPassword: "",
      },
      enabled: false,
      courierCode: "TCS",
      logo: "🚚",
      color: "#dc2626",
      name: "TCS Express",
      description: "Pakistan's leading courier service",
    },
    leopards: {
      requiredData: {
        apiKey: "",
        apiPassword: "",
      },
      enabled: false,
      courierCode: "LCS",
      logo: "🐆",
      color: "#ea580c",
      name: "Leopards Courier",
      description: "Fast and reliable delivery nationwide",
    },
    mnp: {
      requiredData: {
        apiKey: "",
        apiPassword: "",
      },
      enabled: false,
      courierCode: "MNP",
      logo: "📦",
      color: "#2563eb",
      name: "M&P Express",
      description: "Express delivery solutions",
    },
    postex: {
      requiredData: {
        apiKey: "",
        apiPassword: "",
      },
      enabled: false,
      courierCode: "PTX",
      logo: "✉️",
      color: "#16a34a",
      name: "Postex Pakistan",
      description: "Comprehensive logistics network",
    },
  });

  useEffect(() => {
    console.log("cred:", credentials);
  }, [credentials]);

  useEffect(() => {
    // reset errorMessage to = "" after 5 seconds
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage]);

  const [notifications, setNotifications] = useState({
    whatsappEnabled: false,
    emailEnabled: true,
    whatsappTemplate: `Hi ${customerName}, your order ${orderNumber} is now ${status}. Track: ${trackingUrl}`,
    emailTemplate: `Dear ${customerName},\n\nYour order ${orderNumber} status has been updated to: ${status}\n\nYou can track your package here: ${trackingUrl}\n\nThank you for your business!`,
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showApiKeys, setShowApiKeys] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedCouriers, setExpandedCouriers] = useState({});
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showCourierModal, setShowCourierModal] = useState(false);
  const [selectedCourier, setSelectedCourier] = useState("");

  const handleCredentialChange = useCallback((courier, field, value) => {
    // setCredentials((prev) => ({
    //   ...prev,
    //   [courier]: {
    //     ...prev[courier],
    //     [field]: value,
    //   },
    // }));

    setCredentials((prev) => {
      const updatedCourier = {
        ...prev[courier],
        requiredData: {
          ...prev[courier].requiredData,
          [field]: value,
        },
      };
      return {
        ...prev,
        [courier]: updatedCourier,
      };
    });
  }, []);

  const handleNotificationChange = useCallback((field, value) => {
    setNotifications((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleConnectWhatsApp = useCallback(async () => {
    setShowQRModal(true);
    // Remove the old mock logic - let the real API logic handle everything
  }, []);

  const handleDisconnectWhatsApp = useCallback(() => {
    disconnectWhatsApp();
  }, [disconnectWhatsApp]);

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  }, []);

  const handleCourierSave = async (courierName) => {
    setIsSaving(true);

    // Prepare data to save

    const courierData = credentials[courierName].requiredData;
    const courierCode = credentials[courierName].courierCode;
    const storeID = shopData.id;

    console.log("Saving courier settings:", courierData);

    let res;
    try {
      res = await fetch("/api/couriers/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meta_data: courierData,
          courierCode: courierCode,
          storeID: storeID,
        }),
      });
      res = await res.json();
      if (!res.data.success) {
        setErrorMessage(res.data.message || "Failed to save courier settings");
      }
    } catch (error) {
      console.error("Error saving courier settings:", error);
      setIsSaving(false);
      setSaveSuccess(false);
      setErrorMessage(error.message || "Failed to save courier settings");
      return;
    }

    console.log("Res:", res);

    // Reset the credentials for the courier
    


    setIsSaving(false);
  };

  const toggleApiKeyVisibility = (courier) => {
    setShowApiKeys((prev) => ({
      ...prev,
      [courier]: !prev[courier],
    }));
  };

  const toggleCourierExpanded = (courier) => {
    setExpandedCouriers((prev) => ({
      ...prev,
      [courier]: !prev[courier],
    }));
  };

  const enabledCouriers = Object.entries(credentials).filter(
    ([_, config]) => config.enabled,
  ).length;
  const totalNotifications =
    (notifications.whatsappEnabled ? 1 : 0) +
    (notifications.emailEnabled ? 1 : 0);

  const tabs = [
    {
      id: "overview",
      content: "Overview",
      accessibilityLabel: "Overview tab",
      panelID: "overview-panel",
    },
    {
      id: "couriers",
      content: "Courier APIs",
      accessibilityLabel: "Courier APIs tab",
      panelID: "couriers-panel",
    },
    {
      id: "whatsapp",
      content: "WhatsApp",
      accessibilityLabel: "WhatsApp tab",
      panelID: "whatsapp-panel",
    },
    {
      id: "notifications",
      content: "Notifications",
      accessibilityLabel: "Notifications tab",
      panelID: "notifications-panel",
    },
  ];

  const openCourierModal = (courier) => {
    setSelectedCourier(courier);
    setShowCourierModal(true);
  };

  useEffect(() => {



    if (selectedTab === 1) {
    // Set all credentials enabled  to false
      setCredentials((prev) => {
        const updated = {};
        for (const key in prev) {
          updated[key] = {
            ...prev[key],
            enabled: false, // Reset all to false
          };
        }
        return updated;
      })

      const couriers = actions.getAllCouriers(shopData.id);
      setIsTabLoading(true);

      couriers.then((data) => {
        console.log("data: :V ", data);
        //   {
        //     "success": true,
        //     "response": {
        //         "success": true,
        //         "couriers": [],
        //         "method": "GET"
        //     }
        // }
        if (data.success) {
          couriersRef.current.style.opacity = "100%";
          couriersRef.current.style.pointerEvents = "auto";
          setConnectedCouriers(data.response.couriers);
        } else {
          console.error("Error fetching couriers:", data.message);
        }
        setIsTabLoading(false);
      });
    }
  }, [selectedTab]);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        minHeight: "100vh",
      }}
    >
      <Page
        title="Settings"
        subtitle="Configure courier integrations and customer notification preferences"
        titleMetadata={<Badge tone="info">Pro Plan</Badge>}
        primaryAction={{
          content: isSaving ? "Saving..." : "Save All Settings",
          loading: isSaving,
          onAction: handleSave,
          icon: CheckIcon,
        }}
      >
        <BlockStack gap="600">
          {saveSuccess && (
            <Banner
              title="Settings saved successfully!"
              tone="success"
              onDismiss={() => setSaveSuccess(false)}
              icon={CheckIcon}
            >
              <Text as="p">
                Your delivery configuration has been updated and is now active.
              </Text>
            </Banner>
          )}

          {whatsappConnection.error && (
            <Banner
              title="WhatsApp Connection Error"
              tone="critical"
              onDismiss={() =>
                setWhatsappConnection((prev) => ({ ...prev, error: null }))
              }
              icon={AlertTriangleIcon}
            >
              <Text as="p">{whatsappConnection.error}</Text>
            </Banner>
          )}

          {/* Stats Overview */}
          <Card>
            <BlockStack gap="400">
              <InlineStack align="space-between">
                <Text variant="headingLg" as="h2">
                  System Overview
                </Text>
                <Icon source={SettingsIcon} tone="base" />
              </InlineStack>
              <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 2, lg: 2, xl: 2 }}>
                  <Card background="bg-surface-success-subdued">
                    <BlockStack gap="200">
                      <InlineStack align="space-between">
                        <Icon source={DeliveryFilledIcon} tone="success" />
                        <Text variant="headingXl" as="h3" tone="success">
                          {enabledCouriers}
                        </Text>
                      </InlineStack>
                      <Text variant="bodyMd" as="p">
                        Active Couriers
                      </Text>
                      <ProgressBar
                        progress={(enabledCouriers / 4) * 100}
                        tone="success"
                        size="small"
                      />
                    </BlockStack>
                  </Card>
                </Grid.Cell>

                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 2, lg: 2, xl: 2 }}>
                  <Card background="bg-surface-info-subdued">
                    <BlockStack gap="200">
                      <InlineStack align="space-between">
                        <Icon source={EmailIcon} tone="info" />
                        <Text variant="headingXl" as="h3" tone="info">
                          {totalNotifications}
                        </Text>
                      </InlineStack>
                      <Text variant="bodyMd" as="p">
                        Active Channels
                      </Text>
                      <ProgressBar
                        progress={(totalNotifications / 2) * 100}
                        tone="info"
                        size="small"
                      />
                    </BlockStack>
                  </Card>
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 2, lg: 2, xl: 2 }}>
                  <Card
                    background={
                      whatsappConnection.isConnected
                        ? "bg-surface-success-subdued"
                        : "bg-surface-subdued"
                    }
                  >
                    <BlockStack gap="200">
                      <InlineStack align="space-between">
                        <Icon
                          source={ChatIcon}
                          tone={
                            whatsappConnection.isConnected
                              ? "success"
                              : "subdued"
                          }
                        />
                        <Badge
                          tone={
                            whatsappConnection.isConnected
                              ? "success"
                              : "attention"
                          }
                        >
                          {whatsappConnection.isConnected
                            ? "Connected"
                            : "Offline"}
                        </Badge>
                      </InlineStack>
                      <Text variant="bodyMd" as="p">
                        WhatsApp Status
                      </Text>
                    </BlockStack>
                  </Card>
                </Grid.Cell>
              </Grid>
            </BlockStack>
          </Card>

          <Tabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab}>
            {/* Overview Tab */}
            {selectedTab === 0 && (
              <Card>
                <BlockStack gap="500">
                  <Text variant="headingMd" as="h3">
                    Quick Setup Guide
                  </Text>
                  <Grid>
                    <Grid.Cell
                      columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}
                    >
                      <Card sectioned>
                        <BlockStack gap="300">
                          <InlineStack align="space-between">
                            <Icon source={DeliveryFilledIcon} tone="base" />
                            <Badge
                              tone={
                                enabledCouriers > 0 ? "success" : "attention"
                              }
                            >
                              {enabledCouriers > 0 ? "Configured" : "Pending"}
                            </Badge>
                          </InlineStack>
                          <Text variant="headingMd" as="h4">
                            Courier Integration
                          </Text>
                          <Text variant="bodyMd" as="p" tone="subdued">
                            Connect with courier services to automate tracking
                          </Text>
                          <Button
                            onClick={() => setSelectedTab(1)}
                            variant={
                              enabledCouriers > 0 ? "secondary" : "primary"
                            }
                          >
                            {enabledCouriers > 0
                              ? "Manage Couriers"
                              : "Setup Couriers"}
                          </Button>
                        </BlockStack>
                      </Card>
                    </Grid.Cell>
                    <Grid.Cell
                      columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}
                    >
                      <Card sectioned>
                        <BlockStack gap="300">
                          <InlineStack align="space-between">
                            <Icon source={ChatIcon} tone="base" />
                            <Badge
                              tone={
                                whatsappConnection.isConnected
                                  ? "success"
                                  : "attention"
                              }
                            >
                              {whatsappConnection.isConnected
                                ? "Connected"
                                : "Not Connected"}
                            </Badge>
                          </InlineStack>
                          <Text variant="headingMd" as="h4">
                            WhatsApp Business
                          </Text>
                          <Text variant="bodyMd" as="p" tone="subdued">
                            Send automated notifications via WhatsApp
                          </Text>
                          <Button
                            onClick={() => setSelectedTab(2)}
                            variant={
                              whatsappConnection.isConnected
                                ? "secondary"
                                : "primary"
                            }
                          >
                            {whatsappConnection.isConnected
                              ? "Manage WhatsApp"
                              : "Connect WhatsApp"}
                          </Button>
                        </BlockStack>
                      </Card>
                    </Grid.Cell>
                    <Grid.Cell
                      columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}
                    >
                      <Card sectioned>
                        <BlockStack gap="300">
                          <InlineStack align="space-between">
                            <Icon source={NoteIcon} tone="base" />
                            <Badge
                              tone={
                                totalNotifications > 0 ? "success" : "attention"
                              }
                            >
                              {totalNotifications > 0 ? "Active" : "Inactive"}
                            </Badge>
                          </InlineStack>
                          <Text variant="headingMd" as="h4">
                            Notification Templates
                          </Text>
                          <Text variant="bodyMd" as="p" tone="subdued">
                            Customize customer notification messages
                          </Text>
                          <Button
                            onClick={() => setSelectedTab(3)}
                            variant={
                              totalNotifications > 0 ? "secondary" : "primary"
                            }
                          >
                            {totalNotifications > 0
                              ? "Edit Templates"
                              : "Setup Templates"}
                          </Button>
                        </BlockStack>
                      </Card>
                    </Grid.Cell>
                  </Grid>
                </BlockStack>
              </Card>
            )}

            {/* Courier APIs Tab */}
            {selectedTab === 1 && (
              <Card>
                <BlockStack gap="500">
                  <InlineStack align="space-between">
                    <BlockStack gap="200">
                      <Text variant="headingMd" as="h3">
                        Courier API Integration
                      </Text>
                      <Text variant="bodyMd" as="p" tone="subdued">
                        Connect with Pakistan's leading courier services for
                        automated tracking
                      </Text>
                    </BlockStack>
                    <Badge tone="info">{enabledCouriers}/4 Active</Badge>
                  </InlineStack>
                  <div
                    ref={couriersRef}
                    style={{
                      opacity: "50%",
                      animation: "ease-in-out",
                      transition: "opacity 0.3s",
                      pointerEvents: "none",
                      position: "relative",
                    }}
                  >
                    {isTabLoading && (
                      <div
                        style={{
                          // Make it appear on center
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Spinner
                          accessibilityLabel="Spinner example"
                          size="small"
                        />
                      </div>
                    )}

                    <Grid>
                      {Object.entries(credentials).map(([courier, config]) => (
                        <Grid.Cell
                          key={courier}
                          columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}
                        >
                          <Card
                            sectioned
                            background={
                              config.enabled
                                ? "bg-surface-success-subdued"
                                : undefined
                            }
                          >
                            <BlockStack gap="400">
                              <InlineStack align="space-between">
                                <InlineStack gap="300" align="center">
                                  <div
                                    style={{
                                      width: "48px",
                                      height: "48px",
                                      borderRadius: "8px",
                                      backgroundColor: config.color,
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      fontSize: "24px",
                                    }}
                                  >
                                    {config.logo}
                                  </div>
                                  <BlockStack gap="100">
                                    <Text variant="headingMd" as="h4">
                                      {config.name}
                                    </Text>
                                    <Text
                                      variant="bodyMd"
                                      as="p"
                                      tone="subdued"
                                    >
                                      {config.description}
                                    </Text>
                                  </BlockStack>
                                </InlineStack>
                                <InlineStack gap="200" align="center">
                                  {config.enabled && (
                                    <Badge tone="success" icon={CheckIcon}>
                                      Active
                                    </Badge>
                                  )}
                                  <Checkbox
                                    label=""
                                    checked={config.enabled}
                                    onChange={(value) => {
                                      setCredentials((prev) => {
                                        const updated = {};
                                        for (const key in prev) {
                                          updated[key] = {
                                            ...prev[key],
                                            enabled:
                                              key === courier ? value : false,
                                          };
                                        }
                                        return updated;
                                      });
                                    }}
                                  />
                                </InlineStack>
                              </InlineStack>
                              <Collapsible
                                open={config.enabled}
                                id={`${courier}-config`}
                                transition={{
                                  duration: "200ms",
                                  timingFunction: "ease-in-out",
                                }}
                              >
                                <BlockStack gap="400">
                                  <Divider />
                                  <InlineStack gap="200">
                                    {/* <Box width="100%">

                                    <TextField
                                      label="API Key"
                                      type={
                                        showApiKeys[courier]
                                          ? "text"
                                          : "password"
                                      }
                                      value={config.apiKey}
                                      onChange={(value) =>
                                        handleCredentialChange(
                                          courier,
                                          "apiKey",
                                          value,
                                        )
                                      }
                                      placeholder="Enter your API key"
                                      autoComplete="off"
                                      connectedRight={
                                        <Button
                                          icon={
                                            showApiKeys[courier]
                                              ? HideIcon
                                              : ViewIcon
                                          }
                                          onClick={() =>
                                            toggleApiKeyVisibility(courier)
                                          }
                                          accessibilityLabel="Toggle API key visibility"
                                        />
                                      }
                                    />
                                  </Box> */}
                                    {Object.entries(config.requiredData).map(
                                      ([field, value]) => {
                                        const displayField =
                                          field === "apiKey"
                                            ? "API Key"
                                            : field === "apiPassword"
                                              ? "API Password"
                                              : field;
                                        return (
                                          <Box width="100%" key={field}>
                                            <TextField
                                              disabled={isSaving}
                                              label={displayField}
                                              type="text"
                                              value={value}
                                              onChange={(value) =>
                                                handleCredentialChange(
                                                  courier,
                                                  field,
                                                  value,
                                                )
                                              }
                                              placeholder={`Enter your ${displayField}`}
                                              autoComplete="off"
                                            />
                                          </Box>
                                        );
                                      },
                                    )}
                                  </InlineStack>

                                  {errorMessage && (
                                    <InlineError
                                      message={errorMessage}
                                      fieldID={`${courier}-error`}
                                    />
                                  )}

                                  <InlineStack gap="200">
                                    <Button
                                      icon={ExternalIcon}
                                      onClick={() => openCourierModal(config)}
                                      variant="secondary"
                                      size="slim"
                                    >
                                      API Documentation
                                    </Button>
                                    <Tooltip
                                      content={`${isSaving ? "Saving..." : "Save Settings"}`}
                                    >
                                      <div
                                        style={{ display: "flex", gap: "10px" }}
                                      >
                                        <Button
                                          disabled={
                                            isSaving ||
                                            Object.values(
                                              config.requiredData,
                                            ).some((value) => !value.trim())
                                          }
                                          onClick={() =>
                                            handleCourierSave(courier)
                                          }
                                          variant="primary"
                                          size="slim"
                                        >
                                          Save
                                        </Button>
                                        {isSaving && (
                                          <div>
                                            <Spinner
                                              accessibilityLabel="Spinner example"
                                              size="small"
                                            />
                                          </div>
                                        )}
                                      </div>
                                    </Tooltip>
                                  </InlineStack>
                                </BlockStack>
                              </Collapsible>
                            </BlockStack>
                          </Card>
                        </Grid.Cell>
                      ))}
                    </Grid>
                  </div>
                </BlockStack>
              </Card>
            )}

            {/* WhatsApp Tab */}
            {selectedTab === 2 && (
              <Card>
                <BlockStack gap="500">
                  <InlineStack align="space-between">
                    <BlockStack gap="200">
                      <Text variant="headingMd" as="h3">
                        WhatsApp Business Integration
                      </Text>
                      <Text variant="bodyMd" as="p" tone="subdued">
                        Connect your WhatsApp Business account for automated
                        customer notifications
                      </Text>
                    </BlockStack>
                    <Icon source={ChatIcon} tone="base" />
                  </InlineStack>
                  {whatsappConnection.isConnected ? (
                    <Card sectioned background="bg-surface-success-subdued">
                      <BlockStack gap="400">
                        <InlineStack align="space-between">
                          <InlineStack gap="400" align="center">
                            <div
                              style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "16px",
                                overflow: "hidden",
                                border: "3px solid #00a047",
                                boxShadow: "0 4px 8px rgba(0, 160, 71, 0.2)",
                                flexShrink: 0,
                              }}
                            >
                              {/* <Avatar
                                source={whatsappConnection.profilePicture}
                                name={whatsappConnection.accountName}
                                shape="square"
                              /> */}
                              <img
                                src={whatsappConnection.profilePicture}
                                style={{
                                  height: "100%",
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                }}
                              />
                            </div>
                            <BlockStack gap="100">
                              <Text variant="headingMd" as="h4">
                                {whatsappConnection.accountName}
                              </Text>
                              <InlineStack gap="200" align="center">
                                <Icon source={MobileIcon} tone="subdued" />
                                <Text variant="bodyMd" as="p" tone="subdued">
                                  {whatsappConnection.phoneNumber}
                                </Text>
                              </InlineStack>
                              <InlineStack gap="200" align="center">
                                <div
                                  style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    backgroundColor: "#00a047",
                                  }}
                                />
                                <Badge tone="success">Connected</Badge>
                              </InlineStack>
                            </BlockStack>
                          </InlineStack>
                          <ButtonGroup>
                            <Button
                              icon={ExitIcon}
                              tone="critical"
                              onClick={handleDisconnectWhatsApp}
                            >
                              Disconnect
                            </Button>
                          </ButtonGroup>
                        </InlineStack>
                        <Banner tone="success" icon={CheckIcon}>
                          <Text as="p">
                            Your WhatsApp Business account is connected and
                            ready to send notifications to customers.
                          </Text>
                        </Banner>
                      </BlockStack>
                    </Card>
                  ) : (
                    <EmptyState
                      heading="Connect WhatsApp Business"
                      image="/placeholder.svg?height=200&width=200&text=WhatsApp"
                      action={{
                        content: whatsappConnection.isConnecting
                          ? "Connecting..."
                          : "Connect WhatsApp",
                        onAction: handleConnectWhatsApp,
                        icon: ConnectIcon,
                        loading: whatsappConnection.isConnecting,
                      }}
                    >
                      <Text as="p">
                        Scan the QR code with your WhatsApp Business app to
                        enable automated customer notifications and improve your
                        delivery communication.
                      </Text>
                    </EmptyState>
                  )}
                </BlockStack>
              </Card>
            )}

            {/* Notifications Tab */}
            {selectedTab === 3 && (
              <BlockStack gap="500">
                <Grid>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                    <Card>
                      <BlockStack gap="500">
                        <InlineStack align="space-between">
                          <Text variant="headingMd" as="h3">
                            Notification Channels
                          </Text>
                          <Badge tone="info">
                            {totalNotifications}/2 Active
                          </Badge>
                        </InlineStack>
                        <BlockStack gap="400">
                          <Card
                            sectioned
                            background={
                              notifications.whatsappEnabled
                                ? "bg-surface-success-subdued"
                                : undefined
                            }
                          >
                            <InlineStack align="space-between">
                              <InlineStack gap="300" align="center">
                                <Icon
                                  source={ChatIcon}
                                  tone={
                                    notifications.whatsappEnabled
                                      ? "success"
                                      : "subdued"
                                  }
                                />
                                <BlockStack gap="100">
                                  <Text
                                    variant="bodyLg"
                                    as="h4"
                                    fontWeight="semibold"
                                  >
                                    WhatsApp Notifications
                                  </Text>
                                  <Text variant="bodyMd" as="p" tone="subdued">
                                    {whatsappConnection.isConnected
                                      ? "Send instant updates via WhatsApp"
                                      : "Connect WhatsApp first to enable"}
                                  </Text>
                                </BlockStack>
                              </InlineStack>
                              <Checkbox
                                label=""
                                checked={notifications.whatsappEnabled}
                                onChange={(value) =>
                                  handleNotificationChange(
                                    "whatsappEnabled",
                                    value,
                                  )
                                }
                                disabled={!whatsappConnection.isConnected}
                              />
                            </InlineStack>
                          </Card>
                          <Card
                            sectioned
                            background={
                              notifications.emailEnabled
                                ? "bg-surface-success-subdued"
                                : undefined
                            }
                          >
                            <InlineStack align="space-between">
                              <InlineStack gap="300" align="center">
                                <Icon
                                  source={EmailIcon}
                                  tone={
                                    notifications.emailEnabled
                                      ? "success"
                                      : "subdued"
                                  }
                                />
                                <BlockStack gap="100">
                                  <Text
                                    variant="bodyLg"
                                    as="h4"
                                    fontWeight="semibold"
                                  >
                                    Email Notifications
                                  </Text>
                                  <Text variant="bodyMd" as="p" tone="subdued">
                                    Send detailed updates via email
                                  </Text>
                                </BlockStack>
                              </InlineStack>
                              <Checkbox
                                label=""
                                checked={notifications.emailEnabled}
                                onChange={(value) =>
                                  handleNotificationChange(
                                    "emailEnabled",
                                    value,
                                  )
                                }
                              />
                            </InlineStack>
                          </Card>
                        </BlockStack>
                      </BlockStack>
                    </Card>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                    <Card>
                      <BlockStack gap="500">
                        <InlineStack align="space-between">
                          <Text variant="headingMd" as="h3">
                            Message Templates
                          </Text>
                          <Button
                            icon={QuestionCircleIcon}
                            variant="tertiary"
                            onClick={() => setShowTemplateModal(true)}
                          >
                            Variables Guide
                          </Button>
                        </InlineStack>
                        <Banner tone="info" icon={NoteIcon}>
                          <Text as="p">
                            Use dynamic variables to personalize messages:{" "}
                            {customerName}, {orderNumber}, {status},{" "}
                            {trackingUrl}
                          </Text>
                        </Banner>
                        <BlockStack gap="400">
                          <TextField
                            label="WhatsApp Template"
                            value={notifications.whatsappTemplate}
                            onChange={(value) =>
                              handleNotificationChange(
                                "whatsappTemplate",
                                value,
                              )
                            }
                            multiline={3}
                            disabled={!notifications.whatsappEnabled}
                            helpText={
                              !notifications.whatsappEnabled
                                ? "Enable WhatsApp notifications to edit template"
                                : ""
                            }
                          />
                          <TextField
                            label="Email Template"
                            value={notifications.emailTemplate}
                            onChange={(value) =>
                              handleNotificationChange("emailTemplate", value)
                            }
                            multiline={6}
                            disabled={!notifications.emailEnabled}
                            helpText={
                              !notifications.emailEnabled
                                ? "Enable email notifications to edit template"
                                : ""
                            }
                          />
                        </BlockStack>
                      </BlockStack>
                    </Card>
                  </Grid.Cell>
                </Grid>
              </BlockStack>
            )}
          </Tabs>

          {/* QR Code Modal */}
          <Modal
            open={showQRModal}
            onClose={() => setShowQRModal(false)}
            title="Connect WhatsApp Business"
            primaryAction={{
              content: "Cancel",
              onAction: () => setShowQRModal(false),
            }}
            secondaryActions={[
              {
                content: "Refresh QR Code",
                onAction: fetchQRCode,
                disabled: whatsappConnection.isConnecting,
              },
            ]}
          >
            <Modal.Section>
              <BlockStack gap="500" align="center">
                <Text variant="bodyMd" as="p" alignment="center">
                  Scan this QR code with your WhatsApp Business app to connect
                  your account
                </Text>

                {whatsappConnection.isConnecting ? (
                  <BlockStack gap="400" align="center">
                    <Spinner size="large" />
                    <Text
                      variant="bodyMd"
                      as="p"
                      tone="subdued"
                      alignment="center"
                    >
                      Generating QR code...
                    </Text>
                  </BlockStack>
                ) : whatsappConnection.error ? (
                  <BlockStack gap="400" align="center">
                    <Banner tone="critical" icon={AlertTriangleIcon}>
                      <Text as="p">{whatsappConnection.error}</Text>
                    </Banner>
                    <Button onClick={fetchQRCode} variant="primary">
                      Try Again
                    </Button>
                  </BlockStack>
                ) : whatsappConnection.isConnected ? (
                  <BlockStack gap="400" align="center">
                    <Icon source={CheckIcon} tone="success" />
                    <Banner tone="success" icon={CheckIcon}>
                      <Text as="p">
                        WhatsApp connected successfully! This window will close
                        automatically.
                      </Text>
                    </Banner>
                  </BlockStack>
                ) : whatsappConnection.qrCode ? (
                  <BlockStack gap="500" align="center">
                    <Card sectioned>
                      <img
                        src={whatsappConnection.qrCode || "/placeholder.svg"}
                        alt="WhatsApp QR Code"
                        style={{
                          width: "200px",
                          height: "200px",
                          display: "block",
                        }}
                      />
                    </Card>
                    <BlockStack gap="300">
                      <Text
                        variant="bodyMd"
                        as="p"
                        alignment="center"
                        fontWeight="semibold"
                      >
                        Setup Instructions:
                      </Text>
                      <BlockStack gap="200">
                        <InlineStack gap="200" align="start">
                          <Badge>1</Badge>
                          <Text variant="bodyMd" as="p">
                            Open WhatsApp Business on your phone
                          </Text>
                        </InlineStack>
                        <InlineStack gap="200" align="start">
                          <Badge>2</Badge>
                          <Text variant="bodyMd" as="p">
                            Go to Settings → Linked Devices
                          </Text>
                        </InlineStack>
                        <InlineStack gap="200" align="start">
                          <Badge>3</Badge>
                          <Text variant="bodyMd" as="p">
                            Tap "Link a Device" and scan this code
                          </Text>
                        </InlineStack>
                      </BlockStack>
                    </BlockStack>
                    <Banner tone="info">
                      <Text as="p">
                        Connection will be established automatically once you
                        scan the QR code. This page will refresh every 3 seconds
                        to check for connection.
                      </Text>
                    </Banner>
                  </BlockStack>
                ) : null}
              </BlockStack>
            </Modal.Section>
          </Modal>

          {/* Template Variables Modal */}
          <Modal
            open={showTemplateModal}
            onClose={() => setShowTemplateModal(false)}
            title="Template Variables Guide"
            primaryAction={{
              content: "Got it",
              onAction: () => setShowTemplateModal(false),
            }}
          >
            <Modal.Section>
              <BlockStack gap="400">
                <Text variant="bodyMd" as="p">
                  Use these dynamic variables in your notification templates to
                  personalize messages:
                </Text>
                <Card sectioned>
                  <BlockStack gap="300">
                    <InlineStack gap="200">
                      <Badge>{customerName}</Badge>
                      <Text variant="bodyMd" as="p">
                        Customer's full name
                      </Text>
                    </InlineStack>
                    <InlineStack gap="200">
                      <Badge>{orderNumber}</Badge>
                      <Text variant="bodyMd" as="p">
                        Order reference number
                      </Text>
                    </InlineStack>
                    <InlineStack gap="200">
                      <Badge>{status}</Badge>
                      <Text variant="bodyMd" as="p">
                        Current delivery status
                      </Text>
                    </InlineStack>
                    <InlineStack gap="200">
                      <Badge>{trackingUrl}</Badge>
                      <Text variant="bodyMd" as="p">
                        Live tracking link
                      </Text>
                    </InlineStack>
                  </BlockStack>
                </Card>
                <Banner tone="info">
                  <Text as="p">
                    Variables will be automatically replaced with actual values
                    when notifications are sent to customers.
                  </Text>
                </Banner>
              </BlockStack>
            </Modal.Section>
          </Modal>

          {/* Courier Documentation Modal */}
          <Modal
            open={showCourierModal}
            onClose={() => setShowCourierModal(false)}
            title={`${selectedCourier ? credentials[selectedCourier]?.name : ""} API Setup`}
            primaryAction={{
              content: "Close",
              onAction: () => setShowCourierModal(false),
            }}
            secondaryActions={[
              {
                content: "Visit Documentation",
                icon: ExternalIcon,
                onAction: () => {
                  // Open external documentation
                },
              },
            ]}
          >
            <Modal.Section>
              <BlockStack gap="400">
                <Text variant="bodyMd" as="p">
                  Follow these steps to get your API key from{" "}
                  {selectedCourier ? credentials[selectedCourier]?.name : ""}:
                </Text>
                <Card sectioned>
                  <BlockStack gap="300">
                    <InlineStack gap="200">
                      <Badge>1</Badge>
                      <Text variant="bodyMd" as="p">
                        Visit the courier's developer portal
                      </Text>
                    </InlineStack>
                    <InlineStack gap="200">
                      <Badge>2</Badge>
                      <Text variant="bodyMd" as="p">
                        Create a developer account or sign in
                      </Text>
                    </InlineStack>
                    <InlineStack gap="200">
                      <Badge>3</Badge>
                      <Text variant="bodyMd" as="p">
                        Generate a new API key for your application
                      </Text>
                    </InlineStack>
                    <InlineStack gap="200">
                      <Badge>4</Badge>
                      <Text variant="bodyMd" as="p">
                        Copy the API key and paste it in the settings
                      </Text>
                    </InlineStack>
                  </BlockStack>
                </Card>
                <Banner tone="warning">
                  <Text as="p">
                    Keep your API keys secure and never share them publicly.
                  </Text>
                </Banner>
              </BlockStack>
            </Modal.Section>
          </Modal>
        </BlockStack>
      </Page>
    </div>
  );
}
