import Link from 'next/link';

export const metadata = { title: 'Track My Order | The Boompie' };

export default function TrackOrderPage() {
  const accountUrl = process.env.SHOPIFY_CUSTOMER_ACCOUNT_URL || process.env.NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_URL;
  return (
    <main className="mx-auto max-w-3xl px-5 py-14 md:py-20">
      <h1 className="text-3xl font-bold md:text-4xl">Track My Order</h1>
      <p className="mt-6 leading-8">Once your order ships, your shipping confirmation email will include a tracking link when tracking is available. Open that link to see updates directly from the delivery carrier.</p>
      <h2 className="mt-9 text-xl font-semibold">Find your order</h2>
      <p className="mt-3 leading-8">You can also review your purchases through your customer account. Order details and tracking information depend on the status of each shipment.</p>
      <p className="mt-5"><a className="font-semibold underline underline-offset-4" href={accountUrl && accountUrl.startsWith('https://') ? accountUrl : '/account'}>View My Account</a></p>
      <h2 className="mt-9 text-xl font-semibold">Need help?</h2>
      <p className="mt-3 leading-8">If you cannot locate your shipping confirmation or have a question about an order, <Link className="underline underline-offset-4" href="/pages/contact">contact us</Link> and include your order number.</p>
    </main>
  );
}
