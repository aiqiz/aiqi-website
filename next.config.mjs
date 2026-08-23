// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // /research and /projects merged into /work in the Aug 2026 redesign.
      { source: '/research', destination: '/work', permanent: false },
      { source: '/projects', destination: '/work', permanent: false },
    ]
  },
}

export default nextConfig
