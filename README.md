# Boompie hero + slowly scrolling featured items

Only two components, one stylesheet, and the shopper asset are included. NO `app/page.tsx`, navbar, logo, menu icons, announcement bar, masonry sections, or other homepage files are replaced.

Copy `components/home/` and `public/boompie/home/` into your project.

In your EXISTING homepage, keep all other sections exactly as they are. Import:

```tsx
import { BoompieHero } from "components/home/BoompieHero";
import { FeaturedFinds } from "components/home/FeaturedFinds";
```

Keep your existing Shopify collection fetch. At the existing hero and featured positions render:

```tsx
<BoompieHero />
<FeaturedFinds products={products} rows={2} durationSeconds={65} />
```

`rows={1}` uses 4 products; `rows={2}` uses 8 products in ONE continuous horizontal scrolling strip (not stacked rows). Duration is seconds per cycle; larger is slower. The marquee pauses on hover/focus and becomes manually scrollable for reduced-motion users.

Product routes use `/product/${product.handle}` consistent with the Shopify Commerce starter. Adjust only if your store uses a different product route.

The shopper image is a cropped asset from the earlier supplied design. For a clean high-resolution production hero, replace `public/boompie/home/hero-shopper.webp` with an isolated original image of the same filename.
