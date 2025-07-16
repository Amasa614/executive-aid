'use client';

import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  Globe, 
  CheckCircle, 
  Phone, 
  Mail, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Target, 
  Search, 
  Settings, 
  Smartphone, 
  MessageCircle, 
  PenTool, 
  DollarSign,
  Clock,
  Shield,
  Zap,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function ServicesClient() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'business-support',
      title: 'Business Support',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'Comprehensive business solutions to streamline operations, manage projects, and handle financial processes efficiently.',
      features: [
        {
          icon: <Globe className="w-5 h-5" />,
          title: 'Custom Applications & Web Solutions',
          description: 'Tailored software solutions, CRM systems, inventory management platforms, and e-commerce solutions built with cutting-edge technology.'
        },
        {
          icon: <Target className="w-5 h-5" />,
          title: 'Project Management',
          description: 'End-to-end project planning, task coordination, timeline management, team communication, and progress tracking.'
        },
        {
          icon: <DollarSign className="w-5 h-5" />,
          title: 'Financial Management',
          description: 'Basic financial management, bookkeeping, expense tracking, budget preparation, and financial reporting.'
        },
        {
          icon: <Search className="w-5 h-5" />,
          title: 'Research & Data Analytics',
          description: 'Market research, competitor analysis, data collection and analysis, report generation, and actionable insights.'
        }
      ],
      benefits: [
        'Streamlined business operations',
        'Improved project efficiency',
        'Better financial oversight',
        'Data-driven decision making',
        'Custom solutions for unique needs'
      ]
    },
    {
      id: 'administrative-assistance',
      title: 'Administrative Assistance',
      icon: <Users className="w-8 h-8" />,
      description: 'Professional administrative support to help you stay organized, manage your schedule, and handle daily business operations.',
      features: [
        {
          icon: <Calendar className="w-5 h-5" />,
          title: 'Calendar Management',
          description: 'Efficient scheduling, appointment coordination, meeting planning, and calendar optimization to maximize your productivity.'
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: 'Document Management',
          description: 'Document organization, filing systems, data entry, report preparation, and administrative paperwork handling.'
        },
        {
          icon: <Mail className="w-5 h-5" />,
          title: 'Email Management',
          description: 'Email organization, response management, inbox cleaning, and communication coordination with clients and stakeholders.'
        },
        {
          icon: <Settings className="w-5 h-5" />,
          title: 'Data Entry & Processing',
          description: 'Accurate data input, database management, spreadsheet creation, and information processing tasks.'
        }
      ],
      benefits: [
        'Organized daily operations',
        'Improved time management',
        'Professional communication',
        'Reduced administrative burden',
        'Enhanced productivity'
      ]
    },
    {
      id: 'marketing-assistance',
      title: 'Marketing Assistance',
      icon: <Globe className="w-8 h-8" />,
      description: 'Strategic marketing support to boost your online presence, engage your audience, and grow your brand across digital platforms.',
      features: [
        {
          icon: <Smartphone className="w-5 h-5" />,
          title: 'Social Media Management',
          description: 'Comprehensive social media strategy, content scheduling, audience engagement, and performance analytics across platforms.'
        },
        {
          icon: <PenTool className="w-5 h-5" />,
          title: 'Content Creation & Strategy',
          description: 'Engaging content development, blog writing, graphic design coordination, and strategic content planning.'
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: 'Brand Engagement & Growth',
          description: 'Brand development, audience building, community management, and digital marketing campaigns.'
        },
        {
          icon: <MessageCircle className="w-5 h-5" />,
          title: 'Digital Marketing Campaigns',
          description: 'Email marketing, lead generation, campaign optimization, and marketing automation setup.'
        }
      ],
      benefits: [
        'Increased online visibility',
        'Better audience engagement',
        'Consistent brand messaging',
        'Higher conversion rates',
        'Scalable marketing efforts'
      ]
    }
  ];

  return (
    <div className="font-mono">
      {/* Navigation */}
      <Navigation isScrolled={isScrolled} currentPage="/services" contactLink="/#cta" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive virtual assistant services designed to streamline your business operations, boost productivity, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#cta" className="bg-white text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition-all duration-300">
              Get Started Today
            </Link>
            <Link href="#services-details" className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver professional, reliable, and results-driven virtual assistant services that help businesses thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Start</h3>
              <p className="text-gray-600">
                Get started within 1-3 business days with pre-trained VAs who hit the ground running.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Confidential</h3>
              <p className="text-gray-600">
                Your business data is protected with strict confidentiality agreements and secure processes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Flexible support that grows with your business needs, from startup to enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services-details" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Detailed Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of virtual assistant services designed to meet your specific business needs.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:flex items-center gap-12 scroll-mt-24`}>
                {/* Service Overview */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="bg-indigo-900 text-white rounded-full w-16 h-16 flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service Features */}
                <div className="md:w-1/2">
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-start">
                          <div className="bg-indigo-100 text-indigo-900 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our virtual assistant services can streamline your operations and boost your productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#cta" className="bg-white text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition-all duration-300">
              Get Free Consultation
            </Link>
            <Link href="/" className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                EXECUTIVE<span className="text-indigo-400">AID</span>
              </h3>
              <p className="text-gray-400">
                Professional virtual assistant services that transform businesses and drive success.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/about#team" className="hover:text-white transition">Our Team</Link></li>
                <li><Link href="/about#mission" className="hover:text-white transition">Mission & Vision</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white transition">All Services</Link></li>
                <li><Link href="/web-solutions" className="hover:text-white transition">Web Solutions</Link></li>
                <li><Link href="/about#faq" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:support@executiveaid.org" className="hover:text-white transition">
                    support@executiveaid.org
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+233256108055" className="hover:text-white transition">
                    +233256108055
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="https://www.instagram.com/executiveaid/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/executiveaid/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/233256108055" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/executiveaidltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ExecutiveAid Ltd. All rights reserved.</p>
            <p>Powered by Razorbill Technologies</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 