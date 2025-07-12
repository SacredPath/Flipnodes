/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental appDir as it's now stable in Next.js 14
  images: {
    domains: ['localhost'],
  },
  // Add output configuration for Vercel
  output: 'standalone',
  // Ensure proper TypeScript handling
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ensure proper ESLint handling
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig 