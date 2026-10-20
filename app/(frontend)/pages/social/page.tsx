import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Follow the Joy | The Boompie', description: 'Keep up with The Boompie.' };
const sections = [
  {heading: 'New arrivals and behind-the-scenes finds', body: 'Follow our official social channels for fresh discoveries, inspiration, and community news.'},
  {heading: 'Official accounts', body: '[ADD VERIFIED INSTAGRAM, TIKTOK, FACEBOOK, YOUTUBE, AND PINTEREST LINKS]'}
];
export default function Page() {return <InfoPage title='Follow the Joy' subtitle='Keep up with The Boompie.' sections={sections} />;}
