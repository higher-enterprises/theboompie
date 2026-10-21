import Link from 'next/link';
export const metadata = { title: 'Size Guide' + ' | The Boompie', description: 'Find a fit that feels right, especially when shopping pre-loved and vintage clothing.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Size Guide</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">Find a fit that feels right, especially when shopping pre-loved and vintage clothing.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Why sizes vary</h2>
          <p className="mt-3 text-[15px] leading-8">Labels can differ substantially across brands, countries, and decades. Older garments may follow sizing conventions that no longer match current charts. Washing, alterations, and ordinary wear can also change the way a garment fits.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Measure something you already own</h2>
          <p className="mt-3 text-[15px] leading-8">Lay a similar item flat and measure it without stretching the fabric. Compare those measurements with the details provided in the listing, allowing extra room for your preferred fit and the type of fabric.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Clothing measurements</h2>
          <p className="mt-3 text-[15px] leading-8">For tops, consider chest or bust width, shoulder width, sleeve length, and overall length. For bottoms, compare waist, hips, rise, inseam, and leg opening. For dresses and outerwear, check the relevant combination of these measurements.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Shoes, accessories, and home textiles</h2>
          <p className="mt-3 text-[15px] leading-8">For shoes, compare the labeled size with a familiar brand and look for any interior length or width information in the listing. For bags, hats, belts, and textiles, use the listed dimensions to assess scale and suitability.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">When measurements are missing</h2>
          <p className="mt-3 text-[15px] leading-8">A label size is a guide rather than a fit guarantee. If you need additional details, visit <a href="/pages/contact" className="underline">Contact Us</a> and identify the item before ordering.</p>
        </section>
      </div>
    </main>
  );
}
