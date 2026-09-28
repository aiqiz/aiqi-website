import type { Metadata } from 'next'
import Link from 'next/link'
import { research } from '@/lib/research'
import { teaching } from '@/lib/teaching'
import { projectRows } from '@/lib/projects'
import type { ProjectRow } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Past Experience',
  description:
    'Research, teaching, undergraduate projects, and hackathons.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-20 first-of-type:mt-0">
      <h2 className="font-serif text-2xl text-strong sm:text-3xl">{title}</h2>
      {children}
    </section>
  )
}

/** A plain, non-clickable entry: title + time, a byline, and a one-line summary. */
function Entry({
  title,
  time,
  byline,
  description,
}: {
  title: string
  time?: string
  byline?: string
  description: string
}) {
  return (
    <li className="py-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-serif text-xl text-strong">{title}</h3>
        {time && <span className="text-sm text-faint">{time}</span>}
      </div>
      {byline && <p className="mt-1 text-sm text-muted">{byline}</p>}
      <p className="mt-3 max-w-measure text-muted">{description}</p>
    </li>
  )
}

/** "Jan 2024 - Apr 2024" -> "2024", "Nov 2024 - Feb 2025" -> "2024–25". */
function yearOf(time?: string) {
  const years = [...new Set(time?.match(/\d{4}/g) ?? [])]
  if (years.length === 0) return undefined
  if (years.length === 1) return years[0]
  return `${years[0]}–${years[years.length - 1].slice(2)}`
}

type Card = { title: string; meta?: string; description: string }

function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {cards.map((c) => (
        <li key={c.title} className="rounded-md border border-line p-4 sm:last:odd:col-span-2">
          <h3 className="font-serif text-base leading-snug text-strong">{c.title}</h3>
          {c.meta && <p className="mt-1 text-xs text-faint">{c.meta}</p>}
          <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
        </li>
      ))}
    </ul>
  )
}

function toCards(rows: ProjectRow[], showGroup: boolean): Card[] {
  return rows.flatMap((row) =>
    row.projects.map((p) => {
      const year = yearOf(p.time)
      const org = p.organization
      const meta = [
        showGroup ? row.label : org,
        // skip the year if the organisation name already contains it
        org && year && org.includes(year) && !showGroup ? undefined : year,
      ]
        .filter(Boolean)
        .join(' · ')
      return { title: p.title, meta, description: p.description }
    })
  )
}

export default function ExperiencePage() {
  const undergrad = projectRows.filter((r) => r.section === 'undergrad')
  const hackathon = projectRows.filter((r) => r.section === 'hackathon')

  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-8 sm:py-24">
      <h1 className="sr-only">Past Experience</h1>

      {/* ---------------- Research (click in for details) ---------------- */}
      <Section title="Research">
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {research.map((r) => {
            const people = [
              r.supervisor && `Supervisor: ${r.supervisor}`,
              r.collaborators?.length && `Collaborators: ${r.collaborators.join(', ')}`,
            ]
              .filter(Boolean)
              .join(' · ')
            const o = r.outcome
            const external = o?.href && !o.href.startsWith('/')

            return (
              <li key={r.slug} className="py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-serif text-xl text-strong">{r.title}</h3>
                  <span className="text-sm text-faint">{r.time}</span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {people && <span>{people}</span>}
                  {people && r.university && ' · '}
                  {r.university}
                </p>
                <p className="mt-3 max-w-measure text-muted">{r.description}</p>
                {o && (
                  <p className="mt-2 text-sm text-muted">
                    <span className="text-faint">Outcome: </span>
                    {o.text}
                    {o.href && o.linkText && (
                      <>
                        {' '}
                        {external ? (
                          <a href={o.href} target="_blank" rel="noopener noreferrer" className="link">
                            {o.linkText}
                          </a>
                        ) : (
                          <Link href={o.href} className="link">
                            {o.linkText}
                          </Link>
                        )}
                      </>
                    )}
                  </p>
                )}
              </li>
            )
          })}
        </ul>
      </Section>

      {/* ---------------- Teaching ---------------- */}
      <Section title="Teaching">
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {teaching.map((t) => (
            <Entry
              key={t.role}
              title={t.role}
              time={t.time}
              byline={t.organization}
              description={t.description}
            />
          ))}
        </ul>
      </Section>

      {/* ---------------- Undergraduate projects ---------------- */}
      <Section title="Undergraduate Projects">
        <CardGrid cards={toCards(undergrad, true)} />
      </Section>

      {/* ---------------- Hackathons ---------------- */}
      <Section title="Hackathons">
        <CardGrid cards={toCards(hackathon, false)} />
      </Section>
    </div>
  )
}
