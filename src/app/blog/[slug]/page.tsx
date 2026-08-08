import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { BUSINESS } from "@/lib/config";

/* ------------------------------------------------------------------ */
/* Blog post data                                                        */
/* ------------------------------------------------------------------ */

/*
 * PLACEHOLDER blog posts — replace with real articles before launch.
 * Add real datePublished and dateModified for Article schema.
 * See PLACEHOLDERS.md.
 */
const POSTS: Record<
  string,
  {
    title: string;
    description: string;
    datePublished: string;
    dateModified: string;
    body: string;
  }
> = {
  "what-to-do-after-water-damage": {
    title: "What to Do Immediately After Water Damage in Your Home",
    description:
      "The first 24 hours after water damage are critical. Here's what to do — and what not to do — to minimize damage and protect your insurance claim.",
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
    body: "[ARTICLE_BODY_PLACEHOLDER — Replace with real 800–1500 word article content before launch. This article should cover: immediate safety steps after water damage, what NOT to do (e.g., don't run fans before extraction), documenting damage for insurance, when to call a professional, and when DIY is appropriate. See PLACEHOLDERS.md.]",
  },
  "signs-of-mold-in-florida-homes": {
    title: "5 Signs of Mold in Florida Homes You Shouldn't Ignore",
    description:
      "Florida's warm, humid climate makes mold growth faster and more widespread than in most other states. Learn the warning signs and when to call a professional.",
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
    body: "[ARTICLE_BODY_PLACEHOLDER — Replace with real article content about mold warning signs in Florida homes: musty odor, visible growth, respiratory symptoms, water damage history, and AC-related condensation issues. See PLACEHOLDERS.md.]",
  },
  "storm-damage-insurance-claim-guide": {
    title: "How to File a Storm Damage Insurance Claim in Volusia County",
    description:
      "A step-by-step guide to navigating your homeowners insurance claim after hurricane or tropical storm damage in Central Florida.",
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
    body: "[ARTICLE_BODY_PLACEHOLDER — Replace with real article content covering: documenting storm damage, notifying your insurer, working with adjusters, distinguishing windstorm vs. flood damage coverage, and what a restoration company does to support your claim. See PLACEHOLDERS.md.]",
  },
};

/* ------------------------------------------------------------------ */
/* Route                                                                 */
/* ------------------------------------------------------------------ */

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};

  const canonical = `${BUSINESS.siteUrl}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: `${post.title} | Force1 Restoration`,
      description: post.description,
      url: canonical,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    url: `${BUSINESS.siteUrl}/blog/${slug}`,
    /* TODO post-deploy: validate Article schema at https://validator.schema.org */
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <header className="bg-primary py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-white/60 text-sm mb-4">
            {new Date(post.datePublished).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · Force1 Restoration
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 prose prose-gray">
        <p className="lead">{post.description}</p>
        {/* PLACEHOLDER body — replace with rich article content */}
        <p className="text-ink-muted">{post.body}</p>
        <hr />
        <p className="text-sm text-ink-muted">
          <em>
            Force1 Restoration provides IICRC-certified water damage restoration, mold
            remediation, storm damage restoration, and fire damage restoration in DeBary
            and Orange City, FL. For emergencies, call{" "}
            <Link href={BUSINESS.phoneHref} className="text-primary font-semibold">
              {BUSINESS.phone}
            </Link>
            .
          </em>
        </p>
      </article>

      <CTASection
        headline="Need restoration help in DeBary or Orange City, FL?"
        body="Force1 Restoration is available 24/7 — IICRC-certified emergency response."
        location={`blog-${slug}-footer-cta`}
        variant="accent"
      />
    </>
  );
}
