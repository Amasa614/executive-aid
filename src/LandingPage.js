import React, { useState } from 'react';
import { Calendar, Clock, BarChart, Mail, Phone, ChevronRight, Plus, Minus, Megaphone, MessageCircleMore, ChevronsLeftRightEllipsis, ChartNoAxesCombined, Database  } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

// Hero Form Component – used in the hero section (white card on dark hero)
const HeroForm = () => {
  const [state, handleSubmit] = useForm("mzzdngzj"); //Formspree form ID
  
  if (state.succeeded) {
    return (
      <div className="p-6 text-center bg-white shadow-md">
        <h3 className="text-indigo-900 font-bold text-xl mb-4 border-b border-gray-300 pb-2">
          THANK YOU!
        </h3>
        <p className="text-gray-700 my-6">
          Your consultation request has been received. We'll contact you shortly to schedule your free session.
        </p>
      </div>
    );
  }
  
  return (
    <div className="p-6 bg-white shadow-md">
      <h3 className="text-indigo-900 font-bold text-xl mb-4 border-b border-gray-300 pb-2">
        FREE CONSULTATION
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input 
            type="text" 
            name="name"
            placeholder="NAME"
            className="w-full px-4 py-2 border border-gray-300 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm" />
          
          <input 
            type="email" 
            name="email"
            placeholder="EMAIL"
            className="w-full px-4 py-2 border border-gray-300 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm" />
          
          <input 
            type="tel" 
            name="phone"
            placeholder="PHONE NUMBER"
            className="w-full px-4 py-2 border border-gray-300 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            required
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-sm" />
          
          <textarea 
            name="message"
            placeholder="YOUR MESSAGE"
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 font-mono text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm" />
          
          <button 
            type="submit" 
            disabled={state.submitting}
            className={`w-full py-2 font-bold border border-gray-300 ${state.submitting ? 'bg-gray-200 text-gray-500' : 'bg-indigo-900 text-white hover:bg-indigo-800 transition'}`}
          >
            {state.submitting ? 'SENDING...' : 'SUBMIT'}
          </button>
        </div>
      </form>
    </div>
  );
};

// CTA Form Component – used in the call-to-action section
const CTAForm = () => {
  const [state, handleSubmit] = useForm("mzzdngzj"); // Your Formspree form ID
  
  if (state.succeeded) {
    return (
      <div className="text-center p-6 bg-white shadow-md">
        <h3 className="font-bold text-xl mb-2 text-indigo-900">THANK YOU!</h3>
        <p className="text-gray-700">We'll be in touch with you shortly.</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name"
        placeholder="YOUR NAME"
        className="w-full px-4 py-3 mb-4 border-2 border-gray-300 font-mono focus:outline-none" 
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-gray-500 text-sm mb-2 block" />
      
      <input 
        type="email" 
        name="email"
        placeholder="ENTER YOUR EMAIL"
        className="w-full px-4 py-3 mb-4 border-2 border-gray-300 font-mono focus:outline-none" 
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-gray-500 text-sm mb-2 block" />
      
      <input 
        type="tel" 
        name="phone"
        placeholder="PHONE NUMBER"
        className="w-full px-4 py-3 mb-4 border-2 border-gray-300 font-mono focus:outline-none" 
        required
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-gray-500 text-sm mb-2 block" />
      
      <textarea
        name="message"
        placeholder="YOUR MESSAGE"
        rows="3"
        className="w-full px-4 py-3 mb-4 border-2 border-gray-300 text-gray-700 font-mono focus:outline-none"
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-gray-500 text-sm mb-2 block" />
      
      <button 
        type="submit" 
        disabled={state.submitting}
        className={`w-full py-4 px-8 font-bold text-xl border-2 border-indigo-900 ${state.submitting ? 'bg-gray-200 text-gray-500' : 'bg-indigo-900 text-white hover:bg-indigo-800 transition'}`}
      >
        {state.submitting ? 'SENDING...' : "LET'S TALK"}
      </button>
    </form>
  );
};

// Footer Form Component – styled for dark footer backgrounds
const FooterForm = () => {
  const [state, handleSubmit] = useForm("mzzdngzj"); // Your Formspree form ID

  if (state.succeeded) {
    return <p className="text-center text-gray-300">Thank you! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        className="w-full px-4 py-2 mb-4 border border-gray-600 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required 
      />
      <textarea 
        name="message" 
        placeholder="Your Message" 
        rows="3"
        className="w-full px-4 py-2 mb-4 border border-gray-600 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      ></textarea>
      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full py-2 font-bold border border-indigo-900 bg-indigo-900 text-white hover:bg-indigo-800 transition"
      >
        {state.submitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  const faqs = [
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
      question: "Can I change my virtual assistant if needed?",
      answer: "Yes. While we strive to create perfect matches from the start, we understand that sometimes a different skill set or working style might be needed. We'll work with you to find the ideal VA for your needs."
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
      <nav className="border-b border-gray-300 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo & Subtitle */}
            <div className="flex flex-col leading-none">
              <span className="text-4xl font-bold tracking-tighter text-gray-900">
                EXECUTIVE<span className="text-indigo-900">AID</span>
              </span>
              <span className="text-sm text-gray-600 -mt-1">Efficiency redefined.</span>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-900 font-bold hover:text-indigo-900 transition">SERVICES</a>
              <a href="#how-it-works" className="text-gray-900 font-bold hover:text-indigo-900 transition">PROCESS</a>
              <a href="#mission" className="text-gray-900 font-bold hover:text-indigo-900 transition">ABOUT US</a>
              <a href="#faq" className="text-gray-900 font-bold hover:text-indigo-900 transition">FAQ</a>
            </div>
            {/* Contact Button */}
            <a href="#cta">
              <button className="bg-indigo-900 text-white px-6 py-2 font-bold hover:bg-indigo-800 transition border border-indigo-900">
                CONTACT
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-indigo-900 py-20 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-3/5 mb-10 md:mb-0 text-white">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter leading-none">
                  YOU DESERVE TO ADVANCE YOUR BUSINESS
                </h1>
                <p className="text-xl mb-8 border-l-4 border-indigo-900 pl-4">
                  GROW YOUR BUSINESS WITH FULLY TRAINED VIRTUAL ASSISTANTS
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                  <a href="#cta" className="bg-white text-indigo-900 px-8 py-3 font-bold hover:bg-gray-100 transition border border-gray-300 text-center">
                    Hire a Virtual Assistant
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 transform -rotate-2">
              <HeroForm />
            </div>
          </div>
        </div>
      </header>

      {/* Business Owner Types Section */}
      <section className="py-16 bg-white border-t border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 inline-block">
              Envision your business one year from today, <span className="text-indigo-900">What do you see?</span>
            </h2>
          </div>
          <div className="md:flex items-stretch">
            {/* Image Container */}
            <div className="md:w-2/5 flex items-stretch">
              <div className="border border-gray-300 w-full h-auto flex">
                <img 
                  src="/images/fraustrated-owner.png" 
                  alt="Frustrated business owner" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text Container */}
            <div className="md:w-3/5 md:pl-12 flex flex-col justify-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Are you still;</h3>
                {[
                  "Buried under piles of paperwork and administrative tasks.",
                  "Struggling to keep up with scheduling and appointments.",
                  "Spending hours managing emails and correspondence.",
                  "Wrestling with data entry and document organization.",
                  "Finding it hard to focus on your core goals or revenue generation"
                ].map((desc, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-indigo-900 text-white rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help You Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tighter inline-block bg-gray-100 px-4 py-2 transform -rotate-1">
              HOW WE HELP YOU
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-500 bg-white p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                We assist professionals and businesses who:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Need expert support to fill in the gaps in their business operations.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Want to focus on strategy and growth, not administrative tasks
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Want to prioritize generating revenue.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Need work done on a budget without compromising quality
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-gray-500 bg-white p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                What we provide:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Pre-trained VAs who hit the ground running from day one
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Flexible support that scales with your business needs
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Specialized skills in administration, marketing, business planning, customer support, etc.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Cost-effective solutions that deliver real ROI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Services Section */}
<section className="py-20 bg-white border-t border-b border-gray-500" id="services">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tighter inline-block bg-gray-100 px-4 py-2 transform -rotate-1">
        SERVICES
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl border-l-4 border-indigo-900 pl-4">
        Empower your business with customizable solutions.<br/>
        Virtual Support, Real Results.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="border border-gray-300 p-8 bg-white transition transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:scale-105">
        <div className="text-gray-900 mb-4">
          <Calendar size={48} className="stroke-2" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          EMAIL & CALENDAR MANAGEMENT
        </h3>
        <p className="text-gray-700">
          We handle scheduling, meeting coordination, and ensure you never miss an important appointment.
        </p>
      </div>
      <div className="border border-gray-300 p-8 bg-white transition transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:scale-105">
        <div className="text-gray-900 mb-4">
          <Megaphone size={48} className="stroke-2" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          SOCIAL MEDIA MANAGEMENT & MARKETING
        </h3>
        <p className="text-gray-700">
          Strategic content creation, audience engagement, and analytics-driven campaigns to boost your online presence.
        </p>
      </div>
      <div className="border border-gray-300 p-8 bg-white transition transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:scale-105">
        <div className="text-gray-900 mb-4">
          <BarChart size={48} className="stroke-2" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          DATA ENTRY & DATABASE MANAGEMENT
        </h3>
        <p className="text-gray-700">
          Accurate data input, organization, and database maintenance to keep your information structured and accessible.
        </p>
      </div>
      <div className="border border-gray-300 p-8 bg-white transition transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:scale-105">
        <div className="text-gray-900 mb-4">
          <Clock size={48} className="stroke-2" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          PROJECT & EVENT MANAGEMENT
        </h3>
        <p className="text-gray-700">
          We oversee project planning, execution, and delivery, ensuring milestones are met on time and within budget.
        </p>
      </div>
      <div className="border border-gray-300 p-8 bg-white transition transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:scale-105">
        <div className="text-gray-900 mb-4">
          <Database size={48} className="stroke-2" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          CUSTOMER RELATIONSHIP MANAGEMENT
        </h3>
        <p className="text-gray-700">
        Custom CRM solutions to streamline operations, improve customer relationships, and drive business growth.
        </p>
      </div>
      <div className="border border-gray-300 p-8 bg-white transition transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:scale-105">
        <div className="text-gray-900 mb-4">
          <ChevronsLeftRightEllipsis size={48} className="stroke-2" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
        Custom Web Solutions
        </h3>
        <p className="text-gray-700">
        Tailored web solutions for businesses, including professional websites and eCommerce platforms to boost online presence and growth.
        </p>
      </div>
      <div className="border border-gray-300 p-8 bg-white transition transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:scale-105">
        <div className="text-gray-900 mb-4">
          <ChartNoAxesCombined size={48} className="stroke-2" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
        Accounting & Data Analytics
        </h3>
        <p className="text-gray-700">
        Accounting and data analytics services to optimize financial management and drive informed business decisions.
        </p>
      </div>
      <div className="border border-gray-300 p-8 bg-white transition transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg hover:scale-105">
        <div className="text-gray-900 mb-4">
          <MessageCircleMore size={48} className="stroke-2" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          CUSTOMER SUPPORT
        </h3>
        <p className="text-gray-700">
          Professional client communication, and first-line support for your customers.
        </p>
      </div>
      <div className="border border-gray-300 bg-indigo-900 text-white p-8 transition transform duration-300 ease-in-out hover:bg-indigo-800 hover:shadow-lg hover:scale-105">
        <h3 className="text-2xl font-bold mb-2 tracking-tight flex justify-between items-start">
          EXECUTIVE PACKAGE
        </h3>
        <p className="mb-4">
          Comprehensive support including all services plus strategic assistance and priority response times.
        </p>
        <a href="https://www.linkedin.com" className="font-bold flex items-center">
          LEARN MORE <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  </div>
</section>


     {/* Process Section */}
<section className="py-20 bg-gray-50" id="how-it-works">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tighter inline-block bg-gray-100 px-4 py-2 transform rotate-1">
        THE PROCESS
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl border-l-4 border-indigo-900 pl-4">
      Struggling to grow your business? <br/>
      Don’t give up - Try again, but this time with ExecutiveAid.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="border border-gray-300 p-8 relative transition transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray-100">
        <div className="absolute -top-6 -left-6 bg-indigo-900 text-white w-16 h-16 flex items-center justify-center text-3xl font-bold">
          1
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4 tracking-tight">
          CONSULTATION
        </h3>
        <p className="text-gray-700">
          We start with a thorough needs assessment to understand your business and requirements.
        </p>
      </div>
      <div className="border border-gray-300 p-8 relative transition transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray-100">
        <div className="absolute -top-6 -left-6 bg-indigo-900 text-white w-16 h-16 flex items-center justify-center text-3xl font-bold">
          2
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4 tracking-tight">
          ONBOARDING
        </h3>
        <p className="text-gray-700">
          Your dedicated VA is carefully selected to match your needs and seamlessly integrate into your business operations ensuring immediate value.
        </p>
      </div>
      <div className="border border-gray-300 p-8 relative transition transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray-100">
        <div className="absolute -top-6 -left-6 bg-indigo-900 text-white w-16 h-16 flex items-center justify-center text-3xl font-bold">
          3
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4 tracking-tight">
          PARTNERSHIP
        </h3>
        <p className="text-gray-700">
          ExecutiveAid ensures effective collaboration through continuous task execution, regular updates and providing ongoing support.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Mission & Vision Section */}
      <section className="py-20 bg-white border-t border-b border-gray-500" id="mission">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tighter inline-block bg-gray-100 px-4 py-2 transform -rotate-1">
              ABOUT US
            </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-gray-300 p-8 bg-white transform rotate-1">
              <h2 className="text-4xl font-bold mb-6 tracking-tighter text-gray-900">
                MISSION
              </h2>
              <p className="text-xl border-l-4 border-indigo-900 pl-4 text-gray-700">
                At ExecutiveAid, we aim to empower businesses and professionals through customized, top-notch administrative and executive support. We are dedicated to redefining efficiency and giving our clients the time they need to focus on their core business goals.
              </p>
            </div>
            <div className="border border-gray-300 p-8 bg-white transform -rotate-1">
              <h2 className="text-4xl font-bold mb-6 tracking-tighter text-gray-900">
                VISION
              </h2>
              <p className="text-xl border-l-4 border-indigo-900 pl-4 text-gray-700">
                We strive to be a trusted partner in the growth of businesses, offering dependable virtual assistance that helps businesses and professionals focus on what truly drives their success while we take care of the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tighter inline-block bg-gray-100 px-4 py-2 transform -rotate-1">
              FAQ
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl border-l-4 border-indigo-900 pl-4">
              Everything you need to know about working with ExecutiveAid.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-500">
                <button 
                  className="w-full p-6 flex justify-between items-center text-left font-bold text-xl bg-gray-50 hover:bg-gray-100 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-gray-900">{faq.question}</span>
                  {openFaq === index ? <Minus size={24} className="text-indigo-900" /> : <Plus size={24} className="text-indigo-900" />}
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-gray-50 border-t border-gray-300">
                    <p className="text-lg text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-900 text-white border-t border-b border-indigo-800" id="cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
                READY TO RECLAIM YOUR TIME?
              </h2>
              <p className="text-xl">
                Join executives worldwide who rely on ExecutiveAid as their trusted partner to handle the details while they drive their success.
              </p>
            </div>
            <div className="md:w-1/3">
              <CTAForm />
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter">
                EXECUTIVE<span className="text-indigo-900">AID</span>
              </h3>
              <p>Efficiency Redefined.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">CONTACT</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>jefferyamasa@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>+1 (234) 567-890</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">SEND A MESSAGE</h4>
              <FooterForm />
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} EXECUTIVEAID LTD. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
