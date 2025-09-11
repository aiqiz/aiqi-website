// next.config.mjs
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // IMPORTANT: don't use providerImportSource in the App Router
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js','jsx','ts','tsx','md','mdx'],
  experimental: { mdxRs: true }, // usually default in 14+, but fine to keep
}

export default withMDX(nextConfig)
