"use client";

import { ArrowLeftIcon, ArrowRightIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [expanded, setExpanded] = useState(false);
  const parsed = Number(searchParams.get("image") ?? 0);
  const imageIndex = Number.isInteger(parsed) && parsed >= 0 && parsed < images.length ? parsed : 0;
  const current = images[imageIndex];
  const updateImage = (index: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("image", String(index));
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="flex flex-col-reverse gap-3 md:flex-row md:items-start">
        {images.length > 1 && (
          <div className="flex shrink-0 flex-row gap-2 overflow-x-auto pb-1 md:max-h-[460px] md:w-[76px] md:flex-col md:overflow-y-auto md:overflow-x-hidden">
            {images.map((image, index) => (
              <button key={`${image.src}-${index}`} type="button" onClick={() => updateImage(index)}
                aria-label={`View product image ${index + 1}`} aria-pressed={index === imageIndex}
                className={`relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-xl border-2 bg-[#f0e3cc] p-1 transition ${index === imageIndex ? "border-[#55258a]" : "border-[#e8dfd2] hover:border-[#b69bcc]"}`}>
                <Image src={image.src} alt={image.altText || `Product image ${index + 1}`} fill sizes="70px" className="object-contain p-1" />
              </button>
            ))}
          </div>
        )}
        <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#e8dfd2] bg-[#f0e3cc]">
          <div className="relative aspect-[4/5] w-full max-h-[480px]">
            {current && <Image src={current.src} alt={current.altText || "Product image"} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-contain p-2 sm:p-3" />}
          </div>
          {current && <button type="button" onClick={() => setExpanded(true)} aria-label="Enlarge product image" className="absolute right-3 top-3 rounded-full bg-white/95 p-2 text-[#55258a] shadow"><ArrowsPointingOutIcon className="h-5 w-5" /></button>}
          {images.length > 1 && <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/95 px-2 py-1 shadow">
            <button type="button" onClick={() => updateImage((imageIndex - 1 + images.length) % images.length)} aria-label="Previous image" className="rounded-full p-2 hover:bg-[#f0e3cc]"><ArrowLeftIcon className="h-4 w-4" /></button>
            <span className="text-xs font-semibold tabular-nums">{imageIndex + 1} / {images.length}</span>
            <button type="button" onClick={() => updateImage((imageIndex + 1) % images.length)} aria-label="Next image" className="rounded-full p-2 hover:bg-[#f0e3cc]"><ArrowRightIcon className="h-4 w-4" /></button>
          </div>}
        </div>
      </div>
      {expanded && current && <div role="dialog" aria-modal="true" aria-label="Enlarged product image" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6" onClick={() => setExpanded(false)}>
        <button type="button" onClick={() => setExpanded(false)} className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold">Close ✕</button>
        <div className="relative h-full w-full max-w-5xl" onClick={(event) => event.stopPropagation()}><Image src={current.src} alt={current.altText || "Product image enlarged"} fill sizes="100vw" className="object-contain" /></div>
      </div>}
    </>
  );
}
