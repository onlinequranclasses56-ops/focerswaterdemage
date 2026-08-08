import type { SERVICES, CITIES } from "@/lib/config";

export type Service = (typeof SERVICES)[number];
export type City = (typeof CITIES)[number];

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  author: string;
  rating: number;
  date: string; /* ISO 8601 */
  body: string;
  source?: "google" | "yelp" | "bbb";
}

export interface BreadcrumbItem {
  label: string;
  href?: string; /* omit for current (last) item */
}

export interface PageMetaSEO {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export interface SchemaAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface OpenHoursSpec {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
}
