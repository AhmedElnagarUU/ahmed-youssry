import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'image.thum.io',
      },
      {
        protocol: 'https',
        hostname: 'qemat-alrafeat.com',
      },
      {
        protocol: 'https',
        hostname: 'evoluxury.co',
      },
      {
        protocol: 'https',
        hostname: 'ahmedelnagaruu.github.io',
      },
    ],
  },
};

export default nextConfig;
