import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Frequently Asked Questions | The Boompie', description: 'Answers to common questions about shopping The Boompie.' };
const sections = [
  {heading: 'Are items new or pre-loved?', body: 'The Boompie specializes in thrifted and pre-loved finds. Check each product description for its condition and details.'},
  {heading: 'Are the items one of a kind?', body: 'Many thrift and vintage items are available in limited quantities. Availability is shown on each product page.'},
  {heading: 'How can I check my order?', body: 'Sign in to My Account and view your orders. You can also contact us with your order number.'},
  {heading: 'Can I return an item?', body: 'Please review our Return Policy before making a purchase. Eligibility may vary by item.'},
  {heading: 'How do I find my size?', body: 'Review the product measurements and our Size Guide. Vintage sizing can differ from modern sizing.'},
  {heading: 'How do I contact you?', body: 'Visit Contact Us for the latest support information.'}
];
export default function Page() {return <InfoPage title='Frequently Asked Questions' subtitle='Answers to common questions about shopping The Boompie.' sections={sections} />;}
