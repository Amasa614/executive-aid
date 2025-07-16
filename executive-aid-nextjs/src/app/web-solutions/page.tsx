import { Metadata } from 'next';
import WebSolutionsClient from './WebSolutionsClient';

export const metadata: Metadata = {
  title: 'Web Solutions Portfolio - ExecutiveAid',
  description: 'Explore our live production systems: Razorbill CRM, Inventory Management, Nepakie Professional Website, and Appointment Booking Platform.',
  keywords: 'web development portfolio, CRM system, inventory management, professional website, appointment booking, live production systems',
  openGraph: {
    title: 'Web Solutions Portfolio - ExecutiveAid',
    description: 'Explore our live production systems: Razorbill CRM, Inventory Management, Nepakie Professional Website, and Appointment Booking Platform.',
    url: 'https://executiveaid.org/web-solutions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://executiveaid.org/web-solutions',
  },
};

export default function WebSolutions() {
  return <WebSolutionsClient />;
} 