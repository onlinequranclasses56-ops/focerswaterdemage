import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ReviewSchema } from "@/components/schema/ReviewSchema";
import { BUSINESS } from "@/lib/config";
import type { Review } from "@/types";

export const metadata: Metadata = {
  title: "Reviews — Forces Water Damage DeBary | DeBary & Orange City, FL",
  description:
    "Read reviews of Forces Water Damage DeBary from DeBary and Orange City, FL customers. IICRC-certified water damage, mold, storm, and fire restoration. Call (864) 734-5702.",
  alternates: { canonical: `${BUSINESS.siteUrl}/reviews` },
  openGraph: {
    title: "Customer Reviews | Forces Water Damage DeBary — DeBary & Orange City, FL",
    description: "Reviews from Volusia County customers. IICRC-certified restoration. Call (864) 734-5702.",
    url: `${BUSINESS.siteUrl}/reviews`,
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Reviews" },
];

/*
 * PLACEHOLDER REVIEWS — Replace with real reviews from Google Business Profile
 * or other verified sources before launch.
 * NEVER fabricate review author names, ratings, or review text.
 * See PLACEHOLDERS.md for guidance.
 */
const REVIEWS: Review[] = [
  {
    author: "[REVIEWER_NAME_1]",
    rating: 5,
    date: "2024-01-01",
    body: "[REVIEW_TEXT_1 — Replace with a real 5-star review from Google Business Profile or another verified source. Do not fabricate this content.]",
    source: "google",
  },
  {
    author: "[REVIEWER_NAME_2]",
    rating: 5,
    date: "2024-01-01",
    body: "[REVIEW_TEXT_2 — Replace with a real review. Do not fabricate this content.]",
    source: "google",
  },
];

/*
 * PLACEHOLDER aggregate — Update with real aggregate data once you have
 * enough real reviews to display. Do not fabricate these numbers.
 */
const AGGREGATE = {
  ratingValue: 5.0, /* REPLACE: real average from Google Business Profile */
  reviewCount: 1,   /* REPLACE: real total review count */
};

export default function ReviewsPage() {
  const hasRealReviews = REVIEWS.some((r) => !r.author.startsWith("["));

  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />
      {hasRealReviews && (
        <ReviewSchema
          reviews={REVIEWS.filter((r) => !r.author.startsWith("["))}
          ratingValue={AGGREGATE.ratingValue}
          reviewCount={AGGREGATE.reviewCount}
        />
      )}

      <Hero
        headline="What Our Customers Say"
        subheadline="Forces Water Damage DeBary is rated by homeowners and businesses in DeBary and Orange City, FL who've trusted us with their emergency restoration needs."
        ctaLocation="reviews-hero"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={BREADCRUMBS} />
      </div>

      <section className="py-14 bg-white" aria-labelledby="reviews-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="reviews-heading" className="text-2xl font-bold text-ink mb-3">
            Customer Reviews
          </h2>

          {!hasRealReviews && (
            <div className="bg-accent-50 border border-accent/30 rounded-xl p-5 mb-8 text-sm text-ink-muted">
              <strong className="text-ink">Placeholder reviews are shown below.</strong>{" "}
              Replace these with real reviews from your Google Business Profile before launch.
              See PLACEHOLDERS.md for instructions. Do not publish this page until real reviews
              are in place — the ReviewSchema will not be rendered until real reviews are detected.
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            {REVIEWS.map((review, i) => (
              <article
                key={i}
                className="bg-surface border border-border rounded-xl p-6"
                aria-labelledby={`review-${i}-author`}
              >
                <div className="flex items-center justify-between mb-3">
                  <p id={`review-${i}-author`} className="font-semibold text-ink">
                    {review.author}
                  </p>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-ink-muted text-sm leading-relaxed">{review.body}</p>
                <p className="text-xs text-ink-light mt-3">
                  {review.source ? `Via ${review.source.charAt(0).toUpperCase() + review.source.slice(1)}` : ""}
                  {review.date && ` · ${new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}`}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={BUSINESS.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors text-sm"
            >
              See all reviews on Google
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTASection
        headline="Join our satisfied customers in DeBary & Orange City, FL"
        body="Call Forces Water Damage DeBary 24/7 for IICRC-certified emergency restoration service."
        location="reviews-footer-cta"
        variant="accent"
      />
    </>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${star <= rating ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}
