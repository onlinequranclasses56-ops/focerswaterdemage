/*
 * LocalBusiness JSON-LD schema — included on every page.
 *
 * TODO post-deploy: validate output at https://search.google.com/test/rich-results
 * and https://validator.schema.org — re-validate after any content model change.
 */

import { BUSINESS, CITIES } from "@/lib/config";

interface Props {
  pageUrl: string;
}

export function LocalBusinessSchema({ pageUrl }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": BUSINESS.schemaType,
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Force1 Restoration provides 24/7 emergency water damage restoration, mold remediation, storm damage restoration, and fire damage restoration throughout DeBary and Orange City, FL.",
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: CITIES.map((city) => ({
      "@type": "City",
      name: `${city.name}, ${city.state}`,
    })),
    sameAs: Object.values(BUSINESS.social).filter((u) => !u.startsWith("[")),
    hasCredential: BUSINESS.certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert,
    })),
    knowsAbout: [
      "Water Damage Restoration",
      "Mold Remediation",
      "Storm Damage Restoration",
      "Fire Damage Restoration",
    ],
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Check, Credit Card, Insurance",
    image: `${BUSINESS.siteUrl}/og-image.jpg`, /* REPLACE: real OG image URL */
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
