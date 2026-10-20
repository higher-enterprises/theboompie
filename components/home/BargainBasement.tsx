import Image from 'next/image';
import Link from 'next/link';
import './bargain-products.css';

/**
 * Server component. Shopify Storefront API collection handles are configured below.
 * Import this component into your homepage and remove the old BargainBasement
 * function and hardcoded bargainGroups array from HomeSections.tsx.
 */
const GROUPS = [
  { label: '$5 & UNDER', color: 'gold', handle: 'five-and-under' },
  { label: '$5–$10 FINDS', color: 'purple', handle: 'five-to-ten' },
  { label: '$10–$20 STEALS', color: 'pink', handle: 'ten-to-twenty' },
  { label: 'VINTAGE GEMS', color: 'olive', handle: 'vintage-gems' },
] as const;

type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  featuredImage: { url: string; altText: string | null } | null;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  availableForSale: boolean;
};

type CollectionResponse = {
  data?: {
    collection?: {
      products: { nodes: ShopifyProduct[] };
    } | null;
  };
  errors?: { message: string }[];
};

const COLLECTION_QUERY = `
  query BargainCollection($handle: String!) {
    collection(handle: $handle) {
      products(first: 40, sortKey: BEST_SELLING) {
        nodes {
          id
          handle
          title
          availableForSale
          featuredImage { url altText }
          priceRange { minVariantPrice { amount currencyCode } }
        }
      }
    }
  }
`;

async function getCollectionProducts(handle: string): Promise<ShopifyProduct[]> {
  // Set these in .env.local (or map them to your existing Shopify env vars).
  const domain = process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  if (!domain || !token) {
    console.error('Bargain Basement: missing Shopify store domain or Storefront API token');
    return [];
  }
  const hostname = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
  try {
    const response = await fetch(`https://${hostname}/api/2026-07/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': token,
      },
      body: JSON.stringify({ query: COLLECTION_QUERY, variables: { handle } }),
      next: { revalidate: 300 },
    });
    if (!response.ok) throw new Error(`Shopify HTTP ${response.status}`);
    const json = (await response.json()) as CollectionResponse;
    if (json.errors?.length) throw new Error(json.errors.map((e) => e.message).join('; '));
    return (json.data?.collection?.products.nodes || [])
      .filter((p) => p.availableForSale)
      .slice(0, 8);
  } catch (error) {
    console.error(`Bargain Basement: failed to load collection ${handle}`, error);
    return [];
  }
}

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: currencyCode,
    maximumFractionDigits: 2,
  }).format(Number(amount));
}

export async function BargainBasement() {
  const collections = await Promise.all(
    GROUPS.map(async (group) => ({ ...group, products: await getCollectionProducts(group.handle) }))
  );

  return (
    <section className="bp-bargain" aria-labelledby="bp-bargain-title">
      <div className="bp-bargain-heading">
        <h2 id="bp-bargain-title">✳ BARGAIN BASEMENT ✳</h2>
        <p>Crazy good deals. New surprises every day.</p>
      </div>
      <div className="bp-bargain-grid">
        {collections.map((group) => (
          <div className="bp-bargain-group" key={group.handle}>
            <h3 className={`bp-group-${group.color}`}>{group.label}</h3>
            <div className="bp-bargain-items">
              {group.products.length > 0 ? (
                group.products.map((product) => (
                  <Link href={`/products/${product.handle}`} key={product.id} className="bp-bargain-product">
                    <div className="bp-bargain-product-image">
                      {product.featuredImage ? (
                        <Image
                          src={product.featuredImage.url}
                          alt={product.featuredImage.altText || product.title}
                          fill
                          sizes="(max-width: 600px) 45vw, (max-width: 1000px) 22vw, 12vw"
                          unoptimized
                        />
                      ) : (
                        <span aria-hidden="true">✿</span>
                      )}
                    </div>
                    <strong>{product.title}</strong>
                    <span className="bp-bargain-price">
                      {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                    </span>
                  </Link>
                ))
              ) : (
                <p
                  className="bp-bargain-empty"
                  style={{
                    gridColumn: '1 / -1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    minHeight: 100,
                    margin: 0,
                    padding: '20px 8px',
                    textAlign: 'center',
                    fontSize: 13,
                    fontWeight: 500,
                    lineHeight: 1.5,
                    color: '#755d46',
                  }}
                >
                  New finds coming soon!
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
