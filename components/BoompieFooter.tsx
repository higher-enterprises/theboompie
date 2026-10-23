import Image from 'next/image';
import Link from 'next/link';
import './boompie-footer.css';

type FooterLink = { label: string; href: string };
const shop: FooterLink[] = [
  {label:'New Arrivals',href:'/search?sort=latest-desc'},
  {label:'Clothing',href:'/shop/clothing'},
  {label:'Shoes',href:'/shop/shoes'},
  {label:'Jewelry',href:'/shop/jewelry'},
  {label:'Decor',href:'/shop/decor'},
  {label:'Games',href:'/shop/games'},
  {label:'Toys',href:'/shop/toys'},
  {label:'Electronics',href:'/shop/electronics'},
  {label:'Books',href:'/shop/books'},
  {label:'Music',href:'/shop/music'},
  {label:'Vintage',href:'/shop/vintage'},
  {label:'More',href:'/shop/more'},
];
const service: FooterLink[] = [
  {label:'My Account',href:'/account'},
  {label:'Track My Order',href:'/account/orders'},
  {label:'Return Center',href:'/returns'},
  {label:'Contact Us',href:'/contact'},
  {label:'Special Offers',href:'/special-offers'},
  {label:'Gift Cards',href:'/gift-cards'},
  {label:'Size Guide',href:'/size-guide'},
  {label:'Shipping',href:'/policies/shipping-policy'},
  {label:'Condition Guide',href:'/product-condition-guide'},
  {label:'Shopping Help',href:'/shopping-help'},
];
const quick: FooterLink[] = [
  {label:'FAQs',href:'/faqs'},
  {label:'Shipping Policy',href:'/policies/shipping-policy'},
  {label:'Return Policy',href:'/policies/refund-policy'},
  {label:'Privacy Policy',href:'/policies/privacy-policy'},
  {label:'Personal Information Policy',href:'/privacy-choices'},
    {label:'Terms of Service',href:'/policies/terms-of-service'},
  {label:'Accessibility Statement',href:'/accessibility'},
];
function FooterColumn({title,links,twoColumns=false}:{title:string;links:FooterLink[];twoColumns?:boolean}) {
  return <nav className="bp-footer-column" aria-label={title}>
    <h2>{title}</h2>
    <ul className={twoColumns ? "bp-footer-shop-links" : undefined}>{links.map(link => <li key={link.label}><Link href={link.href}>{link.label}</Link></li>)}</ul>
  </nav>;
}
export function BoompieFooter() {
  return <footer className="bp-footer">
    <div className="bp-footer-wave" aria-hidden="true" />
    <span className="bp-footer-flower bp-footer-flower-left" aria-hidden="true">✿</span>
    <span className="bp-footer-flower bp-footer-flower-right" aria-hidden="true">✿</span>
    <svg className="bp-footer-spark bp-footer-spark-left" aria-hidden="true" viewBox="0 0 100 100" width="1em" height="1em" fill="none" style={{ overflow: "visible" }}>
      <g fill="currentColor">
        <ellipse cx="50" cy="24" rx="16" ry="24" />
        <ellipse cx="50" cy="76" rx="16" ry="24" />
        <ellipse cx="24" cy="50" rx="24" ry="16" />
        <ellipse cx="76" cy="50" rx="24" ry="16" />
        <ellipse cx="32" cy="32" rx="15" ry="22" transform="rotate(-45 32 32)" />
        <ellipse cx="68" cy="32" rx="15" ry="22" transform="rotate(45 68 32)" />
        <ellipse cx="32" cy="68" rx="15" ry="22" transform="rotate(45 32 68)" />
        <ellipse cx="68" cy="68" rx="15" ry="22" transform="rotate(-45 68 68)" />
      </g>
      <circle cx="50" cy="50" r="16" fill="#55258a" />
    </svg>
    <svg className="bp-footer-spark bp-footer-spark-right" aria-hidden="true" viewBox="0 0 100 100" width="1em" height="1em" fill="none" style={{ overflow: "visible" }}>
      <g fill="currentColor">
        <ellipse cx="50" cy="24" rx="16" ry="24" />
        <ellipse cx="50" cy="76" rx="16" ry="24" />
        <ellipse cx="24" cy="50" rx="24" ry="16" />
        <ellipse cx="76" cy="50" rx="24" ry="16" />
        <ellipse cx="32" cy="32" rx="15" ry="22" transform="rotate(-45 32 32)" />
        <ellipse cx="68" cy="32" rx="15" ry="22" transform="rotate(45 68 32)" />
        <ellipse cx="32" cy="68" rx="15" ry="22" transform="rotate(45 32 68)" />
        <ellipse cx="68" cy="68" rx="15" ry="22" transform="rotate(-45 68 68)" />
      </g>
      <circle cx="50" cy="50" r="16" fill="#55258a" />
    </svg>
    <div className="bp-footer-inner">
      <div className="bp-footer-grid">
        <div className="bp-footer-brand">
          <Link href="/" aria-label="The Boompie home">
            <Image src="/assets/boompie-logo-inverse.png" alt="The Boompie — Great Finds. Great Deals. Greater Joy." width={750} height={284} className="bp-footer-logo" sizes="(max-width: 720px) 260px, 330px" />
          </Link>
        </div>
        <FooterColumn title="SHOP" links={shop} twoColumns />
        <FooterColumn title="CUSTOMER SERVICE" links={service} twoColumns />
        <FooterColumn title="ABOUT US" links={quick} />
        <div className="bp-footer-join">
          <h2>JOIN THE JOY CLUB</h2>
          <p>Get first dibs on new drops, exclusive deals, and a little extra joy delivered to your inbox.</p>
          <Link
            href="/joy-club"
            className="bp-footer-joy-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              minHeight: '48px',
              padding: '12px 24px',
              backgroundColor: '#ec4899',
              color: '#ffffff',
              borderRadius: '8px',
              fontWeight: 700,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            SIGN ME UP!
          </Link>
          <div className="bp-footer-social" aria-label="Social media">
            <span>FOLLOW THE JOY</span>
            <div className="bp-footer-social-links">
              <Link href="https://www.instagram.com/theboompie" target="_blank" rel="noopener noreferrer" aria-label="The Boompie on Instagram" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.4"/><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/></svg>
              </Link>
              <Link href="https://www.facebook.com/theboompie" target="_blank" rel="noopener noreferrer" aria-label="The Boompie on Facebook" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.9 22v-8.3h2.8l.4-3.3h-3.2V8.3c0-1 .3-1.6 1.7-1.6h1.7V3.8c-.3 0-1.3-.1-2.5-.1-2.6 0-4.4 1.6-4.4 4.6v2.1H7.5v3.3h2.9V22h3.5Z"/></svg>
              </Link>
              <Link href="https://www.pinterest.com/theboompie" target="_blank" rel="noopener noreferrer" aria-label="The Boompie on Pinterest" title="Pinterest">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8 0-1.8.2-2.7l1.3-5.5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.8 0 1.2.6 1.2 1.4 0 .9-.6 2.2-.9 3.5-.3 1.1.5 2 1.6 2 1.9 0 3.4-2 3.4-4.8 0-2.5-1.8-4.2-4.3-4.2-2.9 0-4.6 2.2-4.6 4.5 0 .9.3 1.8.8 2.4l.2.6-.3 1.1c0 .2-.2.3-.5.2-1.3-.6-2.1-2.5-2.1-4.1 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6.1 0 3.7-2.3 6.6-5.4 6.6-1.1 0-2.2-.6-2.6-1.2l-.7 2.6c-.2 1-.9 2.1-1.3 2.9A10 10 0 1 0 12 2Z"/></svg>
              </Link>
              <Link href="https://www.tiktok.com/@theboompie" target="_blank" rel="noopener noreferrer" aria-label="The Boompie on TikTok" title="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.7 2h-3.3v13.3a3.2 3.2 0 1 1-2.8-3.2V8.7a6.6 6.6 0 1 0 6.1 6.6V8.5a8.6 8.6 0 0 0 5.1 1.6V6.8A5.2 5.2 0 0 1 16.7 2Z"/></svg>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      <div className="bp-footer-bottom">
        <span>© {new Date().getFullYear()} The Boompie. All rights reserved.</span>
        <span>Great Finds <b>·</b> Great Deals <b>·</b> Greater Joy</span>
      </div>
    </div>
  </footer>;
}
