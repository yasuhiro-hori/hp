import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'export',
  // basePath: '/hp',
  images: { unoptimized: true },
  // assetPrefix: '/hp',
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["src"],
  },
}

export default nextConfig
