import Link from "next/link";

export const metadata = {
  title: "My Account | The Boompie",
  description: "Sign in to your The Boompie customer account.",
};

export default function AccountPage() {
  // Shopify's hosted customer accounts handle authentication securely.
  // Set this to the Customer accounts URL shown in Shopify Admin.
  const accountUrl = process.env.SHOPIFY_CUSTOMER_ACCOUNT_URL;
  const validAccountUrl =
    accountUrl && /^https:\/\//i.test(accountUrl) ? accountUrl : null;

  return (
    <main className="min-h-[70vh] bg-[#fffaf0] px-5 py-16 text-[#25202a]">
      <div className="mx-auto max-w-xl rounded-3xl border border-[#e8ddec] bg-white p-8 text-center shadow-sm md:p-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#6b329a]">
          The Boompie
        </p>
        <h1 className="text-4xl font-black tracking-tight">My Account</h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sign in to view your orders and manage your customer account.
        </p>
        {validAccountUrl ? (
          <a
            href={validAccountUrl}
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#6b329a] px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
          >
            Sign in or create an account
          </a>
        ) : (
          <div className="mt-8 rounded-xl bg-[#f6effa] p-5 text-left text-sm text-[#4a305e]">
            Customer sign-in is not configured yet. Add your Shopify customer
            account URL as <code className="font-semibold">SHOPIFY_CUSTOMER_ACCOUNT_URL</code> in
            your environment settings.
          </div>
        )}
        <Link href="/" className="mt-7 inline-block text-sm font-semibold text-[#6b329a] underline underline-offset-4">
          Continue shopping
        </Link>
      </div>
    </main>
  );
}
