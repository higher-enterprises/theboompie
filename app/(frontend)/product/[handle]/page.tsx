import Footer from "components/layout/footer";
import { Gallery } from "components/product/gallery";
import { ProductDescription } from "components/product/product-description";
import { ProductTabs } from "components/product/product-tabs";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import { getProduct, getProductRecommendations } from "lib/shopify";
import type { Image } from "lib/shopify/types";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);
  if (!product) return notFound();
  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);
  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: { index: indexable, follow: indexable },
    },
    openGraph: url
      ? { images: [{ url, width, height, alt }] }
      : null,
  };
}

function conditionStyle(tags: string[]) {
  const normalized = tags.map((tag) => tag.toLowerCase().trim());
  if (normalized.some((tag) => ["new with tags", "new-with-tags", "nwt"].includes(tag))) {
    return { label: "NEW WITH TAGS", background: "bg-[#ef3482]", foreground: "text-white", icon: "♡" };
  }
  if (normalized.includes("new")) {
    return { label: "NEW", background: "bg-[#ffbe16]", foreground: "text-black", icon: "☺" };
  }
  if (normalized.some((tag) => ["used", "pre-owned", "preowned"].includes(tag))) {
    return { label: "PRE-LOVED", background: "bg-[#55258a]", foreground: "text-white", icon: "✿" };
  }
  return { label: "GREAT FIND", background: "bg-[#f0e3cc]", foreground: "text-black", icon: "✿" };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.handle);
  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage?.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-5 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm">
          <Link href="/shop" className="hover:underline">Shop</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="font-semibold">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] lg:gap-10">
          <div className="min-w-0">
            <Suspense fallback={<div className="aspect-square rounded-2xl bg-[#f0e3cc]" />}>
              <Gallery
                images={product.images.slice(0, 10).map((image: Image) => ({
                  src: image.url,
                  altText: image.altText,
                }))}
              />
            </Suspense>
          </div>
          <div className="min-w-0">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        <ProductTabs product={product} />
        <RelatedProducts id={product.id} />
      </main>
      <Footer />
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);
  if (!relatedProducts.length) return null;

  return (
    <section aria-label="Related products" className="mt-6 rounded-2xl border border-[#e8dfd2] bg-[#fff7e9] p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-xl font-extrabold sm:text-2xl"><span className="mr-2 text-[#55258a]">✿</span>You Might Also Like</h2>
        <Link href="/shop" className="text-sm font-semibold text-[#55258a] hover:underline">View All →</Link>
      </div>
      <ul className="flex gap-3 overflow-x-auto pb-2 sm:gap-4">
        {relatedProducts.map((related) => {
          const style = conditionStyle(related.tags);
          return (
            <li key={related.handle} className="w-36 shrink-0 sm:w-44 lg:w-48">
              <Link href={`/product/${related.handle}`} className="group block overflow-hidden rounded-xl bg-white">
                <div className="aspect-[4/5] overflow-hidden bg-[#f0e3cc]">
                  {related.featuredImage?.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={related.featuredImage.url} alt={related.featuredImage.altText || related.title} loading="lazy" className="h-full w-full object-contain transition-transform group-hover:scale-[1.03]" />
                  ) : null}
                </div>
                <div className={`flex min-h-[62px] items-center justify-between gap-2 rounded-t-xl px-3 py-2 ${style.background} ${style.foreground}`}>
                  <div className="min-w-0">
                    <p className="line-clamp-2 text-xs font-bold leading-tight">{related.title}</p>
                    <p className="mt-1 text-xs font-bold">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: related.priceRange.minVariantPrice.currencyCode,
                      }).format(Number(related.priceRange.minVariantPrice.amount))}
                    </p>
                  </div>
                  <span aria-hidden="true" className="shrink-0 text-2xl leading-none">{style.icon}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
