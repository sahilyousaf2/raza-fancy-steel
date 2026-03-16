export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Raza Fancy Steel",
    "image": "https://razafancysteel.com/next.svg",
    "@id": "https://razafancysteel.com",
    "url": "https://razafancysteel.com",
    "telephone": "+923160290519",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot #219 Sector 7/A, Korangi Industrial Area",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "74900",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8266,
      "longitude": 67.1315
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/razafancysteel",
      "https://www.instagram.com/razafancysteel",
      "https://www.linkedin.com/company/razafancysteel"
    ],
    "description": "Raza Fancy Steel - Premier steel fabrication and industrial construction company in Karachi, Pakistan. Specializing in warehouse sheds, solar structures, and custom welding solutions.",
    "founder": {
      "@type": "Person",
      "name": "Yousaf Mohan"
    },
    "foundingDate": "2000"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
