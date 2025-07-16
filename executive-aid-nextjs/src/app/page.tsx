import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'ExecutiveAid - Professional Virtual Assistant Services',
  description: 'Empower your business with professional virtual assistant services. We provide administrative support, digital marketing, web development, and financial management.',
  keywords: 'virtual assistant, executive support, business assistance, remote work, productivity, administrative services, digital marketing, web development',
  authors: [{ name: 'ExecutiveAid' }],
  openGraph: {
    title: 'ExecutiveAid - Professional Virtual Assistant Services',
    description: 'Empower your business with professional virtual assistant services. We provide administrative support, digital marketing, web development, and financial management.',
    url: 'https://executiveaid.org',
    type: 'website',
  },
  alternates: {
    canonical: 'https://executiveaid.org',
  },
};

export default function Home() {
  return <HomeClient />;
}