const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  rewrites: async () => ({
    beforeFiles: [
      { source: '/ingest/static/:path*', destination: 'https://us-assets.posthog.com/static/:path*' },
      { source: '/ingest/:path*', destination: 'https://us.posthog.com/:path*' },
    ],
  }),
  webpack: (config) => {
    // Force all remotion imports to use the root version, avoiding
    // conflicts with video/node_modules/remotion (different version).
    config.resolve.alias = {
      ...config.resolve.alias,
      remotion: path.resolve(__dirname, 'node_modules/remotion'),
    }
    return config
  },
}

module.exports = nextConfig

