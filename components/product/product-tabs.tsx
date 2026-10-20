"use client";

import Prose from "components/prose";
import type { Product } from "lib/shopify/types";
import { useState } from "react";

const tabs = ["Description", "Product Details", "Shipping & Returns"] as const;
type Tab = (typeof tabs)[number];

export function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<Tab>("Description");
  const condition = product.tags.find((tag) => ["new", "used", "new with tags", "nwt", "pre-owned"].includes(tag.toLowerCase())) || "Not specified";
  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-[#e8dfd2] bg-[#fff7e9]" aria-label="Product information">
      <div role="tablist" aria-label="Product information" className="flex overflow-x-auto border-b border-[#e8dfd2] bg-[#f7efdf]">
        {tabs.map((tab) => (
          <button key={tab} id={`boompie-tab-${tabs.indexOf(tab)}`} type="button" role="tab" aria-selected={active === tab} aria-controls="boompie-tab-panel" onClick={() => setActive(tab)}
            className={`shrink-0 border-b-[3px] px-5 py-4 text-sm font-bold transition-colors ${active === tab ? "border-[#55258a] bg-[#fff7e9] text-[#55258a]" : "border-transparent text-[#594f59] hover:text-[#55258a]"}`}>
            {tab}
          </button>
        ))}
      </div>
      <div id="boompie-tab-panel" role="tabpanel" aria-labelledby={`boompie-tab-${tabs.indexOf(active)}`} className="px-5 py-5 md:px-7 md:py-6">
        {active === "Description" && (product.descriptionHtml ? <Prose className="text-sm leading-7 text-[#403844]" html={product.descriptionHtml} /> : <p className="text-sm leading-7">{product.description || "No description provided."}</p>)}
        {active === "Product Details" && <dl className="grid gap-3 text-sm sm:grid-cols-2"><div><dt className="font-bold">Condition</dt><dd className="mt-1 capitalize text-neutral-600">{condition}</dd></div><div><dt className="font-bold">Availability</dt><dd className="mt-1 text-neutral-600">{product.availableForSale ? "In stock" : "Sold out"}</dd></div>{product.options.filter((option) => option.values.length > 0 && option.name.toLowerCase() !== "title").map((option) => <div key={option.id}><dt className="font-bold">{option.name}</dt><dd className="mt-1 text-neutral-600">{option.values.join(", ")}</dd></div>)}</dl>}
        {active === "Shipping & Returns" && <div className="space-y-3 text-sm leading-7 text-neutral-600"><p>Available shipping methods and charges are calculated at checkout.</p><p>See the store’s published return and exchange policies for eligibility and details.</p></div>}
      </div>
    </section>
  );
}
