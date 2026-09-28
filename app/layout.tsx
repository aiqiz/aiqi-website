import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://aiqizhang.org'),
  title: {
    default: 'Aiqi Zhang',
    template: '%s – Aiqi Zhang',
  },
  description:
    'M.S. student in Civil and Environmental Engineering at UC Berkeley, working on atmospheric and Earth system modeling, air quality, and remote sensing.',
}

// Runs before paint so the correct theme is on <html> and there is no flash.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme')
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', dark)
  } catch (e) {}
})()
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
