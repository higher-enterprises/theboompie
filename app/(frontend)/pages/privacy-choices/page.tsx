import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Your Privacy Choices | The Boompie', description: 'Information about privacy requests and available choices.' };
const sections = [
  {heading: 'Your choices', body: 'Depending on your location, you may have rights to access, correct, delete, or limit certain uses of your personal information.'},
  {heading: 'Make a request', body: '[ADD VERIFIED PRIVACY REQUEST FORM OR CONTACT EMAIL]'},
  {heading: 'Cookies and tracking', body: 'Review the Privacy Policy for details about technologies used on this site.'},
  {heading: 'California privacy rights', body: '[ADD VERIFIED NOTICE AND OPT-OUT MECHANISM IF APPLICABLE; DO NOT PUBLISH A NONFUNCTIONAL OPT-OUT]'}
];
export default function Page() {return <InfoPage title='Your Privacy Choices' subtitle='Information about privacy requests and available choices.' sections={sections} />;}
