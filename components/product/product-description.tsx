import { AddToCart } from "components/cart/add-to-cart";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";

function getCondition(tags: string[]) {
  const normalized = tags.map((tag) => tag.trim().toLowerCase());
  if (normalized.some((tag) => ["new with tags", "new-with-tags", "nwt"].includes(tag))) return { label: "NEW WITH TAGS", className: "bg-[#ef3482] text-white" };
  if (normalized.includes("new")) return { label: "NEW", className: "bg-[#ffbe16] text-[#271b20]" };
  if (normalized.some((tag) => ["used", "pre-owned", "preowned"].includes(tag))) return { label: "PRE-LOVED", className: "bg-[#55258a] text-white" };
  return { label: "GREAT FIND", className: "bg-[#f0e3cc] text-[#271b20]" };
}

export function ProductDescription({ product }: { product: Product }) {
  const condition = getCondition(product.tags);
  return (
    <div className="min-w-0">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide ${condition.className}`}>{condition.label}</span>
        <span className="text-xs font-medium text-neutral-500">The BOOMPIE find</span>
      </div>
      <h1 className="text-2xl font-extrabold leading-tight text-[#28192e] sm:text-3xl">{product.title}</h1>
      <div className="mt-3 text-4xl font-extrabold tracking-tight text-[#55258a] sm:text-5xl">
        {new Intl.NumberFormat("en-US", { style: "currency", currency: product.priceRange.minVariantPrice.currencyCode, currencyDisplay: "narrowSymbol" }).format(Number(product.priceRange.minVariantPrice.amount))}
      </div>
      {product.description && <p className="mt-4 line-clamp-3 text-sm leading-6 text-neutral-600">{product.description}</p>}
      <div className="mt-5 border-t border-[#e8dfd2] pt-5"><VariantSelector options={product.options} variants={product.variants} /></div>
      <div className="mt-2 rounded-xl border border-[#eadcc4] bg-[#f0e3cc] p-4">
        <p className="text-sm font-bold text-[#28192e]">{product.availableForSale ? "✓ Available to purchase" : "Currently sold out"}</p>
        <p className="mt-1 text-xs text-neutral-600">Shipping options are calculated at checkout.</p>
      </div>
      <div className="mt-4 [&_button]:min-h-12 [&_button]:rounded-xl [&_button]:bg-[#55258a] [&_button]:font-bold [&_button]:text-white [&_button:hover]:bg-[#421c6c]">
        <AddToCart product={product} />
      </div>
      <p className="mt-3 text-center text-xs text-neutral-500">Good finds. Great deals. Greater joy.</p>
    </div>
  );
}
