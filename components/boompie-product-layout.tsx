'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Expand, Heart, Package, Store, Truck } from 'lucide-react';

type Image = { url: string; altText?: string | null };
type Condition = 'new' | 'new-with-tags' | 'used' | 'default';
type Related = { id: string; title: string; href: string; image?: Image | null; price: string; condition?: Condition };

type Props = {
  title: string;
  price: string;
  images: Image[];
  condition?: Condition;
  breadcrumb?: ReactNode;
  description?: ReactNode;
  details?: ReactNode;
  shippingReturns?: ReactNode;
  purchaseControls: ReactNode;
  availability?: ReactNode;
  relatedProducts?: Related[];
};

const conditions: Record<Condition, { label: string; bg: string; text: string; symbol: string }> = {
  new: { label: 'NEW', bg: 'bg-[#ffbd18]', text: 'text-black', symbol: '☺' },
  'new-with-tags': { label: 'NEW WITH TAGS', bg: 'bg-[#ef3480]', text: 'text-white', symbol: '♡' },
  used: { label: 'PRE-LOVED', bg: 'bg-[#55258a]', text: 'text-white', symbol: '✿' },
  default: { label: 'GREAT FIND', bg: 'bg-[#f0e3cc]', text: 'text-black', symbol: '★' }
};

export default function BoompieProductLayout({ title, price, images, condition = 'default', breadcrumb, description, details, shippingReturns, purchaseControls, availability, relatedProducts = [] }: Props) {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<'description' | 'details' | 'shipping'>('description');
  const [zoom, setZoom] = useState(false);
  const current = images[active];
  const status = conditions[condition];
  const move = (direction: number) => setActive((index) => (index + direction + images.length) % images.length);

  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-12 pt-5 sm:px-6 lg:px-8">
      {breadcrumb && <nav aria-label="Breadcrumb" className="mb-5 text-xs sm:text-sm">{breadcrumb}</nav>}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">
        <section aria-label="Product photos" className="min-w-0">
          <div className="flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex shrink-0 gap-2 overflow-x-auto sm:w-[76px] sm:flex-col sm:overflow-y-auto">
              {images.map((img, index) => (
                <button key={`${img.url}-${index}`} type="button" onClick={() => setActive(index)} aria-label={`View product image ${index + 1}`} aria-pressed={active === index} className={`h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border-2 bg-[#f7efdf] p-1 ${active === index ? 'border-[#55258a]' : 'border-transparent'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.url} alt={img.altText || `${title} image ${index + 1}`} className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
            <div className="relative flex min-h-[320px] flex-1 items-center justify-center overflow-hidden rounded-2xl bg-[#f0e3cc] sm:min-h-[490px]">
              {current ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={current.url} alt={current.altText || title} className="max-h-[600px] w-full object-contain" />
              ) : <span className="text-sm text-neutral-500">No image available</span>}
              {images.length > 1 && <>
                <button type="button" onClick={() => move(-1)} aria-label="Previous image" className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow"><ChevronLeft size={20}/></button>
                <button type="button" onClick={() => move(1)} aria-label="Next image" className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow"><ChevronRight size={20}/></button>
              </>}
              {current && <button type="button" onClick={() => setZoom(true)} aria-label="Enlarge image" className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-white shadow"><Expand size={18}/></button>}
            </div>
          </div>
        </section>

        <section aria-label="Product information" className="min-w-0">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#55258a]">THE BOOMPIE FIND</p>
          <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-3 text-2xl font-extrabold">{price}</p>
          <div className={`mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ${status.bg} ${status.text}`}><span className="text-lg leading-none">{status.symbol}</span>{status.label}</div>
          {description && <div className="mt-5 line-clamp-3 text-sm leading-relaxed text-neutral-700">{description}</div>}
          <div className="mt-5 rounded-2xl bg-[#f7ebd4] p-4">
            <div className="flex items-center gap-3"><Package className="shrink-0" size={23}/><div className="min-w-0 flex-1"><p className="text-sm font-bold">Availability</p><div className="text-sm">{availability ?? 'See purchase options below'}</div></div></div>
          </div>
          <div className="mt-4">{purchaseControls}</div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
            <div className="flex flex-col items-center gap-1"><Truck size={23}/><span>Shipping options</span></div>
            <div className="flex flex-col items-center gap-1"><Store size={23}/><span>Store pickup</span></div>
            <div className="flex flex-col items-center gap-1"><Heart size={23}/><span>Find your joy</span></div>
          </div>
        </section>
      </div>

      <section className="mt-9 overflow-hidden rounded-2xl border border-[#e8dfd2] bg-white" aria-label="Product details">
        <div className="flex gap-5 overflow-x-auto border-b px-5 pt-4 text-xs font-bold sm:gap-10 sm:text-sm">
          {([['description', 'DESCRIPTION'], ['details', 'PRODUCT DETAILS'], ['shipping', 'SHIPPING & RETURNS']] as const).map(([id, label]) => (
            <button type="button" key={id} onClick={() => setTab(id)} className={`whitespace-nowrap border-b-2 pb-3 ${tab === id ? 'border-[#55258a] text-[#55258a]' : 'border-transparent text-neutral-500'}`}>{label}</button>
          ))}
        </div>
        <div className="p-5 text-sm leading-relaxed text-neutral-700 sm:p-7">{tab === 'description' ? (description ?? 'No description available.') : tab === 'details' ? (details ?? 'Additional product details coming soon.') : (shippingReturns ?? 'Shipping and returns information coming soon.')}</div>
      </section>

      {relatedProducts.length > 0 && <section className="mt-8 rounded-2xl bg-[#f7ebd4] p-4 sm:p-5" aria-label="Related products">
        <h2 className="mb-4 text-xl font-extrabold">✿ You Might Also Like</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {relatedProducts.map((item) => { const style = conditions[item.condition ?? 'default']; return (
            <a href={item.href} key={item.id} className="group min-w-0 overflow-hidden rounded-xl bg-white">
              <div className="aspect-square bg-[#f0e3cc]">{item.image && /* eslint-disable-next-line @next/next/no-img-element */ <img src={item.image.url} alt={item.image.altText || item.title} className="h-full w-full object-contain transition group-hover:scale-[1.03]" />}</div>
              <div className={`flex min-h-[65px] items-center justify-between gap-2 rounded-t-xl px-3 py-2 ${style.bg} ${style.text}`}><div className="min-w-0"><p className="line-clamp-2 text-xs font-bold">{item.title}</p><p className="mt-1 text-xs font-extrabold">{item.price}</p></div><span aria-hidden="true" className="text-2xl">{style.symbol}</span></div>
            </a>
          ); })}
        </div>
      </section>}

      {zoom && current && <div role="dialog" aria-modal="true" aria-label="Expanded product image" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6" onClick={() => setZoom(false)}><button type="button" onClick={() => setZoom(false)} className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-bold">Close ✕</button>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={current.url} alt={current.altText || title} className="max-h-full max-w-full object-contain" onClick={(event) => event.stopPropagation()}/></div>}
    </main>
  );
}
