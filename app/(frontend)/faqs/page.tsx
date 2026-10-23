import Link from 'next/link';
export const metadata = { title: 'Frequently Asked Questions' + ' | The Boompie', description: 'Helpful answers about shopping for one-of-a-kind finds.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">Helpful answers about shopping for one-of-a-kind finds.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">What does The Boompie sell?</h2>
          <p className="mt-3 text-[15px] leading-8">The Boompie is an online shop for thrifted, vintage, pre-loved, and other interesting finds. Our selection can include clothing, accessories, home goods, books, games, electronics, and more. Inventory changes as items are discovered and added to the shop.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Are your products new or used?</h2>
          <p className="mt-3 text-[15px] leading-8">Many products have been previously owned or used. Some may be new, unused, or still have original tags or packaging. The individual listing is the best source for the item’s stated condition, included pieces, and visible signs of wear.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Are items one of a kind?</h2>
          <p className="mt-3 text-[15px] leading-8">Many finds are available in a quantity of one. Adding an item to your cart does not necessarily reserve it. An order is not complete until checkout is successfully processed.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">How do I evaluate an item’s condition?</h2>
          <p className="mt-3 text-[15px] leading-8">Read the description and review every photograph. Pre-loved items can show normal signs of age, handling, washing, or storage. Any specifically noted defects should be considered part of the item’s description. If something important is unclear, ask before purchasing.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">How do I choose the right size?</h2>
          <p className="mt-3 text-[15px] leading-8">Sizes vary between brands, decades, and manufacturing standards. Compare measurements in the listing with an item you already own. A vintage label may not correspond to today’s sizing.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">How are shipping costs calculated?</h2>
          <p className="mt-3 text-[15px] leading-8">Available shipping options and applicable charges are shown during checkout before you submit payment. Delivery estimates are estimates rather than guaranteed arrival dates.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Can I change or cancel an order?</h2>
          <p className="mt-3 text-[15px] leading-8">Contact us as soon as possible through the Contact Us page and include your order number. Changes or cancellations may not be possible after an order has entered fulfillment.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">What if my order arrives damaged or incorrect?</h2>
          <p className="mt-3 text-[15px] leading-8">Contact us promptly with your order number, photographs of the item and packaging, and a description of the problem. Keep the packaging until the issue is reviewed.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Can I return a purchase?</h2>
          <p className="mt-3 text-[15px] leading-8">Return requests are handled under our Return &amp; Refund Policy. Please review the policy and contact the Return Center before sending an item back.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">How do I check an order?</h2>
          <p className="mt-3 text-[15px] leading-8">Use the order confirmation and any shipping updates you receive. If account-based order history is available for your purchase, you may also review it there.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">How do I contact The Boompie?</h2>
          <p className="mt-3 text-[15px] leading-8">Visit the Contact Us page and describe your question. For an existing purchase, include your order number; for a product question, include the item name or link.</p>
        </section>
      </div>
      <p className="mt-12 border-t border-[#e7e0e8] pt-6 text-sm leading-7">
        Need assistance? <Link className="underline underline-offset-4 hover:text-[#55258a]" href="/pages/contact">Contact The Boompie</Link>.
      </p>
    </main>
  );
}
