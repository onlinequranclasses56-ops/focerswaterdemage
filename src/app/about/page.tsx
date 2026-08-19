import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { BUSINESS, SERVICES, CITIES } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Forces Water Damage DeBary — Call (864) 734-5702 | DeBary & Orange City, FL",
  description:
    "Call (864) 734-5702 — Forces Water Damage DeBary. IICRC-certified restoration in DeBary & Orange City, FL. 24/7 emergency response, free estimates, fully licensed & insured.",
  alternates: { canonical: `${BUSINESS.siteUrl}/about` },
  openGraph: {
    title: "About Forces Water Damage DeBary | Call (864) 734-5702",
    description: "Call (864) 734-5702 — IICRC-certified restoration in DeBary & Orange City, FL. Our story, credentials, and team.",
    url: `${BUSINESS.siteUrl}/about`,
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "About" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <Hero
        headline="About Forces Water Damage DeBary"
        subheadline="IICRC-certified restoration professionals serving DeBary, Orange City, and surrounding Volusia County communities."
        ctaLocation="about-hero"
        secondaryCta={{ label: "Our Services", href: "/services" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={BREADCRUMBS} />
      </div>

      {/* Company story */}
      <section className="py-16 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="story-heading" className="text-2xl sm:text-3xl font-bold text-ink mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-ink-muted">
                <p>
                  Forces Water Damage DeBary was founded with a straightforward mission: provide
                  Volusia County homeowners and businesses with the professional-grade
                  restoration response they need after water damage, mold, storm damage,
                  or fire damage — delivered with the urgency and transparency that emergency
                  situations demand.
                </p>
                <p>
                  Operating out of DeBary, FL, Forces Water Damage DeBary serves the heart of
                  Volusia County and understands the specific challenges that local homeowners
                  face: the flooding risks along the St. Johns River corridor, the aggressive
                  mold environment created by Central Florida&apos;s year-round humidity,
                  the regular threat of tropical storms and severe thunderstorms, and the
                  lightning-related fire risk that comes with Florida&apos;s intense storm season.
                </p>
                <p className="text-xs text-ink-light border border-dashed border-border rounded-lg p-3">
                  [COMPANY_STORY_PLACEHOLDER — Replace with real founding narrative, team background,
                  and specific differentiators. See PLACEHOLDERS.md.]
                </p>
              </div>
            </div>
            {/* Key stats — replaces photo until real images are available */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "24 / 7", label: "Emergency availability", sub: "Every day of the year" },
                { stat: "IICRC", label: "Certified technicians", sub: "Industry gold standard" },
                { stat: "< 60 min", label: "Dispatch target", sub: "Fastest in Volusia County" },
                { stat: "Free", label: "Damage assessment", sub: "No obligation estimate" },
              ].map((item) => (
                <div key={item.stat} className="bg-surface rounded-xl border border-border p-5 text-center">
                  <p className="text-2xl font-extrabold text-primary mb-1">{item.stat}</p>
                  <p className="font-semibold text-ink text-sm">{item.label}</p>
                  <p className="text-xs text-ink-muted mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-14 bg-surface border-t border-border" aria-labelledby="credentials-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="credentials-heading" className="text-2xl font-bold text-ink mb-8">
            Credentials &amp; Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <CredentialCard
              title="IICRC Certified"
              body="The Institute of Inspection, Cleaning and Restoration Certification (IICRC) is the globally recognized standard for the restoration industry. IICRC certification requires demonstrated technical proficiency, adherence to published standards (S500, S520, S700), and ongoing continuing education. Forces Water Damage DeBary technicians maintain active IICRC certification."
              verified="iicrc.org"
            />
            <CredentialCard
              title="Licensed in Florida"
              body={`Forces Water Damage DeBary holds the required Florida contractor license(s) to perform restoration, mold remediation, and reconstruction work in the state. License: [LICENSE_NUMBER] — REPLACE with verified license number before launch.`}
              verified="[LICENSING_BODY]"
            />
            <CredentialCard
              title="Fully Insured"
              body="Forces Water Damage DeBary carries comprehensive general liability and professional liability insurance coverage. This protects our customers throughout every job — from the first technician on-site through final project completion."
              verified="[INSURANCE_CARRIER]"
            />
            <CredentialCard
              title="24/7 Emergency Response"
              body="Forces Water Damage DeBary maintains around-the-clock availability for emergency water damage, fire damage, and storm damage calls. A live team member — not a voicemail — answers every call and dispatches immediately."
              verified={null}
            />
          </div>
          <p className="text-xs text-ink-light mt-6">
            PLACEHOLDER: Add additional certifications, BBB accreditation, EPA Lead-Safe Certification,
            and other credentials as they are confirmed. See PLACEHOLDERS.md.
          </p>
        </div>
      </section>

      {/* Team section */}
      <section className="py-14 bg-white border-t border-border" aria-labelledby="team-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="team-heading" className="text-2xl font-bold text-ink mb-3">
            Our Team
          </h2>
          <p className="text-ink-muted mb-8">
            {/*
              PLACEHOLDER: Replace with real team member names, roles, photos, and brief bios.
              IICRC certification numbers for individual team members can be listed here.
              Real team photos increase trust significantly for emergency service businesses.
            */}
            Forces Water Damage DeBary is staffed by IICRC-certified restoration technicians with
            hands-on experience in water damage, mold remediation, storm damage, and fire
            damage restoration throughout Central Florida.
          </p>
          <div className="bg-surface rounded-2xl border border-dashed border-border p-8 text-center">
            <p className="font-semibold text-ink mb-2">IICRC-Certified Field Team</p>
            <p className="text-ink-muted text-sm max-w-md mx-auto">
              Forces Water Damage DeBary is staffed by IICRC-certified restoration technicians with
              hands-on experience in water damage, mold remediation, storm damage, and fire
              damage restoration throughout Central Florida.
            </p>
            <p className="text-xs text-ink-light mt-4">
              [TEAM_SECTION_PLACEHOLDER — Add real team member names, IICRC cert numbers, and individual bios.]
            </p>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-14 bg-surface border-t border-border" aria-labelledby="services-summary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="services-summary" className="text-2xl font-bold text-ink mb-6">
            What Forces Water Damage DeBary Does
          </h2>
          <ul className="space-y-3">
            {SERVICES.map((service) => (
              <li key={service.slug} className="flex items-start gap-3">
                <span className="text-xl" aria-hidden="true">{service.icon}</span>
                <div>
                  <p className="font-semibold text-ink">{service.name}</p>
                  <p className="text-ink-muted text-sm">{service.shortDescription}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-ink-muted text-sm mt-6">
            Serving {CITIES.map((c) => `${c.name}, FL`).join(" and ")} and surrounding
            Volusia County communities.
          </p>
        </div>
      </section>

      <CTASection
        headline="Questions about Forces Water Damage DeBary?"
        body="Call us 24/7 for emergency response or to discuss a restoration project in DeBary or Orange City, FL."
        location="about-footer-cta"
        variant="accent"
      />
    </>
  );
}

function CredentialCard({
  title,
  body,
  verified,
}: {
  title: string;
  body: string;
  verified: string | null;
}) {
  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="flex items-center gap-2 mb-3">
        <CheckIcon />
        <h3 className="font-bold text-ink">{title}</h3>
      </div>
      <p className="text-ink-muted text-sm leading-relaxed">{body}</p>
      {verified && (
        <p className="text-xs text-ink-light mt-3">Verified by: {verified}</p>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
