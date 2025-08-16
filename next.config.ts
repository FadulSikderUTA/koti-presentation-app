import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/presentation-app',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
