
import { Metadata } from 'next';
import CredentialsClient from './CredentialsClient';

export const metadata: Metadata = {
  title: 'Virtual Assistant Services in Ghana - ExecutiveAid',
  description: 'Professional virtual assistant services in Accra, Ghana: business support, administrative assistance, digital marketing, web development, and more.',
  keywords: 'virtual assistant services Ghana, hire VA Accra, business support Ghana, digital marketing Accra, web development Ghana, administrative assistance',
  openGraph: {
    title: 'Virtual Assistant Services in Ghana - ExecutiveAid',
    description: 'Comprehensive VA services including business support, marketing, web solutions, and administrative help in Ghana.',
    url: 'https://executiveaid.org/credentials',
    type: 'website',
    images: ['/images/person-office-work-day.jpg'],
  },
  alternates: {
    canonical: 'https://executiveaid.org/credentials',
  },
  robots: 'index, follow',
};

export default function Credentials() {
  return <CredentialsClient />;
} 