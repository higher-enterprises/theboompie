"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = { label: string; href: string };

export default function BoompieMobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-[70] shrink-0 lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="boompie-mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-md border-0 bg-transparent text-[#55258a]"
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
        )}
      </button>
      {open && (
        <nav
          id="boompie-mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 top-full z-[80] mt-2 w-[min(82vw,320px)] rounded-xl border border-[#55258a]/20 bg-[#fffaf0] p-3 shadow-xl"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-bold text-[#55258a] hover:bg-[#f2e6ff]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
