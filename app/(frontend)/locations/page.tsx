import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Store Locations | The Boompie', description: 'Find out where to shop The Boompie.' };
const sections = [
  {heading: 'Shopping online', body: 'Browse our collections online any time.'},
  {heading: 'In-person shopping', body: '[ADD VERIFIED STORE ADDRESS, HOURS, AND PICKUP AVAILABILITY]'},
  {heading: 'Questions about pickup?', body: 'Contact Us before traveling to confirm available services.'}
];
export default function Page() {return <InfoPage title='Store Locations' subtitle='Find out where to shop The Boompie.' sections={sections} />;}
