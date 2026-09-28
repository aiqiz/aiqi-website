import Link from 'next/link'
import { publications, me } from '@/lib/publications'

export default function Home() {
  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-8 sm:py-24">
      <section className="max-w-measure">
        <h1 className="text-3xl sm:text-4xl">Aiqi Zhang</h1>

        {/* 1–2 sentence intro */}
        <p className="mt-6 text-muted">
          I&rsquo;m an Engineering Science graduate from the University of Toronto working on
          atmospheric and carbon cycle modelling, remote sensing, and data-driven experimental
          physics.
        </p>

        <p className="mt-6 text-sm text-muted">
          More in{' '}
          <Link href="/about" className="link">
            about
          </Link>
          ,{' '}
          <Link href="/experience" className="link">
            past experience
          </Link>
          , and my{' '}
          <a
            href="/files/Aiqi Zhang - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            CV
          </a>
          .
        </p>
      </section>

      <section className="mt-20">
        <h2 className="eyebrow">Publications</h2>
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {publications.map((p) => (
            <li key={p.title} className="py-5">
              <p className="font-serif text-lg text-strong">{p.title}</p>
              <p className="mt-1.5 text-sm text-muted">
                {p.authors.map((a, i) => (
                  <span key={a}>
                    {i > 0 && ', '}
                    {a === me ? <strong className="font-semibold text-fg">{a}</strong> : a}
                  </span>
                ))}
              </p>
              <p className="mt-1 text-sm text-faint">
                <em>{p.venue}</em>, {p.year}
                {p.status && <> · {p.status}</>}
                {p.links?.map((l) => (
                  <span key={l.href}>
                    {' · '}
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="link">
                      {l.label}
                    </a>
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
