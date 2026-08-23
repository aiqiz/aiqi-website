import Link from 'next/link'

const links = [
  { href: 'mailto:aiqiangela.zhang@mail.utoronto.ca', label: 'Email' },
  { href: 'https://www.linkedin.com/in/aiqi-zhang-3821b92aa/', label: 'LinkedIn' },
  { href: 'https://github.com/aiqiz', label: 'GitHub' },
  {
    href: 'https://devpost.com/zaqangela804?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
    label: 'Devpost',
  },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-page flex-wrap items-baseline justify-between gap-x-6 gap-y-3 px-6 py-8 text-sm text-faint sm:px-8">
        <p>© {new Date().getFullYear()} Aiqi Zhang</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="transition-colors hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
