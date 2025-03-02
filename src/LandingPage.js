import React, { useState } from 'react';
import { Calendar, Clock, BarChart, Mail, Phone, ChevronRight, Plus, Minus, Megaphone } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

// Hero Form Component
const HeroForm = () => {
  const [state, handleSubmit] = useForm("mzzdngzj"); // Your Formspree form ID
  
  if (state.succeeded) {
    return (
      <div className="bg-white p-6 text-center">
        <h3 className="text-gray-900 font-bold text-xl mb-4 border-b-2 border-gray-900 pb-2">THANK YOU!</h3>
        <p className="text-gray-800 my-6">Your consultation request has been received. We'll contact you shortly to schedule your free session.</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white p-6">
      <h3 className="text-gray-900 font-bold text-xl mb-4 border-b-2 border-gray-900 pb-2">FREE CONSULTATION</h3>
      <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <input 
        type="text" 
        name="name"
        placeholder="NAME"
        className="w-full px-4 py-2 border-2 border-gray-900 font-mono focus:outline-none focus:ring-2 focus:ring-navy-600" 
        required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm" />
        
        <input 
        type="email" 
        name="email"
        placeholder="EMAIL"
        className="w-full px-4 py-2 border-2 border-gray-900 font-mono focus:outline-none focus:ring-2 focus:ring-navy-600" 
        required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm" />
        
        <input 
        type="tel" 
        name="phone"
        placeholder="PHONE NUMBER"
        className="w-full px-4 py-2 border-2 border-gray-900 font-mono focus:outline-none focus:ring-2 focus:ring-navy-600" 
        required
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-sm" />
        
        <textarea 
        name="message"
        placeholder="YOUR MESSAGE"
        rows="3"
        className="w-full px-4 py-2 border-2 border-gray-900 font-mono text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-600" 
        required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm" />
        
        <button 
        type="submit" 
        disabled={state.submitting}
        className={`w-full py-2 font-bold border-2 border-gray-900 ${state.submitting ? 'bg-gray-400' : 'bg-navy-700 text-white hover:bg-gray-900 transition'}`}
        >
        {state.submitting ? 'SENDING...' : 'SUBMIT'}
        </button>
      </div>
      </form>
    </div>
  );
};

// CTA Form Component 
const CTAForm = () => {
  const [state, handleSubmit] = useForm("mzzdngzj"); // Can use same or different form ID
  
  if (state.succeeded) {
    return (
      <div className="text-center bg-white text-gray-900 p-6 border-4 border-white">
        <h3 className="font-bold text-xl mb-2">THANK YOU!</h3>
        <p>We'll be in touch with you shortly.</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name"
        placeholder="YOUR NAME"
        className="w-full px-4 py-3 mb-4 border-4 border-gray-900 font-mono focus:outline-none" 
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-white text-sm mb-2 block" />
      
      <input 
        type="email" 
        name="email"
        placeholder="ENTER YOUR EMAIL"
        className="w-full px-4 py-3 mb-4 border-4 border-gray-900 font-mono focus:outline-none" 
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-white text-sm mb-2 block" />
      
      <textarea
        name="message"
        placeholder="YOUR MESSAGE"
        rows="3"
        className="w-full px-4 py-3 mb-4 border-4 border-gray-900 text-gray-800 font-mono focus:outline-none"
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-white text-sm mb-2 block" />
      
      <button 
        type="submit" 
        disabled={state.submitting}
        className={`w-full py-4 px-8 font-bold text-xl border-4 border-white ${state.submitting ? 'bg-gray-400 text-gray-900' : 'bg-gray-900 text-white hover:bg-white hover:text-gray-900 transition'}`}
      >
        {state.submitting ? 'SENDING...' : 'LET\'S TALK'}
      </button>
    </form>
  );
};

// Add this inside the Footer Component
const FooterForm = () => {
  const [state, handleSubmit] = useForm("mzzdngzj"); // Ensure it's your correct Formspree form ID

  if (state.succeeded) {
    return <p className="text-center text-white">Thank you! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        className="w-full px-4 py-2 mb-4 border-2 border-white text-gray-900 focus:outline-none"
        required 
      />
      <textarea 
        name="message" 
        placeholder="Your Message" 
        rows="3"
        className="w-full px-4 py-2 mb-4 border-2 border-white text-gray-900 focus:outline-none"
        required
      ></textarea>
      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full py-2 font-bold border-2 border-white bg-white text-gray-900 hover:bg-navy-600 hover:text-white transition"
      >
        {state.submitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};


const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
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
    <div className="bg-white min-h-screen font-mono">
      {/* Navigation - brutalist style */}
      <nav className="border-b-4 border-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo + Subtitle */}
            <div className="flex flex-col leading-none">
              <span className="text-4xl font-bold tracking-tighter">
                EXECUTIVE<span className="text-navy-600">AID</span>
              </span>
              <span className="text-sm text-gray-600 -mt-1">Efficiency redefined.</span>
            </div>

            {/* Navigation Links */}
                  <div className="hidden md:flex space-x-8">
                    <a href="#services" className="text-gray-900 font-bold hover:bg-gray-900 hover:text-white px-2 transition">SERVICES</a>
                    <a href="#how-it-works" className="text-gray-900 font-bold hover:bg-gray-900 hover:text-white px-2 transition">PROCESS</a>
                    <a href="#mission" className="text-gray-900 font-bold hover:bg-gray-900 hover:text-white px-2 transition">ABOUT US</a>
                    <a href="#faq" className="text-gray-900 font-bold hover:bg-gray-900 hover:text-white px-2 transition">FAQ</a>
                  </div>

                  {/* Contact Button */}
                  <a href="#cta">
                    <button className="bg-navy-700 text-white px-6 py-2 font-bold hover:bg-gray-900 transition border-2 border-gray-900">
                    CONTACT
                    </button>
                  </a>

                  </div>
                </div>
                </nav>

                {/* Hero Section inspired by Image 1 */}
        <header className="bg-navy-800 py-20 border-b-4 border-gray-900 relative">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="md:flex md:justify-between md:items-center">
          <div className="md:w-3/5 mb-10 md:mb-0 text-white">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter leading-none">YOU DESERVE TO ADVANCE YOUR BUSINESS</h1>
              <p className="text-xl mb-8 border-l-4 border-navy-600 pl-4">
              GROW YOUR BUSINESS WITH FULLY TRAINED VIRTUAL ASSISTANTS
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <a href="#cta" className="bg-navy-700 text-white px-8 py-3 font-bold hover:bg-navy-800 transition border-2 border-navy-600 text-center">
              Hire a Virtual Assistant
            </a>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 border-4 border-gray-900 bg-white transform -rotate-2">
            <HeroForm />
            </div>
            </div>
          </div>
        </header>
        
        
    {/* Business Owner Types Section */}
    <section className="py-16 bg-white border-b-4 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 inline-block">
            Envision your business one year from today, <span className="text-navy-600">What do you see?</span>
          </h2>
        </div>

        <div className="md:flex items-stretch">
          
          {/* Image Container */}
          <div className="md:w-2/5 flex items-stretch">
            <div className="border-4 border-gray-900 w-full h-auto flex">
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
              
              {/* Adding "Are you still;" */}
              <h3 className="text-2xl font-semibold text-gray-800">
                Are you still;
              </h3>

              {[
                "Buried under piles of paperwork and administrative tasks.",
                "Struggling to keep up with scheduling and appointments.",
                "Spending hours managing emails and correspondence.",
                "Wrestling with data entry and document organization.",
                "Finding it hard to focus on your core goals or revenue generation"
              ].map((desc, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-navy-600 text-white rounded-full p-1 mt-1 mr-3">
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

        {/* Business Owner Types Section 2 - inspired by Image 2 (in body) */}
      <section className="py-16 bg-gray-100 border-y-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tighter inline-block bg-navy-100 px-4 py-2 transform -rotate-1">HOW WE HELP YOU</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-4 border-gray-900 bg-white p-8">
              <h3 className="text-2xl font-bold mb-6">We help professionals and business owners who:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-navy-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Need specialized skills their current team doesn't have</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Want to focus on strategy and growth, not admin tasks</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Are spending too much time handling marketing when they should be making sales</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Need work done on a budget without compromising quality</p>
                </div>
              </div>
            </div>
            
            <div className="border-4 border-gray-900 bg-white p-8">
              <h3 className="text-2xl font-bold mb-6">What we provide:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-navy-800 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Pre-trained VAs who hit the ground running from day one</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-800 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Flexible support that scales with your business needs</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-800 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Specialized skills in administration, marketing, business planning, and customer support</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy-800 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Cost-effective solutions that deliver real ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Services - brutalist style */}
      <section className="py-20 bg-white border-y-4 border-gray-900" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tighter inline-block bg-navy-200 px-4 py-2 transform -rotate-1">SERVICES</h2>
            <p className="text-xl text-gray-900 max-w-3xl border-l-4 border-gray-900 pl-4">
              Empower your business with customizable virtual assistance services tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-4 border-gray-900 p-8 hover:bg-navy-100 transition">
              <div className="text-gray-900 mb-4">
                <Calendar size={48} className="stroke-2" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">EMAIL & CALENDAR MANAGEMENT</h3>
              <p className="text-gray-800">
                We handle scheduling, meeting coordination, and ensure you never miss an important appointment.
              </p>
            </div>
            
            <div className="border-4 border-gray-900 p-8 hover:bg-gray-100 transition">
              <div className="text-gray-900 mb-4">
                <Megaphone size={48} className="stroke-2" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">SOCIAL MEDIA MANAGEMENT & MARKETING
              </h3>
              <p className="text-gray-800">
                Strategic content creation, audience engagement, and analytics-driven campaigns to boost your online presence.
              </p>
            </div>
            
            <div className="border-4 border-gray-900 p-8 hover:bg-navy-100 transition">
              <div className="text-gray-900 mb-4">
                <BarChart size={48} className="stroke-2" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">DATA ENTRY & DATABASE MANAGEMENT</h3>
              <p className="text-gray-800">
              Accurate data input, organization, and database maintenance to keep your information structured and accessible.
              </p>
            </div>
            
            <div className="border-4 border-gray-900 p-8 hover:bg-gray-100 transition">
              <div className="text-gray-900 mb-4">
                <Clock size={48} className="stroke-2" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">PROJECT & EVENT MANAGEMENT</h3>
              <p className="text-gray-800">
              We oversee project planning, execution, and delivery, ensuring milestones are met on time and within budget.
              </p>
            </div>
            
            <div className="border-4 border-gray-900 p-8 hover:bg-navy-100 transition">
              <div className="text-gray-900 mb-4">
                <Phone size={48} className="stroke-2" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">CUSTOMER SUPPORT</h3>
              <p className="text-gray-800">
                Professional phone handling, client communication, and first-line support for your customers.
              </p>
            </div>
            
            <div className="border-4 border-gray-900 bg-gray-900 text-white p-8 hover:bg-navy-700 transition">
              <h3 className="text-2xl font-bold mb-2 tracking-tight flex justify-between items-start">
                EXECUTIVE PACKAGE
              </h3>
              <p className="mb-4">
                Comprehensive support including all services plus strategic assistance and priority response times.
              </p>
              <a href="https://www.linkedin.com" className="text-white font-bold flex items-center">
                LEARN MORE <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - brutalist style */}
        <section className="py-20 bg-white" id="how-it-works">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tighter inline-block bg-navy-300 px-4 py-2 transform rotate-1">THE PROCESS</h2>
          <p className="text-xl text-gray-900 max-w-3xl border-l-4 border-gray-900 pl-4">
            Getting started with ExecutiveAid is simple. Brutally efficient.
          </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
          <div className="border-4 border-gray-900 p-8 relative">
            <div className="absolute -top-6 -left-6 bg-navy-700 text-white w-16 h-16 flex items-center justify-center text-3xl font-bold">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4 tracking-tight">CONSULTATION</h3>
            <p className="text-gray-800">
              We start with a thorough needs assessment to understand your business and requirements.
            </p>
          </div>
          
          <div className="border-4 border-gray-900 p-8 relative">
            <div className="absolute -top-6 -left-6 bg-navy-800 text-white w-16 h-16 flex items-center justify-center text-3xl font-bold">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4 tracking-tight">MATCHING</h3>
            <p className="text-gray-800">
              We match you with a dedicated VA with the skills and experience tailored to your needs.
            </p>
          </div>
          
          <div className="border-4 border-gray-900 p-8 relative">
            <div className="absolute -top-6 -left-6 bg-navy-900 text-white w-16 h-16 flex items-center justify-center text-3xl font-bold">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4 tracking-tight">INTEGRATION</h3>
            <p className="text-gray-800">
              Your VA integrates into your workflow with minimal disruption, providing immediate value.
            </p>
          </div>

</div>
          </div>
        </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white border-y-4 border-gray-900" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-4 border-gray-900 p-8 bg-navy-100 transform rotate-1">
              <h2 className="text-4xl font-bold mb-6 tracking-tighter">MISSION</h2>
              <p className="text-xl border-l-4 border-gray-900 pl-4">
                At ExecutiveAid, we aim to empower businesses and professionals through customized, top notch administrative and executive support. We are dedicated to redefining efficiency and giving our clients the time they need to focus on their core business goals.
              </p>
            </div>
            
            <div className="border-4 border-gray-900 p-8 bg-gray-200 transform -rotate-1">
              <h2 className="text-4xl font-bold mb-6 tracking-tighter">VISION</h2>
              <p className="text-xl border-l-4 border-gray-900 pl-4">
                We strive to be a trusted partner in the growth of businesses, offering dependable virtual assistance that helps businesses and professionals focus on what truly drives their success while we take care of the details.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tighter inline-block bg-navy-200 px-4 py-2 transform -rotate-1">FAQ</h2>
            <p className="text-xl text-gray-900 max-w-3xl border-l-4 border-gray-900 pl-4">
              Everything you need to know about working with ExecutiveAid.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-4 border-gray-900">
                <button 
                  className="w-full p-6 flex justify-between items-center text-left font-bold text-xl bg-white hover:bg-navy-100 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? <Minus size={24} /> : <Plus size={24} />}
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-white border-t-4 border-gray-900">
                    <p className="text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA - brutalist style */}
      <section className="py-20 bg-navy-700 text-white border-b-4 border-gray-900" id="cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">READY TO RECLAIM YOUR TIME?</h2>
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

    {/* Footer - brutalist style */}
        <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tighter">
              EXECUTIVE<span className="text-navy-400">AID</span>
            </h3>
            <p className="text-white">Efficiency Redefined.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xl">CONTACT</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-white">jefferyamasa@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-white">+1 (234) 567-890</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xl">SEND A MESSAGE</h4>
            <FooterForm /> {/* Using the corrected Formspree form */}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} EXECUTIVEAID LTD. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>

    </div>
  );
};

// CSS Variables for Navy Colors
const styles = `
:root {
  --navy-100: #E6EBF4;
  --navy-200: #C7D2E5;
  --navy-300: #98ABCF;
  --navy-400: #6680B0;
  --navy-500: #3C5A94;
  --navy-600: #2A4173;
  --navy-700: #1B2C51;
  --navy-800: #0F1B38;
  --navy-900: #060E20;
}

/* Apply these variables to the existing classes in your application */
.bg-navy-100 { background-color: var(--navy-100); }
.bg-navy-200 { background-color: var(--navy-200); }
.bg-navy-300 { background-color: var(--navy-300); }
.bg-navy-400 { background-color: var(--navy-400); }
.bg-navy-500 { background-color: var(--navy-500); }
.bg-navy-600 { background-color: var(--navy-600); }
.bg-navy-700 { background-color: var(--navy-700); }
.bg-navy-800 { background-color: var(--navy-800); }
.bg-navy-900 { background-color: var(--navy-900); }

.text-navy-600 { color: var(--navy-600); }
.text-navy-400 { color: var(--navy-400); }

.border-navy-600 { border-color: var(--navy-600); }
`;

export default LandingPage;