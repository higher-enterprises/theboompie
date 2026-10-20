import { BoompieHomeHero } from 'components/home/boompie-home-hero';
import { FeaturedFinds } from 'components/home/FeaturedFinds';
import { BargainBasement, HomeMasonry, HomeValues } from 'components/home/HomeSections';
import { NewArrivals } from 'components/NewArrivals';
import { getCollectionProducts } from 'lib/shopify';

// Change to 1 for four featured items or 2 for eight.
const FEATURED_ROWS: 1 | 2 = 2;

export default async function HomePage() {
  const products = await getCollectionProducts({ collection: 'featured' });
  return (
    <>
      <BoompieHomeHero />
      <section className="-mt-3 md:-mt-4" aria-label="Featured finds">
        <FeaturedFinds products={products} rows={FEATURED_ROWS} />
      </section>
      <section className="pt-3 md:pt-5" aria-label="New arrivals">
        <NewArrivals />
      </section>
      <section className="pt-3 md:pt-5" aria-label="Shop the Boompie">
        <HomeMasonry />
      </section>
      <section className="pt-3 md:pt-5" aria-label="Bargain basement">
        <BargainBasement />
      </section>
      <section className="pt-2 md:pt-4">
        <HomeValues />
      </section>
    </>
  );
}
