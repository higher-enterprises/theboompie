import Link from 'next/link';
export const metadata = { title: 'Accessibility Statement' + ' | The Boompie', description: 'Making the joy of discovering great finds easier to access.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Accessibility Statement</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">Making the joy of discovering great finds easier to access.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Our commitment</h2>
          <p className="mt-3 text-[15px] leading-8">The Boompie aims to provide an online shopping experience that is usable by people with a wide range of abilities, technologies, and ways of interacting with the web. Accessibility is an ongoing part of designing and maintaining the storefront.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Website experience</h2>
          <p className="mt-3 text-[15px] leading-8">We aim for readable text, understandable page structure, descriptive links, usable forms, and navigation that works with a keyboard as well as a pointer. We also seek to make important product information available in text alongside photographs.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Assistive technologies</h2>
          <p className="mt-3 text-[15px] leading-8">Visitors may use screen readers, browser zoom, keyboard navigation, voice control, or other accessibility tools. The experience can vary depending on the browser, device, and technology used.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Known limitations and improvements</h2>
          <p className="mt-3 text-[15px] leading-8">A changing ecommerce storefront can contain third-party components and new product content that require continued attention. We review accessibility concerns as they are identified and prioritize improvements that help customers browse, understand products, and complete purchases.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Getting help</h2>
          <p className="mt-3 text-[15px] leading-8">If you encounter difficulty viewing a page, navigating the site, understanding a product listing, or using checkout, please use the Contact Us page. Include the page address, what you were trying to do, and the device or assistive technology involved if you are comfortable sharing that information.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Feedback and follow-up</h2>
          <p className="mt-3 text-[15px] leading-8">We welcome specific feedback about accessibility barriers and will use it to guide practical improvements. Where possible, we will work with you to identify another way to obtain information or assistance.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Standards</h2>
          <p className="mt-3 text-[15px] leading-8">Accessibility guidance such as the Web Content Accessibility Guidelines informs good web practices. This statement does not represent a claim of independently verified conformance to a particular standard.</p>
        </section>
      </div>
      <p className="mt-12 border-t border-[#e7e0e8] pt-6 text-sm leading-7">
        Need assistance? <Link className="underline underline-offset-4 hover:text-[#55258a]" href="/pages/contact">Contact The Boompie</Link>.
      </p>
    </main>
  );
}
