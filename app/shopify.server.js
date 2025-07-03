import "@shopify/shopify-app-remix/adapters/node";

import {
  ApiVersion,
  AppDistribution,
  shopifyApp,
} from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";

import prisma from "./db.server";
import fetchShopDataGraphQL from "./routes/utils/fetchShopDataGraphQL";

const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: ApiVersion.January25,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new PrismaSessionStorage(prisma),
  distribution: AppDistribution.AppStore,
  future: {
    unstable_newEmbeddedAuthStrategy: true,
    removeRest: true,
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify.registerWebhooks({ session });
      const shop = session.shop;
      try {
        console.log(`Shop ${session.shop} data stored successfully`);

        const shopData = await fetchShopDataGraphQL(session);

        const store = await prisma.stores.findFirst({
          where: { shopify_domain: session.shop },
          select: { id: true },
        });

        await prisma.stores.upsert({
          where: {
            id: store?.id ?? -1, // Use nullish coalescing to handle null or undefined values
          },
          update: {
            shopify_domain: shop,
            meta_data: shopData,
            store_name: shopData?.name || "", // Default store name to empty string if not provided
            email: shopData?.email || "", // Default email to empty string if not provided
          },
          create: {
            shopify_domain: shop,
            email: shopData?.email || "", // Default email to empty string if not provided
            meta_data: shopData,
            store_name: shopData?.name || "", // Default store name to empty string if not provided
          },
        });
      } catch (error) {
        console.error("Error storing shop data:", error);
      }
    },
  },
  ...(process.env.SHOP_CUSTOM_DOMAIN
    ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
    : {}),
});

export default shopify;
export const apiVersion = ApiVersion.January25;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate = shopify.authenticate;
export const unauthenticated = shopify.unauthenticated;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
export const sessionStorage = shopify.sessionStorage;
