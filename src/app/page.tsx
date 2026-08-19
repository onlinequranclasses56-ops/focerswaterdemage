import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS, SERVICES, CITIES } from "@/lib/config";

export const metadata: Metadata = {
  title: "24/7 Emergency Restoration in DeBary & Orange City, FL | Forces Water Damage DeBary",
  description:
    "Forces Water Damage DeBary — IICRC-certified water damage, mold remediation, storm damage, and fire damage restoration serving DeBary and Orange City, FL. Available 24/7. Call (864) 734-5702.",
  alternates: { canonical: BUSINESS.siteUrl },
  openGraph: {
    title: "Forces Water Damage DeBary | 24/7 Emergency Restoration in DeBary & Orange City, FL",
    description:
      "IICRC-certified water damage, mold, storm, and fire restoration. Available 24/7. Call (864) 734-5702.",
    url: BUSINESS.siteUrl,
  },
};

const HOME_FAQS = [
  {
    question: "How quickly can Forces Water Damage DeBary respond to an emergency?",
    answer:
      "Forces Water Damage DeBary operates 24 hours a day, 7 days a week — including weekends and holidays. For customers in DeBary and Orange City, FL, our goal is to have a certified technician on-site as quickly as possible after your call. The faster water or fire damage is addressed, the lower the total restoration cost and the lower the risk of secondary damage such as mold growth.",
  },
  {
    question: "Do you work directly with homeowners' insurance companies?",
    answer:
      "Yes. Forces Water Damage DeBary works alongside most major insurance carriers and can help document the damage for your claim. We recommend calling us first so we can begin mitigation immediately — delaying restoration while waiting for an adjuster can significantly worsen damage and increase claim costs. We photograph and document every step of the process.",
  },
  {
    question: "What is the typical water damage restoration process?",
    answer:
      "Water damage restoration follows a structured process: (1) Emergency contact and rapid assessment, (2) water extraction using industrial pumps, (3) structural drying with professional air movers and dehumidifiers, (4) moisture monitoring until readings return to normal, (5) cleaning and sanitizing affected materials, and (6) final restoration and repair. IICRC S500 standards guide every step.",
  },
  {
    question: "Is Forces Water Damage DeBary available on weekends and holidays?",
    answer:
      "Yes — Forces Water Damage DeBary provides 24/7 emergency service every day of the year, including weekends, holidays, and overnight. Water damage, storm damage, and fire damage do not follow a business schedule, and delaying response by even a few hours can dramatically increase restoration costs and mold risk.",
  },
  {
    question: "What certifications do Forces Water Damage DeBary technicians hold?",
    answer:
      "Forces Water Damage DeBary technicians are IICRC Certified — the Institute of Inspection, Cleaning and Restoration Certification is the globally recognized standard for the restoration industry. IICRC certification requires demonstrated technical proficiency, adherence to industry standards, and ongoing education. We are also fully licensed and insured to operate in the state of Florida.",
  },
  {
    question: "Can mold grow after water damage, and how quickly?",
    answer:
      "Yes — mold can begin to grow within 24 to 48 hours of water exposure under the right temperature and humidity conditions. Florida's warm climate accelerates this timeline, which is why rapid water extraction and drying is critical. Forces Water Damage DeBary uses industrial drying equipment and moisture meters to verify structures are fully dry before closing out a job.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ label: "Home" }]} />

      <Hero
        headline="24/7 Emergency Restoration in DeBary &amp; Orange City, FL"
        subheadline="Forces Water Damage DeBary responds immediately to water damage, mold, storm damage, and fire damage. IICRC-certified technicians available around the clock."
        ctaLocation="home-hero"
      />

      <TrustBar />

      {/* ── Why call NOW — pay-per-call urgency strip ── */}
      <section className="py-10 bg-surface border-b border-border" aria-label="Why call now">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: <ClockIcon />,
                stat: "< 60 Min",
                label: "Technician dispatched",
                sub: "Fastest response in Volusia County",
              },
              {
                icon: <PhoneIconLg />,
                stat: "Real Person",
                label: "Answers every call",
                sub: "No voicemail · No hold music",
              },
              {
                icon: <ShieldIcon />,
                stat: "IICRC Certified",
                label: "Industry gold standard",
                sub: "Licensed & fully insured in FL",
              },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center gap-2 p-6 bg-white rounded-2xl border border-border shadow-[var(--shadow-card)]">
                <div className="text-accent mb-1">{item.icon}</div>
                <p className="text-2xl font-extrabold text-ink">{item.stat}</p>
                <p className="font-semibold text-ink text-sm">{item.label}</p>
                <p className="text-xs text-ink-muted">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Inline call CTA */}
          <div className="text-center mt-8">
            <PhoneNumber
              location="home-urgency-strip"
              className="cta-pulse inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-extrabold text-xl px-10 py-5 rounded-xl transition-colors shadow-lg"
            >
              <PhoneIconSmall />
              Call Now — Free Estimate
            </PhoneNumber>
            <p className="text-xs text-ink-muted mt-2">{BUSINESS.phone} · Available 24 / 7 / 365</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-2xl sm:text-3xl font-bold text-ink mb-3">
              Our Restoration Services
            </h2>
            <p className="text-ink-muted max-w-2xl mx-auto">
              Forces Water Damage DeBary handles every phase of damage recovery — from emergency
              extraction through final reconstruction — so you only need one call.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
              View all services <ChevronIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* What happens when you call */}
      <section className="py-16 bg-surface" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-heading" className="text-2xl sm:text-3xl font-bold text-ink mb-4">
                Why Volusia County Homeowners Trust Forces Water Damage DeBary
              </h2>
              <p className="text-ink-muted mb-6">
                Forces Water Damage DeBary is the restoration company DeBary and Orange City
                residents call when it matters most. Our IICRC-certified team brings
                professional-grade equipment and a proven process to every job — whether
                a burst pipe at 2 a.m. or extensive storm flooding after a tropical system.
              </p>
              <ul className="space-y-3">
                {[
                  "IICRC Certified technicians — the industry gold standard",
                  "24/7 emergency response including weekends and holidays",
                  "Full damage documentation for your insurance claim",
                  "Industrial-grade drying equipment, not rental units",
                  "Licensed, bonded, and fully insured in Florida",
                  "Serving DeBary, Orange City, and surrounding Volusia County",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-ink-muted">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
                  Learn more about Forces Water Damage DeBary <ChevronIcon />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-ink text-lg mb-6">What happens when you call</h3>
              <ol className="space-y-5">
                {[
                  { step: "1", title: "Immediate response", desc: "A live team member answers — not a voicemail. We dispatch a certified technician to your location right away." },
                  { step: "2", title: "Rapid damage assessment", desc: "We inspect the full scope with moisture meters and thermal imaging, then explain the situation in plain language." },
                  { step: "3", title: "Emergency mitigation", desc: "Water extraction, board-up, or other immediate steps begin the same day to stop further damage." },
                  { step: "4", title: "Full restoration", desc: "Structural drying, dehumidification, cleaning, and rebuilding — all documented for your insurance carrier." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm">{item.title}</p>
                      <p className="text-ink-muted text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 pt-6 border-t border-border">
                <PhoneNumber
                  location="home-process-cta"
                  className="cta-pulse flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-lg transition-colors text-lg"
                >
                  <PhoneIconSmall />
                  Call {BUSINESS.phone} — Free Estimate
                </PhoneNumber>
                <p className="text-center text-xs text-ink-muted mt-2">No voicemail · Real person answers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-14 bg-white border-t border-border" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="areas-heading" className="text-2xl font-bold text-ink mb-6">
            Service Areas in Volusia County
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="inline-flex items-center gap-2 border border-border hover:border-primary hover:bg-primary-50 rounded-xl px-5 py-3 text-sm font-semibold text-ink-muted hover:text-primary transition-all"
              >
                <LocationIcon />
                {city.name}, {city.state}
              </Link>
            ))}
          </div>
          <p className="text-ink-muted text-sm">
            Also serving surrounding Volusia County communities. Call{" "}
            <PhoneNumber location="home-areas-inline" className="font-semibold text-primary hover:text-primary-dark transition-colors" />{" "}
            to confirm coverage in your area.
          </p>
        </div>
      </section>

      <FAQSection faqs={HOME_FAQS} />

      <CTASection
        headline="Emergency? Call Forces Water Damage DeBary Now."
        body="Water damage, mold, storm damage, and fire damage restoration — available 24/7 in DeBary and Orange City, FL. IICRC-certified technicians ready to respond."
        location="home-footer-cta"
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
function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function PhoneIconSmall() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function PhoneIconLg() {
  return (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
