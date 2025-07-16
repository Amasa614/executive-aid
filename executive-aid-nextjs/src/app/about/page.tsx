import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About ExecutiveAid - Virtual Assistant Leadership Team',
  description: 'Learn about ExecutiveAid\'s mission, vision, and leadership team. Meet our CEO Ebo Mprah, CTO Jeffery Crentsil, and CFO Winston Sackey.',
  keywords: 'ExecutiveAid about, virtual assistant company, Ghana, Accra, VA in Ghana, leadership team, CEO, CTO, CFO, mission, vision, values',
  openGraph: {
    title: 'About ExecutiveAid - Virtual Assistant Leadership Team',
    description: 'Learn about ExecutiveAid\'s mission, vision, and leadership team. Meet our CEO Ebo Mprah, CTO Jeffery Crentsil, and CFO Winston Sackey.',
    url: 'https://executiveaid.org/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://executiveaid.org/about',
  },
};

export default function About() {
  return <AboutClient />;
} 