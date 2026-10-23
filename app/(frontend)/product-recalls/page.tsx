import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Product Recalls | The Boompie', description: 'Important product safety information.' };
const sections = [
  {heading: 'Safety first', body: 'We take product safety seriously. If a product sold by The Boompie is affected by a known recall, we will provide relevant information here.'},
  {heading: 'Current notices', body: '[ADD VERIFIED PRODUCT RECALL NOTICES OR A CONFIRMED NO-CURRENT-NOTICES STATEMENT]'},
  {heading: 'Report a concern', body: 'Contact Us with the product name, photos, and your order information.'},
  {heading: 'Official recall information', body: 'For U.S. consumer product recalls, consult the Consumer Product Safety Commission at cpsc.gov/Recalls.'}
];
export default function Page() {return <InfoPage title='Product Recalls' subtitle='Important product safety information.' sections={sections} />;}
