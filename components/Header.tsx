'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-bg/80 backdrop-blur ${scrolled ? 'border-b border-black/10' : ''}`}>
      <div className="mx-auto max-w-4xl px-4 py-5 flex items-center justify-between">
        <Link href="/" className="font-bold text-3xl !text-3xl">Aiqi Zhang</Link>

        <nav className="flex items-center gap-6 text-lg">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/research" className="hover:underline">Research</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
            CV
          </Link>
        </nav>
      </div>
    </header>
  )
}
