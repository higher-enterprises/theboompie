import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Return Center | The Boompie', description: 'Help with a return or exchange.' };
const sections = [
  {heading: 'Before requesting a return', body: 'Review the Return Policy for eligibility, time limits, and any exceptions. Some pre-loved or final-sale items may have different conditions.'},
  {heading: 'Request assistance', body: 'Contact our support team with your order number, item name, and the reason for your request.'},
  {heading: 'After your request', body: 'Our team will provide next steps and any applicable return instructions. Do not send an item without receiving instructions.'},
  {heading: 'Need your order details?', body: 'Visit My Account to locate your order.'}
];
export default function Page() {return <InfoPage title='Return Center' subtitle='Help with a return or exchange.' sections={sections} />;}
