import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Size Guide | The Boompie', description: 'Find the fit that feels right.' };
const sections = [
  {heading: 'Start with measurements', body: 'Compare the measurements in each listing with a similar item you already own.'},
  {heading: 'Vintage and secondhand sizing', body: 'Sizing conventions vary by brand and decade. A label size may not match modern sizing.'},
  {heading: 'Clothing measurements', body: 'Check chest or bust, waist, hips, length, inseam, and shoulder measurements when available.'},
  {heading: 'Shoes and accessories', body: 'Review listed measurements and any condition notes before purchasing.'},
  {heading: 'Questions about fit?', body: 'Contact Us with a link to the product.'}
];
export default function Page() {return <InfoPage title='Size Guide' subtitle='Find the fit that feels right.' sections={sections} />;}
