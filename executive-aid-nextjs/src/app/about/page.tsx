import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About ExecutiveAid - Virtual Assistant Company in Ghana',
  description: 'Learn about ExecutiveAid, a leading virtual assistant company in Accra, Ghana. Meet our leadership team and discover our mission to empower businesses.',
  keywords: 'ExecutiveAid Ghana, virtual assistant company Accra, VA services Ghana, leadership team, CEO Ebo Mprah, CTO Jeffery Crentsil, CFO Winston Sackey',
  openGraph: {
    title: 'About ExecutiveAid - Virtual Assistant Leadership in Ghana',
    description: 'Discover our mission, vision, and team dedicated to providing top virtual assistant services in Ghana.',
    url: 'https://executiveaid.org/about',
    type: 'website',
    images: ['/images/jeff.jpg'],
  },
  alternates: {
    canonical: 'https://executiveaid.org/about',
  },
  robots: 'index, follow',
};

export default function About() {
  return <AboutClient />;
} 