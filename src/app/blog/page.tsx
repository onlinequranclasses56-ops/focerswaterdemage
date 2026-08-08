import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Restoration Tips & Resources — Blog | Force1 Restoration",
  description:
    "Restoration tips, storm preparedness guides, mold prevention advice, and more from Force1 Restoration serving DeBary and Orange City, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/blog` },
  openGraph: {
    title: "Blog | Force1 Restoration — DeBary & Orange City, FL",
    description: "Restoration tips and resources from Force1 Restoration.",
    url: `${BUSINESS.siteUrl}/blog`,
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Blog" },
];

/*
 * PLACEHOLDER blog posts — replace with real posts before launch.
 * Each post should be 800–1500 words of genuinely helpful content.
 * See PLACEHOLDERS.md.
 */
const PLACEHOLDER_POSTS = [
  {
    slug: "what-to-do-after-water-damage",
    title: "What to Do Immediately After Water Damage in Your Home",
    excerpt: "The first 24 hours after water damage are critical. Here's what to do — and what not to do — to minimize damage and protect your insurance claim.",
    date: "2024-01-01",
  },
  {
    slug: "signs-of-mold-in-florida-homes",
    title: "5 Signs of Mold in Florida Homes You Shouldn't Ignore",
    excerpt: "Florida's warm, humid climate makes mold growth faster and more widespread than in most other states. Learn the warning signs and when to call a professional.",
    date: "2024-01-01",
  },
  {
    slug: "storm-damage-insurance-claim-guide",
    title: "How to File a Storm Damage Insurance Claim in Volusia County",
    excerpt: "A step-by-step guide to navigating your homeowners insurance claim after hurricane or tropical storm damage in Central Florida.",
    date: "2024-01-01",
  },
];

export default function BlogHubPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <Hero
        headline="Restoration Tips &amp; Resources"
        subheadline="Practical advice for Florida homeowners on water damage prevention, storm preparedness, mold risks, and what to do in an emergency."
        ctaLocation="blog-hub-hero"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={BREADCRUMBS} />
      </div>

      <section className="py-14 bg-white" aria-labelledby="blog-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="blog-heading" className="text-2xl font-bold text-ink mb-8">
            Latest Articles
          </h2>

          <div className="space-y-6">
            {PLACEHOLDER_POSTS.map((post) => (
              <article
                key={post.slug}
                className="border border-border rounded-xl p-6 hover:border-primary hover:bg-primary-50 transition-all"
                aria-labelledby={`post-${post.slug}`}
              >
                <p className="text-xs text-ink-light mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {" · "}Force1 Restoration
                </p>
                <h3 id={`post-${post.slug}`} className="font-bold text-ink text-lg mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 p-4 bg-surface border border-border rounded-xl text-sm text-ink-muted">
            [BLOG_PLACEHOLDER — Replace placeholder posts with real articles before launch.
            Each article should be 800–1500 words of genuinely helpful content for Volusia County
            homeowners. See PLACEHOLDERS.md.]
          </div>
        </div>
      </section>

      <CTASection
        headline="Emergency restoration in DeBary or Orange City, FL?"
        body="Force1 Restoration is available 24/7. IICRC-certified technicians respond immediately."
        location="blog-hub-footer-cta"
        variant="accent"
      />
    </>
  );
}
