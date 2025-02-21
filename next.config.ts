import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint errors from breaking the build
  },
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "upload.wikimedia.org",
      "example.com", // Add more domains as needed
      "another-image-source.com",
      "banner2.cleanpng.com",
      
    ],
  },
};

export default nextConfig;
