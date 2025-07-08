'use client';

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Plus, 
  Minus, 
  Instagram, 
  Linkedin,
  CheckCircle,
  BarChart3,
  Users,
  Globe
} from 'lucide-react';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { HeroForm } from '@/components/HeroForm';
import { FooterForm } from '@/components/FooterForm';
import Link from 'next/link';
import Image from 'next/image';

interface FAQ {
  question: string;
  answer: string;
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Scroll animation hooks for different sections
  const [heroRef, heroVisible] = useScrollAnimation();
  const [helpCard1Ref, helpCard1Visible] = useScrollAnimation();
  const [helpCard2Ref, helpCard2Visible] = useScrollAnimation();

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add CSS animations to the document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes staggerFadeIn {
        from {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .animate-fade-in-left {
        animation: fadeInLeft 0.8s ease-out forwards;
      }

      .animate-fade-in-right {
        animation: fadeInRight 0.8s ease-out forwards;
      }

      .animate-stagger-fade-in {
        animation: staggerFadeIn 0.6s ease-out forwards;
      }

      .animate-delay-100 {
        animation-delay: 0.1s;
      }

      .animate-delay-200 {
        animation-delay: 0.2s;
      }

      .animate-delay-300 {
        animation-delay: 0.3s;
      }

      .animate-delay-400 {
        animation-delay: 0.4s;
      }

      .animate-delay-500 {
        animation-delay: 0.5s;
      }

      .animate-delay-600 {
        animation-delay: 0.6s;
      }

      .opacity-0 {
        opacity: 0;
      }

      /* Enhanced hover effects */
      .card-hover-effect {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card-hover-effect:hover {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(99, 102, 241, 0.1);
        transform: translateY(-8px) scale(1.02);
      }

      .button-hover-glow:hover {
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        transform: translateY(-2px);
      }

      .icon-bounce:hover {
        animation: bounce 0.6s ease-in-out;
      }

      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
          transform: translate3d(0,0,0);
        }
        40%, 43% {
          transform: translate3d(0, -8px, 0);
        }
        70% {
          transform: translate3d(0, -4px, 0);
        }
        90% {
          transform: translate3d(0, -2px, 0);
        }
      }

      .text-gradient {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  const faqs: FAQ[] = [
    {
      question: "What exactly does a virtual assistant do?",
      answer: "A virtual assistant provides remote administrative, technical, or creative assistance to clients. At ExecutiveAid, our VAs handle tasks like email management, scheduling, research, customer support, and more, allowing you to focus on growing your business."
    },
    {
      question: "How do I communicate with my virtual assistant?",
      answer: "Communication happens through your preferred channels—email, phone, video calls, or project management tools. We adapt to your existing workflows to ensure seamless integration."
    },
    {
      question: "Is my business information kept confidential?",
      answer: "Absolutely. All our virtual assistants sign strict confidentiality agreements. Your business information, client data, and proprietary processes remain completely secure."
    },
    {
      question: "What industries do you serve?",
      answer: "We work with businesses across various industries, including real estate, e-commerce, healthcare, beauty and startups to provide tailored virtual assistant services."
    },
    {
      question: "How quickly can my virtual assistant start?",
      answer: "Most of our virtual assistants can begin within 1-3 business days after the initial consultation and matching process is complete."
    },
    {
      question: "What hours do your virtual assistants work?",
      answer: "Our VAs can adapt to your timezone and preferred working hours. We offer flexible scheduling to ensure support when you need it most."
    }
  ];

  return (
    <div className="font-mono">
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 py-4 md:py-6 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-white/20 border-b border-white/20 shadow-lg' 
          : 'backdrop-blur-md bg-white/80 border-b border-gray-300/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo & Subtitle */}
            <div className="flex flex-col leading-none">
              <span className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
                EXECUTIVE<span className="text-indigo-900">AID</span>
              </span>
              <span className="text-xs md:text-sm text-gray-600 -mt-1">Efficiency Redefined.</span>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm md:text-base text-gray-900 font-bold hover:text-indigo-900 transition">HOME</Link>
              <Link href="/web-solutions" className="text-sm md:text-base text-gray-900 font-bold hover:text-indigo-900 transition">OUR PORTFOLIO</Link>
            </div>
            {/* Contact Button */}
            <a href="#cta">
              <button className="bg-indigo-900 text-white px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base font-bold hover:bg-indigo-800 transition-all duration-300 border border-indigo-900 rounded-full button-hover-glow">
                CONTACT
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-12 md:py-20" style={{
        backgroundImage: "url('/images/person-office-work-day.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '70vh',
      }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div ref={heroRef} className={`md:w-3/5 mb-6 md:mb-8 text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="mb-8">
                <h1 className={`text-3xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4 tracking-tighter leading-none transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  YOU DESERVE TO ADVANCE YOUR <span className="text-gradient">BUSINESS</span>
                </h1>
                <p className={`text-base md:text-xl mb-6 md:mb-8 border-l-4 border-indigo-900 pl-4 transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  GROW YOUR BUSINESS WITH PROACTIVE AND RELIABLE VIRTUAL ASSISTANTS
                </p>
                <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8 transition-all duration-1000 delay-600 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <a href="#cta" className="bg-white text-indigo-900 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold hover:bg-gray-100 transition-all duration-300 border border-gray-300 text-center rounded-full button-hover-glow">
                    Hire a Virtual Assistant
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center items-center">
              <div className="backdrop-blur-md bg-white/30 rounded-2xl border border-white/40 shadow-lg p-4 md:p-6 w-full max-w-md">
                <HeroForm />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Business Owner Types Section */}
      <section className="py-10 md:py-16 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 inline-block">
              Envision your business one year from today, <span className="text-indigo-900">What do you see?</span>
            </h2>
          </div>
          <div className="md:flex items-stretch">
            {/* Image Container */}
            <div className="md:w-2/5 flex items-stretch">
              <div className="border border-gray-300 w-full h-auto flex">
                <Image 
                  src="/images/fraustrated-owner.png" 
                  alt="Frustrated business owner" 
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text Container */}
            <div className="md:w-3/5 md:pl-12 flex flex-col justify-center">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Are you still;</h3>
                {[
                  "Buried under piles of paperwork and administrative tasks.",
                  "Struggling to keep up with scheduling and appointments.",
                  "Spending hours managing emails and correspondence.",
                  "Wrestling with data entry and document organization.",
                  "Finding it hard to focus on your core goals or revenue generation"
                ].map((desc, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-indigo-900 text-white rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base text-gray-700">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help You Section */}
      <section className="py-10 md:py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Help You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our expert virtual assistants can transform your business operations and give you back valuable time to focus on what matters most.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div ref={helpCard1Ref} className={`border border-gray-500 bg-white p-6 md:p-8 rounded-2xl card-hover-effect transition-all duration-1000 ${helpCard1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
                We assist professionals and businesses who:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Need expert support to fill in the gaps in their business operations.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Want to focus on strategy and growth, not administrative tasks
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Want to prioritize generating revenue.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Need work done on a budget without compromising quality
                  </p>
                </div>
              </div>
            </div>
            <div ref={helpCard2Ref} className={`border border-gray-500 bg-white p-6 md:p-8 rounded-2xl card-hover-effect transition-all duration-1000 delay-200 ${helpCard2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
                What we provide:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Pre-trained VAs who hit the ground running from day one
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Flexible support that scales with your business needs
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Specialized skills in administration, marketing, business planning, customer support, etc.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Cost-effective solutions that deliver real ROI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white border-t border-b border-gray-100" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple websites to complex web applications, we provide comprehensive development services tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business Support */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover-effect">
              <div className="mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Support</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Comprehensive business solutions to streamline operations, manage projects, and handle financial processes efficiently.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Custom applications and web solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Project management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Basic financial management
                </li>
              </ul>
            </div>

            {/* Administrative Assistance */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover-effect">
              <div className="mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Administrative Assistance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Professional administrative support to help you stay organized, manage your schedule, and handle daily business operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Calendar management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Document management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Email management
                </li>
              </ul>
            </div>

            {/* Marketing Assistance */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover-effect">
              <div className="mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Marketing Assistance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Strategic marketing support to boost your online presence, engage your audience, and grow your brand across digital platforms.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Social media management and marketing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Content creation and strategy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Brand engagement and growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-gray-50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Struggling to grow your business? Don&apos;t give up. Try again, but this time with ExecutiveAid. Our process is simple, efficient, and remarkably patient.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="border border-gray-300 p-6 md:p-8 relative transition transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray-100 rounded-2xl">
              <div className="absolute -top-6 -left-6 bg-indigo-900 text-white w-16 h-16 flex items-center justify-center text-3xl font-bold rounded-2xl">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-4 tracking-tight">
                CONSULTATION
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                We begin with a comprehensive needs assessment and together outline expectations, tasks, and deliverables.
              </p>
            </div>
            <div className="border border-gray-300 p-6 md:p-8 relative transition transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray-100 rounded-2xl">
              <div className="absolute -top-6 -left-6 bg-indigo-900 text-white w-16 h-16 flex items-center justify-center text-3xl font-bold rounded-2xl">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-4 tracking-tight">
                ONBOARDING
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Your dedicated VA is carefully selected to match your needs and seamlessly integrate into your business operations ensuring immediate value.
              </p>
            </div>
            <div className="border border-gray-300 p-6 md:p-8 relative transition transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray-100 rounded-2xl">
              <div className="absolute -top-6 -left-6 bg-indigo-900 text-white w-16 h-16 flex items-center justify-center text-3xl font-bold rounded-2xl">
                3
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-4 tracking-tight">
                PARTNERSHIP
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                ExecutiveAid ensures effective collaboration through continuous task execution, regular updates and providing ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white border-t border-b border-gray-100" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our mission to empower businesses through exceptional virtual assistant services and our vision for the future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="border border-gray-300 p-6 md:p-8 bg-white rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter text-gray-900">
                MISSION
              </h2>
              <p className="text-base md:text-xl border-l-4 border-indigo-900 pl-4 text-gray-700">
                At ExecutiveAid, we aim to empower businesses and professionals through customized, top-notch administrative and executive support. We are dedicated to redefining efficiency and giving our clients the time they need to focus on their core business goals.
              </p>
            </div>
            <div className="border border-gray-300 p-6 md:p-8 bg-white rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter text-gray-900">
                VISION
              </h2>
              <p className="text-base md:text-xl border-l-4 border-indigo-900 pl-4 text-gray-700">
                We strive to be a trusted partner in the growth of businesses, offering dependable virtual assistance that helps businesses and professionals focus on what truly drives their success while we take care of the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about working with ExecutiveAid. Find answers to common questions about our services and processes.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-500">
                <button 
                  className="w-full p-4 md:p-6 flex justify-between items-center text-left font-bold text-base md:text-xl bg-gray-50 hover:bg-gray-100 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-gray-900">{faq.question}</span>
                  {openFaq === index ? <Minus size={20} className="text-indigo-900 w-5 h-5 md:w-6 md:h-6" /> : <Plus size={20} className="text-indigo-900 w-5 h-5 md:w-6 md:h-6" />}
                </button>
                {openFaq === index && (
                  <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-300">
                    <p className="text-sm md:text-lg text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Brand Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tighter">
                EXECUTIVE<span className="text-indigo-900">AID</span>
              </h3>
              <p className="text-sm md:text-base">Efficiency Redefined.</p>
            </div>
            
            {/* Contact Section */}
            <div> 
              <h4 className="font-bold mb-4 text-lg md:text-xl">CONTACT</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-center">
                  <Mail size={14} className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  <span>support@executiveaid.org</span>
                </li>
                <li className="flex items-center">
                  <Phone size={14} className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  <span>+233256108055</span>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/executiveaid/"
          target="_blank"
          rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-900 transition"
                >
                  <Instagram className="w-6 h-6" />
        </a>
        <a
                  href="https://www.linkedin.com/company/executiveaid/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-900 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            {/* Message Form */}
            <div>
              <h4 className="font-bold mb-4 text-lg md:text-xl">LEAVE A REVIEW</h4>
              <FooterForm />
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} EXECUTIVEAID LTD. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}