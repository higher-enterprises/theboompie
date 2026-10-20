import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Contact Us | The Boompie', description: 'Questions about a find, an order, or The Boompie?' };
const sections = [
  {heading: 'Shopping and product questions', body: 'Share the product name or link, along with any questions about condition, measurements, or availability.'},
  {heading: 'Order support', body: 'Include your order number and a short description of what you need help with.'},
  {heading: 'Contact details', body: '[ADD VERIFIED SUPPORT EMAIL ADDRESS / CONTACT FORM LINK]'},
  {heading: 'Response times', body: '[ADD VERIFIED SUPPORT HOURS AND EXPECTED RESPONSE TIME]'}
];
export default function Page() {return <InfoPage title='Contact Us' subtitle='Questions about a find, an order, or The Boompie?' sections={sections} />;}
