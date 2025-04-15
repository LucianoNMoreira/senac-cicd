import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/output
  output: 'export',
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/distDir
  distDir: 'dist',

  // https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
  basePath: process.env.SUBPATH,
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix
  assetPrefix: process.env.SUBPATH,
};

export default nextConfig;
