import Link from 'next/link';
export const metadata = { title: 'Special Offers' + ' | The Boompie', description: 'Discover great finds, seasonal promotions, and opportunities to save.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Special Offers</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">Discover great finds, seasonal promotions, and opportunities to save.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Current offers</h2>
          <p className="mt-3 text-[15px] leading-8">Promotions and markdowns are reflected in the prices and offers displayed on the storefront. Browse our <a href="/search" className="underline">available finds</a> to see what is currently listed. Because many items are one of a kind, availability can change quickly.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">How discounts work</h2>
          <p className="mt-3 text-[15px] leading-8">When an offer requires a code, enter it during checkout and confirm the updated total before paying. Discounts may have eligibility conditions, exclusions, expiration dates, or limits that are displayed with the offer. Offers do not necessarily combine.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Prices and availability</h2>
          <p className="mt-3 text-[15px] leading-8">An item is not reserved simply because it is in a shopping bag. The price and applicable promotions shown during checkout govern the purchase. A previous price or expired promotion does not guarantee future availability at the same amount.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">The Joy Club</h2>
          <p className="mt-3 text-[15px] leading-8">Visit <a href="/pages/joy-club" className="underline">Join the Joy Club</a> for updates on new finds and promotional news. Joining does not guarantee a particular discount or early access to an item.</p>
        </section>
      </div>
    </main>
  );
}
