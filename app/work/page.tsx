import type { Metadata } from 'next'
import Link from 'next/link'
import { research } from '@/lib/research'
import { projectRows } from '@/lib/projects'
import type { Project } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Research in atmospheric physics and computer vision, plus engineering design projects, physics lab experiments, and hackathon builds.',
}

function Links({ project }: { project: Project }) {
  const items = [
    project.detail && { href: project.detail, label: 'Write-up', external: false },
    project.link && { href: project.link, label: 'Devpost', external: true },
    project.github && { href: project.github, label: 'GitHub', external: true },
  ].filter(Boolean) as { href: string; label: string; external: boolean }[]

  if (items.length === 0) return null

  return (
    <span className="flex flex-wrap gap-x-4">
      {items.map((i) => (
        <Link
          key={i.label}
          href={i.href}
          target={i.external ? '_blank' : undefined}
          rel={i.external ? 'noopener noreferrer' : undefined}
          className="link text-sm"
        >
          {i.label}
        </Link>
      ))}
    </span>
  )
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-8 sm:py-24">
      <header className="max-w-measure">
        <h1 className="text-3xl sm:text-4xl">Work</h1>
        <p className="mt-4 text-muted">
          Research first, then the coursework projects, lab experiments, and hackathon builds
          behind it. A few entries have full write-ups; the rest are summarised here.
        </p>
      </header>

      {/* ---------------- Research ---------------- */}
      <section className="mt-16">
        <h2 className="eyebrow">Research</h2>

        <div className="mt-6 divide-y divide-line border-y border-line">
          {research.map((r) => (
            <article key={r.slug} className="py-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-serif text-xl">{r.title}</h3>
                <span className="text-sm text-faint">{r.time}</span>
              </div>

              {(r.university || r.supervisor) && (
                <p className="mt-1 text-sm text-faint">
                  {[r.university, r.supervisor].filter(Boolean).join(' · ')}
                </p>
              )}

              <p className="mt-3 max-w-measure text-muted">{r.description}</p>

              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <p className="text-sm text-faint">{r.tags.join(' · ')}</p>
                {r.detail && (
                  <Link href={r.detail} className="link text-sm">
                    Read the write-up
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Everything else ---------------- */}
      {projectRows.map((row) => (
        <section key={row.label} className="mt-16">
          <h2 className="eyebrow">{row.label}</h2>
          {row.description && (
            <p className="mt-3 max-w-measure text-sm text-muted">{row.description}</p>
          )}

          <ul className="mt-6 divide-y divide-line border-y border-line">
            {row.projects.map((p) => (
              <li key={p.title} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-serif text-base text-strong">{p.title}</h3>
                  <span className="text-sm text-faint">{p.time}</span>
                </div>

                {(p.organization || p.supervisor) && (
                  <p className="mt-0.5 text-sm text-faint">{p.organization ?? p.supervisor}</p>
                )}

                <p className="mt-2 max-w-measure text-sm text-muted">{p.description}</p>

                <div className="mt-2">
                  <Links project={p} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
