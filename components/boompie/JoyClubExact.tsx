'use client';

import { useState, type FormEvent } from 'react';
import { Gift, Heart, Shirt, UsersRound, Star, Tag, ArrowRight } from 'lucide-react';
import './joy-club-exact.css';

const ASSETS = '/assets/boompie/joyclub';
const interests = ['Fashion', 'Vintage', 'Home & Decor', 'Games & Toys', 'Electronics', 'Books & Music'];
const perks = [
  { Icon: Tag, label: 'FIRST DIBS ON NEW ARRIVALS', text: 'Be the first to know when new finds hit the shop.', tone: 'hot' },
  { Icon: Gift, label: 'EXCLUSIVE MEMBER DEALS', text: 'Special offers just for Joy Club members.', tone: 'yellow' },
  { Icon: Heart, label: 'SEASONAL SURPRISES', text: 'Birthday treats and holiday drops.', tone: 'lavender' },
  { Icon: UsersRound, label: 'A COMMUNITY THAT SHARES JOY', text: 'Recommendations based on what you love.', tone: 'pink' },
];
const reasons = [
  { Icon: Tag, label: 'NEW ARRIVALS', text: 'See new finds first.', tone: 'pink' },
  { Icon: Gift, label: 'MEMBER OFFERS', text: 'Exclusive deals.', tone: 'pink' },
  { Icon: Shirt, label: 'STYLE IDEAS', text: 'Get inspired.', tone: 'pink' },
  { Icon: UsersRound, label: 'COMMUNITY SPOTLIGHT', text: 'Real people, real finds.', tone: 'lavender' },
  { Icon: Star, label: 'AND MORE!', text: 'Surprises all year long.', tone: 'yellow' },
];
const polaroids = [
  ['book-haul.png', 'Book haul'],
  ['level-up.png', 'Gaming find'],
  ['pup-love.png', 'Puppy find'],
  ['perfect-space.png', 'Home decor find'],
  ['good-find.png', 'Fashion find'],
];

export default function JoyClubExact() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  function toggleInterest(item: string) {
    setSelected((current) => current.includes(item) ? current.filter((x) => x !== item) : [...current, item]);
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) { setStatus('Please agree to receive Joy Club emails.'); return; }
    setSending(true); setStatus('');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, birthday, interests: selected, consent: true }),
      });
      if (!response.ok) throw new Error('Unable to sign up right now. Please try again.');
      setStatus('You’re in! Welcome to the Joy Club.');
      setEmail(''); setFirstName(''); setBirthday(''); setSelected([]); setConsent(false);
    } catch (err) { setStatus(err instanceof Error ? err.message : 'Please try again.'); }
    finally { setSending(false); }
  }

  return <main className="jc-page">
    <div className="jc-top">
      <section className="jc-hero" aria-label="Join the Joy Club">

        <div className="jc-hero-art">
          <img className="jc-hero-shopper" src={`${ASSETS}/joy-club-shopper-foreground.png`} alt="Happy shopper holding a yellow Boompie tote" />
        </div>
        <div className="jc-hero-copy">
          <img className="jc-hero-title" src={`${ASSETS}/joy-club-standalone.png`} alt="Joy Club" />
          <h1>Good finds. Great deals.<br />Greater joy.</h1>
          <p>Sign up for new arrivals, exclusive offers, seasonal collections, and member-only surprises. Be part of a community that celebrates the joy of secondhand finds.</p>
        </div>
        <img className="jc-bag-foreground" src={`${ASSETS}/joy-club-shopper-foreground.png`} alt="" aria-hidden="true" />
      </section>

      <aside className="jc-signup" aria-label="Joy Club signup">
        <img className="jc-signup-heading" src={`${ASSETS}/join-today-title.png`} alt="Join today" />
        <form onSubmit={submit}>
          <label htmlFor="jc-email">Email address <span>*</span></label>
          <input id="jc-email" type="email" autoComplete="email" required placeholder="✉  you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          <label htmlFor="jc-first">First name (optional)</label>
          <input id="jc-first" autoComplete="given-name" placeholder="What should we call you?" value={firstName} onChange={e => setFirstName(e.target.value)} />
          <label htmlFor="jc-birthday">Birthday (optional)</label>
          <input id="jc-birthday" placeholder="MM/DD" inputMode="numeric" value={birthday} onChange={e => setBirthday(e.target.value)} />
          <fieldset><legend>What kinds of finds make you happy? (optional)</legend>
            <div className="jc-interests">{interests.map(item => <label key={item} className="jc-interest"><input type="checkbox" checked={selected.includes(item)} onChange={() => toggleInterest(item)} />{item}</label>)}</div>
          </fieldset>
          <label className="jc-consent"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} /> Email me new arrivals, special offers, and Joy Club updates.</label>
          <button className="jc-image-button" type="submit" disabled={sending} aria-label="Join the Joy Club"><img src={`${ASSETS}/join-the-joy-club-button.png`} alt="" />{sending && <span className="jc-button-loading">Joining…</span>}</button>
          <p className="jc-privacy">We respect your privacy. You can unsubscribe anytime.</p>
          {status && <p className="jc-form-status" role="status">{status}</p>}
        </form>
      </aside>

      <section className="jc-perks" aria-labelledby="jc-perks-label">
        <h2 id="jc-perks-label" className="jc-image-heading"><img src={`${ASSETS}/member-perks-title.png`} alt="Member Perks" /></h2>
        <div className="jc-perks-grid">{perks.map(({ Icon, label, text, tone }) => <div className="jc-benefit" key={label}>
          <div className={`jc-icon jc-${tone}`}><Icon strokeWidth={2.2} /></div><h3>{label}</h3><p>{text}</p>
        </div>)}</div>
      </section>
    </div>

    <section className="jc-community" aria-labelledby="jc-community-label">
      <div className="jc-community-content">
        <h2 id="jc-community-label" className="jc-image-heading"><img src={`${ASSETS}/community-title.png`} alt="A community that celebrates great finds" /></h2>
        <p>The Joy Club is more than emails. It's real people, real finds, and a little extra joy. Join today and be part of something bigger.</p>
        <a className="jc-community-link" href="/pages/share-your-joy" aria-label="Real people. Real joy. Explore community stories"><img src={`${ASSETS}/real-people-real-joy.png`} alt="" /></a>
      </div>
      <div className="jc-polaroids" aria-label="Community finds">{polaroids.map(([filename, label], i) => <div className={`jc-polaroid jc-polaroid-${i+1}`} key={filename}><img src={`${ASSETS}/polaroids/${filename}`} alt={label} /></div>)}</div>
    </section>

    <section className="jc-why" aria-labelledby="jc-why-label">
      <h2 id="jc-why-label" className="jc-image-heading"><img src={`${ASSETS}/why-join-title.png`} alt="Why Join?" /></h2>
      <div className="jc-why-grid">{reasons.map(({ Icon, label, text, tone }) => <div className="jc-benefit" key={label}>
        <div className={`jc-icon jc-${tone}`}><Icon strokeWidth={2.2} /></div><h3>{label}</h3><p>{text}</p>
      </div>)}</div>
    </section>
  </main>;
}
