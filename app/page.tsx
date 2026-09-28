import Image from 'next/image'
import Link from 'next/link'
import { publications, me } from '@/lib/publications'

export default function Home() {
  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-8 sm:py-24">
      <section className="grid items-start gap-10 md:grid-cols-[1fr_15rem] md:gap-16">
        <Image
          src="/figures/about/me3-portrait.jpg"
          alt="Aiqi Zhang"
          width={768}
          height={960}
          quality={95}
          priority
          sizes="(min-width: 768px) 15rem, 11rem"
          className="aspect-4/5 w-48 rounded-2xl bg-surface object-cover shadow-sm ring-1 ring-line md:order-last md:w-full"
        />
        <div className="max-w-measure">
        <h1 className="sr-only">Aiqi Zhang</h1>

        {/* Intro */}
        <div className="space-y-4 text-muted">
          <p className="text-lg leading-relaxed text-fg">
            I&rsquo;m a Master&rsquo;s student in{' '}
            <a
              href="https://ce.berkeley.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Civil and Environmental Engineering
            </a>{' '}
            at UC Berkeley, advised by{' '}
            <a
              href="https://apte.berkeley.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Prof. Josh Apte
            </a>
            .
          </p>
          <p>
            I completed my BASc in{' '}
            <a
              href="https://engsci.utoronto.ca/program/majors/engineering-physics/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Engineering Science (Engineering Physics)
            </a>{' '}
            with a minor in Artificial Intelligence Engineering at the University of Toronto. From summer 2025 to summer 2026, I worked in the Carbon Cycle Physics Group
            with{' '}
            <a
              href="https://wunch-group.physics.utoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Prof. Debra Wunch
            </a>{' '}
            and Dr. Natalia Restrepo-Coupe. I was also a part-time lab technician in the Advanced
            Undergraduate Physics Laboratory, supervised by{' '}
            <a
              href="https://discover.research.utoronto.ca/33371-ania-harlick"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Prof. Ania Harlick
            </a>
            .
          </p>
          <p>
            My research interests lie in physics-informed computational modeling of the atmosphere
            and Earth system, integrating ground-based observations, remote sensing, and machine
            learning to understand environmental processes across scales.
          </p>
        </div>

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
        </div>
      </section>

      <section id="publications" className="mt-20 scroll-mt-10">
        <h2 className="font-serif text-2xl text-strong sm:text-3xl">Publications</h2>
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {publications.map((p) => (
            <li key={p.title} className="py-5">
              <p className="font-serif text-lg text-strong">{p.title}</p>
              <p className="mt-1.5 text-sm text-muted">
                {p.authors.map((a, i) => {
                  const last = i === p.authors.length - 1
                  const sep =
                    i === 0 ? '' : last && a !== 'et al.' ? ', and ' : ', '
                  return (
                    <span key={a}>
                      {sep}
                      {a === me ? <strong className="font-semibold text-fg">{a}</strong> : a}
                    </span>
                  )
                })}
              </p>
              <p className="mt-1 text-sm text-faint">
                {[
                  // 1. journal: the actual venue, or the one it will be submitted to
                  (p.venue || p.target) &&
                    ((p.venueUrl ?? p.target?.href) ? (
                      <a
                        key="v"
                        href={p.venueUrl ?? p.target?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link italic"
                      >
                        {p.venue ?? p.target?.name}
                      </a>
                    ) : (
                      <em key="v">{p.venue ?? p.target?.name}</em>
                    )),
                  p.year,
                  // 2. status
                  p.status && (
                    <span key="s">
                      {p.status}
                      {!p.venue && p.target && ', to be submitted'}
                    </span>
                  ),
                ]
                  .filter(Boolean)
                  .map((part, i) => (
                    <span key={i}>
                      {i > 0 && ' · '}
                      {part}
                    </span>
                  ))}
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
