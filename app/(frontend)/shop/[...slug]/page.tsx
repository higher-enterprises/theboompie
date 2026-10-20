import { categoryHref, productHref, resolveCategory } from 'lib/boompie/categories';
import { getCollectionProducts } from 'lib/shopify';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string[] }> };

// Condition badges use Shopify product tags when those tags are included in the
// Storefront API product response. Otherwise, show the neutral default badge.
function getConditionBadge(product: { tags?: string[] }) {
  const tags = (product.tags ?? []).map((tag) => tag.toLowerCase().trim());
  if (tags.some((tag) => ['new with tags', 'new-with-tags', 'nwt'].includes(tag))) {
    return { label: 'NEW WITH TAGS', color: 'bg-[#ed3183] text-white', icon: '♡' };
  }
  if (tags.some((tag) => ['new', 'brand new'].includes(tag))) {
    return { label: 'NEW', color: 'bg-[#ffbe18] text-black', icon: '☺' };
  }
  if (tags.some((tag) => ['used', 'pre-owned', 'preowned'].includes(tag))) {
    return { label: 'USED', color: 'bg-[#55258a] text-white', icon: '✿' };
  }
  return { label: 'GREAT FIND', color: 'bg-[#f0e3cc] text-[#281a16]', icon: '★' };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveCategory(slug);
  if (!result) return { title: 'Category Not Found | The BOOMPIE' };
  return {
    title: `${result.category.name} | The BOOMPIE`,
    description: result.category.description ?? `Shop ${result.category.name} at The BOOMPIE.`
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const resolved = resolveCategory(slug);
  if (!resolved) notFound();
  const { category, trail } = resolved;

  // An empty Shopify collection is valid: do not return 404 just because it has no products.
  // The handles in lib/boompie/categories.ts must exist in Shopify for products to load.
  let products: Awaited<ReturnType<typeof getCollectionProducts>> = [];
  if (category.collection) {
    try {
      products = await getCollectionProducts({ collection: category.collection });
    } catch (error) {
      console.error(`BOOMPIE collection fetch failed: ${category.collection}`, error);
      // Show the category and its children even if Shopify is temporarily unavailable.
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm">
        <Link href="/shop" className="underline-offset-4 hover:underline">Shop</Link>
        {trail.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {index === trail.length - 1 ? (
              <span aria-current="page" className="font-semibold">{item.category.name}</span>
            ) : (
              <Link href={item.href} className="underline-offset-4 hover:underline">{item.category.name}</Link>
            )}
          </span>
        ))}
      </nav>

      <h1 className="text-4xl font-bold">{category.name}</h1>
      {category.description && <p className="mt-2 text-neutral-600">{category.description}</p>}

      {!!category.children?.length && (
        <section aria-label={`Browse ${category.name} subcategories`} className="mt-5">
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-4">
            {category.children.map((child) => (
              <Link
                key={child.slug}
                href={categoryHref([...slug, child.slug])}
                className="rounded-xl border border-[#e2d1b7] bg-[#f0e3cc] px-4 py-3 text-sm font-semibold transition hover:border-[#55258A] hover:bg-[#e9d7b8]"
              >
                {child.name} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section aria-label={`${category.name} products`} className="mt-7">
        {products.length === 0 ? (
          <p className="py-4 text-neutral-500">No finds here just yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => {
              const badge = getConditionBadge(product as typeof product & { tags?: string[] });
              return (
                <Link key={product.id} href={productHref(product.handle)}
                  className="group min-w-0 overflow-hidden rounded-2xl bg-[#f0e3cc] transition hover:shadow-md">
                  {product.featuredImage?.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={product.featuredImage.url} alt={product.featuredImage.altText || product.title}
                      loading="lazy" className="aspect-square w-full object-cover" />
                  ) : <div className="aspect-square bg-neutral-100" />}
                  <div className={`relative -mt-2 flex min-h-[70px] items-center justify-between gap-2 rounded-xl px-3 py-2.5 ${badge.color}`}>
                    <div className="min-w-0">
                      <h3 className="line-clamp-2 text-xs font-extrabold uppercase leading-snug tracking-wide group-hover:underline">
                        {product.title}
                      </h3>
                      {product.priceRange?.minVariantPrice && (
                        <p className="mt-1 text-sm font-bold">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency', currency: product.priceRange.minVariantPrice.currencyCode
                          }).format(Number(product.priceRange.minVariantPrice.amount))}
                        </p>
                      )}
                    </div>
                    <span aria-hidden="true" className="shrink-0 text-3xl leading-none opacity-90">{badge.icon}</span>
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
