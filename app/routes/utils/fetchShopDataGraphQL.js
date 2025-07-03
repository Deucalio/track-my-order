export default async function fetchShopDataWithSession(session) {
  try {
    const response = await fetch(
      `https://${session.shop}/admin/api/2025-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "X-Shopify-Access-Token": session.accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `#graphql
          query getShop {
            shop {
              id
              name
              shopOwnerName
              email
              description
              currencyCode
              weightUnit
              primaryDomain {
                host
                url
              }
              plan {
                displayName
                partnerDevelopment
                shopifyPlus
              }
              createdAt
              updatedAt
              billingAddress {
                address1
                address2
                city
                company
                country
                countryCodeV2
                phone
                province
                provinceCode
                zip
              }
            }
          }`,
        }),
      },
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch shop data: ${response.status} ${response.statusText}`,
      );
      return null;
    }

    const data = await response.json();
    console.log("GraphQL response data:", data);

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      return null;
    }

    const shop = data.data.shop;
    console.log("Successfully fetched shop data:", shop.name);

    return shop;
  } catch (error) {
    console.error("Error fetching shop data via GraphQL:", error);
    return null;
  }
}
