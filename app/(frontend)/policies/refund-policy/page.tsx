import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Return & Refund Policy | The Boompie', description: 'Review these terms before placing an order.' };
const sections = [
  {heading: 'Return eligibility', body: '[DEFINE ELIGIBLE ITEMS, CONDITION REQUIREMENTS, AND RETURN WINDOW]'},
  {heading: 'Final-sale and pre-loved items', body: '[DEFINE ANY EXCEPTIONS FOR VINTAGE, ONE-OF-A-KIND, PERSONAL CARE, OR CLEARANCE PRODUCTS]'},
  {heading: 'Starting a return', body: 'Contact the Return Center with your order number before shipping anything back.'},
  {heading: 'Return shipping', body: '[SPECIFY WHO PAYS RETURN SHIPPING AND WHETHER LABELS ARE PROVIDED]'},
  {heading: 'Refunds and exchanges', body: '[DEFINE REFUND METHOD, PROCESSING TIME, AND EXCHANGE AVAILABILITY]'}
];
export default function Page() {return <InfoPage title='Return & Refund Policy' subtitle='Review these terms before placing an order.' sections={sections} />;}
