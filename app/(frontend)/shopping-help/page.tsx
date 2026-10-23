import Link from 'next/link';
export const metadata = { title: 'Shopping Help' + ' | The Boompie', description: 'A straightforward guide to finding, buying, and receiving your next great find.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Shopping Help</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">A straightforward guide to finding, buying, and receiving your next great find.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Find something you love</h2>
          <p className="mt-3 text-[15px] leading-8">Explore departments, browse new arrivals, or use search to narrow down available merchandise. Inventory changes as individual items are added and sold, so a favorite find may not remain available.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Review before you buy</h2>
          <p className="mt-3 text-[15px] leading-8">Read the full listing, examine photographs, and check dimensions, condition notes, and included accessories. Our <a href="/pages/product-condition-guide" className="underline">Condition Guide</a> and <a href="/pages/size-guide" className="underline">Size Guide</a> can help you evaluate a find.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Checkout and payment</h2>
          <p className="mt-3 text-[15px] leading-8">Review the shopping bag, delivery address, shipping options, and final order total before completing checkout. Available payment methods and shipping charges are displayed during checkout. Never send payment card details through email or a contact message.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">After placing an order</h2>
          <p className="mt-3 text-[15px] leading-8">Watch for the order confirmation sent to the email address used at checkout. Account features, when enabled, are available through <a href="/account" className="underline">My Account</a>. Shipping and delivery information is described in our <a href="/policies/shipping-policy" className="underline">Shipping Policy</a>.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Problems with an order</h2>
          <p className="mt-3 text-[15px] leading-8">Visit the <a href="/pages/returns" className="underline">Return Center</a> for return requests or use <a href="/pages/contact" className="underline">Contact Us</a> for additional assistance.</p>
        </section>
      </div>
    </main>
  );
}
