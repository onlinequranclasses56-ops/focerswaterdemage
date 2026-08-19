import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { BUSINESS, SERVICES, CITIES } from "@/lib/config";

export const metadata: Metadata = {
  title: "Call (864) 734-5702 | Restoration Services DeBary FL | Forces Water Damage DeBary",
  description:
    "Call (864) 734-5702 — water damage, mold remediation, storm & fire damage restoration in DeBary & Orange City, FL. IICRC Certified. 24/7 emergency response. Free estimate.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services` },
  openGraph: {
    title: "Call (864) 734-5702 | Restoration Services | Forces Water Damage DeBary",
    description: "Call (864) 734-5702 — water damage, mold, storm & fire restoration. IICRC certified. 24/7 in DeBary & Orange City, FL.",
    url: `${BUSINESS.siteUrl}/services`,
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services" },
];

export default function ServicesHubPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <Hero
        headline="Restoration Services in DeBary &amp; Orange City, FL"
        subheadline="Forces Water Damage DeBary provides IICRC-certified emergency and non-emergency restoration for water damage, mold, storm damage, and fire damage throughout Volusia County."
        ctaLocation="services-hub-hero"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={BREADCRUMBS} />
      </div>

      {/* Services grid */}
      <section className="pb-16 bg-white" aria-labelledby="services-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id="services-list-heading" className="text-2xl sm:text-3xl font-bold text-ink mb-3">
            Our Services
          </h2>
          <p className="text-ink-muted mb-10 max-w-2xl">
            Every service is performed by IICRC-certified technicians following industry-standard
            protocols. We document every step for your insurance carrier.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="list" />
            ))}
          </div>
        </div>
      </section>

      {/* Service × City matrix */}
      <section className="py-14 bg-surface border-t border-border" aria-labelledby="coverage-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id="coverage-heading" className="text-2xl font-bold text-ink mb-8">
            Service Coverage by City
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {CITIES.map((city) => (
              <div key={city.slug} className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-ink text-lg mb-4 flex items-center gap-2">
                  <LocationIcon />
                  {city.name}, {city.state}
                </h3>
                <ul className="space-y-2">
                  {SERVICES.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}/${city.slug}`}
                        className="flex items-center gap-2 text-sm text-ink-muted hover:text-primary transition-colors group"
                      >
                        <span className="text-base" aria-hidden="true">{service.icon}</span>
                        <span className="group-hover:underline">
                          {service.name} in {city.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link
                    href={`/locations/${city.slug}`}
                    className="text-sm text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    All services in {city.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Need restoration in DeBary or Orange City, FL?"
        body="Forces Water Damage DeBary is available 24/7 for all emergency and scheduled restoration work. IICRC-certified technicians, fast response."
        location="services-hub-footer-cta"
        variant="primary"
      />
    </>
  );
}

function LocationIcon() {
  return (
    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
