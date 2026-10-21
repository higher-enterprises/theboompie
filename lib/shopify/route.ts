import { NextResponse } from "next/server";

export const runtime = "nodejs";

const API_VERSION = "2025-10";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type GraphQLResult<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

async function adminGraphQL<T>(query: string, variables: Record<string, unknown>): Promise<T> {
  const domain = process.env.SHOPIFY_STORE_DOMAIN?.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const token = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
  if (!domain || !token) throw new Error("Shopify newsletter integration is not configured.");

  const response = await fetch(`https://${domain}/admin/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Shopify-Access-Token": token },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  const result = (await response.json()) as GraphQLResult<T>;
  if (!response.ok || result.errors?.length || !result.data) {
    console.error("Shopify newsletter API error", response.status, result.errors);
    throw new Error("Shopify could not process the subscription.");
  }
  return result.data;
}

const CONSENT = { marketingState: "SUBSCRIBED", marketingOptInLevel: "SINGLE_OPT_IN" };

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    // Existing customers should receive an updated email-marketing consent record.
    const existing = await adminGraphQL<{
      customers: { nodes: Array<{ id: string; email: string | null }> };
    }>(`query NewsletterCustomer($query: String!) {
      customers(first: 10, query: $query) { nodes { id email } }
    }`, { query: `email:${email}` });
    const customer = existing.customers.nodes.find((item) => item.email?.toLowerCase() === email);

    if (customer) {
      const updated = await adminGraphQL<{
        customerEmailMarketingConsentUpdate: { userErrors: Array<{ message: string }> };
      }>(`mutation UpdateNewsletterConsent($input: CustomerEmailMarketingConsentUpdateInput!) {
        customerEmailMarketingConsentUpdate(input: $input) { userErrors { message } }
      }`, { input: { customerId: customer.id, emailMarketingConsent: CONSENT } });
      if (updated.customerEmailMarketingConsentUpdate.userErrors.length) {
        throw new Error("Unable to update email marketing consent.");
      }
    } else {
      const created = await adminGraphQL<{
        customerCreate: { customer: { id: string } | null; userErrors: Array<{ message: string }> };
      }>(`mutation CreateNewsletterCustomer($input: CustomerInput!) {
        customerCreate(input: $input) { customer { id } userErrors { message } }
      }`, { input: { email, emailMarketingConsent: CONSENT } });
      if (!created.customerCreate.customer || created.customerCreate.userErrors.length) {
        throw new Error("Unable to save email subscription.");
      }
    }
    return NextResponse.json({ message: "You're in! Welcome to the Joy Club!" });
  } catch (error) {
    console.error("Newsletter signup error", error);
    return NextResponse.json({ message: "We couldn't complete your signup right now. Please try again." }, { status: 503 });
  }
}
