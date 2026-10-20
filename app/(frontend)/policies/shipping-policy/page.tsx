import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Shipping Policy | The Boompie', description: 'Information about how orders are shipped.' };
const sections = [
  {heading: 'Processing times', body: '[ADD VERIFIED ORDER PROCESSING WINDOW]'},
  {heading: 'Shipping options and charges', body: 'Available methods and costs should be displayed at checkout. [CONFIRM CARRIERS, SERVICE AREAS, AND RATE RULES]'},
  {heading: 'Tracking', body: 'When tracking is available, shipment details will be provided through your order information.'},
  {heading: 'Delivery questions', body: 'Contact Us with your order number if you need help with a shipment.'},
  {heading: 'Lost or damaged shipments', body: '[ADD VERIFIED PROCESS FOR REPORTING LOST OR DAMAGED ORDERS]'}
];
export default function Page() {return <InfoPage title='Shipping Policy' subtitle='Information about how orders are shipped.' sections={sections} />;}
