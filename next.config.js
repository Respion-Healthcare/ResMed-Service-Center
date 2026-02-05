/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔴 Disable Turbopack (prevents panic crashes on Windows)
  experimental: {
    turbo: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mlbdoiypvhyg.i.optimole.com',
      },
      {
        protocol: 'https',
        hostname: 'resmedservicecenter.com',
      },
    ],
  },
};

module.exports = nextConfig;
