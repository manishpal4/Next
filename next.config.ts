import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
