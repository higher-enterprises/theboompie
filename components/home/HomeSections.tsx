import Image from 'next/image';
import Link from 'next/link';
import './home-sections.css';

// Preserve existing homepage imports while loading live Shopify products.
export { BargainBasement } from './BargainBasement';

function ImageTile({src,alt,children,className=''}:{src:string;alt:string;children:React.ReactNode;className?:string}){
  return <div className={`bp-masonry-tile ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 33vw" className="bp-masonry-image"/><div className="bp-masonry-overlay">{children}</div></div>;
}

export function HomeMasonry(){return <section className="bp-home-sections" aria-label="Shop The Boompie">
  <div className="bp-shop-heading">
    <div className="bp-shop-heading-copy">
      <span className="bp-shop-flower" aria-hidden="true">✿</span>
      <div><h2>SHOP THE BOOMPIE</h2><p>Find your next favorite thing.</p></div>
    </div>
    <Link className="bp-shop-all" href="/shop">SHOP ALL DEPARTMENTS <span aria-hidden="true">→</span></Link>
  </div>
  <div className="bp-true-masonry">
    <ImageTile src="/assets/new-arrivals.png" alt="Curated vintage clothing racks" className="bp-arrivals"><h2>NEW<br/>ARRIVALS</h2><Link className="bp-mini-btn purple" href="/search?sort=latest-desc">SHOP NOW</Link></ImageTile>
    <div className="bp-category-panel bp-boomp-panel">
      <Image src="/assets/the-boomp.png" alt="Vintage boombox and vinyl records" fill sizes="(max-width: 700px) 100vw, 65vw" className="bp-masonry-image" />
      <div className="bp-boomp-content"><span className="bp-boomp-eyebrow">THE BOOMPIE PRESENTS</span><h2>THE<br/>BOOMP<span className="bp-boomp-dot">.</span></h2><p>Good finds. Great grooves.</p><Link className="bp-mini-btn purple" href="/search?q=music">EXPLORE MUSIC ♫</Link></div>
    </div>
    <div className="bp-joy-club"><Image src="/assets/joy-club.png" alt="Yellow Boompie shopping bag" fill sizes="(max-width: 600px) 50vw, 25vw" className="bp-club-bag"/><span className="bp-club-flower" aria-hidden="true">✿</span><h2>JOIN THE<br/>JOY CLUB!</h2><p>Get first dibs on new drops, exclusive deals, and a little extra joy delivered to your inbox.</p><Link className="bp-mini-btn yellow" href="/pages/joy-club">SIGN ME UP!</Link></div>
    <div className="bp-daily-deals"><Image src="/assets/good-deals-daily.png" alt="Colorful thrift shop with a neon smiley and clothing rack" fill sizes="(max-width: 600px) 50vw, 25vw" className="bp-masonry-image"/><div className="bp-masonry-overlay"><span className="bp-big-smile" aria-hidden="true">☺</span><h2>GOOD<br/>DEALS<br/>DAILY</h2><p>Check back often for fresh markdowns!</p><Link className="bp-mini-btn purple" href="/search?sort=price-asc">SEE WHAT'S ON SALE</Link></div></div>
    <ImageTile src="/assets/kids-corner.png" alt="Vintage toys and colorful teddy bears" className="bp-kids"><h2>KIDS<br/>CORNER</h2><Link className="bp-mini-btn yellow" href="/search?q=kids">SHOP KIDS</Link></ImageTile>
    <ImageTile src="/assets/home-finds.png" alt="Vintage lamps, houseplants and home decor" className="bp-home-finds"><h2>HOME<br/>FINDS</h2><Link className="bp-mini-btn purple" href="/search?q=home">SHOP HOME</Link></ImageTile>
    <div className="bp-vintage-card">
  <Image
    src="/assets/vintage-finds.png"
    alt="Vintage cameras, records and collectibles"
    fill
    sizes="(max-width: 700px) 100vw, 25vw"
    className="bp-masonry-image"
  /><div className="bp-masonry-overlay"><span aria-hidden="true">✿</span><h2>VINTAGE<br/>GEMS</h2><p>Finds with a story to tell.</p><Link className="bp-mini-btn yellow" href="/search?q=vintage">SHOP VINTAGE</Link></div></div>
  </div>
</section>}

export function HomeValues(){return <><section className="bp-values"><div><span>✿</span><p><strong>THRIFT WITH PURPOSE</strong>Good for you.<br/>Good for our planet.</p></div><div><span>♥</span><p><strong>MADE FOR EVERYONE</strong>Styles, sizes, and<br/>finds for every kind of joy.</p></div><div><span>☺</span><p><strong>SPREAD JOY</strong>Every purchase helps<br/>our community thrive.</p></div><div><span>🌎</span><p><strong>BETTER TOGETHER</strong>Building a kinder,<br/>more sustainable future.</p></div></section>
</>}
