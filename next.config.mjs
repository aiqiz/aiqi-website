// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // /work became /experience (Sep 2026). Project write-ups were retired.
      { source: '/work', destination: '/experience', permanent: false },
      { source: '/research', destination: '/experience', permanent: false },
      { source: '/projects', destination: '/experience', permanent: false },
      { source: '/projects/:slug', destination: '/experience', permanent: false },
    ]
  },
}

export default nextConfig
