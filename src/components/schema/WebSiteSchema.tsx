import { BUSINESS } from "@/lib/config";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.siteUrl}/#website`,
    url: BUSINESS.siteUrl,
    name: BUSINESS.name,
    description:
      "24/7 water damage restoration, mold remediation, storm damage, and fire damage restoration serving DeBary and Orange City, FL. IICRC Certified.",
    publisher: { "@id": `${BUSINESS.siteUrl}/#business` },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
