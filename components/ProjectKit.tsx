// components/ProjectKit.tsx
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import ProjectCard from '@/components/ProjectCard'
import type { ProjectRow } from '@/lib/projects'

// ---------- Types (aligned to ResearchKit) ----------
export type ProjectMeta = {
  title: string
  subtitle?: string
  date?: string // YYYY-MM-DD
  tags?: string[]
  supervisor?: string
}

export type FigureVariant = 'inline' | 'full' | 'left' | 'right'
export type Resource = { label: string; href: string }

export type Section = {
  id?: string
  title: string
  body?: ReactNode
  highlights?: string[]
}

export type ProjectHero = {
  src: string
  alt?: string
  heightClass?: string   // e.g. 'h-[40vh] md:h-[56vh]'
  gradient?: boolean     // add dark-to-transparent gradient
  objectPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right'
}

export interface ProjectConfig {
  meta: {
    title: string;
    subtitle?: string;
    date?: string;
    tags: ReadonlyArray<string>;
    supervisor?: string
  };
  sections?: ReadonlyArray<any>;
  resources?: ReadonlyArray<any>;
  hero?: any; 
  panel?: boolean;
}

// ---------- Shared body class ----------
const BODY_CLS = 'text-base md:text-lg leading-relaxed';

// ---------- UI atoms (same classes as ResearchKit) ----------
export function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{children}</h1>
}
export function H2({ children }: { children: ReactNode }) {
  // Reduced from text-xl/md:text-2xl → text-lg/md:text-xl and tightened margins
  return <h2 className="text-3xl md:text-2xl font-semibold mt-0 mb-2 tracking-tight">{children}</h2>
}
export function P({ children }: { children: ReactNode }) {
  return <p className={BODY_CLS}>{children}</p>
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800 text-gray-900 bg-grey shadow-sm">
      {children}
    </span>
  )
}

// ---------- Media helpers (identical to ResearchKit) ----------
export function Figure({
  variant = 'inline',
  caption,
  className = '',
  ...imgProps
}: {
  variant?: FigureVariant
  caption?: ReactNode
  className?: string
} & Omit<ImageProps, 'className'>) {
  const wrapper =
    variant === 'full'
      ? 'my-6'
      : variant === 'left'
      ? 'my-4 md:float-left md:mr-4 md:max-w-[45%]'
      : variant === 'right'
      ? 'my-4 md:float-right md:ml-4 md:max-w-[45%]'
      : 'my-4' // inline

  return (
    <figure className={`${wrapper} ${className}`}>
      <Image {...imgProps} className={`rounded-xl shadow ${className}`} />
      {caption && (
        <figcaption className={`mt-2 ${BODY_CLS} opacity-80`}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function ClearFloats() {
  return <div className="clear-both" />
}

export function VideoEmbed({
  src,
  title,
  height = 420,
}: {
  src: string
  title?: string
  height?: number
}) {
  return (
    <div className="my-6">
      <iframe
        width="100%"
        height={height}
        src={src}
        title={title ?? 'Embedded video'}
        allowFullScreen
        className="rounded-xl shadow"
      />
    </div>
  )
}

export function HtmlEmbed({ html, height = 640 }: { html: string; height?: number }) {
  const isFile = html.trim().endsWith('.html') || html.startsWith('/')

  return (
    <div className="my-6 rounded-xl shadow overflow-hidden border">
      <iframe
        {...(isFile ? { src: html } : { srcDoc: html })}
        title="Embedded HTML"
        className="w-full"
        style={{ height }}
        sandbox="allow-scripts allow-forms allow-pointer-lock allow-same-origin"
      />
    </div>
  )
}

// ---------- Hero (identical to ResearchKit) ----------
function ProjectHero({
  src,
  alt = '',
  heightClass = 'h-[28vh] md:h-[36vh]',  // was 40vh/56vh
  gradient = true,
  objectPosition = 'center',
}: ProjectHero) {
  return (
    <header className={`relative ${heightClass} w-full overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover object-${objectPosition}`}
      />
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      )}
    </header>
  )
}

// ---------- Row scroller (label as inner subtitle, cards below) ----------
function RowBlock({ label, description, children, color }: { 
  label: string; 
  description?: string; 
  children: ReactNode; 
  color: string 
}) {
  return (
    <section className="mb-8">
      <div className="rounded-2xl border border-black/10 p-3 md:p-4" style={{ background: color }}>
        <div className="mb-3">
          <p className="text-lg md:text-xl font-semibold text-gray-800">{label}</p>
          {description && (
            <p className="text-sm md:text-base text-gray-600 mt-1">{description}</p>
          )}
        </div>
        <div className="-mx-2 overflow-x-auto pb-2 scrollbar-thin">
          <div className="mx-2 flex gap-4 snap-x snap-mandatory items-stretch">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProjectRowsHScroll({ rows }: { rows: ProjectRow[] }) {
  // soft tints per row label (fallback provided)
  const palette: Record<string, string> = {
    'advanced physics lab': '#EEF5FF',
    'engineering design': '#ecfdeeff',
    "hackathon": '#FFF7E6',
  }
  return (
    <div className="space-y-10">
      {rows.map((row) => (
        <RowBlock
          key={row.label}
          label={row.label}
          description={row.description}   // smaller by design
          color={palette[row.label.toLowerCase()] ?? '#F8FAFC'}
        >
          {row.projects.map((p) => (
            <ProjectCard key={`${row.label}-${p.slug}`} project={p} />
          ))}
        </RowBlock>
      ))}
    </div>
  )
}

// ---------- Detail page (same frame as ResearchKit; optional for /projects/[slug]) ----------
export function ProjectPage({ config }: { config: ProjectConfig }) {
  const { meta, sections, resources, hero, panel } = config
  const highlights = (sections ?? []).find(
    (s) => s.title.toLowerCase() === 'highlights' || s.highlights?.length
  )

  return (
    <main className={`mx-auto ${hero ? 'pt-0' : 'py-10'} text-gray-800`}>
      {/* Hero (optional) */}
      {hero && <ProjectHero {...hero} />}

      {/* Content container; overlap hero if present */}
      <div
        className={`mx-auto w-full px-5 md:px-8 ${hero ? '-mt-36 md:-mt-52 relative z-10' : ''}`}
      >
        {/* Optional glassy panel */}
        <div
          className={
            panel
              ? 'rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-lg'
              : ''
          }
        >
          {/* Title block */}
          <header className="mb-8">
            <H1>{meta.title}</H1>
            <div className="mt-3 flex items-center text-base text-gray-800">
              <span >Supervisor:</span>&nbsp;{meta.supervisor}
            </div>
            {meta.subtitle && (
              // Subtitle uses body sizing but with lower opacity for hierarchy
              <p className={`mt-2 ${BODY_CLS} opacity-80`}>{meta.subtitle}</p>
            )}
            {(meta.date || meta.tags?.length) && (
              <div className="mt-3 flex justify-between items-center text-sm">
                {meta.date && <span className="opacity-100">{meta.date}</span>}
                {meta.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {meta.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800 text-gray-900 bg-grey shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </header>

          {/* Highlights callout */}
          {highlights && (highlights.highlights?.length || highlights.body) && (
            <section className="mb-8 rounded-2xl border p-4 md:p-5 bg-white/50">
              <H2>{highlights.title}</H2>
              {highlights.highlights?.length ? (
                <ul className={`list-disc ml-5 space-y-1 mt-2 ${BODY_CLS}`}>
                  {highlights.highlights.map((h: string, i: number) => (
                    <li key={i} className="">
                      {h}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-2">
                  <P>{highlights.body}</P>
                </div>
              )}
            </section>
          )}

          {/* Sections (excluding highlights) */}
          {(sections ?? [])
            .filter((s) => s !== highlights)
            .map((s, idx) => (
              <section key={s.id ?? idx} className="mb-10">
                <H2>{s.title}</H2>
                {typeof s.body !== 'undefined' && (
                  <div className={`mt-2 space-y-4 ${BODY_CLS}`}>{s.body}</div>
                )}
              </section>
            ))}

          {/* Resources */}
          {resources?.length ? (
            <section className="mt-10 border-t pt-6">
              <H2>Resources</H2>
              <ul className={`mt-2 space-y-1 ${BODY_CLS}`}>
                {resources.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      className="underline underline-offset-4 hover:opacity-80"
                      target={r.href.startsWith('http') ? '_blank' : undefined}
                    >
                      {r.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  )
}
