/*
 * Site-wide business configuration — Force1 Restoration
 *
 * PLACEHOLDER values are marked with [SQUARE_BRACKETS] or REPLACE comments.
 * See PLACEHOLDERS.md for the full resolution list.
 *
 * Phone number is stored here once and consumed via the <PhoneNumber> component
 * so a call-tracking platform (CallRail, etc.) can swap in DNI numbers later
 * without touching individual page files.
 */

export const BUSINESS = {
  name: "Force1 Restoration",
  legalName: "Force1 Restoration LLC", /* REPLACE if legal name differs */
  tagline: "[TAGLINE]",                /* REPLACE: short value-prop tagline */

  /* Contact */
  phone: "(864) 734-5702",
  phoneHref: "tel:+18647345702",
  email: "[EMAIL@DOMAIN.COM]",         /* REPLACE */

  /* NAP — must match Google Business Profile exactly */
  address: {
    street: "420 Robertson Ln",
    city: "DeBary",
    state: "FL",
    zip: "32713",                 /* REPLACE */
    country: "US",
    full: "420 Robertson Ln, DeBary, FL 32713",
  },

  /* Hours */
  hours: "24/7 Emergency Service",
  hoursDisplay: "Available 24 hours a day, 7 days a week",

  /* Credentials — shown in footer + About page */
  certifications: ["IICRC Certified"],
  licenses: ["[LICENSE_NUMBER]"],      /* REPLACE */
  insurance: "Fully Licensed & Insured",

  /* History */
  foundingYear: "[FOUNDING_YEAR]",     /* REPLACE */

  /* Geo (DeBary, FL approximate — update with exact coordinates) */
  geo: {
    latitude: "28.8762",
    longitude: "-81.3135",
  },

  /* Site — set NEXT_PUBLIC_SITE_URL=https://www.force1waterdamagefl.com in Vercel */
  domain: "force1waterdamagefl.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.force1waterdamagefl.com",

  /* Social / third-party profile URLs */
  social: {
    facebook:  "[FACEBOOK_URL]",       /* REPLACE */
    google:    "[GOOGLE_BUSINESS_URL]", /* REPLACE */
    instagram: "[INSTAGRAM_URL]",      /* REPLACE */
    yelp:      "[YELP_URL]",           /* REPLACE */
  },

  /* Schema.org type for structured data */
  schemaType: "HomeAndConstructionBusiness",
} as const;

/* ------------------------------------------------------------------ */

export const SERVICES = [
  {
    name: "Water Damage Restoration",
    slug: "water-damage-restoration",
    shortDescription:
      "24/7 emergency water extraction, structural drying, and full restoration for homes and businesses in Volusia County.",
    metaDescription:
      "Force1 Restoration provides 24/7 water damage restoration in DeBary and Orange City, FL. IICRC-certified technicians, rapid response. Call (864) 734-5702.",
    icon: "💧",
    color: "blue",
  },
  {
    name: "Mold Remediation",
    slug: "mold-remediation",
    shortDescription:
      "Certified mold inspection, containment, safe removal, and prevention by IICRC-trained technicians serving DeBary and Orange City.",
    metaDescription:
      "Professional mold remediation in DeBary and Orange City, FL. IICRC-certified, safe containment and removal. Force1 Restoration — call (864) 734-5702.",
    icon: "🔬",
    color: "green",
  },
  {
    name: "Storm Damage Restoration",
    slug: "storm-damage-restoration",
    shortDescription:
      "Rapid storm damage assessment and full restoration after hurricanes, tropical storms, and severe weather across Central Florida.",
    metaDescription:
      "Storm damage restoration in DeBary and Orange City, FL. Hurricane, flood, and wind damage cleanup by Force1 Restoration. Call (864) 734-5702.",
    icon: "⛈️",
    color: "slate",
  },
  {
    name: "Fire Damage Restoration",
    slug: "fire-damage-restoration",
    shortDescription:
      "Complete fire, smoke, and soot cleanup with structural restoration and odor elimination throughout Volusia County.",
    metaDescription:
      "Fire damage restoration in DeBary and Orange City, FL. Smoke, soot, and structural cleanup by Force1 Restoration. Call (864) 734-5702.",
    icon: "🔥",
    color: "orange",
  },
] as const;

/* ------------------------------------------------------------------ */

export const CITIES = [
  {
    name: "DeBary",
    slug: "debary",
    state: "FL",
    county: "Volusia County",
    geo: { latitude: "28.8762", longitude: "-81.3135" },
    description:
      "DeBary is Force1 Restoration's home base, located along the St. Johns River in Volusia County. Our team provides the fastest emergency response times in DeBary and surrounding communities.",
    metaDescription:
      "Force1 Restoration serves DeBary, FL with 24/7 water damage, mold, storm, and fire restoration. IICRC-certified — call (864) 734-5702.",
    localContext:
      "DeBary's proximity to the St. Johns River creates unique flood and moisture risks, particularly for homes near the river corridor and low-lying neighborhoods.",
  },
  {
    name: "Orange City",
    slug: "orange-city",
    state: "FL",
    county: "Volusia County",
    geo: { latitude: "28.9495", longitude: "-81.2987" },
    description:
      "Force1 Restoration serves Orange City, FL with the same 24/7 emergency response and IICRC-certified technicians available to DeBary customers — typically arriving in under an hour.",
    metaDescription:
      "Force1 Restoration serves Orange City, FL with 24/7 water damage, mold, storm, and fire restoration. IICRC-certified — call (864) 734-5702.",
    localContext:
      "Orange City's mix of established neighborhoods, commercial corridors, and proximity to Blue Spring creates a distinct set of water intrusion and storm damage scenarios.",
  },
] as const;

/* ------------------------------------------------------------------ */

export type Service = (typeof SERVICES)[number];
export type City = (typeof CITIES)[number];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug) as Service | undefined;
}

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug) as City | undefined;
}

export function getAllServiceSlugs() {
  return SERVICES.map((s) => s.slug);
}

export function getAllCitySlugs() {
  return CITIES.map((c) => c.slug);
}

export function getAllCombos() {
  return SERVICES.flatMap((service) =>
    CITIES.map((city) => ({ serviceSlug: service.slug, citySlug: city.slug }))
  );
}
