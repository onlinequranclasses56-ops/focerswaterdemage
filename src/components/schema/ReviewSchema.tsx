/*
 * AggregateRating + Review JSON-LD schema — used on /reviews page.
 *
 * IMPORTANT: Only use real reviews from Google Business Profile or other
 * verified sources. Never fabricate ratings, review counts, or review text.
 *
 * TODO post-deploy: validate at https://search.google.com/test/rich-results
 */

import { BUSINESS } from "@/lib/config";
import type { Review } from "@/types";

interface Props {
  reviews: Review[];
  ratingValue: number;
  reviewCount: number;
}

export function ReviewSchema({ reviews, ratingValue, reviewCount }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": BUSINESS.schemaType,
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      datePublished: r.date,
      reviewBody: r.body,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
