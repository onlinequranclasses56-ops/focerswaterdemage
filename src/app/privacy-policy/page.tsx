import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | Forces Water Damage DeBary",
  description: "Privacy policy for Forces Water Damage DeBary — DeBary and Orange City, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/privacy-policy` },
  robots: { index: false, follow: true },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <header className="bg-surface border-b border-border py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">Privacy Policy</h1>
          <p className="text-ink-muted text-sm mt-2">Last updated: [DATE_PLACEHOLDER]</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={BREADCRUMBS} />
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="prose prose-gray max-w-none">
          {/*
            PLACEHOLDER: Replace with a real Privacy Policy before launch.
            Consider consulting a legal professional, particularly for
            compliance with Florida law, CCPA (if applicable), and any
            third-party tools used (Google Analytics, call tracking, etc.).
          */}
          <div className="bg-accent-50 border border-accent/30 rounded-xl p-4 mb-8 text-sm text-ink-muted not-prose">
            <strong className="text-ink">Privacy Policy Placeholder.</strong>{" "}
            Replace this entire page with a real, legally reviewed privacy policy before launch.
            See PLACEHOLDERS.md for guidance. Key elements to address: data collected (contact forms,
            analytics, call tracking), how it is used, third-party sharing, cookies, and user rights.
          </div>

          <p>
            {BUSINESS.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            operates [DOMAIN].com (the &ldquo;Site&rdquo;). This Privacy Policy describes
            how we collect, use, and share information when you use our Site or contact us.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly (name, email, phone, message via
            contact form), information collected automatically (analytics data via Google
            Analytics / GTM, call tracking data), and information from third-party sources
            (Google Business Profile reviews).
          </p>

          <h2>How We Use Information</h2>
          <p>
            We use collected information to respond to your inquiries, provide restoration
            services, improve our website and marketing, and comply with legal obligations.
            We do not sell personal information.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this Privacy Policy? Contact us at{" "}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
            {BUSINESS.address.full}.
          </p>
        </div>
      </main>
    </>
  );
}
