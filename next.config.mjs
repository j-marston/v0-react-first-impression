/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  
  // GitHub Pages用の設定
  assetPrefix: process.env.NODE_ENV === 'production' ? '/v0-react-first-impression' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/v0-react-first-impression' : '',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
