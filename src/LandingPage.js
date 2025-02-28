import React, { useState } from 'react';
import { Calendar, Clock, BarChart, Mail, Phone, ChevronRight, ArrowRight, X, Menu, Plus, Minus } from 'lucide-react';

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
      <nav className="border-b-4 border-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-4xl font-bold tracking-tighter">EXECUTIVE<span className="text-amber-600">AID</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-black font-bold hover:bg-black hover:text-white px-2 transition">SERVICES</a>
              <a href="#how-it-works" className="text-black font-bold hover:bg-black hover:text-white px-2 transition">PROCESS</a>
              <a href="#mission" className="text-black font-bold hover:bg-black hover:text-white px-2 transition">MISSION</a>
              <a href="#faq" className="text-black font-bold hover:bg-black hover:text-white px-2 transition">FAQ</a>
            </div>
            <button className="bg-amber-600 text-white px-6 py-2 font-bold hover:bg-black transition border-2 border-black">
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section inspired by Image 1 */}
      <header className="bg-gray-800 py-20 border-b-4 border-black relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-3/5 mb-10 md:mb-0 text-white">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter leading-none">GROW YOUR BUSINESS WITH A VIRTUAL ASSISTANT</h1>
                <p className="text-xl mb-8 border-l-4 border-amber-600 pl-4">
                  FULLY TRAINED VIRTUAL ASSISTANTS FOR BUSINESS OWNERS & ENTREPRENEURS
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                  <button className="bg-amber-600 text-white px-8 py-3 font-bold hover:bg-amber-700 transition border-2 border-amber-600">
                    Hire a Virtual Assistant
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 border-4 border-black bg-white transform -rotate-2">
              <div className="bg-white p-6">
                <h3 className="text-black font-bold text-xl mb-4 border-b-2 border-black pb-2">REQUEST A CALLBACK</h3>
                <form action="mailto:jefferyamasa@gmail.com" method="post" encType="text/plain">
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="NAME"
                      className="w-full px-4 py-2 border-2 border-black font-mono focus:outline-none focus:ring-2 focus:ring-black" 
                      required
                    />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="EMAIL"
                      className="w-full px-4 py-2 border-2 border-black font-mono focus:outline-none focus:ring-2 focus:ring-black" 
                      required
                    />
                    <textarea 
                      name="message"
                      placeholder="YOUR MESSAGE"
                      rows="3"
                      className="w-full px-4 py-2 border-2 border-black font-mono focus:outline-none focus:ring-2 focus:ring-black" 
                      required
                    ></textarea>
                    <button type="submit" className="w-full bg-amber-600 text-white py-2 font-bold hover:bg-black transition border-2 border-black">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Business Owner Types Section - inspired by Image 2 */}
      <section className="py-16 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6 inline-block">Are you one of these <span className="text-amber-600">Business</span> owners?</h2>
          </div>
          
          <div className="md:flex">
            <div className="md:w-2/5 mb-8 md:mb-0">
              <div className="border-4 border-black transform rotate-1">
                <img src="/api/placeholder/500/600" alt="Business owner with question mark" className="w-full" />
              </div>
            </div>
            
            <div className="md:w-3/5 md:pl-12">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">The Busy Entrepreneur</h3>
                    <p className="text-gray-700">I need more time to focus on growing my business, but can't manage all the admin tasks.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">The Sleep-Deprived Leader</h3>
                    <p className="text-gray-700">I hired someone to handle my admin and marketing tasks; I cannot find time to train or delegate the tasks as the only time I am free is by midnight.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">The One Who Wants to Diversify</h3>
                    <p className="text-gray-700">I'd like to target a new market but don't have the resources, head space and time.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">The Smart Spender</h3>
                    <p className="text-gray-700">I want a cost-effective virtual assistant without compromising on quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-4 border-black p-8 bg-teal-200 transform rotate-1">
              <h2 className="text-4xl font-bold mb-6 tracking-tighter">MISSION</h2>
              <p className="text-xl border-l-4 border-black pl-4">
                At ExecutiveAid, we aim to empower businesses and professionals through customized, top notch administrative and executive support. We are dedicated to redefining efficiency and giving our clients the time they need to focus on their core business goals.
              </p>
            </div>
            
            <div className="border-4 border-black p-8 bg-amber-200 transform -rotate-1">
              <h2 className="text-4xl font-bold mb-6 tracking-tighter">VISION</h2>
              <p className="text-xl border-l-4 border-black pl-4">
                We strive to be a trusted partner in the growth of businesses, offering dependable virtual assistance that helps businesses and professionals focus on what truly drives their success while we take care of the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Services - brutalist style */}
      <section className="py-20 bg-white border-y-4 border-black" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-black mb-4 tracking-tighter inline-block bg-amber-300 px-4 py-2 transform -rotate-1">SERVICES</h2>
            <p className="text-xl text-black max-w-3xl border-l-4 border-black pl-4">
              Our virtual assistants handle the mundane so you can focus on the extraordinary. No nonsense. Just results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-4 border-black p-8 hover:bg-amber-100 transition">
              <div className="text-black mb-4">
                <Calendar size={48} className="stroke-2" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">CALENDAR MANAGEMENT</h3>
              <p className="text-black">
                We handle scheduling, meeting coordination, and ensure you never miss an important appointment.
              </p>
            </div>
            
            <div className="border-4 border-black p-8 hover:bg-teal-100 transition">
              <div className="text-black mb-4">
                <Mail size={48} className="stroke-2" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">EMAIL MANAGEMENT</h3>
              <p className="text-black">
                Inbox organization, response drafting, and priority flagging to keep communications flowing smoothly.
              </p>
            </div>
            
            <div className="border-4 border-black p-8 hover:bg-amber-100 transition">
              <div className="text-black mb-4">
                <BarChart size={48} className="stroke-2" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">RESEARCH & REPORTS</h3>
              <p className="text-black">
                Comprehensive market research, competitor analysis, and data-driven reports tailored to your needs.
              </p>
            </div>
            
            <div className="border-4 border-black p-8 hover:bg-teal-100 transition">
              <div className="text-black mb-4">
                <Clock size={48} className="stroke-2" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">TASK MANAGEMENT</h3>
              <p className="text-black">
                We track deadlines, manage project timelines, and ensure everything stays on schedule.
              </p>
            </div>
            
            <div className="border-4 border-black p-8 hover:bg-amber-100 transition">
              <div className="text-black mb-4">
                <Phone size={48} className="stroke-2" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">CUSTOMER SUPPORT</h3>
              <p className="text-black">
                Professional phone handling, client communication, and first-line support for your customers.
              </p>
            </div>
            
            <div className="border-4 border-black bg-black text-white p-8 hover:bg-amber-600 transition">
              <h3 className="text-2xl font-bold mb-2 tracking-tight flex justify-between items-start">
                EXECUTIVE PACKAGE
              </h3>
              <p className="mb-4">
                Comprehensive support including all services plus strategic assistance and priority response times.
              </p>
              <a href="#" className="text-white font-bold flex items-center">
                LEARN MORE <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-4 border-black transform rotate-1">
              <img src="/api/placeholder/400/300" alt="VA working" className="w-full h-full object-cover" />
            </div>
            <div className="border-4 border-black transform -rotate-2">
              <img src="/api/placeholder/400/300" alt="Productivity" className="w-full h-full object-cover" />
            </div>
            <div className="border-4 border-black transform rotate-1">
              <img src="/api/placeholder/400/300" alt="Business growth" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - brutalist style */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-black mb-4 tracking-tighter inline-block bg-teal-300 px-4 py-2 transform rotate-1">THE PROCESS</h2>
            <p className="text-xl text-black max-w-3xl border-l-4 border-black pl-4">
              Getting started with ExecutiveAid is simple. Brutally efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-4 border-black p-8 relative">
              <div className="absolute -top-6 -left-6 bg-black text-white w-16 h-16 flex items-center justify-center text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 mt-4 tracking-tight">CONSULTATION</h3>
              <p className="text-black">
                We start with a thorough needs assessment to understand your business and requirements.
              </p>
            </div>
            
            <div className="border-4 border-black p-8 relative">
              <div className="absolute -top-6 -left-6 bg-black text-white w-16 h-16 flex items-center justify-center text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 mt-4 tracking-tight">MATCHING</h3>
              <p className="text-black">
                We match you with a dedicated VA with the skills and experience tailored to your needs.
              </p>
            </div>
            
            <div className="border-4 border-black p-8 relative">
              <div className="absolute -top-6 -left-6 bg-black text-white w-16 h-16 flex items-center justify-center text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 mt-4 tracking-tight">INTEGRATION</h3>
              <p className="text-black">
                Your VA integrates into your workflow with minimal disruption, providing immediate value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - brutalist style */}
      <section className="py-20 bg-amber-300 border-y-4 border-black" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-black mb-4 tracking-tighter inline-block bg-white px-4 py-2 border-4 border-black transform -rotate-1">CLIENT FEEDBACK</h2>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-4 border-black transform rotate-1">
              <div className="flex items-center mb-6">
                <div className="bg-black text-white w-16 h-16 flex items-center justify-center font-bold mr-4 text-xl">
                  JD
                </div>
                <div>
                  <h4 className="text-xl font-bold">JAMES DONOVAN</h4>
                  <p className="text-black">CEO, TechNova</p>
                </div>
                <img src="/api/placeholder/80/80" alt="James Donovan" className="w-16 h-16 ml-auto border-2 border-black" />
              </div>
              <p className="text-black text-xl border-l-4 border-black pl-4">
                "ExecutiveAid transformed how I manage my time. Their VA handles all the administrative tasks I used to dread, freeing me to focus on strategy and growth."
              </p>
            </div>
            
            <div className="bg-white p-8 border-4 border-black transform -rotate-1">
              <div className="flex items-center mb-6">
                <div className="bg-black text-white w-16 h-16 flex items-center justify-center font-bold mr-4 text-xl">
                  SM
                </div>
                <div>
                  <h4 className="text-xl font-bold">SARAH MITCHELL</h4>
                  <p className="text-black">Founder, Bloom Marketing</p>
                </div>
                <img src="/api/placeholder/80/80" alt="Sarah Mitchell" className="w-16 h-16 ml-auto border-2 border-black" />
              </div>
              <p className="text-black text-xl border-l-4 border-black pl-4">
                "The level of professionalism and attention to detail is outstanding. My VA anticipated needs I didn't even know I had. Worth every penny."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-black mb-4 tracking-tighter inline-block bg-teal-200 px-4 py-2 transform -rotate-1">FAQ</h2>
            <p className="text-xl text-black max-w-3xl border-l-4 border-black pl-4">
              Everything you need to know about working with ExecutiveAid.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-4 border-black">
                <button 
                  className="w-full p-6 flex justify-between items-center text-left font-bold text-xl bg-white hover:bg-amber-100 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? <Minus size={24} /> : <Plus size={24} />}
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-white border-t-4 border-black">
                    <p className="text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Owner Types Section 2 - inspired by Image 2 (in body) */}
      <section className="py-16 bg-teal-50 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4 tracking-tighter inline-block bg-teal-200 px-4 py-2 transform -rotate-1">HOW WE HELP YOU</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-4 border-black bg-white p-8">
              <h3 className="text-2xl font-bold mb-6">We help business owners who:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Need specialized skills their current team doesn't have</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Want to focus on strategy and growth, not admin tasks</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Are spending too much time handling marketing when they should be making sales</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Need work done on a budget without compromising quality</p>
                </div>
              </div>
            </div>
            
            <div className="border-4 border-black bg-white p-8">
              <h3 className="text-2xl font-bold mb-6">What we provide:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Pre-trained VAs who hit the ground running from day one</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Flexible support that scales with your business needs</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Specialized skills in administration, marketing, research, and customer support</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
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

      {/* CTA - brutalist style */}
      <section className="py-20 bg-amber-600 text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">READY TO RECLAIM YOUR TIME?</h2>
              <p className="text-xl">
                Join executives worldwide who trust ExecutiveAid to handle their day-to-day tasks.
              </p>
            </div>
            <div className="md:w-1/3">
              <form action="mailto:jefferyamasa@gmail.com" method="post" encType="text/plain">
                <input 
                  type="text" 
                  name="name"
                  placeholder="YOUR NAME"
                  className="w-full px-4 py-3 mb-4 border-4 border-black font-mono focus:outline-none" 
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full px-4 py-3 mb-4 border-4 border-black font-mono focus:outline-none" 
                  required
                />
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  rows="3"
                  className="w-full px-4 py-3 mb-4 border-4 border-black font-mono focus:outline-none"
                  required
                ></textarea>
                <button type="submit" className="w-full bg-black text-white py-4 px-8 font-bold text-xl border-4 border-white hover:bg-white hover:text-black transition">
                  LET'S TALK
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - brutalist style */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter">EXECUTIVE<span className="text-amber-600">AID</span></h3>
              <p className="text-white">
                Premium virtual assistant services for executives and growing businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-xl">CONTACT</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:jefferyamasa@gmail.com" className="text-white hover:text-amber-600">
                    jefferyamasa@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <a href="tel:+1234567890" className="text-white hover:text-amber-600">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-xl">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white text-black w-10 h-10 flex items-center justify-center font-bold hover:bg-amber-600 hover:text-white transition">
                  FB
                </a>
                <a href="#" className="bg-white text-black w-10 h-10 flex items-center justify-center font-bold hover:bg-amber-600 hover:text-white transition">
                  TW
                </a>
                <a href="#" className="bg-white text-black w-10 h-10 flex items-center justify-center font-bold hover:bg-amber-600 hover:text-white transition">
                  IG
                </a>
                <a href="#" className="bg-white text-black w-10 h-10 flex items-center justify-center font-bold hover:bg-amber-600 hover:text-white transition">
                  LI
                </a>
              </div>
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

export default LandingPage;