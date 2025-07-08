'use client';

import { useForm, ValidationError } from '@formspree/react';

export const CTAForm = () => {
  const [state, handleSubmit] = useForm("mzzezpze"); // Formspree form ID
  
  if (state.succeeded) {
    return (
      <div className="text-center p-6 bg-white shadow-md rounded-2xl">
        <h3 className="font-bold text-xl mb-2 text-indigo-900">THANK YOU!</h3>
        <p className="text-gray-700">We&apos;ll be in touch with you shortly.</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name"
        placeholder="YOUR NAME"
        className="w-full px-3 md:px-4 py-2 md:py-3 mb-3 md:mb-4 border-2 border-gray-300 font-mono text-sm md:text-base focus:outline-none rounded-full" 
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-gray-500 text-xs md:text-sm mb-2 block" />
      
      <input 
        type="email" 
        name="email"
        placeholder="ENTER YOUR EMAIL"
        className="w-full px-3 md:px-4 py-2 md:py-3 mb-3 md:mb-4 border-2 border-gray-300 font-mono text-sm md:text-base focus:outline-none rounded-full" 
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-gray-500 text-xs md:text-sm mb-2 block" />
      
      <input 
        type="tel" 
        name="phone"
        placeholder="PHONE NUMBER"
        className="w-full px-3 md:px-4 py-2 md:py-3 mb-3 md:mb-4 border-2 border-gray-300 font-mono text-sm md:text-base focus:outline-none rounded-full" 
        required
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-gray-500 text-xs md:text-sm mb-2 block" />
      
      <textarea
        name="message"
        placeholder="YOUR MESSAGE"
        rows={3}
        className="w-full px-3 md:px-4 py-2 md:py-3 mb-3 md:mb-4 border-2 border-gray-300 text-gray-700 font-mono text-sm md:text-base focus:outline-none rounded-2xl"
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-gray-500 text-xs md:text-sm mb-2 block" />
      
      <button 
        type="submit" 
        disabled={state.submitting}
        className={`w-full py-3 md:py-4 px-6 md:px-8 font-bold text-base md:text-xl border-2 border-indigo-900 rounded-full transition-all duration-300 ${
          state.submitting 
            ? 'bg-gray-200 text-gray-500' 
            : 'bg-indigo-900 text-white hover:bg-indigo-800 button-hover-glow'
        }`}
      >
        {state.submitting ? 'SENDING...' : "LET&apos;S TALK"}
      </button>
    </form>
  );
}; 