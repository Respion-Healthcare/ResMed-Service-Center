/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.resmed.com',
      },
    ],
  },
}

module.exports = nextConfig
