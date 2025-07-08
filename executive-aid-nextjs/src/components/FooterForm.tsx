'use client';

import { useForm, ValidationError } from '@formspree/react';

export const FooterForm = () => {
  const [state, handleSubmit] = useForm("mzzezpze"); // Formspree form ID

  if (state.succeeded) {
    return <p className="text-center text-gray-300">Thank you! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        className="w-full px-3 md:px-4 py-2 mb-3 md:mb-4 border border-gray-600 bg-gray-800 text-gray-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
        required 
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs md:text-sm mb-2 block" />
      
      <textarea 
        name="message" 
        placeholder="Your Message" 
        rows={3}
        className="w-full px-3 md:px-4 py-2 mb-3 md:mb-4 border border-gray-600 bg-gray-800 text-gray-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-2xl"
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs md:text-sm mb-2 block" />
      
      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full py-2 font-bold text-sm md:text-base border border-indigo-900 bg-indigo-900 text-white hover:bg-indigo-800 transition rounded-full"
      >
        {state.submitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}; 