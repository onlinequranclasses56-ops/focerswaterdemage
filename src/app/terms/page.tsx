import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service | Force1 Restoration",
  description: "Terms of service for Force1 Restoration — DeBary and Orange City, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/terms` },
  robots: { index: false, follow: true },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Terms of Service" },
];

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <header className="bg-surface border-b border-border py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">Terms of Service</h1>
          <p className="text-ink-muted text-sm mt-2">Last updated: [DATE_PLACEHOLDER]</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={BREADCRUMBS} />
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="prose prose-gray max-w-none">
          {/*
            PLACEHOLDER: Replace with a real Terms of Service before launch.
            Consult a legal professional for appropriate terms covering
            restoration services, liability limitations, payment, warranties,
            and dispute resolution under Florida law.
          */}
          <div className="bg-accent-50 border border-accent/30 rounded-xl p-4 mb-8 text-sm text-ink-muted not-prose">
            <strong className="text-ink">Terms of Service Placeholder.</strong>{" "}
            Replace this entire page with real, legally reviewed terms before launch.
            See PLACEHOLDERS.md.
          </div>

          <p>
            By using the {BUSINESS.name} website at [DOMAIN].com, you agree to these
            terms of service. If you do not agree, do not use this website.
          </p>

          <h2>Services</h2>
          <p>
            {BUSINESS.name} provides property restoration services including water damage
            restoration, mold remediation, storm damage restoration, and fire damage
            restoration. Service agreements are entered separately from these website terms.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            [TERMS_PLACEHOLDER — Add appropriate limitation of liability language here,
            reviewed by a Florida-licensed attorney.]
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Contact us at{" "}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
          </p>
        </div>
      </main>
    </>
  );
}
