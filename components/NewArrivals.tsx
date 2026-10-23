import { Titan_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import './new-arrivals.css';

const titanOne = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });

type Product = { id:string; handle:string; title:string; image?:{url:string;altText:string|null}|null; price:string; currency:string };

const query = `query NewArrivals($handle:String!){collection(handle:$handle){products(first:7,sortKey:CREATED,reverse:true){nodes{id handle title featuredImage{url altText} priceRange{minVariantPrice{amount currencyCode}}}}}}`;

async function loadProducts(): Promise<Product[]> {
  const domain = process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  if (!domain || !token) return [];
  const host = domain.replace(/^https?:\/\//,'').replace(/\/$/,'');
  try {
    const response = await fetch(`https://${host}/api/2025-10/graphql.json`, {
      method:'POST', headers:{'Content-Type':'application/json','X-Shopify-Storefront-Access-Token':token},
      body:JSON.stringify({query,variables:{handle:'new-arrivals'}}), next:{revalidate:300}
    });
    if (!response.ok) return [];
    const json = await response.json();
    if (json.errors) { console.error('New Arrivals Shopify query:',json.errors); return []; }
    return (json.data?.collection?.products?.nodes ?? []).map((p:any)=>({
      id:p.id,handle:p.handle,title:p.title,image:p.featuredImage,
      price:p.priceRange.minVariantPrice.amount,currency:p.priceRange.minVariantPrice.currencyCode
    }));
  } catch (err) { console.error('New Arrivals fetch:',err); return []; }
}

const accents = ['purple', 'pink', 'yellow', 'purple'] as const;
const symbols = ['✿', '♡', '☺', '★'];

function ProductCard({product,large=false,index}:{product:Product;large?:boolean;index:number}) {
  const price = new Intl.NumberFormat('en-US',{style:'currency',currency:product.currency}).format(Number(product.price));
  return <Link href={`/product/${product.handle}`} className={`bpna-product ${large?'bpna-large':''}`}>
    <div className="bpna-photo">{product.image ? <Image src={product.image.url} alt={product.image.altText || product.title} fill sizes={large?'(max-width: 700px) 100vw, 32vw':'(max-width: 700px) 50vw, 20vw'} /> : <span className="bpna-no-image">Photo coming soon</span>}</div>
    <div className={`bpna-info bpna-info-${accents[index % accents.length]}`}><div className="bpna-info-copy"><strong className="bpna-title">{product.title}</strong><span className="bpna-price">{price}</span></div><span className="bpna-symbol" aria-hidden="true">{symbols[index % symbols.length]}</span></div>
  </Link>;
}

export async function NewArrivals(){
  const products=await loadProducts();
  return <section className="bpna-section" aria-labelledby="bpna-title">
    <div className="bpna-heading"><div className="bpna-heading-copy"><span className="bpna-flower" aria-hidden="true">✿</span><div><h2 id="bpna-title" className={titanOne.className}>NEW ARRIVALS</h2><p>Fresh finds. Just in. Don’t miss out!</p></div></div><Link className="bpna-shop-all" href="/shop/new-arrivals">SHOP ALL NEW ARRIVALS <span aria-hidden="true">→</span></Link></div>
    {products.length ? <>
      <div className="bpna-grid bpna-desktop-grid">{products.map((p,i)=><ProductCard key={p.id} product={p} index={i} large={i===0}/>)}</div>
      <div className="bpna-mobile-list">
        <ProductCard product={products[0]!} index={0} large />
        {Array.from({length: Math.ceil((products.length - 1) / 2)}, (_, row) => (
          <div className="bpna-mobile-row" key={row}>
            {products.slice(1 + row * 2, 3 + row * 2).map((p, i) => (
              <ProductCard key={p.id} product={p} index={1 + row * 2 + i} />
            ))}
          </div>
        ))}
      </div>
    </> : <div className="bpna-empty">New finds coming soon!</div>}
  </section>;
}
