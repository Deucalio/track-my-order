"use client"

import { useState, useCallback, useEffect } from "react"

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
  Collapsible,
} from "@shopify/polaris"

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
} from "@shopify/polaris-icons"

const customerName = "{{customerName}}"
const orderNumber = "{{orderNumber}}"
const trackingUrl = "{{trackingUrl}}"
const status = "{{status}}"

export default function Settings() {
  const [showQRModal, setShowQRModal] = useState(false)
  const [whatsappConnection, setWhatsappConnection] = useState({
    isConnecting: false,
    isConnected: false,
    qrCode: null,
    error: null,
    accountName: null,
    phoneNumber: null,
    profilePicture: null,
  })

  // Function to fetch QR code
  const fetchQRCode = useCallback(async () => {
    setWhatsappConnection((prev) => ({
      ...prev,
      isConnecting: true,
      error: null,
      qrCode: null,
    }))

    try {
      const response = await fetch("/app/whatsapp/qr")
      const data = await response.json()

      if (data.success) {
        if (data.qrCode) {
          setWhatsappConnection((prev) => ({
            ...prev,
            qrCode: data.qrCode,
            isConnecting: false,
            isConnected: false,
          }))
        } else if (data.status?.isReady) {
          // Already connected
          setWhatsappConnection((prev) => ({
            ...prev,
            isConnected: true,
            isConnecting: false,
            qrCode: null,
            accountName: data.status.accountName || "WhatsApp Business",
            phoneNumber: data.status.phoneNumber || "+92 XXX XXXXXXX",
            profilePicture: data.status.profilePicture || "/placeholder.svg?height=40&width=40",
          }))
          setShowQRModal(false)
        } else {
          // Still generating, try again in 2 seconds
          setTimeout(fetchQRCode, 2000)
        }
      } else {
        setWhatsappConnection((prev) => ({
          ...prev,
          error: data.error || "Failed to generate QR code",
          isConnecting: false,
        }))
      }
    } catch (error) {
      setWhatsappConnection((prev) => ({
        ...prev,
        error: "Network error: " + error.message,
        isConnecting: false,
      }))
    }
  }, [])

  // Function to check connection status
  const checkConnectionStatus = useCallback(async () => {
    try {
      const response = await fetch("/app/whatsapp/status")
      const data = await response.json()

      if (data.success && data.status?.isReady) {
        setWhatsappConnection((prev) => ({
          ...prev,
          isConnected: true,
          isConnecting: false,
          qrCode: null,
          accountName: data.status.accountName || "WhatsApp Business",
          phoneNumber: data.status.phoneNumber || "+92 XXX XXXXXXX",
          profilePicture: data.status.profilePicture || "/placeholder.svg?height=40&width=40",
        }))
        return true
      }
      return false
    } catch (error) {
      console.error("Error checking status:", error)
      return false
    }
  }, [])

  // Function to disconnect WhatsApp
  const disconnectWhatsApp = useCallback(async () => {
    try {
      const response = await fetch("/app/whatsapp/disconnect", {
        method: "POST",
      })
      const data = await response.json()

      if (data.success) {
        setWhatsappConnection({
          isConnected: false,
          isConnecting: false,
          qrCode: null,
          error: null,
          accountName: null,
          phoneNumber: null,
          profilePicture: null,
        })
        setNotifications((prev) => ({ ...prev, whatsappEnabled: false }))
      } else {
        setWhatsappConnection((prev) => ({
          ...prev,
          error: data.error || "Failed to disconnect WhatsApp",
        }))
      }
    } catch (error) {
      setWhatsappConnection((prev) => ({
        ...prev,
        error: "Network error: " + error.message,
      }))
    }
  }, [])

  // Effect to handle modal opening
  useEffect(() => {
    if (showQRModal) {
      // First check if already connected
      checkConnectionStatus().then((isConnected) => {
        if (!isConnected) {
          fetchQRCode()
        }
      })
    }
  }, [showQRModal, checkConnectionStatus, fetchQRCode])

  // Poll for connection status when QR is shown
  useEffect(() => {
    let interval

    if (showQRModal && whatsappConnection.qrCode && !whatsappConnection.isConnected) {
      interval = setInterval(async () => {
        const isConnected = await checkConnectionStatus()
        if (isConnected) {
          // Close modal after successful connection
          setTimeout(() => {
            setShowQRModal(false)
          }, 2000)
        }
      }, 3000) // Check every 3 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [showQRModal, whatsappConnection.qrCode, whatsappConnection.isConnected, checkConnectionStatus])

  // Check connection status on component mount
  useEffect(() => {
    checkConnectionStatus()
  }, [checkConnectionStatus])

  const [credentials, setCredentials] = useState({
    tcs: {
      apiKey: "",
      enabled: false,
      logo: "🚚",
      color: "#dc2626",
      name: "TCS Express",
      description: "Pakistan's leading courier service",
    },
    leopards: {
      apiKey: "",
      enabled: false,
      logo: "🐆",
      color: "#ea580c",
      name: "Leopards Courier",
      description: "Fast and reliable delivery nationwide",
    },
    mnp: {
      apiKey: "",
      enabled: false,
      logo: "📦",
      color: "#2563eb",
      name: "M&P Express",
      description: "Express delivery solutions",
    },
    postex: {
      apiKey: "",
      enabled: false,
      logo: "✉️",
      color: "#16a34a",
      name: "Postex Pakistan",
      description: "Comprehensive logistics network",
    },
  })

  const [notifications, setNotifications] = useState({
    whatsappEnabled: false,
    emailEnabled: true,
    whatsappTemplate: `Hi ${customerName}, your order ${orderNumber} is now ${status}. Track: ${trackingUrl}`,
    emailTemplate: `Dear ${customerName},\n\nYour order ${orderNumber} status has been updated to: ${status}\n\nYou can track your package here: ${trackingUrl}\n\nThank you for your business!`,
  })

  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [showApiKeys, setShowApiKeys] = useState({})
  const [selectedTab, setSelectedTab] = useState(0)
  const [expandedCouriers, setExpandedCouriers] = useState({})
  const [showTemplateModal, setShowTemplateModal] = useState(false)
  const [showCourierModal, setShowCourierModal] = useState(false)
  const [selectedCourier, setSelectedCourier] = useState("")

  const handleCredentialChange = useCallback((courier, field, value) => {
    setCredentials((prev) => ({
      ...prev,
      [courier]: {
        ...prev[courier],
        [field]: value,
      },
    }))
  }, [])

  const handleNotificationChange = useCallback((field, value) => {
    setNotifications((prev) => ({
      ...prev,
      [field]: value,
    }))
  }, [])

  const handleConnectWhatsApp = useCallback(async () => {
    setShowQRModal(true)
    // Remove the old mock logic - let the real API logic handle everything
  }, [])

  const handleDisconnectWhatsApp = useCallback(() => {
    disconnectWhatsApp()
  }, [disconnectWhatsApp])

  const handleSave = useCallback(async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }, [])

  const toggleApiKeyVisibility = (courier) => {
    setShowApiKeys((prev) => ({
      ...prev,
      [courier]: !prev[courier],
    }))
  }

  const toggleCourierExpanded = (courier) => {
    setExpandedCouriers((prev) => ({
      ...prev,
      [courier]: !prev[courier],
    }))
  }

  const enabledCouriers = Object.entries(credentials).filter(([_, config]) => config.enabled).length
  const totalNotifications = (notifications.whatsappEnabled ? 1 : 0) + (notifications.emailEnabled ? 1 : 0)

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
  ]

  const openCourierModal = (courier) => {
    setSelectedCourier(courier)
    setShowCourierModal(true)
  }

  return (
    <div style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", minHeight: "100vh" }}>
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
              <Text as="p">Your delivery configuration has been updated and is now active.</Text>
            </Banner>
          )}

          {whatsappConnection.error && (
            <Banner
              title="WhatsApp Connection Error"
              tone="critical"
              onDismiss={() => setWhatsappConnection((prev) => ({ ...prev, error: null }))}
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
                      <ProgressBar progress={(enabledCouriers / 4) * 100} tone="success" size="small" />
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
                      <ProgressBar progress={(totalNotifications / 2) * 100} tone="info" size="small" />
                    </BlockStack>
                  </Card>
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 2, lg: 2, xl: 2 }}>
                  <Card
                    background={whatsappConnection.isConnected ? "bg-surface-success-subdued" : "bg-surface-subdued"}
                  >
                    <BlockStack gap="200">
                      <InlineStack align="space-between">
                        <Icon source={ChatIcon} tone={whatsappConnection.isConnected ? "success" : "subdued"} />
                        <Badge tone={whatsappConnection.isConnected ? "success" : "attention"}>
                          {whatsappConnection.isConnected ? "Connected" : "Offline"}
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
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
                      <Card sectioned>
                        <BlockStack gap="300">
                          <InlineStack align="space-between">
                            <Icon source={DeliveryFilledIcon} tone="base" />
                            <Badge tone={enabledCouriers > 0 ? "success" : "attention"}>
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
                            variant={enabledCouriers > 0 ? "secondary" : "primary"}
                          >
                            {enabledCouriers > 0 ? "Manage Couriers" : "Setup Couriers"}
                          </Button>
                        </BlockStack>
                      </Card>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
                      <Card sectioned>
                        <BlockStack gap="300">
                          <InlineStack align="space-between">
                            <Icon source={ChatIcon} tone="base" />
                            <Badge tone={whatsappConnection.isConnected ? "success" : "attention"}>
                              {whatsappConnection.isConnected ? "Connected" : "Not Connected"}
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
                            variant={whatsappConnection.isConnected ? "secondary" : "primary"}
                          >
                            {whatsappConnection.isConnected ? "Manage WhatsApp" : "Connect WhatsApp"}
                          </Button>
                        </BlockStack>
                      </Card>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
                      <Card sectioned>
                        <BlockStack gap="300">
                          <InlineStack align="space-between">
                            <Icon source={NoteIcon} tone="base" />
                            <Badge tone={totalNotifications > 0 ? "success" : "attention"}>
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
                            variant={totalNotifications > 0 ? "secondary" : "primary"}
                          >
                            {totalNotifications > 0 ? "Edit Templates" : "Setup Templates"}
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
                        Connect with Pakistan's leading courier services for automated tracking
                      </Text>
                    </BlockStack>
                    <Badge tone="info">{enabledCouriers}/4 Active</Badge>
                  </InlineStack>
                  <Grid>
                    {Object.entries(credentials).map(([courier, config]) => (
                      <Grid.Cell key={courier} columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <Card sectioned background={config.enabled ? "bg-surface-success-subdued" : undefined}>
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
                                  <Text variant="bodyMd" as="p" tone="subdued">
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
                                  onChange={(value) => handleCredentialChange(courier, "enabled", value)}
                                />
                              </InlineStack>
                            </InlineStack>
                            <Collapsible
                              open={config.enabled}
                              id={`${courier}-config`}
                              transition={{ duration: "200ms", timingFunction: "ease-in-out" }}
                            >
                              <BlockStack gap="400">
                                <Divider />
                                <InlineStack gap="200">
                                  <Box width="100%">
                                    <TextField
                                      label="API Key"
                                      type={showApiKeys[courier] ? "text" : "password"}
                                      value={config.apiKey}
                                      onChange={(value) => handleCredentialChange(courier, "apiKey", value)}
                                      placeholder="Enter your API key"
                                      autoComplete="off"
                                      connectedRight={
                                        <Button
                                          icon={showApiKeys[courier] ? HideIcon : ViewIcon}
                                          onClick={() => toggleApiKeyVisibility(courier)}
                                          accessibilityLabel="Toggle API key visibility"
                                        />
                                      }
                                    />
                                  </Box>
                                </InlineStack>
                                <InlineStack gap="200">
                                  <Button
                                    icon={ExternalIcon}
                                    onClick={() => openCourierModal(courier)}
                                    variant="secondary"
                                    size="slim"
                                  >
                                    API Documentation
                                  </Button>
                                  <Tooltip content="Test your API connection">
                                    <Button icon={ConnectIcon} variant="secondary" size="slim">
                                      Test Connection
                                    </Button>
                                  </Tooltip>
                                </InlineStack>
                              </BlockStack>
                            </Collapsible>
                          </BlockStack>
                        </Card>
                      </Grid.Cell>
                    ))}
                  </Grid>
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
                        Connect your WhatsApp Business account for automated customer notifications
                      </Text>
                    </BlockStack>
                    <Icon source={ChatIcon} tone="base" />
                  </InlineStack>
                  {whatsappConnection.isConnected ? (
                    <Card sectioned background="bg-surface-success-subdued">
                      <BlockStack gap="400">
                        <InlineStack align="space-between">
                          <InlineStack gap="400" align="center">
                            <Avatar
                              source={whatsappConnection.profilePicture}
                              size="lg"
                              name={whatsappConnection.accountName}
                            />
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
                            <Button icon={ExitIcon} tone="critical" onClick={handleDisconnectWhatsApp}>
                              Disconnect
                            </Button>
                          </ButtonGroup>
                        </InlineStack>
                        <Banner tone="success" icon={CheckIcon}>
                          <Text as="p">
                            Your WhatsApp Business account is connected and ready to send notifications to customers.
                          </Text>
                        </Banner>
                      </BlockStack>
                    </Card>
                  ) : (
                    <EmptyState
                      heading="Connect WhatsApp Business"
                      image="/placeholder.svg?height=200&width=200&text=WhatsApp"
                      action={{
                        content: whatsappConnection.isConnecting ? "Connecting..." : "Connect WhatsApp",
                        onAction: handleConnectWhatsApp,
                        icon: ConnectIcon,
                        loading: whatsappConnection.isConnecting,
                      }}
                    >
                      <Text as="p">
                        Scan the QR code with your WhatsApp Business app to enable automated customer notifications and
                        improve your delivery communication.
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
                          <Badge tone="info">{totalNotifications}/2 Active</Badge>
                        </InlineStack>
                        <BlockStack gap="400">
                          <Card
                            sectioned
                            background={notifications.whatsappEnabled ? "bg-surface-success-subdued" : undefined}
                          >
                            <InlineStack align="space-between">
                              <InlineStack gap="300" align="center">
                                <Icon source={ChatIcon} tone={notifications.whatsappEnabled ? "success" : "subdued"} />
                                <BlockStack gap="100">
                                  <Text variant="bodyLg" as="h4" fontWeight="semibold">
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
                                onChange={(value) => handleNotificationChange("whatsappEnabled", value)}
                                disabled={!whatsappConnection.isConnected}
                              />
                            </InlineStack>
                          </Card>
                          <Card
                            sectioned
                            background={notifications.emailEnabled ? "bg-surface-success-subdued" : undefined}
                          >
                            <InlineStack align="space-between">
                              <InlineStack gap="300" align="center">
                                <Icon source={EmailIcon} tone={notifications.emailEnabled ? "success" : "subdued"} />
                                <BlockStack gap="100">
                                  <Text variant="bodyLg" as="h4" fontWeight="semibold">
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
                                onChange={(value) => handleNotificationChange("emailEnabled", value)}
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
                            Use dynamic variables to personalize messages: {customerName}, {orderNumber}, {status},{" "}
                            {trackingUrl}
                          </Text>
                        </Banner>
                        <BlockStack gap="400">
                          <TextField
                            label="WhatsApp Template"
                            value={notifications.whatsappTemplate}
                            onChange={(value) => handleNotificationChange("whatsappTemplate", value)}
                            multiline={3}
                            disabled={!notifications.whatsappEnabled}
                            helpText={
                              !notifications.whatsappEnabled ? "Enable WhatsApp notifications to edit template" : ""
                            }
                          />
                          <TextField
                            label="Email Template"
                            value={notifications.emailTemplate}
                            onChange={(value) => handleNotificationChange("emailTemplate", value)}
                            multiline={6}
                            disabled={!notifications.emailEnabled}
                            helpText={!notifications.emailEnabled ? "Enable email notifications to edit template" : ""}
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
                  Scan this QR code with your WhatsApp Business app to connect your account
                </Text>

                {whatsappConnection.isConnecting ? (
                  <BlockStack gap="400" align="center">
                    <Spinner size="large" />
                    <Text variant="bodyMd" as="p" tone="subdued" alignment="center">
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
                      <Text as="p">WhatsApp connected successfully! This window will close automatically.</Text>
                    </Banner>
                  </BlockStack>
                ) : whatsappConnection.qrCode ? (
                  <BlockStack gap="500" align="center">
                    <Card sectioned>
                      <img
                        src={whatsappConnection.qrCode || "/placeholder.svg"}
                        alt="WhatsApp QR Code"
                        style={{ width: "200px", height: "200px", display: "block" }}
                      />
                    </Card>
                    <BlockStack gap="300">
                      <Text variant="bodyMd" as="p" alignment="center" fontWeight="semibold">
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
                        Connection will be established automatically once you scan the QR code. This page will refresh
                        every 3 seconds to check for connection.
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
                  Use these dynamic variables in your notification templates to personalize messages:
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
                    Variables will be automatically replaced with actual values when notifications are sent to
                    customers.
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
                  <Text as="p">Keep your API keys secure and never share them publicly.</Text>
                </Banner>
              </BlockStack>
            </Modal.Section>
          </Modal>
        </BlockStack>
      </Page>
    </div>
  )
}
