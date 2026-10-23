"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./boompie-mobile-menu.css";

const links = [
  { label: "New Arrivals", href: "/shop/new-arrivals" },
  { label: "Featured Finds", href: "/shop/featured-finds" },
  { label: "Clothing", href: "/shop/clothing" },
  { label: "Shoes", href: "/shop/shoes" },
  { label: "Jewelry", href: "/shop/jewelry" },
  { label: "Decor", href: "/shop/decor" },
  { label: "Games", href: "/shop/games" },
  { label: "Toys", href: "/shop/toys" },
  { label: "Electronics", href: "/shop/electronics" },
  { label: "Books", href: "/shop/books" },
  { label: "Music", href: "/shop/music" },
  { label: "Vintage", href: "/shop/vintage" },
  { label: "Joy Club", href: "/joy-club" },
];

export function BoompieMobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);
  return (
    <div className="bp-mobile-menu">
      <button type="button" className="bp-mobile-menu__toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="bp-mobile-menu-panel" onClick={() => setOpen(!open)}>
        {open ? <span aria-hidden="true">✕</span> : <span className="bp-mobile-menu__bars" aria-hidden="true"><i/><i/><i/></span>}
      </button>
      {open && <button type="button" className="bp-mobile-menu__backdrop" aria-label="Close navigation" onClick={() => setOpen(false)} />}
      <nav id="bp-mobile-menu-panel" className={`bp-mobile-menu__panel${open ? " is-open" : ""}`} aria-label="Mobile shop navigation" aria-hidden={!open}>
        <strong>SHOP THE BOOMPIE</strong>
        {links.map((link) => <Link key={link.href} href={link.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{link.label}</Link>)}
      </nav>
    </div>
  );
}
