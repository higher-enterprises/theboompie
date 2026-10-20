import type { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import './home.css';

type Group = { title: string; subtitle: string; handle: string; tone: string; products: Product[] };
type Props = { groups: Group[]; featuredProducts: Product[] };
const photo = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const categories = [
  { title: 'NEW ARRIVALS', description: 'Fresh finds, every day.', handle: 'new-arrivals', image: 'photo-1489987707025-afc232f7ea0f', theme: 'large' },
  { title: 'SHOES & ACCESSORIES', description: 'The finishing touches.', handle: 'shoes-accessories', image: 'photo-1525966222134-fcfa99b8ae77' },
  { title: 'VINTAGE', description: 'Old-school treasures.', handle: 'vintage', image: 'photo-1461360370896-922624d12aa1' },
  { title: 'KIDS CORNER', description: 'Little things, big smiles.', handle: 'kids', image: 'photo-1558060370-d644479cb6f7' },
  { title: 'HOME FINDS', description: 'Make your space happy.', handle: 'home', image: 'photo-1600210492486-724fe5c67fb0' },
  { title: 'BAGS & MORE', description: 'Carry some joy.', handle: 'bags-accessories', image: 'photo-1547949003-9792a18a2601' },
  { title: 'COLLECTIBLES', description: 'Find something special.', handle: 'collectibles', image: 'photo-1578662996442-48f60103fc96' },
  { title: 'CLOTHING', description: 'Wear it your way.', handle: 'clothing', image: 'photo-1489987707025-afc232f7ea0f' },
];


function Icon({ name }: { name: 'search' | 'user' | 'bag' }) {
  if (name === 'search') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>;
  if (name === 'user') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="7" r="4"/><path d="M4 22v-2a8 8 0 0 1 16 0v2"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 8h16l-1 13H5L4 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>;
}

function Hero() {
  return <section className="bp-hero" aria-label="Welcome to The Boompie">
    <div className="bp-hero-photo"><Image src={photo('photo-1441986300917-64674bd600d8',1800)} unoptimized fill priority sizes="(max-width: 720px) 100vw, 55vw" alt="Warm, colorful clothing boutique"/><span className="bp-photo-flower" aria-hidden="true">✿</span></div>
    <div className="bp-hero-panel"><span className="bp-hero-flower" aria-hidden="true">✿</span><h1>GOOD FINDS.<br/>GREATER <span>J<span className="bp-smile">☺</span>Y.</span></h1><p>Pre-loved treasures. Unbeatable prices.<br/>All for a happier planet.</p><div className="bp-hero-actions"><Link className="bp-btn bp-purple" href="/search?sort=latest-desc">SHOP NEW ARRIVALS →</Link><Link className="bp-btn bp-outline" href="/pages/locations">⌖ FIND A LOCATION</Link></div></div>
  </section>;
}
function money(p: Product) {
  const price = p.priceRange.minVariantPrice;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: price.currencyCode }).format(Number(price.amount));
}
function FeaturedProducts({ products }: { products: Product[] }) {
  return <section className="bp-featured" aria-label="Featured products">
    <div className="bp-featured-heading"><h2>✿ FRESH FINDS ✿</h2><Link href="/collections/featured">SHOP ALL →</Link></div>
    <div className="bp-featured-grid">{products.slice(0,8).map(p => <Link className="bp-featured-card" key={p.handle} href={`/product/${p.handle}`}><div className="bp-featured-image">{p.featuredImage?.url ? <Image src={p.featuredImage.url} alt={p.featuredImage.altText || p.title} fill sizes="(max-width: 600px) 50vw, (max-width: 1000px) 25vw, 25vw"/> : <span className="bp-no-image">COMING SOON</span>}</div><div className="bp-featured-info"><h3>{p.title}</h3><strong>{money(p)}</strong></div><span className="bp-featured-heart" aria-hidden="true">♡</span></Link>)}</div>
    {!products.length && <p className="bp-featured-empty">Featured products will appear here when your Shopify “featured” collection has products.</p>}
  </section>;
}
function CategoryGrid() {
  return <section className="bp-categories" aria-label="Shop by category">{categories.map(c => <Link href={`/collections/${c.handle}`} key={c.title} className={`bp-category ${c.theme || ''}`}><Image src={photo(c.image)} unoptimized alt="" fill sizes="(max-width: 700px) 50vw, 25vw"/><div className="bp-category-copy"><h2>{c.title}</h2><p>{c.description}</p><span className="bp-mini-btn">SHOP NOW →</span></div></Link>)}</section>;
}
function Basement({ groups }: { groups: Group[] }) {
  return <section className="bp-basement"><div className="bp-section-heading"><h2>BARGAIN BASEMENT</h2><p>Crazy good deals. New surprises every day.</p></div><div className="bp-basement-grid">{groups.map(g => <div className={`bp-deal bp-${g.tone}`} key={g.handle}><Link className="bp-deal-heading" href={`/collections/${g.handle}`}><h3>{g.title}</h3><span>{g.subtitle}</span></Link><div className="bp-deal-products">{g.products.length ? g.products.slice(0,4).map(p => <Link href={`/product/${p.handle}`} key={p.handle} className="bp-product"><div className="bp-product-image">{p.featuredImage?.url && <Image src={p.featuredImage.url} alt={p.featuredImage.altText || p.title} fill sizes="120px"/>}</div><span>{p.title}</span><strong>{money(p)}</strong></Link>) : <p className="bp-empty">New finds coming soon.</p>}</div><Link className="bp-mini-btn bp-deal-cta" href={`/collections/${g.handle}`}>SHOP ALL →</Link></div>)}</div></section>;
}
function Values() { return <section className="bp-values"><div><b className="purple">✿</b><span><strong>THRIFT WITH PURPOSE</strong><small>Good for you.<br/>Good for our planet.</small></span></div><div><b className="pink">♥</b><span><strong>MADE FOR EVERYONE</strong><small>Styles, sizes, and<br/>finds for every kind of joy.</small></span></div><div><b className="yellow">☺</b><span><strong>SPREAD JOY</strong><small>Every purchase helps<br/>our community thrive.</small></span></div><div><b className="purple">◎</b><span><strong>BETTER TOGETHER</strong><small>Building a kinder,<br/>more sustainable future.</small></span></div></section>; }
function Benefits() { return <div className="bp-benefits"><span>✧ FREE SHIPPING <small>ON ORDERS $75+</small></span><span>◇ EASY RETURNS <small>30 DAY RETURNS</small></span><span>✧ BUY ONLINE <small>PICK UP IN STORE</small></span><span>✿ NEW FINDS DAILY <small>CHECK BACK OFTEN!</small></span><span>FOLLOW THE JOY ☺</span></div>; }
export function BoompieHome({ groups, featuredProducts }: Props) { return <main className="bp-home"><Hero/><FeaturedProducts products={featuredProducts}/><CategoryGrid/><Basement groups={groups}/><Values/><Benefits/></main>; }
  