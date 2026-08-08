#!/usr/bin/env node
/**
 * force-index.mjs — Force fast indexing of all site pages
 * Run after every deploy: node scripts/force-index.mjs
 *
 * Does four things automatically:
 *  1. Pings Google with the sitemap URL
 *  2. Pings Bing with the sitemap URL
 *  3. Bulk-submits all 25 URLs to IndexNow (Bing, Yandex, DuckDuckGo)
 *  4. Prints priority URL list for manual GSC "Request Indexing"
 */

const SITE    = "https://www.force1waterdamagefl.com";
const SITEMAP = `${SITE}/sitemap.xml`;
const INDEX_NOW_KEY = "7e4f2a8b1c9d3e5f6a0b7c8d9e1f2a3b";

/* ── All URLs (must match sitemap.ts exactly) ── */
const URLS = [
  /* Core — highest priority */
  SITE,
  `${SITE}/contact`,
  `${SITE}/services`,
  `${SITE}/locations`,
  `${SITE}/faq`,
  `${SITE}/reviews`,
  `${SITE}/about`,
  `${SITE}/blog`,
  /* Service pages */
  `${SITE}/services/water-damage-restoration`,
  `${SITE}/services/mold-remediation`,
  `${SITE}/services/storm-damage-restoration`,
  `${SITE}/services/fire-damage-restoration`,
  /* City pages */
  `${SITE}/locations/debary`,
  `${SITE}/locations/orange-city`,
  /* Service × city combo pages (highest-intent) */
  `${SITE}/services/water-damage-restoration/debary`,
  `${SITE}/services/water-damage-restoration/orange-city`,
  `${SITE}/services/mold-remediation/debary`,
  `${SITE}/services/mold-remediation/orange-city`,
  `${SITE}/services/storm-damage-restoration/debary`,
  `${SITE}/services/storm-damage-restoration/orange-city`,
  `${SITE}/services/fire-damage-restoration/debary`,
  `${SITE}/services/fire-damage-restoration/orange-city`,
  /* Blog posts */
  `${SITE}/blog/what-to-do-after-water-damage`,
  `${SITE}/blog/signs-of-mold-in-florida-homes`,
  `${SITE}/blog/storm-damage-insurance-claim-guide`,
];

/* ── Step 1 & 2: Sitemap pings ── */
async function pingSitemaps() {
  const targets = [
    { name: "Google", url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}` },
    { name: "Bing",   url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP)}` },
  ];
  for (const { name, url } of targets) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      console.log(`  ✓ ${name} sitemap ping → ${res.status}`);
    } catch (err) {
      console.warn(`  ✗ ${name} sitemap ping failed: ${err.message}`);
    }
  }
}

/* ── Step 3: IndexNow bulk submit ── */
async function submitIndexNow() {
  const body = {
    host:        new URL(SITE).hostname,
    key:         INDEX_NOW_KEY,
    keyLocation: `${SITE}/${INDEX_NOW_KEY}.txt`,
    urlList:     URLS,
  };
  const endpoints = [
    { name: "IndexNow API", url: "https://api.indexnow.org/indexnow" },
    { name: "Bing IndexNow", url: "https://www.bing.com/indexnow" },
  ];
  for (const { name, url } of endpoints) {
    try {
      const res = await fetch(url, {
        method:  "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body:    JSON.stringify(body),
      });
      console.log(`  ✓ ${name} → ${res.status} (${URLS.length} URLs submitted)`);
    } catch (err) {
      console.warn(`  ✗ ${name} failed: ${err.message}`);
    }
  }
}

/* ── Step 4: Manual GSC priority list ── */
function printGSCInstructions() {
  const priority = [
    SITE,
    `${SITE}/services/water-damage-restoration/debary`,
    `${SITE}/services/water-damage-restoration/orange-city`,
    `${SITE}/services/mold-remediation/debary`,
    `${SITE}/services/mold-remediation/orange-city`,
    `${SITE}/services/storm-damage-restoration/debary`,
    `${SITE}/services/fire-damage-restoration/debary`,
    `${SITE}/locations/debary`,
    `${SITE}/locations/orange-city`,
    `${SITE}/contact`,
  ];
  console.log("\n  Manual GSC → URL Inspection → Request Indexing (priority order):");
  priority.forEach((url, i) => console.log(`    ${String(i + 1).padStart(2, " ")}. ${url}`));
  console.log(`\n  Sitemap URL to submit in GSC → Sitemaps:\n    ${SITEMAP}`);
}

/* ── Main ── */
async function main() {
  console.log(`\n━━━ Force-indexing ${URLS.length} pages for ${SITE} ━━━\n`);

  console.log("① Sitemap pings (Google + Bing)");
  await pingSitemaps();

  console.log("\n② IndexNow bulk submit (Bing · Yandex · DuckDuckGo)");
  await submitIndexNow();

  console.log("\n③ Google Indexing API");
  console.log("  Run: node scripts/google-indexing-api.mjs");
  console.log("  (Requires a Google Service Account — see that file for setup)");

  console.log("\n④ Google Search Console — manual steps");
  printGSCInstructions();

  console.log("\n✓ Done. Monitor coverage in GSC → Indexing → Pages (allow 24–72 h).\n");
}

main().catch(console.error);
