export default function StructuredData() {
  const structuredData = {
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
