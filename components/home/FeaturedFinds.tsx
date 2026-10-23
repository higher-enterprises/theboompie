import type { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import "./boompie-hero-scroll.css";
import "./featured-wiggle.css";

type Props = { products: Product[]; rows?: 1 | 2; durationSeconds?: number };
const accents = ["purple", "pink", "yellow", "purple"] as const;
const symbols = ["✿", "♡", "☺", "★"];

function ProductCard({ product, index, duplicate = false }: { product: Product; index: number; duplicate?: boolean }) {
  const amount = product.priceRange.minVariantPrice;
  return (
    <Link href={`/product/${product.handle}`} className="bpw-card" tabIndex={duplicate ? -1 : undefined} aria-hidden={duplicate ? true : undefined}>
      <div className="bpw-card-image">
        {product.featuredImage && <Image src={product.featuredImage.url} alt={duplicate ? "" : product.featuredImage.altText || product.title} fill sizes="(max-width: 640px) 180px, 230px" className="bpw-card-photo" />}
      </div>
      <div className={`bpw-card-label bpw-label-${accents[index % 4]}`}>
        <div className="bpw-card-details"><strong>{product.title}</strong><span>{new Intl.NumberFormat("en-US", { style: "currency", currency: amount.currencyCode }).format(Number(amount.amount))}</span></div>
        <span className="bpw-card-symbol" aria-hidden="true">{symbols[index % 4]}</span>
      </div>
    </Link>
  );
}

// A duplicated set produces a seamless, slow leftward marquee.
// Pause on hover/focus; reduced-motion users receive a manually scrollable row.
export function FeaturedFinds({ products, rows = 1, durationSeconds = 65 }: Props) {
  const visible = products.slice(0, rows * 4);
  if (!visible.length) return <section className="bpw-featured" aria-label="Featured finds"><p className="bpw-empty">Add products to your Shopify featured collection to display them here.</p></section>;
  return (
    <section className="bpw-featured" aria-labelledby="bpw-featured-title">
      <div className="bpw-featured-heading">
        <div className="bpw-featured-heading-copy">
          <span className="bpw-featured-flower" aria-hidden="true">✿</span>
          <div><h2 id="bpw-featured-title">FEATURED FINDS</h2><p>Discover something worth smiling about.</p></div>
        </div>
        <Link className="bpw-shop-all" href="/shop/featured-finds">SHOP ALL FEATURED FINDS <span aria-hidden="true">→</span></Link>
      </div>
      <div className="bpw-marquee" role="region" aria-label="Slowly scrolling featured products" tabIndex={0}>
        <div className="bpw-marquee-track" style={{ "--bpw-duration": `${Math.max(25, durationSeconds)}s` } as React.CSSProperties}>
          <div className="bpw-marquee-set">{visible.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div>
          <div className="bpw-marquee-set" aria-hidden="true">{visible.map((product, index) => <ProductCard key={`copy-${product.id}`} product={product} index={index} duplicate />)}</div>
        </div>
      </div>
    </section>
  );
}
