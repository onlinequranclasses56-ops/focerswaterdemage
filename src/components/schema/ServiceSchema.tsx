/*
 * Service JSON-LD schema — used on service detail pages and combo pages.
 *
 * TODO post-deploy: validate at https://validator.schema.org
 */

import { BUSINESS } from "@/lib/config";

interface Props {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  /** When present, scopes the service to a specific city. */
  cityName?: string;
  cityState?: string;
}

export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  cityName,
  cityState,
}: Props) {
  const areaServed = cityName
    ? [{ "@type": "City", name: `${cityName}, ${cityState ?? "FL"}` }]
    : [
        { "@type": "City", name: "DeBary, FL" },
        { "@type": "City", name: "Orange City, FL" },
      ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      "@type": BUSINESS.schemaType,
      "@id": `${BUSINESS.siteUrl}/#business`,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: serviceUrl,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer support",
        availableLanguage: "English",
        hoursAvailable: {
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
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
