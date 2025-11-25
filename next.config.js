/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for Vercel
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
