// components/ProjectKit.tsx
//
// Shared frame for every write-up page under /research/* and /projects/*.
// The exported API is deliberately stable — the archived pages in _archive/
// use the same helpers, so they can be restored without edits.
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

// ---------- Types ----------
export type ProjectMeta = {
  title: string
  subtitle?: string
  date?: string
  tags?: ReadonlyArray<string>
  supervisor?: string
}

export type FigureVariant = 'inline' | 'full' | 'left' | 'right'
export type Resource = { label: string; href: string }

export type Section = {
  id?: string
  title: string
  body?: ReactNode
  highlights?: ReadonlyArray<ReactNode>
}

export type ProjectHero = {
  src: string
  alt?: string
  heightClass?: string
  gradient?: boolean
  objectPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right'
}

export interface ProjectConfig {
  meta: {
    title: string
    subtitle?: string
    date?: string
    tags?: ReadonlyArray<string>
    supervisor?: string
  }
  sections?: ReadonlyArray<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  resources?: ReadonlyArray<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  hero?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  /** Accepted for backwards compatibility; the glassy panel was retired. */
  panel?: boolean
}

// ---------- UI atoms ----------
export function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl sm:text-4xl">{children}</h1>
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-serif text-xl text-strong">{children}</h2>
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-muted">{children}</p>
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="text-sm text-faint">{children}</span>
}

// ---------- Media helpers ----------
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
      ? 'my-8'
      : variant === 'left'
        ? 'my-6 md:float-left md:mr-6 md:max-w-[45%]'
        : variant === 'right'
          ? 'my-6 md:float-right md:ml-6 md:max-w-[45%]'
          : 'my-6'

  return (
    <figure className={`${wrapper} ${className}`}>
      <Image {...imgProps} className="w-full rounded-sm border border-line" />
      {caption && <figcaption className="mt-2 text-sm text-faint">{caption}</figcaption>}
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
    <div className="my-8 overflow-hidden rounded-sm border border-line">
      <iframe
        width="100%"
        height={height}
        src={src}
        title={title ?? 'Embedded video'}
        allowFullScreen
        className="block w-full"
      />
    </div>
  )
}

export function HtmlEmbed({ html, height = 640 }: { html: string; height?: number }) {
  const isFile = html.trim().endsWith('.html') || html.startsWith('/')

  return (
    <div className="my-8 overflow-hidden rounded-sm border border-line bg-surface">
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

// ---------- Hero ----------
const OBJECT_POSITION: Record<string, string> = {
  center: 'object-center',
  top: 'object-top',
  bottom: 'object-bottom',
  left: 'object-left',
  right: 'object-right',
}

function Hero({ src, alt = '', objectPosition = 'center' }: ProjectHero) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`mb-14 aspect-16/9 w-full rounded-sm object-cover ${
        OBJECT_POSITION[objectPosition] ?? 'object-center'
      }`}
    />
  )
}

// ---------- Detail page ----------
export function ProjectPage({ config }: { config: ProjectConfig }) {
  const { meta, sections, resources, hero } = config

  const highlights = (sections ?? []).find(
    (s) => s.title?.toLowerCase() === 'highlights' || s.highlights?.length
  )

  return (
    <article className="mx-auto max-w-page px-6 py-16 sm:px-8 sm:py-24">
      <Link href="/experience" className="text-sm text-faint transition-colors hover:text-fg">
        ← Past Experience
      </Link>

      <div className="mt-8">{hero && <Hero {...hero} />}</div>

      <header className="max-w-measure">
        <H1>{meta.title}</H1>

        {(meta.date || meta.supervisor) && (
          <p className="mt-3 text-sm text-faint">
            {[meta.date, meta.supervisor].filter(Boolean).join(' · ')}
          </p>
        )}

        {meta.subtitle && <p className="mt-5 text-lg text-muted">{meta.subtitle}</p>}

        {meta.tags?.length ? (
          <p className="mt-4 text-sm text-faint">{meta.tags.join(' · ')}</p>
        ) : null}
      </header>

      {highlights && (highlights.highlights?.length || highlights.body) ? (
        <section className="mt-12 max-w-measure border-y border-line py-6">
          <h2 className="eyebrow">{highlights.title ?? 'Highlights'}</h2>
          {highlights.highlights?.length ? (
            <ul className="mt-4 space-y-2 text-muted">
              {highlights.highlights.map((h: ReactNode, i: number) => (
                <li
                  key={i}
                  className="pl-5 -indent-5 before:mr-3 before:text-faint before:content-['–']"
                >
                  {h}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4 text-muted">{highlights.body}</div>
          )}
        </section>
      ) : null}

      {(sections ?? [])
        .filter((s) => s !== highlights)
        .map((s, idx) => (
          <section key={s.id ?? idx} className="mt-14 max-w-measure">
            <H2>{s.title}</H2>
            {typeof s.body !== 'undefined' && (
              <div className="mt-4 space-y-4 text-muted">{s.body}</div>
            )}
          </section>
        ))}

      {resources?.length ? (
        <section className="mt-16 max-w-measure border-t border-line pt-6">
          <h2 className="eyebrow">Resources</h2>
          <ul className="mt-4 space-y-2">
            {resources.map((r) => (
              <li key={r.href}>
                <a
                  href={r.href}
                  className="link"
                  target={r.href.startsWith('http') ? '_blank' : undefined}
                  rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  )
}
