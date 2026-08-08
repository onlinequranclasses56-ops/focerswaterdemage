import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import { BUSINESS, SERVICES, CITIES, getCity } from "@/lib/config";
import type { FAQ } from "@/types";

/* ------------------------------------------------------------------ */
/* City-specific content                                                 */
/* ------------------------------------------------------------------ */

type CityContent = {
  intro: string;
  localContext: string;
  challengesTitle: string;
  challenges: { title: string; desc: string }[];
  faqs: FAQ[];
};

const CITY_CONTENT: Record<string, CityContent> = {
  debary: {
    intro:
      "Force1 Restoration is headquartered in DeBary, FL, making it our fastest-response service area. When you call after a water damage event, storm, or fire, we are already nearby — minimizing the window during which damage worsens and costs escalate.",
    localContext:
      "DeBary sits along the western shore of the St. Johns River in Volusia County — one of only a few rivers in the US that flows northward. This geography creates distinct restoration challenges: properties near the river corridor are subject to flooding during tropical weather, the high water table makes structural drying more demanding than in inland areas, and year-round humidity accelerates mold growth in affected structures. Force1 Restoration's technicians understand these local factors and apply appropriate IICRC-certified protocols for every job.",
    challengesTitle: "Common Restoration Needs in DeBary",
    challenges: [
      {
        title: "River-proximity flooding",
        desc: "Homes and businesses in the River City area and along Highbanks Road are particularly susceptible to St. Johns River backflow during extended tropical rainfall and named storm events. This can result in Category 2 or Category 3 water intrusion requiring advanced extraction and antimicrobial treatment.",
      },
      {
        title: "High humidity and mold risk",
        desc: "DeBary's riverside microclimate maintains higher ambient humidity than inland Volusia County. After any water intrusion event, mold colonization risk is elevated — Force1 Restoration's drying protocols are calibrated for Florida's specific psychrometric conditions to meet IICRC dry standard within the optimal timeframe.",
      },
      {
        title: "Tropical storm and hurricane damage",
        desc: "Volusia County sits within the Central Florida storm track and is regularly impacted by tropical systems traveling across the peninsula. DeBary's mature tree canopy — a hallmark of its established neighborhoods — creates significant roof and structural damage risk from wind and tree fall during storm events.",
      },
      {
        title: "Lightning strikes and fire",
        desc: "Florida leads the US in lightning strikes per capita. Structural fires and appliance damage from lightning are a regular occurrence in DeBary residential neighborhoods. Force1 Restoration responds immediately after fire department clearance to begin smoke, soot, and water mitigation.",
      },
    ],
    faqs: [
      {
        question: "How fast can Force1 Restoration reach DeBary?",
        answer: "Force1 Restoration is based in DeBary — our home base and fastest-response area in Volusia County. After your call, we aim to have a certified technician dispatched immediately. For emergency water damage and fire damage, response time directly affects the total cost and extent of damage, so we treat every call with urgency.",
      },
      {
        question: "Does the St. Johns River flooding affect my restoration timeline?",
        answer: "River-related flooding in DeBary typically involves larger volumes of water over extended periods, which requires more drying equipment and longer drying cycles than a burst pipe event. Force1 Restoration scales equipment deployment based on the severity of the event and monitors progress daily until IICRC dry standard is confirmed throughout the structure.",
      },
      {
        question: "Is mold common in DeBary homes after water damage?",
        answer: "Yes — DeBary's riverside location and Florida's year-round warmth create conditions where mold can begin growing within 24 to 48 hours of water exposure. This is why Force1 Restoration treats mold prevention as a standard component of every water damage job in DeBary, not an optional add-on.",
      },
      {
        question: "What neighborhoods in DeBary does Force1 Restoration serve?",
        answer: "Force1 Restoration serves all of DeBary, FL — including River City area, Saxon Boulevard corridor, Doyle Road neighborhoods, the Highbanks Road waterfront, and all surrounding residential and commercial areas. Call (407) 956-9780 to confirm availability at your specific address.",
      },
    ],
  },

  "orange-city": {
    intro:
      "Force1 Restoration serves Orange City, FL with the same IICRC-certified technicians and professional-grade equipment available to our DeBary customers. Orange City is a short drive from our DeBary base, and we maintain rapid emergency response times throughout the area.",
    localContext:
      "Orange City is located in central Volusia County just north of DeLand, with a mix of established residential neighborhoods, a growing commercial corridor along Enterprise Road and US 17-92, and proximity to Blue Spring State Park. The area's geography — away from the river but still subject to Central Florida's heavy rainfall, frequent thunderstorms, and tropical weather — creates a distinct set of restoration scenarios. Multi-family housing, older commercial buildings downtown, and both newer subdivisions and older homes present varied restoration challenges.",
    challengesTitle: "Common Restoration Needs in Orange City",
    challenges: [
      {
        title: "Severe thunderstorm and tornado damage",
        desc: "Orange City sits in Central Florida's inland storm corridor and is exposed to frequent severe thunderstorm cells and occasional tornado events. Commercial roofing, older residential structures, and multi-family housing are particularly vulnerable to wind damage and water intrusion during these events.",
      },
      {
        title: "AC condensation and plumbing failures",
        desc: "Orange City's commercial corridor and its mix of older and newer housing stock create common scenarios involving failed AC drain pans, supply line breaks, and aging plumbing systems. These Category 1 events require prompt extraction and drying to prevent progression to Category 2 or mold damage.",
      },
      {
        title: "Mold in commercial and multi-family properties",
        desc: "Orange City's commercial properties and multi-unit housing present unique mold remediation challenges: larger affected areas, HVAC systems shared between units, and Florida's warm climate that accelerates growth behind walls and in mechanical spaces.",
      },
      {
        title: "Fire damage in mixed-use and older buildings",
        desc: "The older commercial buildings in downtown Orange City and along the US 17-92 corridor include structures with aging electrical systems and mixed-use configurations that create distinct fire, smoke, and soot restoration scenarios requiring professional-grade deodorization and structural assessment.",
      },
    ],
    faqs: [
      {
        question: "How quickly can Force1 Restoration respond to Orange City?",
        answer: "Force1 Restoration's base in DeBary places Orange City within a short drive for our technicians. We respond to emergency calls in Orange City 24 hours a day, 7 days a week. For water damage, storm damage, and fire emergencies, immediate response is critical — call (407) 956-9780 any time of day or night.",
      },
      {
        question: "Does Force1 Restoration serve commercial properties in Orange City?",
        answer: "Yes. Force1 Restoration handles both residential and commercial restoration work in Orange City, FL. Commercial restoration often involves larger extraction volumes, coordination with building managers or landlords, and more complex insurance documentation. Our team is experienced in commercial-scale jobs throughout Volusia County.",
      },
      {
        question: "Are there specific water damage risks in Orange City neighborhoods?",
        answer: "Orange City properties away from the St. Johns River corridor are less exposed to river flooding but are still subject to heavy tropical rainfall, failed plumbing infrastructure, and AC-related water intrusion. Older homes along Enterprise Road and in established neighborhoods may have aging supply lines or water heaters that are common failure points.",
      },
      {
        question: "Does Force1 Restoration handle storm damage insurance claims in Orange City?",
        answer: "Yes — Force1 Restoration provides comprehensive storm damage documentation from the moment we arrive, supporting your claim with your insurance carrier. We work alongside adjusters and can communicate the scope of work and restoration plan directly. Orange City residents face the same Florida homeowners insurance challenges as the broader Central Florida market.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Route                                                                 */
/* ------------------------------------------------------------------ */

type Props = { params: Promise<{ citySlug: string }> };

export function generateStaticParams() {
  return CITIES.map((c) => ({ citySlug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};

  const title = `Restoration Services in ${city.name}, FL`;
  const canonical = `${BUSINESS.siteUrl}/locations/${city.slug}`;

  return {
    title,
    description: city.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${title} | Force1 Restoration`,
      description: city.metaDescription,
      url: canonical,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const content = CITY_CONTENT[citySlug];
  if (!content) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: `${city.name}, FL` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* One ServiceSchema per service for this city for maximum schema coverage */}
      {SERVICES.map((service) => (
        <ServiceSchema
          key={service.slug}
          serviceName={service.name}
          serviceDescription={service.shortDescription}
          serviceUrl={`${BUSINESS.siteUrl}/services/${service.slug}/${city.slug}`}
          cityName={city.name}
          cityState={city.state}
        />
      ))}

      <Hero
        headline={`Restoration Services in ${city.name}, FL`}
        subheadline={`Force1 Restoration provides 24/7 water damage, mold remediation, storm damage, and fire damage restoration in ${city.name}. IICRC-certified technicians, rapid emergency response.`}
        ctaLocation={`city-${city.slug}-hero`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Intro + local context */}
      <section className="py-14 bg-white" aria-labelledby={`${citySlug}-intro`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id={`${citySlug}-intro`} className="text-2xl font-bold text-ink mb-4">
            Force1 Restoration Serves {city.name}, FL
          </h2>
          <p className="text-ink-muted mb-5 leading-relaxed">{content.intro}</p>
          <p className="text-ink-muted leading-relaxed">{content.localContext}</p>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-14 bg-surface border-t border-border" aria-labelledby={`${citySlug}-services`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id={`${citySlug}-services`} className="text-2xl font-bold text-ink mb-8">
            Our Services in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                citySlug={city.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-14 bg-white border-t border-border" aria-labelledby={`${citySlug}-challenges`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id={`${citySlug}-challenges`} className="text-2xl font-bold text-ink mb-8">
            {content.challengesTitle}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {content.challenges.map((item, i) => (
              <div key={i} className="bg-surface rounded-xl border border-border p-5">
                <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-10 bg-primary-50 border-t border-primary/20" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-ink text-lg">
              Need restoration in {city.name}, FL?
            </p>
            <p className="text-ink-muted text-sm">
              Force1 Restoration — IICRC Certified · {BUSINESS.hours}
            </p>
          </div>
          <PhoneNumber
            location={`city-${city.slug}-inline-cta`}
            className="cta-pulse inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            <PhoneIconSmall />
            {BUSINESS.phone}
          </PhoneNumber>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={content.faqs} title={`Restoration FAQ — ${city.name}, FL`} />

      {/* Final CTA */}
      <CTASection
        headline={`Force1 Restoration — ${city.name}, FL`}
        body={`24/7 water damage, mold remediation, storm damage, and fire damage restoration in ${city.name}. IICRC-certified technicians. Call ${BUSINESS.phone}.`}
        location={`city-${city.slug}-footer-cta`}
        variant="primary"
      />
    </>
  );
}

function PhoneIconSmall() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
