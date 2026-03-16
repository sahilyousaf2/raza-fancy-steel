export default function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Steel Fabrication Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Raza Fancy Steel",
      "image": "https://razafancysteel.com/og-image.jpg",
      "telephone": "+92 316 0290519",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot #219 Sector 7/A, Korangi Industrial Area",
        "addressLocality": "Karachi",
        "addressRegion": "Sindh",
        "addressCountry": "PK"
      },
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Steel Fabrication Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehouse Shed Fabrication",
            "description": "Heavy-duty industrial warehouse sheds designed for maximum durability and structural integrity."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solar Panel Structure Installation",
            "description": "Custom-engineered mounting structures for solar panels, optimized for wind load and longevity."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fiber Glass Work",
            "description": "Premium fiberglass solutions for industrial and commercial roofing and partitions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fire Fighting Pipeline Systems",
            "description": "NFPA compliant firefighting pipeline systems for industrial complexes and warehouses."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stainless Steel Fancy Work",
            "description": "High-end stainless steel decorative work for modern homes and commercial spaces."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Welding Solutions",
            "description": "Precision TIG, MIG, and Arc welding services for specialized industrial requirements."
          }
        }
      ]
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What steel fabrication services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer warehouse shed fabrication, solar panel structure installation, fiberglass work, fire fighting pipeline systems, stainless steel fancy work, and custom welding solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide services outside Karachi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide steel fabrication services across Pakistan including Lahore, Islamabad, Faisalabad, and other major cities."
        }
      },
      {
        "@type": "Question",
        "name": "Are your fire fighting systems NFPA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our fire fighting pipeline systems are designed and installed according to NFPA standards and local fire safety regulations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical warehouse shed project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary based on size and complexity. A standard warehouse shed typically takes 4-12 weeks from design to completion."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free quotes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free consultations and quotes for all our steel fabrication services. Contact us to discuss your project requirements."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
