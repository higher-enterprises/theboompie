import Link from 'next/link';
export const metadata = { title: 'Shipping Policy' + ' | The Boompie', description: 'How orders move from The Boompie to your doorstep.' };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-14 text-[#241a2b] sm:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Shipping Policy</h1>
      <p className="mt-4 text-base leading-8 text-[#51465a]">How orders move from The Boompie to your doorstep.</p>
      <div className="mt-12 space-y-9">
        <section>
          <h2 className="text-xl font-semibold leading-snug">Order processing</h2>
          <p className="mt-3 text-[15px] leading-8">After an order is placed, we review the purchase, prepare the merchandise, and arrange shipment. Processing time may vary with order volume, weekends, holidays, and the handling needs of individual items. Any delivery estimate shown at checkout should not be interpreted as a guaranteed arrival date.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Shipping methods and costs</h2>
          <p className="mt-3 text-[15px] leading-8">The shipping methods available for an order and their charges are presented during checkout. Availability and pricing may depend on the delivery address, package size, weight, and items ordered. If a shipping method is not offered for your address, it cannot be selected at checkout.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Delivery addresses</h2>
          <p className="mt-3 text-[15px] leading-8">Please review your shipping address carefully before placing an order. Incorrect or incomplete addresses can cause delays, failed delivery, or additional carrier charges. If you notice an error after ordering, contact us immediately. Address changes cannot be guaranteed once fulfillment begins.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Tracking and delivery updates</h2>
          <p className="mt-3 text-[15px] leading-8">When a shipment includes tracking, the tracking information may be sent with your fulfillment confirmation or made available in your order details. Tracking events and estimated delivery dates are provided by the carrier and may update as the shipment moves.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Multiple packages</h2>
          <p className="mt-3 text-[15px] leading-8">Some orders may ship in more than one package due to item size, packing requirements, or fulfillment logistics. Separate packages may arrive on different days.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Delays and delivery exceptions</h2>
          <p className="mt-3 text-[15px] leading-8">Weather, carrier disruptions, high seasonal volume, access restrictions, and other events outside our control may affect delivery. If tracking shows an exception or a shipment appears stalled, contact us with your order number so we can review the available information.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Lost, missing, or damaged packages</h2>
          <p className="mt-3 text-[15px] leading-8">If an order appears lost, is marked delivered but cannot be located, or arrives with shipping damage, contact us promptly. Include your order number, the tracking information if available, and photographs of damage or packaging where relevant. We will review the circumstances and any available carrier process. A delivery scan alone may not resolve every claim.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">International orders</h2>
          <p className="mt-3 text-[15px] leading-8">Available shipping destinations, if any, are determined by the checkout options for your address. Cross-border shipments may be subject to customs review, import duties, taxes, and other charges imposed by the destination country.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold leading-snug">Questions about shipping</h2>
          <p className="mt-3 text-[15px] leading-8">For help with a specific order, visit Contact Us and provide the order number and a short description of the issue.</p>
        </section>
      </div>
      <p className="mt-12 border-t border-[#e7e0e8] pt-6 text-sm leading-7">
        Need assistance? <Link className="underline underline-offset-4 hover:text-[#55258a]" href="/pages/contact">Contact The Boompie</Link>.
      </p>
    </main>
  );
}
