import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {},
  turbopack: {
    root: __dirname
  }
};

export default nextConfig;
