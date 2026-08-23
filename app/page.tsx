import Image from 'next/image'
import Link from 'next/link'
import { research } from '@/lib/research'

export default function Home() {
  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-8 sm:py-24">
      <section className="max-w-measure">
        <Image
          src="/figures/about/me.JPG"
          alt="Aiqi Zhang"
          width={800}
          height={800}
          priority
          className="mb-10 h-24 w-24 rounded-full object-cover grayscale-[15%]"
        />

        <h1 className="text-3xl sm:text-4xl">Hi 👋, this is Aiqi.</h1>

        <div className="mt-6 space-y-4 text-muted">
          <p>
            I&rsquo;m a fourth-year undergraduate student in Engineering Science (Major
            Engineering Physics, Minor Artificial Intelligence) at the University of Toronto.
          </p>
          <p>
            I am passionate about developing engineering tools that reveal hidden patterns in the
            physical world and advancing our understanding of complex systems through data
            analysis and modeling.
          </p>
          <p>My name is roughly pronounced as I-key.</p>
        </div>

        <p className="mt-8 text-sm text-muted">
          More in{' '}
          <Link href="/about" className="link">
            about
          </Link>
          ,{' '}
          <Link href="/work" className="link">
            work
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
        <h2 className="eyebrow">Research</h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {research.map((r) => (
            <li key={r.slug} className="py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                {r.detail ? (
                  <Link
                    href={r.detail}
                    className="font-serif text-lg text-strong transition-opacity hover:opacity-70"
                  >
                    {r.title}
                  </Link>
                ) : (
                  <span className="font-serif text-lg text-strong">{r.title}</span>
                )}
                <span className="text-sm text-faint">{r.time}</span>
              </div>
              <p className="mt-1.5 text-sm text-muted">{r.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
