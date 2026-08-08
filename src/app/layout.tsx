import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { PhoneProvider } from "@/components/ui/PhoneNumber";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { WebSiteSchema } from "@/components/schema/WebSiteSchema";
import { BUSINESS } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} — 24/7 Restoration in DeBary & Orange City, FL`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Force1 Restoration provides 24/7 water damage restoration, mold remediation, storm damage restoration, and fire damage restoration in DeBary and Orange City, FL. IICRC Certified. Call (864) 734-5702.",
  metadataBase: new URL(BUSINESS.siteUrl),
  alternates: { canonical: BUSINESS.siteUrl },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
    other: [{ rel: "mask-icon", url: "/favicon.ico" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Force1 Restoration — 24/7 Water Damage, Mold, Storm & Fire Restoration in DeBary & Orange City, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} — 24/7 Restoration in DeBary & Orange City, FL`,
    description:
      "Force1 Restoration: IICRC-certified water damage, mold, storm & fire restoration in DeBary and Orange City, FL. 24/7 emergency response. Call (864) 734-5702.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "F7Vvdi2Fi1vZ_vlxD-ZN9kgb4AcrpcpbGHdxfGyGqHo",
  },
  /*
   * TODO: Add GTM_ID and uncomment GTM snippets in <head> and <body> below.
   */
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        {/*
          GTM head snippet — UNCOMMENT and replace [GTM_ID] before launch.
          <script dangerouslySetInnerHTML={{ __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','[GTM_ID]');
          ` }} />
        */}
        <LocalBusinessSchema pageUrl={BUSINESS.siteUrl} />
        <WebSiteSchema />
      </head>
      <body className="min-h-full flex flex-col bg-white text-ink font-sans">
        {/*
          GTM noscript — UNCOMMENT and replace [GTM_ID] before launch.
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=[GTM_ID]"
              height="0" width="0" style={{display:"none",visibility:"hidden"}} />
          </noscript>
        */}
        <PhoneProvider>
          {/* pt accounts for the fixed header height (16 mobile / 20 desktop) */}
          {/* pb-16 md:pb-0 accounts for the mobile sticky bottom call bar */}
          <div className="flex flex-col min-h-screen">
            <Header />
            <main
              id="main-content"
              className="flex-1 pt-16 md:pt-20 pb-16 md:pb-0"
            >
              {children}
            </main>
            <Footer />
          </div>
        </PhoneProvider>
      </body>
    </html>
  );
}
