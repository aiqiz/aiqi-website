import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aiqi Zhang — Personal Site',
  description: 'Personal research and portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-bg text-fg">
        <Header />
        <main className="mx-auto max-w-4xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
