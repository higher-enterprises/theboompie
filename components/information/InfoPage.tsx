import Link from 'next/link';
import './information-pages.css';
export type InfoSection = {heading: string; body: string};
export function InfoPage({title,subtitle,sections}:{title:string;subtitle:string;sections:InfoSection[]}) {
 return <div className="bp-info-page"><div className="bp-info-hero"><Link href="/" className="bp-info-back">← BACK TO THE BOOMPIE</Link><span className="bp-info-flower" aria-hidden="true">✿</span><h1>{title}</h1><p>{subtitle}</p></div><div className="bp-info-content">{sections.map((section)=><section key={section.heading} className="bp-info-section"><h2>{section.heading}</h2><p>{section.body}</p></section>)}<div className="bp-info-help">Still need help? <Link href="/pages/contact">Contact Us →</Link></div></div></div>;
}
