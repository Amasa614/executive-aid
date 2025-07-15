'use client';

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Plus, 
  Minus, 
  Instagram, 
  Linkedin,
  MessageCircle,
  Twitter,
  Award,
  Users,
  Target,
  Heart,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface FAQ {
  question: string;
  answer: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  skills: string[];
}

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    },
    {
      question: "Do you provide custom web solutions and applications?",
      answer: "Yes! We offer comprehensive web development services including custom business applications, CRM systems, inventory management platforms, and e-commerce solutions. Our portfolio includes live production systems like Razorbill CRM and Nepakie E-commerce platform."
    },
    {
      question: "Can your virtual assistants help with accounting and financial management?",
      answer: "Absolutely. Our VAs can assist with basic financial management, bookkeeping, expense tracking, budget preparation, and financial reporting. We help streamline your accounting processes so you can make confident financial decisions."
    },
    {
      question: "What administrative tasks can your virtual assistants handle?",
      answer: "Our administrative support covers calendar management, document organization, email management, data entry, appointment scheduling, travel arrangements, and general office administration. We handle the time-consuming tasks so you can focus on growing your business."
    },
    {
      question: "Do you offer marketing and social media support?",
      answer: "Yes! We provide comprehensive marketing assistance including social media management, content creation and strategy, brand engagement, online presence optimization, and digital marketing campaigns to help grow your business."
    },
    {
      question: "Can you help with research and data analytics?",
      answer: "Definitely. Our team excels at market research, competitor analysis, data collection and analysis, report generation, and providing actionable insights to support your business decisions and strategy development."
    },
    {
      question: "What project management services do you offer?",
      answer: "We provide end-to-end project management including project planning, task coordination, timeline management, team communication, progress tracking, and reporting. We ensure your projects stay on track and meet deadlines."
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Emmanuel Mprah",
      role: "Chief Executive Officer", 
      image: "",
      skills: ["Business Strategy", "Operations Management", "Leadership"]
    },
    {
      name: "Jeffery Amasa Crentsil",
      role: "Chief Technology Officer",
      image: "/images/jeff.jpg",
      skills: ["Full-Stack Development", "System Architecture", "Project Management"]
    },
    {
      name: "Winston Nene Sackey",
      role: "Chief Financial Officer",
      image: "/images/winston.jpg",
      skills: ["Financial Strategy", "Budget Management", "Financial Reporting"]
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
              <Link href="/" className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
                EXECUTIVE<span className="text-indigo-900">AID</span>
              </Link>
              <span className="text-xs md:text-sm text-gray-600 -mt-1">Efficiency Redefined.</span>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm md:text-base text-gray-900 font-bold hover:text-indigo-900 transition">HOME</Link>
              <Link href="/about" className="text-sm md:text-base text-indigo-900 font-bold hover:text-indigo-900 transition">ABOUT</Link>
              <Link href="/services" className="text-sm md:text-base text-gray-900 font-bold hover:text-indigo-900 transition">SERVICES</Link>
              <Link href="/web-solutions" className="text-sm md:text-base text-gray-900 font-bold hover:text-indigo-900 transition">OUR PORTFOLIO</Link>
            </div>
            {/* Contact Button */}
            <Link href="/#cta">
              <button className="bg-indigo-900 text-white px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base font-bold hover:bg-indigo-800 transition-all duration-300 border border-indigo-900 rounded-full">
                CONTACT
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            About ExecutiveAid
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the people, mission, and vision behind ExecutiveAid. Learn how we&apos;re revolutionizing virtual assistance and empowering businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#mission" className="bg-white text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition-all duration-300">
              Our Mission
            </Link>
            <Link href="#team" className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white border-t border-b border-gray-100" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our mission to empower businesses through exceptional virtual assistant services and our vision for the future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="border border-gray-300 p-6 md:p-8 bg-white rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
                  MISSION
                </h2>
              </div>
              <p className="text-base md:text-xl border-l-4 border-indigo-900 pl-4 text-gray-700">
                At ExecutiveAid, we aim to empower businesses and professionals through customized, top-notch administrative and executive support. We are dedicated to redefining efficiency and giving our clients the time they need to focus on their core business goals.
              </p>
            </div>
            <div className="border border-gray-300 p-6 md:p-8 bg-white rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
                  VISION
                </h2>
              </div>
              <p className="text-base md:text-xl border-l-4 border-indigo-900 pl-4 text-gray-700">
                We strive to be a trusted partner in the growth of businesses, offering dependable virtual assistance that helps businesses and professionals focus on what truly drives their success while we take care of the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ExecutiveAid.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-indigo-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Partnership</h3>
              <p className="text-gray-600">
“Your growth is our mission.” We don’t just complete tasks; we work alongside you to help your business grow sustainably. We patiently guide you, support your systems, and design simple, effective solutions to save you time and drive measurable results.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-indigo-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dependability</h3>
              <p className="text-gray-600">
“Count on us, every time.” We show up when you need us, respond promptly, and deliver quality work consistently. Your business operations continue smoothly because you can rely on us every step of the way.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-indigo-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
“We deliver what we promise.” We operate with honesty, transparency, and clear communication, ensuring you can trust us fully with your business while building a relationship based on mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know the talented professionals behind ExecutiveAid who are dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-indigo-900 font-semibold mb-3">{member.role}</p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-indigo-100 text-indigo-900 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with ExecutiveAid&apos;s virtual assistant services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#cta" className="bg-white text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition-all duration-300">
              Get Started Today
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              View Our Services
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