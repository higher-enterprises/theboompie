import Link from 'next/link';
export const metadata = { title: 'Privacy Policy' + ' | The Boompie', description: 'How personal information may be collected, used, and protected when you shop.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">How personal information may be collected, used, and protected when you shop.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Overview</h2>
          <p className="mt-3 text-[15px] leading-8">This policy describes the types of personal information involved in using The Boompie online storefront, why that information is needed, and the choices available to visitors and customers.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Information you provide</h2>
          <p className="mt-3 text-[15px] leading-8">When you shop or contact us, information may include your name, email address, shipping and billing details, telephone number, order information, and messages you send. Payment information is handled through the payment services made available at checkout; we do not need to receive your complete payment-card details to fulfill an order.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Information collected through website use</h2>
          <p className="mt-3 text-[15px] leading-8">Technical information may include device and browser characteristics, approximate location inferred from network information, pages viewed, referral information, and interactions with the storefront. Cookies and similar technologies may support shopping-cart functions, security, analytics, and preferences.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">How information is used</h2>
          <p className="mt-3 text-[15px] leading-8">Information may be used to provide the storefront, process and deliver orders, respond to requests, manage returns, prevent fraud, maintain security, improve website performance, and comply with legal obligations. Marketing messages are sent where permitted and subject to available subscription choices.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Ecommerce and service providers</h2>
          <p className="mt-3 text-[15px] leading-8">The Boompie uses ecommerce infrastructure and may rely on providers for payment processing, hosting, delivery, communications, analytics, and security. These providers may process information needed to perform their services under their own applicable terms and privacy practices.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Cookies and preferences</h2>
          <p className="mt-3 text-[15px] leading-8">Some cookies are necessary for core storefront functions such as remembering a cart. Other technologies may help us understand usage or measure communications. Browser controls may allow you to restrict cookies, although some shopping functions may not work as expected when necessary cookies are blocked.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">When information may be shared</h2>
          <p className="mt-3 text-[15px] leading-8">Information may be disclosed to service providers to complete purchases or operate the website, to shipping carriers for delivery, to authorities when legally required, or in connection with a legitimate business transaction subject to applicable law. We do not describe every disclosure as a sale of personal information.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Data retention and security</h2>
          <p className="mt-3 text-[15px] leading-8">Information is retained as reasonably needed for orders, customer support, business records, security, dispute resolution, and legal compliance. We use reasonable safeguards appropriate to the nature of the information, although no internet-based system can guarantee absolute security.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Your privacy rights</h2>
          <p className="mt-3 text-[15px] leading-8">Depending on your residence and applicable law, you may be entitled to request access, correction, deletion, or information about certain uses or disclosures of personal data. Some requests may be limited by legal exceptions, including recordkeeping and fraud prevention.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Marketing communications</h2>
          <p className="mt-3 text-[15px] leading-8">If you receive promotional emails, you can use the unsubscribe mechanism in the message to stop future marketing communications. Transactional messages relating to purchases or service requests may still be necessary.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Children’s privacy</h2>
          <p className="mt-3 text-[15px] leading-8">The storefront is intended for shoppers who can lawfully make purchases or who shop with appropriate adult involvement. We do not knowingly seek personal information directly from children for independent purchases.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Policy changes and contact</h2>
          <p className="mt-3 text-[15px] leading-8">We may update this policy as the website, services, or legal requirements change. The current version will appear on this page. To ask a privacy question or submit a request, use the Contact Us page or the Your Privacy Choices page.</p>
        </section>
      </div>
      <p className="mt-12 border-t border-[#e7e0e8] pt-6 text-sm leading-7">
        Need assistance? <Link className="underline underline-offset-4 hover:text-[#55258a]" href="/pages/contact">Contact The Boompie</Link>.
      </p>
    </main>
  );
}
