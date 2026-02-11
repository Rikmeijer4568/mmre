const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/rent-in',
        destination: '/services/home-finding',
        permanent: true,
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
