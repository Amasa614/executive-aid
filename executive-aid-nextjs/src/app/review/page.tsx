import ReviewForm from '@/components/ReviewForm';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Leave a Review | Executive Aid',
  description: 'Share your experience working with Executive Aid. Your feedback helps us serve our clients better.',
};

export default function ReviewPage() {
  return (
    <>
      <Navigation isScrolled={true} contactLink="/#cta" />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
              Share Your Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;d love to hear about your experience working with Executive Aid. 
              Your feedback helps us serve our clients better and helps other business owners 
              make informed decisions.
            </p>
          </div>

          {/* Review Form */}
          <div className="mb-12">
            <ReviewForm standalone={true} />
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
              Why Your Review Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Help Us Improve</h3>
                <p className="text-gray-600">Your feedback helps us continuously improve our services and deliver better results.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Help Other Businesses</h3>
                <p className="text-gray-600">Share your success story to help other business owners discover our services.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Trust</h3>
                <p className="text-gray-600">Authentic reviews build trust and credibility in our virtual assistant services.</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center bg-indigo-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-indigo-200 mb-4">
              If you have any questions about leaving a review or need assistance, 
              feel free to reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@executiveaid.org" 
                className="bg-white text-indigo-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <Link 
                href="/" 
                className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-indigo-900 transition-colors"
              >
                Visit Our Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
