import { Metadata } from 'next';
import WebSolutionsClient from './WebSolutionsClient';

export const metadata: Metadata = {
  title: 'Web Development Solutions in Ghana - ExecutiveAid Portfolio',
  description: 'Explore ExecutiveAid\'s web development portfolio in Ghana: CRM systems, inventory management, professional websites, and booking platforms.',
  keywords: 'web development Ghana, CRM Ghana, inventory management Accra, professional website Ghana, appointment booking system',
  openGraph: {
    title: 'Web Solutions Portfolio in Ghana - ExecutiveAid',
    description: 'Live production web systems including Razorbill CRM, Inventory Management, and more from Ghana-based developers.',
    url: 'https://executiveaid.org/web-solutions',
    type: 'website',
    images: ['/images/razorbill IMS.png'],
  },
  alternates: {
    canonical: 'https://executiveaid.org/web-solutions',
  },
  robots: 'index, follow',
};

export default function WebSolutions() {
  return <WebSolutionsClient />;
} 