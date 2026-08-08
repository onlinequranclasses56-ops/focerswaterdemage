import { NextResponse } from "next/server";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.force1waterdamagefl.com";
const SITEMAP = `${SITE}/sitemap.xml`;
const INDEX_NOW_KEY = "7e4f2a8b1c9d3e5f6a0b7c8d9e1f2a3b";

const URLS = [
  SITE,
  `${SITE}/contact`,
  `${SITE}/services`,
  `${SITE}/locations`,
  `${SITE}/faq`,
  `${SITE}/reviews`,
  `${SITE}/about`,
  `${SITE}/blog`,
  `${SITE}/services/water-damage-restoration`,
  `${SITE}/services/mold-remediation`,
  `${SITE}/services/storm-damage-restoration`,
  `${SITE}/services/fire-damage-restoration`,
  `${SITE}/locations/debary`,
  `${SITE}/locations/orange-city`,
  `${SITE}/services/water-damage-restoration/debary`,
  `${SITE}/services/water-damage-restoration/orange-city`,
  `${SITE}/services/mold-remediation/debary`,
  `${SITE}/services/mold-remediation/orange-city`,
  `${SITE}/services/storm-damage-restoration/debary`,
  `${SITE}/services/storm-damage-restoration/orange-city`,
  `${SITE}/services/fire-damage-restoration/debary`,
  `${SITE}/services/fire-damage-restoration/orange-city`,
  `${SITE}/blog/what-to-do-after-water-damage`,
  `${SITE}/blog/signs-of-mold-in-florida-homes`,
  `${SITE}/blog/storm-damage-insurance-claim-guide`,
];

export async function GET(request: Request) {
  /* Vercel Cron passes Authorization: Bearer <CRON_SECRET> */
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results: Record<string, unknown> = {};

  /* Sitemap pings */
  const sitemapPings = await Promise.allSettled([
    fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`, { redirect: "follow" }),
    fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`, { redirect: "follow" }),
  ]);
  results.googlePing = sitemapPings[0].status === "fulfilled" ? sitemapPings[0].value.status : "error";
  results.bingPing   = sitemapPings[1].status === "fulfilled" ? sitemapPings[1].value.status : "error";

  /* IndexNow bulk submit */
  const indexNowBody = JSON.stringify({
    host:        new URL(SITE).hostname,
    key:         INDEX_NOW_KEY,
    keyLocation: `${SITE}/${INDEX_NOW_KEY}.txt`,
    urlList:     URLS,
  });
  const indexNow = await fetch("https://api.indexnow.org/indexnow", {
    method:  "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body:    indexNowBody,
  });
  results.indexNow = indexNow.status;

  return NextResponse.json({ ok: true, urls: URLS.length, ...results });
}
