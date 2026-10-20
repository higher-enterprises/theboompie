import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Special Offers | The Boompie', description: 'A little more joy for less.' };
const sections = [
  {heading: 'Shop current markdowns', body: 'Browse our Sale selection for currently discounted finds.'},
  {heading: 'Limited-time offers', body: 'Promotions may change and are subject to the terms shown with each offer.'},
  {heading: 'Joy Club', body: 'Join the Joy Club to hear about new arrivals and promotions.'},
  {heading: 'Promotion terms', body: '[ADD ANY CURRENT COUPON TERMS, EXCLUSIONS, AND EXPIRATION DATES]'}
];
export default function Page() {return <InfoPage title='Special Offers' subtitle='A little more joy for less.' sections={sections} />;}
