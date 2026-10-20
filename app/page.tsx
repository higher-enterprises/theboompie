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
      <FeaturedFinds products={products} rows={FEATURED_ROWS} />
      <NewArrivals/>
      <HomeMasonry />
      <BargainBasement />
      <HomeValues />
    </>
  );
}
