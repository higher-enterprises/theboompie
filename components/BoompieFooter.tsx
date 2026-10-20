import Image from 'next/image';
import Link from 'next/link';
import './boompie-footer.css';

type FooterLink = { label: string; href: string };
const shop: FooterLink[] = [
  {label:'New Arrivals',href:'/search?sort=latest-desc'},
  {label:'Women',href:'/shop/women'},
  {label:'Men',href:'/shop/men'},
  {label:'Kids',href:'/shop/kids'},
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
  {label:'Return Center',href:'/pages/returns'},
  {label:'Contact Us',href:'/pages/contact'},
  {label:'Size Guide',href:'/pages/size-guide'},
  {label:'Special Offers',href:'/pages/special-offers'},
  {label:'Gift Cards',href:'/collections/gift-cards'},
  {label:'Store Locator',href:'/pages/locations'},
];
const quick: FooterLink[] = [
  {label:'FAQs',href:'/pages/faqs'},
  {label:'Shipping Policy',href:'/policies/shipping-policy'},
  {label:'Return Policy',href:'/policies/refund-policy'},
  {label:'Privacy Policy',href:'/policies/privacy-policy'},
  {label:'Terms of Service',href:'/policies/terms-of-service'},
  {label:'Accessibility Statement',href:'/pages/accessibility'},
  {label:'Do Not Sell or Share My Personal Information',href:'/pages/privacy-choices'},
];
function FooterColumn({title,links}:{title:string;links:FooterLink[]}) {
  return <nav className="bp-footer-column" aria-label={title}>
    <h2>{title}</h2>
    <ul>{links.map(link => <li key={link.label}><Link href={link.href}>{link.label}</Link></li>)}</ul>
  </nav>;
}
export function BoompieFooter() {
  return <footer className="bp-footer">
    <div className="bp-footer-wave" aria-hidden="true" />
    <span className="bp-footer-flower bp-footer-flower-left" aria-hidden="true">✿</span>
    <span className="bp-footer-flower bp-footer-flower-right" aria-hidden="true">✿</span>
    <span className="bp-footer-spark bp-footer-spark-left" aria-hidden="true">✳</span>
    <span className="bp-footer-spark bp-footer-spark-right" aria-hidden="true">✳</span>
    <div className="bp-footer-inner">
      <div className="bp-footer-grid">
        <div className="bp-footer-brand">
          <Link href="/" aria-label="The Boompie home">
            <Image src="/assets/boompie-logo-inverse.png" alt="The Boompie — Great Finds. Great Deals. Greater Joy." width={750} height={284} className="bp-footer-logo" sizes="(max-width: 720px) 260px, 330px" />
          </Link>
        </div>
        <FooterColumn title="SHOP" links={shop} />
        <FooterColumn title="CUSTOMER SERVICE" links={service} />
        <FooterColumn title="QUICK LINKS" links={quick} />
        <div className="bp-footer-join">
          <h2>JOIN THE JOY CLUB</h2>
          <p>Get first dibs on new drops, exclusive deals, and a little extra joy delivered to your inbox.</p>
          <form action="/pages/joy-club" method="get" className="bp-footer-signup">
            <label className="bp-sr-only" htmlFor="bp-footer-email">Email address</label>
            <input id="bp-footer-email" type="email" name="email" placeholder="Your email address" required autoComplete="email" />
            <button type="submit">SIGN UP</button>
          </form>
          <div className="bp-footer-social" aria-label="Social media">
            <span>FOLLOW THE JOY</span>
            <Link href="/pages/social" aria-label="Our social channels">◎ &nbsp;♪ &nbsp;♡</Link>
          </div>
          <div className="bp-footer-payments">
            <h3>WE ACCEPT</h3>
            <p>Visa &nbsp; · &nbsp; Mastercard &nbsp; · &nbsp; American Express &nbsp; · &nbsp; PayPal &nbsp; · &nbsp; Shop Pay</p>
          </div>
        </div>
      </div>
      <div className="bp-footer-bottom">
        <span>© {new Date().getFullYear()} The Boompie. All rights reserved.</span>
        <span>Great Finds <b>·</b> Great Deals <b>·</b> Greater Joy <b>·</b> People <b>·</b> Planet <b>·</b> Purpose</span>
      </div>
    </div>
  </footer>;
}
