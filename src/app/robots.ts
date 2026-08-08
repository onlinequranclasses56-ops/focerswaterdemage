import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        /* Prevent crawling of legal pages with no ranking value */
        /* "/privacy-policy", */
        /* "/terms", */
      ],
    },
    sitemap: `${BUSINESS.siteUrl}/sitemap.xml`,
  };
}
