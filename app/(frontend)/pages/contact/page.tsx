import Link from 'next/link';
export const metadata = { title: 'Contact Us' + ' | The Boompie', description: 'Questions about a find, an order, or shopping at The Boompie?' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">Questions about a find, an order, or shopping at The Boompie?</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Product questions</h2>
          <p className="mt-3 text-[15px] leading-8">We want you to feel informed about the treasures you discover. For questions about condition, measurements, accessories, or availability, include the product name or a link to its listing. Since many finds are one of a kind, a listed item may sell before we can respond.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Order assistance</h2>
          <p className="mt-3 text-[15px] leading-8">For help with a purchase, include your order number and a clear description of the issue. You can review account and order information through <a href="/account" className="underline">My Account</a>. For a return-related question, start with the <a href="/pages/returns" className="underline">Return Center</a>.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">How to reach us</h2>
          <p className="mt-3 text-[15px] leading-8">Reply to your order confirmation or another message you have received directly from The Boompie. This keeps the conversation connected to your purchase and avoids sending personal order details to an unverified address. If you do not have an order email, use the contact option provided in the storefront or at checkout, when available.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">What happens next</h2>
          <p className="mt-3 text-[15px] leading-8">We review messages in the order received and may request additional information to understand the question. Response times can vary with message volume and the nature of the request. Please avoid sending payment card numbers or passwords in a message.</p>
        </section>
      </div>
    </main>
  );
}
