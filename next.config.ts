import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  trailingSlash: false,

  /*
   * 301 redirect map for any prior-site URLs.
   * Add entries here when migrating from an old site so backlinks don't 404.
   * Example:
   *   { source: '/water-damage', destination: '/services/water-damage-restoration', permanent: true },
   */
  async redirects() {
    return [];
  },
};

export default nextConfig;
