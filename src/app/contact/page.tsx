import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS } from "@/lib/config";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Forces Water Damage DeBary — DeBary & Orange City, FL",
  description:
    "Contact Forces Water Damage DeBary for 24/7 emergency response in DeBary and Orange City, FL. Call (864) 734-5702 or submit a request. IICRC-certified restoration.",
  alternates: { canonical: `${BUSINESS.siteUrl}/contact` },
  openGraph: {
    title: "Contact Forces Water Damage DeBary | DeBary & Orange City, FL",
    description: "24/7 emergency response. Call (864) 734-5702. Water damage, mold, storm, fire restoration.",
    url: `${BUSINESS.siteUrl}/contact`,
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Contact" },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <Hero
        headline="Contact Forces Water Damage DeBary"
        subheadline="For emergencies, call — calling is the fastest way to reach our team 24/7. For non-urgent inquiries, use the form below."
        ctaLocation="contact-hero"
        secondaryCta={{ label: "View FAQ", href: "/faq" }}
        backgroundImage="/images/force1-restoration-service-truck-debary-fl.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={BREADCRUMBS} />
      </div>

      <section className="py-14 bg-white" aria-labelledby="contact-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact info */}
            <div>
              <h2 id="contact-heading" className="text-2xl font-bold text-ink mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Emergency call */}
                <div className="bg-accent-50 border border-accent/30 rounded-xl p-5">
                  <p className="font-bold text-ink mb-1">For emergencies, call now</p>
                  <p className="text-ink-muted text-sm mb-3">
                    Live response 24/7 — a team member answers every call directly.
                  </p>
                  <PhoneNumber
                    location="contact-page-emergency"
                    className="cta-pulse inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <PhoneIcon />
                    {BUSINESS.phone}
                  </PhoneNumber>
                </div>

                {/* NAP block */}
                <address className="not-italic">
                  <h3 className="font-semibold text-ink mb-2 not-italic">Office Location</h3>
                  <p className="text-ink-muted text-sm">{BUSINESS.address.street}</p>
                  <p className="text-ink-muted text-sm">
                    {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                  </p>
                  <p className="text-ink-muted text-sm mt-2">
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {BUSINESS.email}
                    </a>
                  </p>
                </address>

                <div>
                  <h3 className="font-semibold text-ink mb-1">Hours</h3>
                  <p className="text-ink-muted text-sm">{BUSINESS.hoursDisplay}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-ink mb-1">Certifications</h3>
                  {BUSINESS.certifications.map((cert) => (
                    <p key={cert} className="text-ink-muted text-sm">{cert}</p>
                  ))}
                  <p className="text-ink-muted text-sm">{BUSINESS.insurance}</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-ink mb-2">
                Send a Message
              </h2>
              <p className="text-ink-muted text-sm mb-6">
                For urgent situations, calling is faster. For non-emergency quotes or general
                questions, fill out the form below and we will respond promptly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
