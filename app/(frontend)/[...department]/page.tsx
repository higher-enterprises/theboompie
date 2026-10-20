import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollection, getCollectionProducts } from "lib/shopify";
import Grid from "components/grid";
import ProductGridItems from "components/layout/product-grid-items";
import { defaultSort, sorting } from "lib/constants";

const DEPARTMENTS = new Set([
  "women", "men", "kids", "home", "games", "toys",
  "electronics", "books", "vintage", "other"
]);

type Props = {
  params: Promise<{ department: string[] }>;
  searchParams?: Promise<{ sort?: string | string[] }>;
};

function resolveDepartment(segments: string[]) {
  if (!segments.length || !DEPARTMENTS.has(segments[0]!)) notFound();
  // Example: /women/clothing/dresses => Shopify collection "women-clothing-dresses".
  // Collection handles must match this convention for nested categories.
  return segments.join("-");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { department } = await params;
  const handle = resolveDepartment(department);
  const collection = await getCollection(handle);
  const title = collection?.seo?.title || collection?.title || department[department.length - 1]!.replace(/-/g, " ");
  return {
    title,
    description: collection?.seo?.description || collection?.description || `Shop ${title} at The Boompie`,
  };
}

export default async function DepartmentPage({ params, searchParams }: Props) {
  const { department } = await params;
  const handle = resolveDepartment(department);
  const query = (await searchParams) ?? {};
  const sort = typeof query.sort === "string" ? query.sort : undefined;
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: handle, sortKey, reverse });
  const title = department[department.length - 1]!.replace(/-/g, " ");

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-8 md:px-8">
      <h1 className="mb-6 text-3xl font-bold capitalize">{title}</h1>
      {products.length === 0 ? (
        <p className="py-3 text-lg">No products found in this collection.</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
