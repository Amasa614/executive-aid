import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms and Conditions - ExecutiveAid",
  description: "Read our terms and conditions for using ExecutiveAid services.",
};

export default function TermsAndConditions() {
  return (
    <main className="bg-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Title with Logo */}
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="/images/EAID-logo.jpg"
            alt="ExecutiveAid Logo"
            width={288}
            height={220}
            className="w-12 h-12"
          />
          <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
        </div>

        <p className="mb-4 text-gray-900">
          Welcome to ExecutiveAid Ltd (&quot;ExecutiveAid&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our website executiveaid.org and our services.
          <br />By accessing or using our services, you agree to be bound by these Terms.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-900">
          By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">2. Services Description</h2>
        <p className="mb-4 text-gray-900">
          ExecutiveAid provides virtual assistant services including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>Administrative support</li>
          <li>Content creation and management</li>
          <li>Digital marketing services</li>
          <li>Financial management assistance</li>
          <li>Project management</li>
          <li>Web development solutions</li>
        </ul>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">3. User Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>Provide accurate and complete information when using our services</li>
          <li>Maintain the confidentiality of your account credentials</li>
          <li>Use our services in compliance with applicable laws and regulations</li>
          <li>Respect intellectual property rights</li>
          <li>Not engage in any harmful or disruptive activities</li>
        </ul>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">4. Payment Terms</h2>
        <p className="mb-4 text-gray-900">
          Payment terms will be specified in individual service agreements. Generally:
        </p>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>Fees are due as specified in your service agreement</li>
          <li>Late payments may incur additional charges</li>
          <li>Refunds are subject to our refund policy</li>
        </ul>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">5. Intellectual Property</h2>
        <p className="mb-4 text-gray-900">
          All content, trademarks, and intellectual property on our website remain the property of ExecutiveAid unless otherwise specified. Work products created for clients will be governed by individual service agreements.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
        <p className="mb-4 text-gray-900">
          ExecutiveAid shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">7. Termination</h2>
        <p className="mb-4 text-gray-900">
          Either party may terminate services with appropriate notice as specified in individual service agreements. We reserve the right to suspend or terminate access for violations of these Terms.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">8. Changes to Terms</h2>
        <p className="mb-4 text-gray-900">
          We may update these Terms periodically. Changes will be posted on our website with an updated effective date. Continued use of our services constitutes acceptance of modified Terms.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">9. Governing Law</h2>
        <p className="mb-4 text-gray-900">
          These Terms shall be governed by the laws of Ghana. Any disputes shall be resolved in the appropriate courts of Ghana.
        </p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">10. Contact Information</h2>
        <p className="mb-4 text-gray-900">
          For questions about these Terms, please contact us:
          <br />ExecutiveAid Ltd
        </p>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>Email: support@executiveaid.org</li>
          <li>Phone: +233256108055</li>
        </ul>

        {/* Close Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Close
          </Link>
        </div>
      </div>
    </main>
  );
}
