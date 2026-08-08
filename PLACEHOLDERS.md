# PLACEHOLDERS — Force1 Restoration Site

All items listed here must be resolved before the site goes live.
Search the codebase for the exact placeholder string to find every occurrence.

---

## Critical (blocks launch)

| # | Placeholder | File(s) | Resolution |
|---|-------------|---------|------------|
| 1 | `[TAGLINE]` | `src/lib/config.ts`, footer, About page | Provide a short value-prop tagline (e.g., "DeBary's Fastest Restoration Response") |
| 2 | `[EMAIL@DOMAIN.COM]` | `src/lib/config.ts`, footer, contact page, legal pages | Confirm business email address |
| 3 | ~~`[ZIP_CODE]`~~ | ~~`src/lib/config.ts`~~ | **Resolved** — set to `32713` (DeBary, FL) |
| 4 | `force1restoration.com` | `src/lib/config.ts`, all canonical URLs, llms.txt | Confirm this is the real production domain; update `NEXT_PUBLIC_SITE_URL` in Vercel |
| 5 | `[LICENSE_NUMBER]` | `src/lib/config.ts`, About page, llms.txt, FAQ page | Provide Florida contractor/mold license number |
| 6 | `[FOUNDING_YEAR]` | `src/lib/config.ts`, About page | Provide company founding year |
| 7 | `NEXT_PUBLIC_SITE_URL` | `.env.production` / Vercel env vars | Set to `https://yourdomain.com` in Vercel dashboard |

---

## Design (blocks launch)

| # | Placeholder | File(s) | Resolution |
|---|-------------|---------|------------|
| 8 | `#1B4E8C` (Primary color) | `src/app/globals.css` `--color-primary` | Replace with approved brand primary color |
| 9 | `#0F3068` (Primary dark) | `src/app/globals.css` `--color-primary-dark` | Replace with approved dark variant |
| 10 | `#2E6DB4` (Primary light) | `src/app/globals.css` `--color-primary-light` | Replace with approved light variant |
| 11 | `#EBF2FF` (Primary 50) | `src/app/globals.css` `--color-primary-50` | Replace with approved tint |
| 12 | `#EA580C` (Accent/CTA color) | `src/app/globals.css` `--color-accent` | Replace with approved accent/CTA color |
| 13 | `#C2410C` (Accent dark) | `src/app/globals.css` `--color-accent-dark` | Replace with approved accent hover |
| 14 | `/public/logo.svg` | All pages via `<Image>` | Replace placeholder SVG with approved brand logo |

---

## Content (blocks launch)

| # | Placeholder | File(s) | Resolution |
|---|-------------|---------|------------|
| 15 | `[COMPANY_STORY_PLACEHOLDER]` | `src/app/about/page.tsx` | Write real company history, founding story, team background |
| 16 | `[TEAM_SECTION_PLACEHOLDER]` | `src/app/about/page.tsx` | Add real team member names, roles, IICRC cert numbers, photos |
| 17 | `[REVIEWER_NAME_1]`, `[REVIEW_TEXT_1]`, etc. | `src/app/reviews/page.tsx` | Replace with real Google Business Profile reviews |
| 18 | `[AGGREGATE ratingValue / reviewCount]` | `src/app/reviews/page.tsx` | Update with real aggregate rating once reviews are added |
| 19 | `[ARTICLE_BODY_PLACEHOLDER]` | `src/app/blog/[slug]/page.tsx` | Write real blog articles (800–1500 words each) |
| 20 | `[DATE_PLACEHOLDER]` | Privacy Policy, Terms pages | Add publication/last-updated dates |
| 21 | `[TERMS_PLACEHOLDER]` | `src/app/terms/page.tsx` | Replace entire Terms page with legally reviewed copy |
| 22 | Privacy Policy body | `src/app/privacy-policy/page.tsx` | Replace entire Privacy Policy with legally reviewed copy |

---

## External integrations (pre-launch or shortly after)

| # | Placeholder | File(s) | Resolution |
|---|-------------|---------|------------|
| 23 | `[GTM_ID]` | `src/app/layout.tsx` (commented out) | Add GTM container ID, uncomment GTM snippets |
| 24 | `[GOOGLE_SEARCH_CONSOLE_TOKEN]` | `src/app/layout.tsx` metadata | Add verification token after site is deployed |
| 25 | `[FACEBOOK_URL]` | `src/lib/config.ts` social.facebook | Confirm Facebook Business Page URL |
| 26 | `[GOOGLE_BUSINESS_URL]` | `src/lib/config.ts` social.google | Confirm Google Business Profile URL |
| 27 | `[INSTAGRAM_URL]` | `src/lib/config.ts` social.instagram | Confirm Instagram profile URL (or remove if not active) |
| 28 | `[YELP_URL]` | `src/lib/config.ts` social.yelp | Confirm Yelp business page URL (or remove if not active) |
| 29 | `[LICENSING_BODY]` | `src/app/about/page.tsx` | Name of FL licensing body that issued the contractor license |
| 30 | `[INSURANCE_CARRIER]` | `src/app/about/page.tsx` | Name of insurance carrier (or "On request" if not disclosed) |

---

## DNI (call tracking — after launch)

| # | Placeholder | File(s) | Resolution |
|---|-------------|---------|------------|
| 31 | DNI integration | `src/app/layout.tsx`, `src/components/ui/PhoneNumber.tsx` | When a call tracking platform (CallRail, WhatConverts, etc.) is chosen, wrap `<PhoneProvider>` with the tracking number. The PhoneNumber component is already DNI-ready. |

---

## Post-deploy validations (not placeholders, but required before declaring launch-ready)

- [ ] Validate all JSON-LD at https://search.google.com/test/rich-results
- [ ] Validate all JSON-LD at https://validator.schema.org
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Confirm Lighthouse mobile scores: 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- [ ] Confirm all `tel:` link clicks fire `generate_lead` dataLayer event (with GTM installed)
- [ ] Verify no hardcoded phone numbers exist outside `<PhoneNumber>` component
- [ ] Verify NAP in footer matches Google Business Profile exactly
- [ ] Replace all placeholder reviews with real reviews from Google Business Profile

---

## How to find all placeholder instances

```bash
# Find all bracketed placeholders in source files
grep -r "\[" src/ --include="*.tsx" --include="*.ts" -l

# Find specific placeholder
grep -r "\[LICENSE_NUMBER\]" src/
```
