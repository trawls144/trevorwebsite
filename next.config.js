/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['trevorrawls.com'],
  },
  async redirects() {
    return []
  },
}

module.exports = nextConfig 