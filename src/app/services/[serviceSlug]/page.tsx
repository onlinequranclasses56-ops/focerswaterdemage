import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS, SERVICES, CITIES, getService } from "@/lib/config";
import type { FAQ } from "@/types";

/* ------------------------------------------------------------------ */
/* Service-specific content                                              */
/* ------------------------------------------------------------------ */

type ServiceContent = {
  answerFirst: string;
  processSteps: { title: string; desc: string }[];
  whyPoints: string[];
  faqs: FAQ[];
};

const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "water-damage-restoration": {
    answerFirst:
      "Water damage restoration is the process of extracting standing water, drying structural materials, and returning a property to its pre-damage condition. Force1 Restoration technicians use industrial-grade extraction pumps, commercial air movers, and calibrated dehumidifiers following IICRC S500 standards. The objective is complete moisture removal before secondary damage — particularly mold growth — has a chance to develop.",
    processSteps: [
      { title: "Emergency assessment", desc: "We identify all affected areas using moisture meters and thermal imaging cameras, documenting every reading for your insurance claim." },
      { title: "Water extraction", desc: "Industrial submersible pumps and truck-mounted extraction units remove standing water rapidly — often thousands of gallons in hours." },
      { title: "Structural drying", desc: "Strategic placement of high-velocity air movers and LGR dehumidifiers drives moisture from walls, subfloor, and framing within a calculated drying period." },
      { title: "Daily monitoring", desc: "Technicians return daily to measure moisture readings and adjust equipment placement until all readings reach dry standard per IICRC S500." },
      { title: "Cleaning & sanitizing", desc: "Antimicrobial treatments, HEPA vacuuming, and content cleaning address contaminants introduced by the water source." },
      { title: "Restoration", desc: "Drywall, flooring, insulation, and structural repairs restore the property to its pre-loss condition." },
    ],
    whyPoints: [
      "IICRC S500 Water Damage Restoration Standard compliance on every project",
      "Industrial equipment — not consumer-grade rental dehumidifiers",
      "Daily psychrometric monitoring documented for your insurance adjuster",
      "Mold prevention protocol built into every water damage job",
      "Available 24/7 for burst pipes, appliance failures, and flood events",
    ],
    faqs: [
      {
        question: "How long does water damage restoration take?",
        answer: "The drying phase typically takes 3–5 days depending on the volume of water, materials affected, and ambient conditions in the structure. Florida's humidity makes controlled drying critical — Force1 Restoration sets up contained drying chambers and monitors progress daily. Final repairs may add additional time depending on the scope of structural damage.",
      },
      {
        question: "What types of water damage does Force1 Restoration handle?",
        answer: "Force1 Restoration handles all categories of water damage: Category 1 (clean water from supply lines or rain), Category 2 (greywater from appliances or sinks), and Category 3 (blackwater from sewage, flooding, or storm surge). Each category requires a different protocol — blackwater events involve additional containment and antimicrobial treatment.",
      },
      {
        question: "Will water damage lead to mold if not treated quickly?",
        answer: "Yes. Mold can begin growing within 24 to 48 hours of water exposure in Florida's warm climate. This is why emergency response speed matters: the faster extraction and drying begins, the lower the risk of mold colonization. Force1 Restoration treats mold prevention as part of every water damage job, not an afterthought.",
      },
      {
        question: "Should I call my insurance company before calling a restoration company?",
        answer: "No — call the restoration company first. Immediate mitigation reduces the total damage and therefore the claim cost, which benefits both you and your insurer. Once Force1 Restoration is on-site and mitigation has begun, we provide documentation to support your claim. You can report to your insurer while we work.",
      },
      {
        question: "Can I stay in my home during water damage restoration?",
        answer: "It depends on the scope. For localized damage (one room, contained burst pipe), you may be able to remain while equipment runs. For large losses involving multiple rooms, structural systems, or sewage contamination, temporary relocation is often safer and allows faster drying. Force1 Restoration advises you on the best approach after assessing your specific situation.",
      },
    ],
  },

  "mold-remediation": {
    answerFirst:
      "Mold remediation is the process of identifying, containing, and safely removing mold growth from a structure. Unlike surface cleaning with household bleach, professional remediation by IICRC-certified technicians addresses the moisture source driving the growth, establishes physical containment to prevent spore spread to unaffected areas, removes contaminated materials, and applies treatment to inhibit recurrence. Force1 Restoration follows EPA mold remediation guidelines and IICRC S520 standards.",
    processSteps: [
      { title: "Mold inspection", desc: "Visual inspection plus moisture mapping identifies the extent of mold growth and the underlying moisture source. Air and surface samples may be collected for lab analysis." },
      { title: "Source correction", desc: "The moisture source — a leak, high humidity, or condensation problem — must be corrected before remediation can be effective. We address the root cause first." },
      { title: "Containment", desc: "Plastic sheeting and negative air pressure isolate the work area, preventing mold spores from spreading to clean areas of the structure during removal." },
      { title: "Air filtration", desc: "HEPA-filtered negative air machines run continuously during remediation, capturing airborne spores and maintaining safe conditions." },
      { title: "Removal & treatment", desc: "Contaminated materials are removed per IICRC S520 protocols. Remaining surfaces are HEPA-vacuumed and treated with EPA-registered antimicrobial agents." },
      { title: "Post-remediation verification", desc: "Air and surface testing confirms mold levels have returned to normal background levels before the containment is removed." },
    ],
    whyPoints: [
      "IICRC S520 Standard for Professional Mold Remediation compliance",
      "EPA-registered antimicrobial treatments and proper disposal of contaminated materials",
      "Negative air containment prevents cross-contamination to unaffected areas",
      "Post-remediation verification testing to confirm successful clearance",
      "Moisture source identification and correction included in every job",
    ],
    faqs: [
      {
        question: "How do I know if I have mold in my home?",
        answer: "Common signs include a persistent musty odor (particularly in closets, bathrooms, or under sinks), visible dark spots or discoloration on walls, ceilings, or grout, and respiratory symptoms that improve when you leave the building. In Florida, any history of water intrusion, flooding, or high humidity is a risk factor for mold growth, even if it's not immediately visible.",
      },
      {
        question: "Is DIY mold removal safe?",
        answer: "For small surface mold (under 10 square feet) on non-porous materials, EPA guidance allows homeowner cleaning with appropriate protective equipment. However, mold inside walls, in HVAC systems, in crawl spaces, or covering more than 10 square feet requires professional remediation. Disturbing mold without proper containment releases spores throughout the structure and can make the problem significantly worse.",
      },
      {
        question: "How long does mold remediation take?",
        answer: "Small mold jobs can be completed in one to two days. Larger remediation projects — those involving multiple rooms, wall cavities, or HVAC systems — may take three to seven days or more. Post-remediation air testing adds time if lab results require a business day to return. Force1 Restoration provides a timeline estimate after the initial inspection.",
      },
      {
        question: "Does homeowners insurance cover mold remediation?",
        answer: "Coverage depends on the cause of the mold and your policy terms. Mold resulting from a covered water damage event (burst pipe, storm flooding) is often covered. Mold from long-term neglect or maintenance issues is typically excluded. Force1 Restoration documents the loss carefully to support your insurance claim wherever coverage applies.",
      },
      {
        question: "Can Force1 Restoration handle mold in HVAC systems?",
        answer: "Yes. Mold in air handling units, ductwork, and coils requires specialized cleaning that prevents spores from being redistributed through the ventilation system. Force1 Restoration assesses HVAC-related mold as part of a comprehensive inspection and coordinates appropriate treatment to prevent ongoing contamination of the living space.",
      },
    ],
  },

  "storm-damage-restoration": {
    answerFirst:
      "Storm damage restoration covers the full range of property damage caused by hurricanes, tropical storms, tornadoes, and severe thunderstorms — including wind damage, storm surge flooding, roof damage, fallen tree impact, and water intrusion through breached building envelopes. Force1 Restoration provides rapid emergency response after severe weather events throughout Volusia County, including emergency tarping, water extraction, and complete structural restoration.",
    processSteps: [
      { title: "Emergency securing", desc: "Roof tarping, board-up, and temporary repairs prevent additional water intrusion while a full assessment is completed. This is the first priority after storm damage." },
      { title: "Damage documentation", desc: "Comprehensive photo and written documentation of all storm damage is created for your insurance adjuster — critical for a successful claim." },
      { title: "Water extraction", desc: "Storm surge and rain intrusion water is extracted immediately to prevent mold growth and structural deterioration." },
      { title: "Structural drying", desc: "Industrial drying equipment removes moisture from walls, framing, insulation, and subfloor materials before enclosed repairs begin." },
      { title: "Debris removal", desc: "Fallen trees, damaged roofing materials, and debris are safely removed from the structure and property." },
      { title: "Structural restoration", desc: "Roofing, siding, windows, interior walls, and flooring are restored to pre-storm condition with quality materials and professional workmanship." },
    ],
    whyPoints: [
      "24/7 emergency response immediately after storm events in Volusia County",
      "Emergency tarping and board-up prevents additional damage while restoration is planned",
      "Comprehensive insurance documentation from day one",
      "Full-service restoration: we handle extraction, drying, and structural repairs",
      "Experience with hurricane and tropical storm damage specific to Central Florida",
    ],
    faqs: [
      {
        question: "What should I do immediately after storm damage?",
        answer: "First, ensure your household's safety — do not enter the structure if there is structural instability, gas smell, or live electrical hazards. Once safe, call Force1 Restoration at (407) 956-9780 for emergency response. Avoid discarding any damaged materials before documentation, as this may affect your insurance claim. Take your own photos if it is safe to do so.",
      },
      {
        question: "How does Force1 Restoration help with storm damage insurance claims?",
        answer: "Force1 Restoration begins documenting damage from the moment we arrive — photographs, moisture readings, written scope of damage. This documentation supports your claim with the insurance adjuster. We work alongside your insurance carrier throughout the process and can explain the scope of work and restoration plan directly.",
      },
      {
        question: "Can Force1 Restoration repair roof damage after a storm?",
        answer: "Yes. Temporary emergency tarping is provided immediately to prevent further water intrusion. Full roof repair and replacement is part of our complete storm restoration service. We handle everything from emergency response through final structural repair so you don't need to coordinate multiple contractors.",
      },
      {
        question: "Is storm surge water the same as regular water damage?",
        answer: "No — storm surge from coastal flooding is classified as Category 3 (blackwater) because it carries contaminants, debris, sewage, and other hazardous materials. Blackwater requires more intensive extraction protocols, antimicrobial treatment, and material removal than Category 1 clean water. Force1 Restoration applies the appropriate protocol based on the water source.",
      },
      {
        question: "How does Florida's storm season affect restoration timelines?",
        answer: "After major storm events, demand for restoration services spikes significantly across the region. Force1 Restoration prioritizes emergency mitigation (water extraction, tarping, board-up) to stop ongoing damage first, even when full restoration timelines are extended. Calling immediately after a storm gives you the best chance of priority scheduling.",
      },
    ],
  },

  "fire-damage-restoration": {
    answerFirst:
      "Fire damage restoration addresses not only the structural damage from flames but also the equally destructive effects of smoke, soot, and the water used in firefighting. Smoke penetrates porous materials throughout the structure and leaves behind acidic residues that continue corroding surfaces long after the fire is out. Force1 Restoration's fire restoration process follows IICRC S700 standards, beginning as soon as the fire department clears the property and covering every phase from demolition through final reconstruction.",
    processSteps: [
      { title: "Safety assessment", desc: "A structural safety evaluation is completed before entry to identify hazards including compromised load-bearing elements, electrical risks, and hazardous materials." },
      { title: "Emergency board-up & tarping", desc: "Windows, doors, and roof openings are secured immediately to prevent unauthorized entry and further weather damage." },
      { title: "Water extraction", desc: "Water from firefighting is extracted promptly to prevent additional mold and structural deterioration on top of fire damage." },
      { title: "Soot & smoke removal", desc: "Specialized dry and wet cleaning techniques, HEPA vacuuming, and sponging remove soot from surfaces before it permanently etches or stains materials." },
      { title: "Deodorization", desc: "Thermal fogging, ozone treatment, and hydroxyl generators neutralize smoke odors embedded in structural materials, contents, and HVAC systems." },
      { title: "Structural restoration", desc: "Demolition of unsalvageable materials, reconstruction, and finishing restores the property to its pre-fire condition with full documentation throughout." },
    ],
    whyPoints: [
      "IICRC S700 Fire and Smoke Damage Restoration Standard compliance",
      "Rapid response minimizes soot corrosion — time is critical after a fire",
      "Specialized smoke and odor elimination, not masking agents",
      "Complete service from emergency board-up through final reconstruction",
      "Full documentation for your fire insurance claim from day one",
    ],
    faqs: [
      {
        question: "How quickly should fire damage restoration begin?",
        answer: "As soon as the fire department clears the property as safe — ideally within the first few hours. Soot begins permanently etching and staining surfaces within 24 to 72 hours, and smoke odor embeds more deeply into porous materials the longer it sits. Force1 Restoration provides 24/7 emergency response and can begin the process immediately after clearance.",
      },
      {
        question: "Can smoke-damaged contents be saved?",
        answer: "Many smoke-damaged contents — furniture, clothing, documents, electronics, and personal items — can be professionally cleaned and restored if treated promptly. Force1 Restoration assesses contents early in the process and uses specialized cleaning techniques for different material types. We document items clearly as salvageable or non-salvageable for your insurance claim.",
      },
      {
        question: "Will smoke odor go away on its own after a fire?",
        answer: "No. Smoke odor does not dissipate naturally because it is caused by microscopic particles embedded in porous materials — walls, subfloor, insulation, soft goods, and even structural framing. Effective deodorization requires professional-grade thermal fogging, ozone or hydroxyl treatment, and replacement of materials that cannot be cleaned to an acceptable standard.",
      },
      {
        question: "Does homeowners insurance cover fire damage restoration?",
        answer: "Yes, in most cases — fire damage is a standard covered peril in homeowners insurance policies. This typically includes both the structure and contents. Force1 Restoration works with your insurance adjuster, provides detailed documentation and a restoration scope, and can help you understand what is covered under your specific policy.",
      },
      {
        question: "Is the property safe to enter after a fire?",
        answer: "Not always immediately. Fire can compromise structural elements that are not visually obvious, and smoke residue contains carcinogenic particles. The fire department must declare the property safe before anyone enters. Once cleared, Force1 Restoration assesses the structure for any remaining hazards before the full restoration team begins work.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Route                                                                 */
/* ------------------------------------------------------------------ */

type Props = { params: Promise<{ serviceSlug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) return {};

  const title = `${service.name} in DeBary & Orange City, FL`;
  const canonical = `${BUSINESS.siteUrl}/services/${service.slug}`;

  return {
    title,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${title} | Force1 Restoration`,
      description: service.metaDescription,
      url: canonical,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[serviceSlug];
  if (!content) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name },
  ];

  const pageUrl = `${BUSINESS.siteUrl}/services/${service.slug}`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        serviceName={service.name}
        serviceDescription={service.shortDescription}
        serviceUrl={pageUrl}
      />

      <Hero
        headline={`${service.name} in DeBary &amp; Orange City, FL`}
        subheadline={service.shortDescription}
        ctaLocation={`service-${service.slug}-hero`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Answer-first block (AI-extractable) */}
      <section className="bg-white pb-10" aria-labelledby={`${serviceSlug}-answer`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-primary-50 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h2 id={`${serviceSlug}-answer`} className="text-xl font-bold text-ink mb-3">
              What is {service.name}?
            </h2>
            <p className="text-ink-muted leading-relaxed">{content.answerFirst}</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-white" aria-labelledby={`${serviceSlug}-process`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id={`${serviceSlug}-process`} className="text-2xl font-bold text-ink mb-8">
            Our {service.name} Process
          </h2>
          <ol className="grid sm:grid-cols-2 gap-5">
            {content.processSteps.map((step, i) => (
              <li key={i} className="flex gap-4 bg-surface rounded-xl p-5 border border-border">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">{step.title}</p>
                  <p className="text-ink-muted text-sm mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Force1 for this service */}
      <section className="py-14 bg-surface border-t border-border" aria-labelledby={`${serviceSlug}-why`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id={`${serviceSlug}-why`} className="text-2xl font-bold text-ink mb-6">
            Why Choose Force1 Restoration for {service.name}
          </h2>
          <ul className="space-y-3">
            {content.whyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-ink-muted">
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service × city links */}
      <section className="py-14 bg-white border-t border-border" aria-labelledby={`${serviceSlug}-cities`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id={`${serviceSlug}-cities`} className="text-2xl font-bold text-ink mb-6">
            {service.name} by Location
          </h2>
          <p className="text-ink-muted mb-6">
            Force1 Restoration provides {service.name.toLowerCase()} throughout Volusia County.
            Select your city for local-specific information.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/services/${service.slug}/${city.slug}`}
                className="group flex items-center justify-between p-5 rounded-xl border border-border hover:border-primary hover:bg-primary-50 transition-all"
              >
                <div>
                  <p className="font-semibold text-ink group-hover:text-primary transition-colors">
                    {service.name} in {city.name}
                  </p>
                  <p className="text-xs text-ink-muted mt-0.5">{city.county}, FL</p>
                </div>
                <ChevronIcon />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inline call CTA */}
      <section className="py-10 bg-primary-50 border-t border-primary/20" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-ink text-lg">
              Need {service.name} in DeBary or Orange City?
            </p>
            <p className="text-ink-muted text-sm">
              Force1 Restoration — IICRC Certified · {BUSINESS.hours}
            </p>
          </div>
          <PhoneNumber
            location={`service-${service.slug}-inline-cta`}
            className="cta-pulse inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            <PhoneIconSmall />
            {BUSINESS.phone}
          </PhoneNumber>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={content.faqs} title={`${service.name} FAQ`} />

      {/* Final call-focused close */}
      <CTASection
        headline={`Force1 Restoration — ${service.name} in DeBary &amp; Orange City, FL`}
        body={`${BUSINESS.certifications.join(", ")} · ${BUSINESS.hours} · Call ${BUSINESS.phone} for immediate assistance.`}
        location={`service-${service.slug}-footer-cta`}
        variant="primary"
      />
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="h-5 w-5 text-ink-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
