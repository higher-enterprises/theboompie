import { categories, categoryHref } from 'lib/boompie/categories';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shop Departments | The BOOMPIE',
  description: 'Explore pre-loved finds across The BOOMPIE departments.'
};

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12">
      <h1 className="text-4xl font-bold">Shop</h1>
      <p className="mt-3 text-lg">Great finds. Great deals. Greater joy.</p>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.slug} href={categoryHref([category.slug])}
            className="rounded-2xl border border-[#dfceb2] bg-[#f0e3cc] p-6 text-xl font-semibold transition hover:border-purple-500 hover:bg-[#e8d5b5] hover:shadow-md">
            {category.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
