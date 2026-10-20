import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Terms of Service | The Boompie', description: 'Terms for using The Boompie storefront.' };
const sections = [
  {heading: 'Product listings', body: 'We aim to describe products accurately. Pre-loved and vintage items may show wear noted in the listing.'},
  {heading: 'Pricing and availability', body: 'Prices and inventory can change. Items are subject to availability and checkout confirmation.'},
  {heading: 'Orders and payments', body: 'Purchases are subject to the checkout terms and payment methods offered.'},
  {heading: 'Returns and shipping', body: 'Please review the Shipping Policy and Return & Refund Policy.'},
  {heading: 'Complete legal terms required', body: '[REPLACE WITH VERIFIED BUSINESS TERMS, GOVERNING LAW, AND SHOPIFY-GENERATED TERMS BEFORE PUBLISHING]'}
];
export default function Page() {return <InfoPage title='Terms of Service' subtitle='Terms for using The Boompie storefront.' sections={sections} />;}
