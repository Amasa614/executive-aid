
import Link from "next/dist/client/link";
import Image from "next/image";
export const metadata = {
  title: "Privacy Policy - ExecutiveAid",
  description: "Read our privacy policy to learn how ExecutiveAid protects your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Title with Logo */}
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="/images/EAID-logo.jpg" // change this path to match your logo file
            alt="ExecutiveAid Logo"
            width={288}
            height={220}
            className="w-12 h-12"
          />
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
      <p className="mb-4 text-gray-900">
        ExecutiveAid Ltd (“ExecutiveAid”, “we”, “us”, or “our”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website executiveaid.org or use our services.
      <br />By using our website and services, you consent to the practices described in this policy.
      </p>
      <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">1. Information We Collect</h2>
      <p className="mb-4 text-gray-900">We collect information to provide and improve our services. This includes:
      </p>
      <ul className="list-disc list-inside text-gray-900 mb-4">
          <li>Personal Information You Provide: 
            When you fill out forms, register accounts, subscribe to newsletters, contact us, or participate in promotions, you may provide your name, email, phone number, company/organization details, billing information, and other relevant data.</li>
          <li>Information Collected Automatically: 
            When you visit our website, we may collect technical data such as your IP address, browser type, device information, pages visited, and timestamps. This helps us understand how our services are used and improve them.</li>
          <li>Cookies and Tracking Technology: 
            We use cookies and similar tools to enhance your experience, analyze traffic, and personalize content. See section 4 for details.</li>
        </ul>
      <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4 text-gray-900">We use your information for purposes including but not limited to:</p>
      <ul className="list-disc list-inside text-gray-900 mb-4">
        <li>Providing, operating, and maintaining our services</li>
        <li>Responding to your inquiries and providing customer support.</li>
        <li>Sending important service-related communications (e.g., updates, billing).</li>
        <li>Sending newsletters, marketing emails, and personalized offers (only if you consent).</li>
        <li>Administering contests, surveys, or promotions.</li>
        <li>Preventing fraud and ensuring security.</li>
        <li>Complying with legal obligations and protecting our rights.</li>
      </ul>
      <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">3.Your Choices and Control</h2>
      <ul className="list-disc list-inside text-gray-900 mb-4">
        <li>Email Communications:
            You can unsubscribe from marketing emails anytime by following the “unsubscribe” link in those emails or contacting us at support@executiveaid.org.</li>
        <li>Access and Correction:
            You have the right to request access to your personal data and to correct or delete inaccurate or incomplete information.</li>
        <li>Account Deletion:
        If you wish to cancel your account or stop using our services, contact us at support@executiveaid.org.
        </li>
      </ul>
      <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">4.Cookies and Tracking</h2>
      <p className="mb-4 text-gray-900">What are cookies? 
        <br /> Cookies are small files stored on your device to help improve your browsing experience.</p>
      <p className="mb-4 text-gray-900">Types of Cookies We Use:</p>
      <ul className="list-disc list-inside text-gray-900 mb-4">
        <li>Essential Cookies: Required for basic website functions.</li>
        <li>Performance Cookies: Help us understand how you use the site anonymously.</li>
        <li>Functional Cookies: These cookies remember your preferences.</li>
        <li>Advertising Cookies: Provide relevant ads.</li>
      </ul>
      <p className="mb-4 text-gray-900">Third-Party Cookies:
       <br />We may allow third-party services like Google Analytics to set cookies. These third parties have their own privacy policies.</p>
      <p className="mb-4 text-gray-900">Managing Cookies:
       <br />You can control or disable cookies through your browser settings. Note that disabling some cookies may affect website functionality.</p>
       <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">5.Information Sharing and Disclosure</h2>
      <p className="mb-4 text-gray-900">We do not sell, rent, or trade your personal information.
        <br />We may share your information with trusted third parties who assist us in delivering our services (e.g., payment processors, hosting providers) under strict confidentiality agreements.
        <br />We may disclose your information when required by law, to enforce our policies, or protect our or others&apos; rights and safety.</p>
        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">6.Data Security and Retention</h2>
      <p className="mb-4 text-gray-900">We implement appropriate technical and organizational security measures to protect your data from unauthorized access or disclosure.
        <br />We retain your personal information only as long as necessary to provide our services, comply with legal requirements, or resolve disputes.</p>
        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">7.International Data Transfers</h2>
      <p className="mb-4 text-gray-900">If we transfer your data outside Ghana, we ensure adequate safeguards are in place consistent with this Privacy Policy and applicable laws.</p>
        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">8.Children&apos; s Privacy</h2>
      <p className="mb-4 text-gray-900">Our services are not directed to individuals under 18 years old. We do not knowingly collect personal data from minors.</p>
        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">9. Changes to This Privacy Policy</h2>
      <p className="mb-4 text-gray-900">We may update this policy occasionally to reflect changes in our practices or legal requirements.
        <br />We will post any updates on our website with a new effective date.
        <br />Please review this page regularly to stay informed.</p>
         <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-3">10. Contact Us</h2>
      <p className="mb-4 text-gray-900">If you have questions or requests regarding this Privacy Policy or your personal data, please contact us:
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