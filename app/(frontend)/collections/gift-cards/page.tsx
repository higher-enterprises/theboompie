import Link from 'next/link';

export const metadata = { title: 'Gift Cards | The Boompie' };

export default function GiftCardsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14 md:py-20">
      <h1 className="text-3xl font-bold md:text-4xl">Gift Cards</h1>
      <p className="mt-6 leading-8">A little joy goes a long way. A gift card lets someone choose a find that feels just right for them, from clothing and accessories to home treasures and more.</p>
      <h2 className="mt-9 text-xl font-semibold">Shop gift cards</h2>
      <p className="mt-3 leading-8">Browse the store for currently available gift cards. Gift-card availability, denominations, and redemption details are shown on the product listing when offered.</p>
      <p className="mt-5"><Link className="font-semibold underline underline-offset-4" href="/search?q=gift%20card">Search Gift Cards</Link></p>
      <h2 className="mt-9 text-xl font-semibold">Questions about gift cards?</h2>
      <p className="mt-3 leading-8">For questions about purchasing or using a gift card, visit our <Link className="underline underline-offset-4" href="/pages/contact">Contact Us</Link> page.</p>
    </main>
  );
}
