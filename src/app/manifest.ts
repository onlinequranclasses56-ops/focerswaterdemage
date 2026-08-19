import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Forces Water Damage DeBary",
    short_name: "Forces WD",
    description:
      "24/7 Water Damage, Mold, Storm & Fire Restoration in DeBary & Orange City, FL",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1B4E8C",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
