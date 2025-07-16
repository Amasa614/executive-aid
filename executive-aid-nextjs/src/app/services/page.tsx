import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Virtual Assistant Services - ExecutiveAid',
  description: 'Comprehensive virtual assistant services including business support, marketing, web development, financial management, and administrative assistance.',
  keywords: 'virtual assistant services, business support, digital marketing, web development, financial management, administrative assistance, project management',
  openGraph: {
    title: 'Virtual Assistant Services - ExecutiveAid',
    description: 'Comprehensive virtual assistant services including business support, marketing, web development, financial management, and administrative assistance.',
    url: 'https://executiveaid.org/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://executiveaid.org/services',
  },
};

export default function Services() {
  return <ServicesClient />;
} 