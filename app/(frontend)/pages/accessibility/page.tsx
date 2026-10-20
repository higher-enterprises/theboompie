import { InfoPage } from 'components/information/InfoPage';
export const metadata = { title: 'Accessibility Statement | The Boompie', description: 'Our commitment to an inclusive shopping experience.' };
const sections = [
  {heading: 'Our approach', body: 'The Boompie aims to make its website usable for people with different abilities, devices, and assistive technologies.'},
  {heading: 'Ongoing improvements', body: 'We welcome feedback on navigation, readability, forms, and other accessibility concerns.'},
  {heading: 'Need assistance?', body: 'Please contact us and describe the page or feature causing difficulty.'},
  {heading: 'Accessibility contact', body: '[ADD VERIFIED ACCESSIBILITY CONTACT METHOD AND ANY FORMAL CONFORMANCE CLAIM ONLY AFTER TESTING]'}
];
export default function Page() {return <InfoPage title='Accessibility Statement' subtitle='Our commitment to an inclusive shopping experience.' sections={sections} />;}
