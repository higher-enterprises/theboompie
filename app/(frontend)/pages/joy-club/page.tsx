import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Join the Joy Club | The Boompie', description: 'Good finds. Great deals. Greater joy.' };
const sections = [
  {heading: 'Be first to hear', body: 'Get updates about new finds, seasonal collections, and special offers.'},
  {heading: 'Subscribe', body: '[CONNECT THIS PAGE TO SHOPIFY EMAIL SUBSCRIPTIONS OR YOUR EMAIL SERVICE BEFORE PUBLISHING]'},
  {heading: 'Your inbox, your choice', body: 'Marketing emails should include an unsubscribe option and link to the Privacy Policy.'}
];
export default function Page() {return <InfoPage title='Join the Joy Club' subtitle='Good finds. Great deals. Greater joy.' sections={sections} />;}
