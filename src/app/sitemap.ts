import type { MetadataRoute } from "next";
import { BUSINESS, SERVICES, CITIES, getAllCombos } from "@/lib/config";

/*
 * Segmented sitemap: core → service → city → combo.
 * Keep counts below 50,000 URLs per sitemap file (no risk here given our
 * current 2-service × 2-city matrix, but this structure scales cleanly).
 *
 * TODO post-deploy: Submit sitemap to Google Search Console and monitor
 * indexation rate per page type (core, service, city, combo) separately.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl;
  const now = new Date().toISOString();

  /* Core pages */
  const corePages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  /* Service pages */
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  /* City pages */
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${base}/locations/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  /* Service × city combo pages */
  const comboPages: MetadataRoute.Sitemap = getAllCombos().map(
    ({ serviceSlug, citySlug }) => ({
      url: `${base}/services/${serviceSlug}/${citySlug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  /* Blog posts */
  const blogPosts: MetadataRoute.Sitemap = [
    "what-to-do-after-water-damage",
    "signs-of-mold-in-florida-homes",
    "storm-damage-insurance-claim-guide",
  ].map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...corePages, ...servicePages, ...cityPages, ...comboPages, ...blogPosts];
}
