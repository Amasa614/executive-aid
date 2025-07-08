'use client';

import { useForm, ValidationError } from '@formspree/react';

export const HeroForm = () => {
  const [state, handleSubmit] = useForm("mzzezpze"); // Formspree form ID 
  
  if (state.succeeded) {
    return (
      <div className="p-6 text-center bg-white shadow-md rounded-2xl">
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
    <div className="p-4 md:p-6 bg-white shadow-md rounded-2xl">
      <h3 className="text-base md:text-xl text-indigo-900 font-bold mb-4 border-b border-gray-300 pb-2">
        FREE CONSULTATION
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-3 md:space-y-4">
          <input 
            type="text" 
            name="name"
            placeholder="NAME"
            className="w-full px-3 md:px-4 py-2 border border-gray-300 font-mono text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full" 
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-xs md:text-sm" />
          
          <input 
            type="email" 
            name="email"
            placeholder="EMAIL"
            className="w-full px-3 md:px-4 py-2 border border-gray-300 font-mono text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full" 
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-xs md:text-sm" />
          
          <input 
            type="tel" 
            name="phone"
            placeholder="PHONE NUMBER"
            className="w-full px-3 md:px-4 py-2 border border-gray-300 font-mono text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full" 
            required
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-xs md:text-sm" />
          
          <textarea 
            name="message"
            placeholder="TELL US ABOUT YOUR BUSINESS"
            rows={3}
            className="w-full px-3 md:px-4 py-2 border border-gray-300 font-mono text-sm md:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-2xl" 
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-xs md:text-sm" />
          
          <button 
            type="submit" 
            disabled={state.submitting}
            className={`w-full py-2 font-bold text-sm md:text-base border border-gray-300 rounded-full transition-all duration-300 ${
              state.submitting 
                ? 'bg-gray-200 text-gray-500' 
                : 'bg-indigo-900 text-white hover:bg-indigo-800 button-hover-glow'
            }`}
          >
            {state.submitting ? 'SENDING...' : 'SUBMIT'}
          </button>
        </div>
      </form>
    </div>
  );
}; 