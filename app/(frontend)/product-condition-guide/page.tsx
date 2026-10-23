import Link from 'next/link';
export const metadata = { title: 'Product Condition Guide' + ' | The Boompie', description: 'Understand the details that make every pre-loved find unique.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Product Condition Guide</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">Understand the details that make every pre-loved find unique.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">The nature of pre-loved merchandise</h2>
          <p className="mt-3 text-[15px] leading-8">The Boompie offers secondhand, vintage, and other individually sourced finds. An item may show evidence of its previous life, including fading, surface wear, small marks, or signs of storage. Condition is considered item by item.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Read the entire listing</h2>
          <p className="mt-3 text-[15px] leading-8">Photographs, written descriptions, and any item-specific notes should be considered together. Check for disclosed flaws, missing accessories, alterations, or functional limitations. Product images may show details that are easier to understand when enlarged.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Clothing and textiles</h2>
          <p className="mt-3 text-[15px] leading-8">Look for information about fabric wear, pilling, fading, stains, repairs, stretching, and missing buttons or fasteners. Vintage sizing and fit can differ from current expectations; review the <a href="/pages/size-guide" className="underline">Size Guide</a>.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Electronics, toys, books, and collectibles</h2>
          <p className="mt-3 text-[15px] leading-8">Pay particular attention to statements about testing, completeness, included accessories, packaging, cosmetic marks, and age-related wear. An item should not be assumed to include original packaging or every accessory unless the listing says so.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Questions before checkout</h2>
          <p className="mt-3 text-[15px] leading-8">If a detail is important to your purchase and is not clear in the listing, contact us with the item link. We can review the question while the item remains available.</p>
        </section>
      </div>
    </main>
  );
}
