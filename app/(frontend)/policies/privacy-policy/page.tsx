import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Privacy Policy | The Boompie', description: 'How The Boompie handles personal information.' };
const sections = [
  {heading: 'Information we collect', body: 'Information may include contact details, order information, device information, and interactions with our storefront.'},
  {heading: 'How information is used', body: 'We use information to operate the store, process purchases, provide support, and communicate where permitted.'},
  {heading: 'Service providers', body: 'Our storefront may use Shopify and other service providers to process transactions and deliver services.'},
  {heading: 'Your rights and choices', body: 'Visit Your Privacy Choices for information on privacy requests.'},
  {heading: 'Complete policy required', body: '[REPLACE WITH THE VERIFIED SHOPIFY-GENERATED PRIVACY POLICY AND ANY REQUIRED BUSINESS-SPECIFIC DISCLOSURES BEFORE PUBLISHING]'}
];
export default function Page() {return <InfoPage title='Privacy Policy' subtitle='How The Boompie handles personal information.' sections={sections} />;}
