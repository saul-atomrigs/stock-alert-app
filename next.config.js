/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_POLYGON_API_KEY: process.env.NEXT_PUBLIC_POLYGON_API_KEY,
  },
};

module.exports = nextConfig;
