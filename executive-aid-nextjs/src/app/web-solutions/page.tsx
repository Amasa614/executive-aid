'use client';

import { useState, useEffect } from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Zap, 
  Users, 
  BarChart3, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Eye, 
  Code, 
  Palette
} from 'lucide-react';

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your form handling service here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Custom Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <select
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select Project Type</option>
            <option value="crm-system">CRM System</option>
            <option value="inventory-management">Inventory Management</option>
            <option value="ecommerce-platform">E-commerce Platform</option>
            <option value="custom-web-app">Custom Web Application</option>
            <option value="business-website">Business Website</option>
            <option value="other">Other</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-900 text-white py-3 px-6 rounded-full font-bold hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105"
        >
          Get Started Now
        </button>
      </form>
    </div>
  );
};

export default function WebSolutionsPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add animations
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

      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .card-hover-effect {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card-hover-effect:hover {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        transform: translateY(-8px) scale(1.02);
      }

      .button-hover-glow:hover {
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const webSolutions = [
    {
      id: 1,
      title: 'Razorbill CRM',
      description: 'A comprehensive Customer Relationship Management system designed to streamline business operations, manage customer interactions, and drive sales growth.',
      features: [
        'Customer Data Management',
        'Sales Pipeline Tracking',
        'Contact Management',
        'Task & Activity Tracking',
        'Reporting & Analytics',
        'User Role Management',
        'Integration Capabilities',
        'Mobile Responsive Design'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js'],
      status: 'Live Production',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'Razorbill Inventory Management',
      description: 'An advanced inventory management system that provides real-time tracking, automated alerts, and comprehensive reporting for efficient stock control.',
      features: [
        'Real-time Inventory Tracking',
        'Automated Stock Alerts',
        'Multi-location Support',
        'Product Categorization',
        'Purchase Order Management',
        'Barcode Scanning',
        'Supplier Management',
        'Detailed Reporting'
      ],
      technologies: ['Vue.js', 'Python', 'MySQL', 'Flask'],
      status: 'Live Production',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'Nepakie Shower Gel E-commerce',
      description: 'A modern, user-friendly e-commerce platform for Nepakie shower gel products, featuring secure payments, inventory management, and customer engagement tools.',
      features: [
        'Product Catalog',
        'Shopping Cart & Checkout',
        'Secure Payment Gateway',
        'Order Management',
        'Customer Accounts',
        'Inventory Integration',
        'Mobile Optimization',
        'SEO Optimization'
      ],
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      status: 'Live Production',
      icon: <ShoppingCart className="w-8 h-8" />
    }
  ];

  // No filtering needed since we have specific projects

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Inherited from main page */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 py-4 md:py-6 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-white/20 border-b border-white/20 shadow-lg' 
          : 'backdrop-blur-md bg-white/80 border-b border-gray-300/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo & Subtitle */}
            <div className="flex flex-col leading-none">
              <a href="/" className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
                EXECUTIVE<span className="text-indigo-900">AID</span>
              </a>
              <span className="text-xs md:text-sm text-gray-600 -mt-1">Efficiency Redefined.</span>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-sm md:text-base text-gray-900 font-bold hover:text-indigo-900 transition">HOME</a>
              <a href="/web-solutions" className="text-sm md:text-base text-gray-900 font-bold hover:text-indigo-900 transition">OUR PORTFOLIO</a>
            </div>
            {/* Contact Button */}
            <a href="/">
              <button className="bg-indigo-900 text-white px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base font-bold hover:bg-indigo-800 transition-all duration-300 border border-indigo-900 rounded-full button-hover-glow">
                CONTACT
              </button>
            </a> 
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white"> {/* bg-gray-900 text-white */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Our Web Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover our live production systems: enterprise CRM, inventory management, 
            and e-commerce solutions built with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#catalog" className="bg-white text-indigo-900 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition-all duration-300">
              View Portfolio
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-3 font-bold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300">
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-900 mb-2">3</div>
              <div className="text-gray-600">Live Production Systems</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-900 mb-2">100%</div>
              <div className="text-gray-600">Uptime Record</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-900 mb-2">24/7</div>
              <div className="text-gray-600">Support & Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section id="catalog" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our custom-built web applications and systems currently in production.
            </p>
          </div>

          {/* Project 1 - Razorbill CRM */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Razorbill CRM:
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
                    Your Go-To Customer Management Platform
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Razorbill CRM is a comprehensive Customer Relationship Management system designed to streamline business operations, manage customer interactions, and drive sales growth. This platform simplifies customer management by providing powerful tools for sales tracking, contact organization, and detailed analytics.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webSolutions[0].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Customer Data Management:</strong> Centralized database for all customer information and interaction history.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Sales Pipeline Tracking:</strong> Visual pipeline management with automated follow-up reminders.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Advanced Analytics:</strong> Comprehensive reporting dashboard with real-time insights.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>User Role Management:</strong> Secure access controls with customizable user permissions.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    ✓ Live Production
                  </span>
                  <button className="px-6 py-3 bg-indigo-900 text-white rounded-full font-bold hover:bg-indigo-800 transition-all duration-300 flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
              
              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-4">
                    <img 
                      src="/images/razorbill IMS.png" 
                      alt="Razorbill CRM Dashboard Screenshot" 
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="text-sm text-gray-600">Razorbill CRM Dashboard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Razorbill Inventory */}
          <div className="mb-24 bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="order-1">
                  <div className="relative">
                    <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-4">
                      <img 
                        src="/images/razorbill IMS.png" 
                        alt="Razorbill Inventory Management System Screenshot" 
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
                      <div className="text-sm text-gray-600">Real-time Dashboard</div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="order-2">
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                      Razorbill Inventory:
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
                      Advanced Stock Management Solution
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Razorbill Inventory Management is an advanced system that provides real-time tracking, automated alerts, and comprehensive reporting for efficient stock control. This platform revolutionizes inventory management with intelligent automation and detailed analytics.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {webSolutions[1].technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Real-time Tracking:</strong> Live inventory updates with instant stock level monitoring.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Automated Alerts:</strong> Smart notifications for low stock, reorder points, and expiry dates.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Multi-location Support:</strong> Manage inventory across multiple warehouses and locations.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Barcode Integration:</strong> Seamless barcode scanning for quick inventory updates.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      ✓ Live Production
                    </span>
                    <button className="px-6 py-3 bg-indigo-900 text-white rounded-full font-bold hover:bg-indigo-800 transition-all duration-300 flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - Nepakie E-commerce */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Nepakie E-commerce:
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
                    Premium Shower Gel Online Store
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Nepakie E-commerce is a modern, user-friendly online platform designed specifically for Nepakie shower gel products. The platform features secure payment processing, intelligent inventory management, and engaging customer experience tools that drive sales and build brand loyalty.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webSolutions[2].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Product Showcase:</strong> Beautiful product galleries with detailed descriptions and specifications.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Secure Checkout:</strong> Integrated Stripe payment gateway with multiple payment options.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Order Management:</strong> Complete order tracking from purchase to delivery.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Mobile Optimized:</strong> Responsive design that works perfectly on all devices.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    ✓ Live Production
                  </span>
                  <button className="px-6 py-3 bg-indigo-900 text-white rounded-full font-bold hover:bg-indigo-800 transition-all duration-300 flex items-center">
                    Visit Store
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
              
              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl p-4">
                    <img 
                      src="/images/nepakie screenshot.png" 
                      alt="Nepakie E-commerce Platform Screenshot" 
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="text-sm text-gray-600">E-commerce Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ExecutiveAid follows a comprehensive development process to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 - Discovery */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover-effect">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  01
                </div>
                <h3 className="text-xl font-bold text-gray-900">Discovery</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We start by understanding your business goals, target audience, and technical requirements. Through detailed consultations, we analyze your needs and define the project scope.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Requirements analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Technology stack selection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Timeline & cost estimation
                </li>
              </ul>
            </div>

            {/* Step 2 - Design */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover-effect">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  02
                </div>
                <h3 className="text-xl font-bold text-gray-900">Design</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our UX/UI design team creates wireframes and prototypes that prioritize user experience and visual appeal. We ensure your application is both functional and beautiful.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Wireframing & prototyping
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  User interface design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Mobile responsiveness
                </li>
              </ul>
            </div>

            {/* Step 3 - Development */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover-effect">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  03
                </div>
                <h3 className="text-xl font-bold text-gray-900">Development</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Using Agile methodology, we build your application in short sprints. This ensures continuous progress, regular feedback, and the ability to adapt to changing requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Agile development process
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Regular progress updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Quality assurance testing
                </li>
              </ul>
            </div>

            {/* Step 4 - Testing & Launch */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover-effect">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  04
                </div>
                <h3 className="text-xl font-bold text-gray-900">Testing & Launch</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Before going live, we conduct comprehensive testing to ensure your application is bug-free, secure, and performs optimally across all devices and browsers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cross-browser testing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Security assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Production deployment
                </li>
              </ul>
            </div>

            {/* Step 5 - Support & Maintenance */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover-effect">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  05
                </div>
                <h3 className="text-xl font-bold text-gray-900">Support & Maintenance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our relationship doesn't end at launch. We provide ongoing support, monitoring, and maintenance to ensure your application remains secure and up-to-date.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  24/7 monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Regular updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Feature enhancements
                </li>
              </ul>
            </div>

            {/* Step 6 - Growth & Scaling */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover-effect">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  06
                </div>
                <h3 className="text-xl font-bold text-gray-900">Growth & Scaling</h3>
              </div>
              <p className="text-gray-700 mb-4">
                As your business grows, we help scale your applications to handle increased traffic, add new features, and integrate with additional systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Performance optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Feature expansion
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  System integrations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>





      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss your vision and create a custom web solution that drives your business forward.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-indigo-900 text-white p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-gray-600">support@executiveaid.org</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-indigo-900 text-white p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-gray-600">+233256108055</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                EXECUTIVE<span className="text-indigo-400">AID</span>
              </h3>
              <p className="text-gray-400">
                Custom web solutions that drive business growth and success.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Business Websites</a></li>
                <li><a href="#" className="hover:text-white transition">E-commerce Solutions</a></li>
                <li><a href="#" className="hover:text-white transition">Web Applications</a></li>
                <li><a href="#" className="hover:text-white transition">Mobile Apps</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@executiveaid.org</li>
                <li>+233256108055</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ExecutiveAid Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 