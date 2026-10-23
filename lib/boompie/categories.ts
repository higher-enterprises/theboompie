
/** BOOMPIE storefront taxonomy. `collection` is the Shopify collection handle. */

export type BoompieCategory = {
  name: string;
  slug: string;
  collection?: string;
  description?: string;
  children?: BoompieCategory[];
};

export const categories: BoompieCategory[] = [
  {
    name: 'Clothing',
    slug: 'clothing',
    collection: 'clothing',
    children: [
      {
        name: 'Womens Clothing',
        slug: 'womens-clothing',
        collection: 'womens-clothing',
        children: [
          { name: 'Dresses', slug: 'dresses', collection: 'womens-dresses' },
          { name: 'Jeans', slug: 'jeans', collection: 'womens-jeans' },
          { name: 'Tops', slug: 'tops', collection: 'womens-tops' }
        ]
      },
      {
        name: 'Mens Clothing',
        slug: 'mens-clothing',
        collection: 'mens-clothing',
        children: [
          { name: 'Shirts', slug: 'shirts', collection: 'mens-shirts' },
          { name: 'Jeans', slug: 'jeans', collection: 'mens-jeans' },
          { name: 'Tops', slug: 'tops', collection: 'mens-tops' }
        ]
      },
      {
        name: 'Girls Clothing',
        slug: 'girls-clothing',
        collection: 'girls-clothing',
        children: [
          { name: 'Jeans', slug: 'jeans', collection: 'girls-jeans' },
          { name: 'Tops', slug: 'tops', collection: 'girls-tops' }
        ]
      },
      {
        name: 'Boys Clothing',
        slug: 'boys-clothing',
        collection: 'boys-clothing',
        children: [
          { name: 'Jeans', slug: 'jeans', collection: 'boys-jeans' },
          { name: 'Tops', slug: 'tops', collection: 'boys-tops' }
        ]
      }
    ]
  },
  {
    name: 'Shoes',
    slug: 'shoes',
    collection: 'shoes',
    children: [
      {
        name: 'Womens Shoes',
        slug: 'womens-shoes',
        collection: 'womens-shoes'
      },
      {
        name: 'Mens Shoes',
        slug: 'mens-shoes',
        collection: 'mens-shoes'
      },
      {
        name: 'Girls Shoes',
        slug: 'girls-shoes',
        collection: 'girls-shoes'
      },
       {
        name: 'Boys Shoes',
        slug: 'boys-shoes',
        collection: 'boys-shoes'
      },
    ]
  },
  { name: 'Jewelry', slug: 'jewelry', collection: 'jewelry' },
  { name: 'Decor', slug: 'decor', collection: 'home-decor' },
  { name: 'Games', slug: 'games', collection: 'games' },
  { name: 'Toys', slug: 'toys', collection: 'toys' },
  { name: 'Electronics', slug: 'electronics', collection: 'electronics' },
  { name: 'Books', slug: 'books', collection: 'books' },
  { name: 'Music', slug: 'music', collection: 'music' },
  { name: 'Video', slug: 'video', collection: 'video' },
  {
    name: 'Vintage',
    slug: 'vintage',
    collection: 'vintage',
    children: [
      {
        name: 'Collectibles',
        slug: 'collectibles',
        collection: 'collectibles'
      }
    ]
  },
  {
    name: 'More',
    slug: 'more',
    collection: 'everything-else',
    children: [
      {
        name: 'New Arrivals',
        slug: 'new-arrivals',
        collection: 'new-arrivals'
      },
      {
        name: 'Featured Finds',
        slug: 'featured-finds',
        collection: 'featured-finds'
      },
      {
        name: 'Bargain Basement',
        slug: 'bargain-basement',
        collection: 'bargain-basement'
      }
    ]
  }
];

export type CategoryTrailItem = {
  category: BoompieCategory;
  href: string;
};

/**
 * Short URL aliases for selected nested categories.
 *
 * These routes do not affect the main navigation hierarchy.
 */
const categoryAliases: Record<string, string[]> = {
  'new-arrivals': ['more', 'new-arrivals'],
  'bargain-basement': ['more', 'bargain-basement'],
  'featured-finds': ['more', 'featured-finds'],
};

/**
 * Resolve a category URL to its category and breadcrumb trail.
 *
 * Supports:
 * /shop/games
 * /shop/women/clothing/dresses
 * /shop/more/new-arrivals
 * /shop/new-arrivals
 * /shop/bargain-basement
 */
export function resolveCategory(
  slugs: string[]
): {
  category: BoompieCategory;
  trail: CategoryTrailItem[];
} | null {
  if (!slugs.length) return null;

  const resolvedSlugs =
    slugs.length === 1 && categoryAliases[slugs[0]!]
      ? categoryAliases[slugs[0]!]!
      : slugs;

  let options = categories;
  const trail: CategoryTrailItem[] = [];

  for (const slug of resolvedSlugs) {
    const category = options.find(
      (item) => item.slug === slug
    );

    if (!category) return null;

    trail.push({
      category,
      href: categoryHref(
        trail.map((item) => item.category.slug).concat(slug)
      )
    });

    options = category.children ?? [];
  }

  return {
    category: trail[trail.length - 1]!.category,
    trail
  };
}

/**
 * Generate a storefront category URL.
 */
export function categoryHref(slugs: string[]): string {
  return `/shop/${slugs.map(encodeURIComponent).join('/')}`;
}

/**
 * Preferred direct URLs for selected Shopify collections.
 */
const directCollectionRoutes: Record<string, string> = {
  'new-arrivals': '/shop/new-arrivals',
  'bargain-basement': '/shop/bargain-basement',
  'featured-finds': '/shop/featured-finds'
};

/**
 * Resolve a Shopify collection handle to a BOOMPIE route.
 */
export function collectionHref(handle: string): string {
  // Prefer direct routes for featured collections.
  const directRoute = directCollectionRoutes[handle];

  if (directRoute) {
    return directRoute;
  }

  const visit = (
    nodes: BoompieCategory[],
    parents: string[]
  ): string | undefined => {
    for (const node of nodes) {
      const path = [...parents, node.slug];

      if (node.collection === handle) {
        return categoryHref(path);
      }

      const nested = visit(node.children ?? [], path);

      if (nested) {
        return nested;
      }
    }

    return undefined;
  };

  return (
    visit(categories, []) ??
    `/collections/${encodeURIComponent(handle)}`
  );
}

/**
 * Generate a product detail URL.
 */
export const productHref = (handle: string): string =>
  `/product/${encodeURIComponent(handle)}`;