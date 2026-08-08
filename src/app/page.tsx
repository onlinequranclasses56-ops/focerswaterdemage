import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS, SERVICES, CITIES } from "@/lib/config";

export const metadata: Metadata = {
  title: "24/7 Emergency Restoration in DeBary & Orange City, FL | Force1 Restoration",
  description:
    "Force1 Restoration — IICRC-certified water damage, mold remediation, storm damage, and fire damage restoration serving DeBary and Orange City, FL. Available 24/7. Call (407) 956-9780.",
  alternates: { canonical: BUSINESS.siteUrl },
  openGraph: {
    title: "Force1 Restoration | 24/7 Emergency Restoration in DeBary & Orange City, FL",
    description:
      "IICRC-certified water damage, mold, storm, and fire restoration. Available 24/7. Call (407) 956-9780.",
    url: BUSINESS.siteUrl,
  },
};

const HOME_FAQS = [
  {
    question: "How quickly can Force1 Restoration respond to an emergency?",
    answer:
      "Force1 Restoration operates 24 hours a day, 7 days a week — including weekends and holidays. For customers in DeBary and Orange City, FL, our goal is to have a certified technician on-site as quickly as possible after your call. The faster water or fire damage is addressed, the lower the total restoration cost and the lower the risk of secondary damage such as mold growth.",
  },
  {
    question: "Do you work directly with homeowners' insurance companies?",
    answer:
      "Yes. Force1 Restoration works alongside most major insurance carriers and can help document the damage for your claim. We recommend calling us first so we can begin mitigation immediately — delaying restoration while waiting for an adjuster can significantly worsen damage and increase claim costs. We photograph and document every step of the process.",
  },
  {
    question: "What is the typical water damage restoration process?",
    answer:
      "Water damage restoration follows a structured process: (1) Emergency contact and rapid assessment, (2) water extraction using industrial pumps, (3) structural drying with professional air movers and dehumidifiers, (4) moisture monitoring until readings return to normal, (5) cleaning and sanitizing affected materials, and (6) final restoration and repair. IICRC S500 standards guide every step.",
  },
  {
    question: "Is Force1 Restoration available on weekends and holidays?",
    answer:
      "Yes — Force1 Restoration provides 24/7 emergency service every day of the year, including weekends, holidays, and overnight. Water damage, storm damage, and fire damage do not follow a business schedule, and delaying response by even a few hours can dramatically increase restoration costs and mold risk.",
  },
  {
    question: "What certifications do Force1 Restoration technicians hold?",
    answer:
      "Force1 Restoration technicians are IICRC Certified — the Institute of Inspection, Cleaning and Restoration Certification is the globally recognized standard for the restoration industry. IICRC certification requires demonstrated technical proficiency, adherence to industry standards, and ongoing education. We are also fully licensed and insured to operate in the state of Florida.",
  },
  {
    question: "Can mold grow after water damage, and how quickly?",
    answer:
      "Yes — mold can begin to grow within 24 to 48 hours of water exposure under the right temperature and humidity conditions. Florida's warm climate accelerates this timeline, which is why rapid water extraction and drying is critical. Force1 Restoration uses industrial drying equipment and moisture meters to verify structures are fully dry before closing out a job.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ label: "Home" }]} />

      <Hero
        headline="24/7 Emergency Restoration in DeBary &amp; Orange City, FL"
        subheadline="Force1 Restoration responds immediately to water damage, mold, storm damage, and fire damage. IICRC-certified technicians available around the clock."
        ctaLocation="home-hero"
        backgroundImage="/images/force1-restoration-service-truck-debary-fl.webp"
      />

      <TrustBar />

      {/* Photo proof — real jobs in Central Florida */}
      <section className="py-14 bg-white border-b border-border" aria-label="Force1 Restoration project photos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Real Jobs · Volusia County</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">
              Force1 Restoration at Work in Central Florida
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <Image
                src="/images/force1-restoration-service-truck-debary-fl.webp"
                alt="Force1 Restoration branded service truck and debris trailer staged at a residential job site in DeBary, FL"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <Image
                src="/images/water-damage-structural-drying-air-movers-florida.webp"
                alt="Industrial air movers and commercial dehumidifier running during active water damage structural drying in a Central Florida home"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <Image
                src="/images/force1-technician-ppe-mold-remediation-florida.webp"
                alt="Force1 Restoration IICRC-certified technician in full PPE including respirator and hazmat suit, ready for mold remediation"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
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
              Force1 Restoration handles every phase of damage recovery — from emergency
              extraction through final reconstruction — so you only need one call.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View all services
              <ChevronIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Force1 */}
      <section className="py-16 bg-surface" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-heading" className="text-2xl sm:text-3xl font-bold text-ink mb-4">
                Why Volusia County Homeowners Trust Force1 Restoration
              </h2>
              <p className="text-ink-muted mb-6">
                Force1 Restoration is the restoration company DeBary and Orange City
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
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Learn more about Force1 Restoration
                  <ChevronIcon />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-ink text-lg mb-6">
                What happens when you call
              </h3>
              <ol className="space-y-5">
                {[
                  {
                    step: "1",
                    title: "Immediate response",
                    desc: "A live team member answers — not a voicemail. We dispatch a certified technician to your location right away.",
                  },
                  {
                    step: "2",
                    title: "Rapid damage assessment",
                    desc: "We inspect the full scope with moisture meters and thermal imaging, then explain the situation in plain language.",
                  },
                  {
                    step: "3",
                    title: "Emergency mitigation",
                    desc: "Water extraction, board-up, or other immediate steps begin the same day to stop further damage.",
                  },
                  {
                    step: "4",
                    title: "Full restoration",
                    desc: "Structural drying, dehumidification, cleaning, and rebuilding — all documented for your insurance carrier.",
                  },
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
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg transition-colors"
                >
                  <PhoneIconSmall />
                  Call {BUSINESS.phone}
                </PhoneNumber>
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
        headline="Emergency? Call Force1 Restoration Now."
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
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
