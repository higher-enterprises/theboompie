import Link from 'next/link';
export const metadata = { title: 'Terms of Service' + ' | The Boompie', description: 'Terms governing use of The Boompie online storefront.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Terms of Service</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">Terms governing use of The Boompie online storefront.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Using the storefront</h2>
          <p className="mt-3 text-[15px] leading-8">By visiting or purchasing through The Boompie, you agree to use the website lawfully and to provide accurate information when placing an order. You are responsible for ensuring that you are legally able to enter into a purchase.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Product descriptions and condition</h2>
          <p className="mt-3 text-[15px] leading-8">We strive to present items with clear descriptions and photographs. Many products are secondhand, vintage, or one of a kind and may display wear consistent with age and prior use. Review condition notes, measurements, and images carefully. Screen settings may affect the appearance of colors.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Prices and availability</h2>
          <p className="mt-3 text-[15px] leading-8">Prices, offers, and product availability may change. An item shown on the website may become unavailable before an order is completed. Errors in pricing or listing information may require review and correction consistent with applicable law.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Orders and confirmation</h2>
          <p className="mt-3 text-[15px] leading-8">Submitting an order is a request to purchase the selected items. Payment authorization or an automated acknowledgment does not necessarily mean an order has been accepted for fulfillment. If an order cannot be fulfilled, we will address the payment according to the circumstances and applicable law.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Payment and checkout</h2>
          <p className="mt-3 text-[15px] leading-8">Payment methods are presented during checkout and processed through supported payment providers. You agree to supply valid payment and billing information and to use a payment method you are authorized to use.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Shipping and delivery</h2>
          <p className="mt-3 text-[15px] leading-8">Shipping options and costs are displayed at checkout where available. Delivery estimates are not guarantees. Please review the Shipping Policy for details about tracking, addresses, delays, and delivery concerns.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Returns and refunds</h2>
          <p className="mt-3 text-[15px] leading-8">Requests concerning returns, damaged items, or refunds are handled under the Return &amp; Refund Policy and applicable consumer law. Because many items are unique, identical exchanges may not be possible.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Website content</h2>
          <p className="mt-3 text-[15px] leading-8">The Boompie name, site design, original written content, and other protected materials may not be reproduced or commercially exploited without permission, except as allowed by law. Product and third-party names remain the property of their respective owners.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Acceptable use</h2>
          <p className="mt-3 text-[15px] leading-8">Do not interfere with website security, misuse accounts, attempt unauthorized access, scrape the website in a way that disrupts service, or use the storefront for unlawful activity.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Third-party services and links</h2>
          <p className="mt-3 text-[15px] leading-8">Checkout, payments, shipping, and other features may involve third-party services. External websites and providers may have their own terms and privacy policies, which apply to your interactions with them.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Service availability</h2>
          <p className="mt-3 text-[15px] leading-8">We may modify website features, product selection, or access to the storefront as operational needs change. We cannot promise uninterrupted access or error-free operation.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Legal rights and disputes</h2>
          <p className="mt-3 text-[15px] leading-8">These terms do not exclude warranties, remedies, or consumer rights that cannot lawfully be excluded. Any dispute will be considered under the law applicable to the transaction and the parties, including mandatory consumer-protection rules.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Contact and updates</h2>
          <p className="mt-3 text-[15px] leading-8">Questions about an order or these terms can be submitted through Contact Us. We may update these terms by posting a revised version on this page; the terms applicable to a completed purchase remain subject to applicable law.</p>
        </section>
      </div>
      <p className="mt-12 border-t border-[#e7e0e8] pt-6 text-sm leading-7">
        Need assistance? <Link className="underline underline-offset-4 hover:text-[#55258a]" href="/pages/contact">Contact The Boompie</Link>.
      </p>
    </main>
  );
}
