import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    optimizeCss: true, // Added for optimized CSS
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Allow Unsplash
      },
      {
        protocol: "https",
        hostname: "images.pexels.com", // Allow Pexels
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Allow Cloudinary
      },

      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default nextConfig;
