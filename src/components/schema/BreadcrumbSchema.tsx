/*
 * BreadcrumbList JSON-LD schema — included on every page with breadcrumbs.
 *
 * TODO post-deploy: validate at https://search.google.com/test/rich-results
 */

import { BUSINESS } from "@/lib/config";
import type { BreadcrumbItem } from "@/types";

interface Props {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `${BUSINESS.siteUrl}${item.href}` }
        : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
