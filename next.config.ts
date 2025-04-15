import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // distDir: 'dist',
  basePath: process.env.SUBPATH || '/',
  assetPrefix: process.env.SUBPATH || '/',
};

export default nextConfig;
