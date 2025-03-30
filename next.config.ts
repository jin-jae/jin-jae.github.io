import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      }
    ],
    unoptimized: true,
  },
  output: 'export',
  basePath: "",
  assetPrefix: "/",
};

export default nextConfig;
