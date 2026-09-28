"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle'

const nav = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Past Experience' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-page flex-wrap items-baseline gap-x-6 gap-y-2 px-6 py-6 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg text-strong transition-opacity hover:opacity-70"
        >
          Aiqi Zhang
        </Link>

        <nav className="ml-auto flex items-center gap-5 text-sm">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'text-fg underline underline-offset-4 decoration-line'
                    : 'text-muted transition-colors hover:text-fg'
                }
              >
                {item.label}
              </Link>
            )
          })}

          <a
            href="/files/Aiqi Zhang - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-fg"
          >
            CV
          </a>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
