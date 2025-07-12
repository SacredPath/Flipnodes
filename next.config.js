/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental appDir as it's now stable in Next.js 14
  images: {
    domains: ['localhost'],
  },
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