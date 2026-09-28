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
    <section className="mt-16">
      <h2 className="eyebrow">{title}</h2>
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
    <li className="py-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-serif text-base text-strong">{title}</h3>
        {time && <span className="text-sm text-faint">{time}</span>}
      </div>
      {byline && <p className="mt-0.5 text-sm text-faint">{byline}</p>}
      <p className="mt-2 max-w-measure text-sm text-muted">{description}</p>
    </li>
  )
}

function ProjectGroup({ row, showLabel }: { row: ProjectRow; showLabel: boolean }) {
  return (
    <div className="mt-6">
      {showLabel && <h3 className="text-sm text-faint">{row.label}</h3>}
      <ul className="mt-2 divide-y divide-line border-y border-line">
        {row.projects.map((p) => (
          <Entry
            key={p.title}
            title={p.title}
            time={p.time}
            byline={p.organization ?? p.supervisor}
            description={p.description}
          />
        ))}
      </ul>
    </div>
  )
}

export default function ExperiencePage() {
  const undergrad = projectRows.filter((r) => r.section === 'undergrad')
  const hackathon = projectRows.filter((r) => r.section === 'hackathon')

  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-8 sm:py-24">
      <header className="max-w-measure">
        <h1 className="text-3xl sm:text-4xl">Past Experience</h1>
      </header>

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

            const inner = (
              <>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-serif text-xl text-strong">
                    {r.title}
                    {r.detail && <span className="ml-2 text-faint">→</span>}
                  </h3>
                  <span className="text-sm text-faint">{r.time}</span>
                </div>
                {people && <p className="mt-1 text-sm text-muted">{people}</p>}
                {r.university && <p className="mt-0.5 text-sm text-faint">{r.university}</p>}
              </>
            )

            return (
              <li key={r.slug}>
                {r.detail ? (
                  <Link
                    href={r.detail}
                    className="block py-6 transition-opacity hover:opacity-70"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="py-6">{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
      </Section>

      {/* ---------------- Teaching ---------------- */}
      <Section title="Teaching Experience">
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
        {undergrad.map((row) => (
          <ProjectGroup key={row.label} row={row} showLabel={undergrad.length > 1} />
        ))}
      </Section>

      {/* ---------------- Hackathons ---------------- */}
      <Section title="Hackathons">
        {hackathon.map((row) => (
          <ProjectGroup key={row.label} row={row} showLabel={false} />
        ))}
      </Section>
    </div>
  )
}
