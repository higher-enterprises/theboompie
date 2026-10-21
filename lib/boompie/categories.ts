/** BOOMPIE storefront taxonomy. `collection` is the Shopify collection handle. */
export type BoompieCategory = {
  name: string;
  slug: string;
  collection?: string;
  description?: string;
  children?: BoompieCategory[];
};

export const categories: BoompieCategory[] = [
  { name: 'Women', slug: 'women', collection: 'womens-clothing', children: [
    { name: 'Clothing', slug: 'clothing', collection: 'womens-clothing', children: [
      { name: 'Dresses', slug: 'dresses', collection: 'womens-dresses' },
      { name: 'Jeans', slug: 'jeans', collection: 'womens-jeans' },
      { name: 'Tops', slug: 'tops', collection: 'womens-tops' }
    ] },
    { name: 'Shoes & Accessories', slug: 'shoes-accessories', collection: 'shoes-accessories' },
    { name: 'Bags', slug: 'bags', collection: 'bags-more' }
  ] },
  { name: 'Men', slug: 'men', collection: 'mens-clothing', children: [
    { name: 'Clothing', slug: 'clothing', collection: 'mens-clothing', children: [
      { name: 'Shirts', slug: 'shirts', collection: 'mens-shirts' },
      { name: 'Jeans', slug: 'jeans', collection: 'mens-jeans' }
    ] }
  ] },
  { name: 'Kids', slug: 'kids', collection: 'kids-corner' },
  { name: 'Decor', slug: 'decor', collection: 'home-decor' },
  { name: 'Games', slug: 'games', collection: 'games' },
  { name: 'Toys', slug: 'toys', collection: 'toys' },
  { name: 'Electronics', slug: 'electronics', collection: 'electronics' },
  { name: 'Books', slug: 'books', collection: 'books' },
    { name: 'Music', slug: 'music', collection: 'music' },
    { name: 'Video', slug: 'video', collection: 'video' },
  { name: 'Vintage', slug: 'vintage', collection: 'vintage', children: [
    { name: 'Collectibles', slug: 'collectibles', collection: 'collectibles' }
  ] },
  { name: 'More', slug: 'more', collection: 'everything-else' }
];

export type CategoryTrailItem = { category: BoompieCategory; href: string };

export function resolveCategory(slugs: string[]): { category: BoompieCategory; trail: CategoryTrailItem[] } | null {
  if (!slugs.length) return null;
  let options = categories;
  const trail: CategoryTrailItem[] = [];
  for (const slug of slugs) {
    const category = options.find((item) => item.slug === slug);
    if (!category) return null;
    trail.push({ category, href: categoryHref(trail.map((item) => item.category.slug).concat(slug)) });
    options = category.children ?? [];
  }
  return { category: trail[trail.length - 1]!.category, trail };
}

export function categoryHref(slugs: string[]): string {
  return `/shop/${slugs.map(encodeURIComponent).join('/')}`;
}

/** Resolve a Shopify collection handle to a BOOMPIE route. */
export function collectionHref(handle: string): string {
  const visit = (nodes: BoompieCategory[], parents: string[]): string | undefined => {
    for (const node of nodes) {
      const path = [...parents, node.slug];
      if (node.collection === handle) return categoryHref(path);
      const nested = visit(node.children ?? [], path);
      if (nested) return nested;
    }
  };
  return visit(categories, []) ?? `/collections/${encodeURIComponent(handle)}`;
}

export const productHref = (handle: string) => `/product/${encodeURIComponent(handle)}`;
