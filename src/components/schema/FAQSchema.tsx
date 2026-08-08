/*
 * FAQPage JSON-LD schema — include on any page with a FAQ section.
 *
 * TODO post-deploy: validate at https://search.google.com/test/rich-results
 */

import type { FAQ } from "@/types";

interface Props {
  faqs: readonly FAQ[];
}

export function FAQSchema({ faqs }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
