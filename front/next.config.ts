import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["src"],
  },
}

export default nextConfig
