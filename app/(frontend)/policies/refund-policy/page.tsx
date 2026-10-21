import Link from 'next/link';
export const metadata = { title: 'Return & Refund Policy' + ' | The Boompie', description: 'Information about returns, order problems, and refunds.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Return &amp; Refund Policy</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">Information about returns, order problems, and refunds.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Our approach to pre-loved merchandise</h2>
          <p className="mt-3 text-[15px] leading-8">The Boompie offers many unique, vintage, and previously owned products. Ordinary wear, age, and characteristics disclosed in the product listing are part of the purchase. Please read the description and examine the photographs before ordering.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Requesting a return</h2>
          <p className="mt-3 text-[15px] leading-8">If you would like to request a return, contact the Return Center with your order number, item name, reason for the request, and any helpful photographs. Please wait for return instructions before mailing merchandise. Sending an item without authorization may make it difficult to identify or process.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Eligibility review</h2>
          <p className="mt-3 text-[15px] leading-8">Return requests are reviewed in light of the item’s listing, condition on receipt, the reason for return, and applicable consumer-protection law. Items that have been altered, damaged after delivery, or used beyond reasonable inspection may not qualify for a discretionary return. Statutory rights remain unaffected.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Items with disclosed wear</h2>
          <p className="mt-3 text-[15px] leading-8">Signs of age, fading, minor imperfections, and other conditions described or pictured in a listing do not automatically make an item defective or incorrectly described. If you believe an item differs materially from its description, explain the difference and provide photographs.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Incorrect or damaged items</h2>
          <p className="mt-3 text-[15px] leading-8">If you receive the wrong item or an item that appears damaged in transit or materially different from its listing, contact us promptly. Include clear photographs of the product, shipping packaging, and any relevant labels. Keep the item and packaging while the issue is reviewed.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Return shipping</h2>
          <p className="mt-3 text-[15px] leading-8">Do not purchase return postage or ship an item until you receive instructions. Any applicable return-shipping arrangements and charges will be explained when your request is reviewed, consistent with applicable law.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Refunds</h2>
          <p className="mt-3 text-[15px] leading-8">If a refund is approved, it will generally be issued through the original payment method where supported by the payment processor. The time for funds to appear can depend on the payment provider and financial institution. Any applicable deductions or shipping adjustments will be explained as part of the resolution.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Exchanges and one-of-a-kind items</h2>
          <p className="mt-3 text-[15px] leading-8">Because many products are unique, an identical replacement may not be available. When a replacement cannot be supplied, an appropriate refund or other resolution may be considered.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Cancellations</h2>
          <p className="mt-3 text-[15px] leading-8">If you need to cancel an order, contact us promptly. An order may no longer be cancelable once processing or shipment has begun. If it has shipped, any further request will be addressed under the applicable return terms.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Your legal rights</h2>
          <p className="mt-3 text-[15px] leading-8">Nothing in this policy limits rights or remedies that cannot lawfully be waived, including rights relating to items that are defective, misdescribed, or not delivered.</p>
        </section>
      </div>
      <p className="mt-12 border-t border-[#e7e0e8] pt-6 text-sm leading-7">
        Need assistance? <Link className="underline underline-offset-4 hover:text-[#55258a]" href="/pages/contact">Contact The Boompie</Link>.
      </p>
    </main>
  );
}
