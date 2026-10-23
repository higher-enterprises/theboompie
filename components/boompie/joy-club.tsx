'use client';

import { Bell, Gift, Heart, Package, PartyPopper, Star, Tag, UsersRound } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import './joy-club.css';

const ASSETS = '/assets/boompie/joyclub';
const interests = ['Clothing', 'Shoes', 'Jewelry', 'Decor', 'Games', 'Toys', 'Electronics', 'Books', 'Music', 'Video', 'Vintage', 'More'];
const perks = [
  { Icon: Tag, label: 'FIRST DIBS', text: 'Be the first to know when new finds hit the shop.', tone: 'hot' },
  { Icon: Gift, label: 'EXCLUSIVE DEALS', text: 'Special offers just for Joy Club members.', tone: 'yellow' },
  { Icon: Heart, label: 'SEASONAL SURPRISES', text: 'Birthday treats and holiday drops.', tone: 'lavender' },
  { Icon: UsersRound, label: 'SHARE YOUR JOY', text: 'Recommendations based on what you love.', tone: 'pink' },
  { Icon: Star, label: 'JOY REWARDS', text: 'Earn points on purchases and redeem them for discounts.', tone: 'green' },
  { Icon: Bell, label: 'WISH LIST ALERTS', text: 'Get notified when items you love arrive.', tone: 'blue' },
  { Icon: PartyPopper, label: 'MEMBER GIVEAWAYS', text: 'Exclusive drawings for merchandise and gift cards.', tone: 'orange' },
  { Icon: Package, label: 'JOY DROPS', text: 'VIP access to limited editions and special collections.', tone: 'mint' },
];
export default function JoyClub() {
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
        </div>
          </section>

      <aside className="jc-signup" aria-label="Joy Club signup">
        <h2 className="jc-signup-heading">Get in on the Joy!</h2>
        <p className="jc-signup-intro">Sign up for new arrivals, exclusive offers, seasonal collections, and member-only surprises.</p>
        <form onSubmit={submit}>
          <label htmlFor="jc-first">First name (optional)</label>
          <input id="jc-first" autoComplete="given-name" placeholder="What should we call you?" value={firstName} onChange={e => setFirstName(e.target.value)} />
          <label htmlFor="jc-email">Email address <span>*</span></label>
          <input id="jc-email" type="email" autoComplete="email" required placeholder="✉  you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
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
        <h2 id="jc-perks-label" className="jc-visually-hidden">Joy Club member benefits</h2>
        <div className="jc-perks-grid">
          {perks.map(({ Icon, label, text, tone }) => (
            <div className="jc-benefit jc-perk-item" key={label}>
              <div className={`jc-icon jc-${tone}`} aria-hidden="true">
                <Icon strokeWidth={2.2} />
              </div>
              <div className="jc-perk-copy">
                <h3>{label}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

  </main>;
}
