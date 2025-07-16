import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExecutiveAid - Virtual Assistant Services",
  description: "Empower your business with customizable virtual assistant solutions. Virtual Support, Real Results.",
  keywords: "virtual assistant, executive support, business assistance, remote work, productivity",
  authors: [{ name: "ExecutiveAid" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "ExecutiveAid - Virtual Assistant Services",
    description: "Empower your business with customizable virtual assistant solutions. Virtual Support, Real Results.",
    url: "https://executiveaid.org",
    siteName: "ExecutiveAid",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExecutiveAid - Virtual Assistant Services",
    description: "Empower your business with customizable virtual assistant solutions. Virtual Support, Real Results.",
    creator: "@executiveaidltd",
  },
  alternates: {
    canonical: "https://executiveaid.org",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code when you get it
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/person-office-work-day.jpg"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ExecutiveAid",
              "url": "https://executiveaid.org",
              "logo": "https://executiveaid.org/logo.png",
              "description": "Professional virtual assistant services that transform businesses and drive success.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GH"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+233256108055",
                "contactType": "customer service",
                "email": "support@executiveaid.org"
              },
              "sameAs": [
                "https://www.instagram.com/executiveaid/",
                "https://www.linkedin.com/company/executiveaid/",
                "https://twitter.com/executiveaidltd"
              ],
              "foundingDate": "2024",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Ebo Mprah",
                  "jobTitle": "Chief Executive Officer"
                }
              ],
              "employee": [
                {
                  "@type": "Person",
                  "name": "Jeffery Crentsil",
                  "jobTitle": "Chief Technology Officer"
                },
                {
                  "@type": "Person",
                  "name": "Winston Sackey",
                  "jobTitle": "Chief Financial Officer"
                }
              ],
              "serviceArea": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Virtual Assistant Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Administrative Assistance",
                      "description": "Professional administrative support services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing",
                      "description": "Comprehensive digital marketing services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Custom web and app development solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} font-mono`}>
        {children}
      </body>
    </html>
  );
}
