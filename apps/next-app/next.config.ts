import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['ui', 'typescript-config', 'eslint-config'],
};

export default nextConfig;
