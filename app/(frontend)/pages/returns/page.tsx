import Link from 'next/link';
export const metadata = { title: 'Return Center' + ' | The Boompie', description: 'Help with returns, order concerns, and items that arrive differently than described.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Return Center</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">Help with returns, order concerns, and items that arrive differently than described.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Before you request a return</h2>
          <p className="mt-3 text-[15px] leading-8">Every pre-loved item has its own condition and history. Review the product description, photographs, and our <a href="/policies/refund-policy" className="underline">Return Policy</a> before requesting a return. Eligibility depends on the circumstances of your order and any terms presented at purchase.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Start a return request</h2>
          <p className="mt-3 text-[15px] leading-8">If your order is eligible for self-service returns through your Shopify customer account, sign in using <a href="/account" className="underline">My Account</a> and review the options shown for your order. If that option is unavailable, use our <a href="/pages/contact" className="underline">Contact Us</a> page to request assistance. Include the order number, item name, and reason for your request.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Damaged or incorrect items</h2>
          <p className="mt-3 text-[15px] leading-8">If an item arrives damaged in transit, is not what you ordered, or differs materially from its listing, contact us with the order number and clear photographs of the item and packaging. We will review the issue and explain the available next steps.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Packing and shipping a return</h2>
          <p className="mt-3 text-[15px] leading-8">Wait for return instructions before mailing anything. If a return is authorized, package the item securely and follow the instructions provided. Sending an item without authorization can delay review and resolution.</p>
        </section>
      </div>
    </main>
  );
}
