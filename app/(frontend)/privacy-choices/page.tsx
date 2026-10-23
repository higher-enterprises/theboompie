import Link from 'next/link';
export const metadata = { title: 'Your Privacy Choices' + ' | The Boompie', description: 'Learn about personal information requests and available controls.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Your Privacy Choices</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">Learn about personal information requests and available controls.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Understanding your choices</h2>
          <p className="mt-3 text-[15px] leading-8">Privacy laws in some locations give individuals the right to learn what personal information a business holds, ask for corrections, request deletion, or limit certain processing. The rights available to you depend on the law that applies to your circumstances.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Request access or correction</h2>
          <p className="mt-3 text-[15px] leading-8">To request access to personal information associated with your purchases or communications, or to correct inaccurate details, use the Contact Us page. Explain the type of request and provide enough information for us to locate the relevant records. Do not send passwords or full payment-card numbers.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Request deletion</h2>
          <p className="mt-3 text-[15px] leading-8">You may ask for eligible personal information to be deleted. Some information may need to be retained for completed transactions, tax and accounting records, fraud prevention, dispute resolution, or other legally permitted purposes.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Verification and response</h2>
          <p className="mt-3 text-[15px] leading-8">To protect customer information, we may need to verify that a request comes from the person concerned or an authorized representative. We will evaluate requests under applicable law and explain when an exception affects the result.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Marketing preferences</h2>
          <p className="mt-3 text-[15px] leading-8">You can opt out of promotional emails using the unsubscribe link included in those messages. This does not necessarily stop order confirmations, receipts, or other essential transactional communications.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Cookies and browser controls</h2>
          <p className="mt-3 text-[15px] leading-8">Your browser may offer controls to delete or block cookies and manage tracking preferences. Some privacy choices may also be available through the ecommerce services that power checkout. Restricting essential cookies can interfere with cart and checkout functionality.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">California privacy rights</h2>
          <p className="mt-3 text-[15px] leading-8">California residents may have additional rights under the California Consumer Privacy Act, as amended, when its requirements apply to a business and a particular use of information. Requests relating to sale, sharing, or targeted advertising will be evaluated in accordance with applicable law and the practices actually used by this storefront. This page does not claim that an opt-out control is active where none has been implemented.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Additional information</h2>
          <p className="mt-3 text-[15px] leading-8">For a broader description of information practices, review the Privacy Policy. For help submitting a request, use Contact Us.</p>
        </section>
      </div>
      <p className="mt-12 border-t border-[#e7e0e8] pt-6 text-sm leading-7">
        Need assistance? <Link className="underline underline-offset-4 hover:text-[#55258a]" href="/pages/contact">Contact The Boompie</Link>.
      </p>
    </main>
  );
}
