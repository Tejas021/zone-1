import type { NextConfig } from "next";

const BLOG_URL = process.env.BLOG_URL || "http://localhost:3004";
console.log("BLOG_URL", BLOG_URL, "no");
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path+",
        destination: `${BLOG_URL}/blog/:path+`,
      },
      {
        source: "/blog-static/:path+",
        destination: `${BLOG_URL}/blog-static/:path+`,
      },
    ];
  },
};

export default nextConfig;
