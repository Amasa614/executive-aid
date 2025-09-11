import { Metadata } from 'next';
import HomeClient from './HomeClient';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'ExecutiveAid - Hire Virtual Assistants in Ghana for Business Growth',
  description: 'Professional virtual assistant services in Accra, Ghana. Get administrative support, digital marketing, web development, and financial management to scale your business efficiently.',
  keywords: 'virtual assistant Ghana, hire VA Accra, executive support, business assistance, remote virtual assistant, productivity services, digital marketing Ghana, web development Accra',
  authors: [{ name: 'ExecutiveAid' }],
  openGraph: {
    title: 'ExecutiveAid - Professional Virtual Assistant Services in Ghana',
    description: 'Empower your business with reliable virtual assistants from Ghana. Administrative, marketing, and tech support for growth.',
    url: 'https://executiveaid.org',
    type: 'website',
    images: ['/images/group-afro-americans-working-together.jpg'],
  },
  alternates: {
    canonical: 'https://executiveaid.org',
  },
  robots: 'index, follow',
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <HomeClient />
    </>
  );
}