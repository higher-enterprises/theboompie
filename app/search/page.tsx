import { productHref } from "lib/boompie/categories";
import { defaultSort, sorting } from "lib/constants";
import { getProducts } from "lib/shopify";
import Link from "next/link";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

function getConditionBadge(product: { tags?: string[] }) {
  const tags = (product.tags ?? []).map((tag) => tag.toLowerCase().trim());
  if (tags.some((tag) => ["new with tags", "new-with-tags", "nwt"].includes(tag))) {
    return { color: "bg-[#ed3183] text-white", icon: "♡" };
  }
  if (tags.some((tag) => ["new", "brand new"].includes(tag))) {
    return { color: "bg-[#ffbe18] text-black", icon: "☺" };
  }
  if (tags.some((tag) => ["used", "pre-owned", "preowned"].includes(tag))) {
    return { color: "bg-[#55258a] text-white", icon: "✿" };
  }
  return { color: "bg-[#f0e3cc] text-[#281a16]", icon: "★" };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = (await searchParams) ?? {};
  const sort = typeof params.sort === "string" ? params.sort : undefined;
  const searchValue = typeof params.q === "string" ? params.q : undefined;
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const isNewArrivals = !searchValue && sort === "latest-desc";
  const heading = searchValue ? "Search Results" : isNewArrivals ? "New Arrivals" : "All Finds";

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-10 text-black">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm">
        <Link href="/shop" className="underline-offset-4 hover:underline">Shop</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="font-semibold">{heading}</span>
      </nav>

      <h1 className="text-4xl font-bold">{heading}</h1>
      {searchValue && (
        <p className="mt-2 text-neutral-600">
          {products.length} {products.length === 1 ? "result" : "results"} for
          {" "}<span className="font-semibold">“{searchValue}”</span>
        </p>
      )}

      <section aria-label="Products" className="mt-7">
        {products.length === 0 ? (
          <p className="py-4 text-neutral-500">No finds here just yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => {
              const badge = getConditionBadge(product as typeof product & { tags?: string[] });
              return (
                <Link
                  key={product.id}
                  href={productHref(product.handle)}
                  className="group min-w-0 overflow-hidden rounded-2xl bg-[#f0e3cc] transition hover:shadow-md"
                >
                  {product.featuredImage?.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  ) : (
                    <div className="aspect-square bg-neutral-100" />
                  )}
                  <div className={`relative -mt-2 flex min-h-[70px] items-center justify-between gap-2 rounded-xl px-3 py-2.5 ${badge.color}`}>
                    <div className="min-w-0">
                      <h3 className="line-clamp-2 text-xs font-extrabold uppercase leading-snug tracking-wide group-hover:underline">
                        {product.title}
                      </h3>
                      {product.priceRange?.minVariantPrice && (
                        <p className="mt-1 text-sm font-bold">
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: product.priceRange.minVariantPrice.currencyCode,
                          }).format(Number(product.priceRange.minVariantPrice.amount))}
                        </p>
                      )}
                    </div>
                    <span aria-hidden="true" className="shrink-0 text-3xl leading-none opacity-90">
                      {badge.icon}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
