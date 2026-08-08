#!/usr/bin/env node
/**
 * google-indexing-api.mjs — Submit all pages to Google via the Indexing API
 *
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  ONE-TIME SETUP (takes ~5 minutes)                                   │
 * │                                                                       │
 * │  1. Go to https://console.cloud.google.com → New Project            │
 * │  2. APIs & Services → Enable "Web Search Indexing API"              │
 * │  3. IAM & Admin → Service Accounts → Create Service Account        │
 * │     Name it anything, e.g. "gsc-indexing"                           │
 * │  4. On the service account → Keys → Add Key → JSON → Download      │
 * │     Save the file as:  scripts/service-account.json                 │
 * │     (this file is in .gitignore — never commit it)                 │
 * │  5. In Google Search Console → Settings → Users and permissions     │
 * │     → Add user → paste the service account email                    │
 * │     (looks like: gsc-indexing@your-project.iam.gserviceaccount.com)│
 * │     → Permission: Owner                                              │
 * │  6. Run: node scripts/google-indexing-api.mjs                       │
 * └─────────────────────────────────────────────────────────────────────┘
 *
 * Uses the Google Auth Library (no googleapis package needed):
 *   npm install google-auth-library
 */

import { readFileSync, existsSync } from "fs";
import { createSign } from "crypto";

const SITE = "https://www.force1waterdamagefl.com";
const KEY_FILE = new URL("./service-account.json", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const API_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish";

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

/* ── Minimal JWT implementation (no external deps) ── */
function base64url(str) {
  return Buffer.from(str).toString("base64url");
}

function makeJWT(serviceAccount) {
  const now   = Math.floor(Date.now() / 1000);
  const header  = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64url(JSON.stringify({
    iss:   serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud:   "https://oauth2.googleapis.com/token",
    exp:   now + 3600,
    iat:   now,
  }));
  const sign    = createSign("RSA-SHA256");
  sign.update(`${header}.${payload}`);
  const sig = sign.sign(serviceAccount.private_key, "base64url");
  return `${header}.${payload}.${sig}`;
}

async function getAccessToken(serviceAccount) {
  const jwt = makeJWT(serviceAccount);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method:  "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:    new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion:  jwt,
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function submitURL(url, token) {
  const res = await fetch(API_URL, {
    method:  "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });
  return res.status;
}

async function main() {
  if (!existsSync(KEY_FILE)) {
    console.error("\n✗ Service account key not found.");
    console.error("  Expected: scripts/service-account.json");
    console.error("  See setup instructions at the top of this file.\n");
    process.exit(1);
  }

  const serviceAccount = JSON.parse(readFileSync(KEY_FILE, "utf8"));
  console.log(`\n━━━ Google Indexing API — ${URLS.length} URLs ━━━\n`);
  console.log(`  Service account: ${serviceAccount.client_email}`);

  let token;
  try {
    token = await getAccessToken(serviceAccount);
    console.log("  ✓ Access token acquired\n");
  } catch (err) {
    console.error(`  ✗ Auth failed: ${err.message}`);
    process.exit(1);
  }

  let ok = 0, fail = 0;
  for (const url of URLS) {
    await new Promise(r => setTimeout(r, 200)); /* rate-limit: 200 ms between requests */
    try {
      const status = await submitURL(url, token);
      if (status === 200) {
        console.log(`  ✓ ${status}  ${url}`);
        ok++;
      } else {
        console.warn(`  ✗ ${status}  ${url}`);
        fail++;
      }
    } catch (err) {
      console.warn(`  ✗ error  ${url}  — ${err.message}`);
      fail++;
    }
  }

  console.log(`\n✓ Done: ${ok} submitted, ${fail} failed.\n`);
  if (ok > 0) console.log("  Monitor: https://search.google.com/search-console → Indexing → Pages\n");
}

main().catch(console.error);
