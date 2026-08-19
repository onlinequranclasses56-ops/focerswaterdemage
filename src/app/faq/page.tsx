import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "FAQ — Water Damage & Restoration Questions | Forces Water Damage DeBary",
  description:
    "Common questions about water damage restoration, mold remediation, storm damage, fire damage, and the restoration process — answered by Forces Water Damage DeBary serving DeBary and Orange City, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/faq` },
  openGraph: {
    title: "Restoration FAQ | Forces Water Damage DeBary — DeBary & Orange City, FL",
    description: "Answers to common restoration questions. IICRC-certified, 24/7. Call (864) 734-5702.",
    url: `${BUSINESS.siteUrl}/faq`,
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "FAQ" },
];

const ALL_FAQS = [
  /* General */
  { question: "What is Forces Water Damage DeBary?", answer: "Forces Water Damage DeBary is an IICRC-certified property restoration company based in DeBary, FL, serving DeBary, Orange City, and surrounding Volusia County communities. We provide 24/7 emergency response for water damage, mold remediation, storm damage, and fire damage restoration." },
  { question: "Are you available on weekends and holidays?", answer: "Yes. Forces Water Damage DeBary provides emergency response 24 hours a day, 7 days a week, including weekends and holidays. Property damage does not wait for business hours, and neither do we. Call (864) 734-5702 any time." },
  { question: "What areas does Forces Water Damage DeBary serve?", answer: "Forces Water Damage DeBary is based in DeBary, FL and serves DeBary, Orange City, and surrounding Volusia County communities. Call (864) 734-5702 to confirm coverage at your specific location." },
  { question: "What certifications do Forces Water Damage DeBary technicians hold?", answer: "Forces Water Damage DeBary technicians are IICRC Certified — the Institute of Inspection, Cleaning and Restoration Certification is the industry gold standard. IICRC certification requires demonstrated technical competency, adherence to published restoration standards, and ongoing education." },
  { question: "Is Forces Water Damage DeBary licensed and insured?", answer: "Yes. Forces Water Damage DeBary is fully licensed to operate in Florida and carries comprehensive liability insurance coverage. License number: [LICENSE_NUMBER] — contact us to verify current licensing details." },

  /* Water damage */
  { question: "How quickly should water damage be addressed?", answer: "Immediately. Mold can begin growing within 24 to 48 hours of water exposure in Florida's warm climate. Structural materials also continue absorbing moisture the longer standing water remains — increasing the total restoration scope and cost with every hour of delay. Forces Water Damage DeBary recommends calling as soon as water damage is discovered." },
  { question: "What is the water damage restoration process?", answer: "The process follows IICRC S500 standards: (1) emergency assessment and moisture mapping, (2) water extraction using industrial pumps, (3) structural drying with commercial air movers and dehumidifiers, (4) daily moisture monitoring, (5) cleaning and sanitizing, and (6) restoration and repair. Forces Water Damage DeBary documents every step for your insurance claim." },
  { question: "What is the difference between water damage categories?", answer: "IICRC defines three water categories: Category 1 is clean water from supply lines or rain. Category 2 (greywater) comes from appliances, sinks, or overflow. Category 3 (blackwater) comes from sewage, river flooding, or storm surge and carries contaminants requiring intensive remediation. The category determines the restoration protocol — Forces Water Damage DeBary assesses this at every job." },

  /* Mold */
  { question: "How do I know if I have mold?", answer: "Signs include a musty odor (especially in damp areas), visible dark spots or staining on walls and ceilings, and respiratory symptoms that improve when you leave the building. Any history of water damage or high humidity is a risk factor. Forces Water Damage DeBary provides professional mold inspections — don't guess with an issue that can affect your family's health." },
  { question: "Can I remove mold myself?", answer: "Small surface mold (under 10 sq ft) on non-porous materials can be cleaned by a homeowner with proper protective equipment per EPA guidance. However, mold inside walls, in HVAC systems, or covering more than 10 sq ft requires professional remediation. Disturbing mold without containment spreads spores and can make the problem significantly worse." },
  { question: "How long does mold remediation take?", answer: "Small projects: 1–2 days. Larger jobs involving wall cavities, HVAC systems, or multiple rooms: 3–7 days or more. Post-remediation verification (air testing) adds time if laboratory results are required. Forces Water Damage DeBary provides a timeline estimate after the initial inspection." },

  /* Storm damage */
  { question: "What should I do right after storm damage?", answer: "First ensure everyone's safety — do not enter areas with structural instability, gas smells, or electrical hazards. Call Forces Water Damage DeBary at (864) 734-5702 for emergency response. Document visible damage with photos if safe to do so. Do not discard damaged materials before our team has documented the loss for your insurance claim." },
  { question: "Does Forces Water Damage DeBary handle storm damage insurance claims?", answer: "Yes. We document damage comprehensively from the moment we arrive and can work alongside your insurance adjuster. Our detailed documentation — photos, moisture readings, written scope — supports your claim and helps ensure the full scope of damage is captured." },

  /* Fire damage */
  { question: "How quickly should fire restoration begin?", answer: "As soon as the fire department clears the property as safe — ideally within hours. Soot begins permanently etching and staining surfaces within 24 to 72 hours, and smoke odor embeds more deeply the longer it sits. Forces Water Damage DeBary responds immediately after clearance, 24/7." },
  { question: "Does smoke damage require professional treatment?", answer: "Yes. Smoke odor does not dissipate naturally — it is caused by microscopic particles embedded in porous materials throughout the structure. Effective treatment requires thermal fogging, hydroxyl generators, or ozone treatment — professional equipment and techniques that neutralize odors at the molecular level rather than masking them." },

  /* Insurance */
  { question: "Does Forces Water Damage DeBary work with insurance companies?", answer: "Yes. Forces Water Damage DeBary works alongside most major insurance carriers. We provide comprehensive documentation from the first day on-site — photographs, moisture readings, written scope — that your adjuster needs to process your claim. We recommend calling us first so mitigation begins immediately; you can notify your insurer while we work." },
  { question: "Will filing a restoration claim raise my insurance rates?", answer: "That depends on your specific policy, carrier, and claim history. Typically, a single claim does not automatically raise rates. Forces Water Damage DeBary's documentation ensures that the full scope of covered damage is captured, which is in your interest regardless of the rate impact question." },
] as const;

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema faqs={ALL_FAQS} />

      <Hero
        headline="Restoration FAQ"
        subheadline="Common questions about water damage, mold, storm damage, fire damage, and the restoration process — answered by Forces Water Damage DeBary."
        ctaLocation="faq-hero"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={BREADCRUMBS} />
      </div>

      <section className="py-12 bg-white" aria-labelledby="faq-page-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="faq-page-heading" className="sr-only">All frequently asked questions</h2>
          <dl className="space-y-2">
            {ALL_FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        headline="Still have questions? Call Forces Water Damage DeBary."
        body="A live team member is available 24/7. Call (864) 734-5702 — we answer every call directly."
        location="faq-footer-cta"
        variant="accent"
      />
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border border-border rounded-xl p-5 bg-surface">
      <dt className="font-semibold text-ink mb-2">{question}</dt>
      <dd className="text-ink-muted text-sm leading-relaxed">{answer}</dd>
    </div>
  );
}
