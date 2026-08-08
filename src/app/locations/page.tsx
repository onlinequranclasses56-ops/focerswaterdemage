import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { BUSINESS, SERVICES, CITIES } from "@/lib/config";

export const metadata: Metadata = {
  title: "Service Areas in Volusia County, FL",
  description:
    "Force1 Restoration serves DeBary and Orange City, FL with 24/7 water damage, mold remediation, storm damage, and fire damage restoration. IICRC Certified. Call (407) 956-9780.",
  alternates: { canonical: `${BUSINESS.siteUrl}/locations` },
  openGraph: {
    title: "Service Areas | Force1 Restoration — Volusia County, FL",
    description: "Serving DeBary and Orange City, FL. IICRC-certified restoration available 24/7.",
    url: `${BUSINESS.siteUrl}/locations`,
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations" },
];

export default function LocationsHubPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <Hero
        headline="Force1 Restoration Service Areas in Volusia County"
        subheadline="Force1 Restoration provides IICRC-certified water damage, mold, storm, and fire restoration throughout DeBary, Orange City, and surrounding Volusia County communities."
        ctaLocation="locations-hub-hero"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={BREADCRUMBS} />
      </div>

      {/* City cards */}
      <section className="pb-16 bg-white" aria-labelledby="cities-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id="cities-heading" className="text-2xl sm:text-3xl font-bold text-ink mb-3">
            Cities We Serve
          </h2>
          <p className="text-ink-muted mb-10 max-w-2xl">
            Force1 Restoration is based in DeBary, FL and serves the surrounding Volusia County
            area. Our team is familiar with the local geography, building stock, and
            weather patterns that create unique restoration challenges in each city.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {CITIES.map((city) => (
              <div key={city.slug} className="bg-surface rounded-2xl border border-border p-7">
                <h3 className="font-bold text-ink text-xl mb-2">
                  {city.name}, {city.state}
                </h3>
                <p className="text-xs text-ink-light mb-3">{city.county}</p>
                <p className="text-ink-muted text-sm mb-5 leading-relaxed">{city.description}</p>

                <div className="mb-5">
                  <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">
                    Services in {city.name}
                  </p>
                  <ul className="space-y-1.5">
                    {SERVICES.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}/${city.slug}`}
                          className="flex items-center gap-2 text-sm text-ink-muted hover:text-primary transition-colors group"
                        >
                          <span className="text-sm" aria-hidden="true">{service.icon}</span>
                          <span className="group-hover:underline">
                            {service.name} in {city.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/locations/${city.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  {city.name} service area details
                  <ChevronIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surrounding area note */}
      <section className="py-12 bg-surface border-t border-border" aria-labelledby="coverage-note">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="coverage-note" className="text-xl font-bold text-ink mb-3">
            Serving the Greater Volusia County Area
          </h2>
          <p className="text-ink-muted">
            In addition to DeBary and Orange City, Force1 Restoration frequently responds to
            calls throughout surrounding Volusia County communities. Call{" "}
            <Link href={BUSINESS.phoneHref} className="font-semibold text-primary hover:text-primary-dark">
              {BUSINESS.phone}
            </Link>{" "}
            to confirm coverage in your specific location. We will always tell you upfront
            whether we can respond to your area.
          </p>
        </div>
      </section>

      <CTASection
        headline="Need restoration in Volusia County, FL?"
        body="Force1 Restoration is available 24/7 for all emergency and scheduled work in DeBary, Orange City, and surrounding communities."
        location="locations-hub-footer-cta"
        variant="primary"
      />
    </>
  );
}

function ChevronIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
