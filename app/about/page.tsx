import type { Metadata } from 'next'
import Image from 'next/image'
import fs from 'node:fs'
import path from 'node:path'
import Gallery from '@/components/Gallery'

// Every image in public/figures/about/gallery is shown, in random order.
// To add a photo, just drop it into that folder.
function galleryPhotos() {
  const dir = path.join(process.cwd(), 'public/figures/about/gallery')
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map((f) => `/figures/about/gallery/${encodeURIComponent(f)}`)
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Aiqi Zhang – research interests in atmospheric and Earth system science, computational modeling, and AI, plus a gallery of nature photography.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16 border-t border-line pt-10">
      <h2 className="font-serif text-2xl text-strong sm:text-3xl">{title}</h2>
      <div className="mt-6 space-y-4 text-muted">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-8 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[15rem_1fr] md:gap-14">
        <Image
            priority
            src="/figures/about/me4.jpeg"
            quality={95}
            alt="Aiqi photographing Lake Louise"
            width={960}
            height={1280}
            sizes="(min-width: 768px) 15rem, 14rem"
            className="aspect-3/4 w-56 rounded-2xl bg-surface object-cover shadow-sm ring-1 ring-line md:w-full"
          />
      <div className="max-w-measure">
        {/* Lead: no page title, the intro itself opens the page */}
        <div className="space-y-4 text-lg leading-relaxed text-fg">
          <p>
            I&rsquo;m currently an M.S. student in Civil and Environmental Engineering at UC
            Berkeley, with a background in Engineering Physics and Artificial Intelligence from the
            University of Toronto.
          </p>
          <p>
            I&rsquo;m broadly interested in understanding complex physical systems through
            computational modeling, observations, and AI, with a particular focus on atmospheric
            and Earth system science. Beyond my research, I&rsquo;m also interested in how we
            communicate science &ndash; how complex scientific ideas can be made
            intuitive, accessible, and engaging.
          </p>
          <p className="text-base text-faint">My name is roughly pronounced as I-key.</p>
        </div>
      </div>
      </div>

        <Section title="Research Interests">
          <dl className="grid gap-8 md:grid-cols-3">
            {[
              {
                kind: 'Science',
                title: 'Atmospheric & Earth System Science',
                text: 'Land–atmosphere interactions, atmospheric transport and chemistry, air quality, and biogeochemistry.',
              },
              {
                kind: 'Methodology',
                title: 'Computational Modeling & AI',
                text: 'Physics-informed modeling, remote sensing, and machine learning to integrate multiscale observations and improve environmental prediction.',
              },
              {
                kind: 'Fundamental Interest',
                title: 'Complex Physical Systems',
                text: 'Understanding and predicting complex physical systems by connecting physical mechanisms, observations, and computation.',
              },
            ].map((r) => (
              <div key={r.kind}>
                <dt>
                  <span className="text-xs text-faint">{r.kind}</span>
                  <span className="mt-0.5 block font-serif text-lg text-strong">{r.title}</span>
                </dt>
                <dd className="mt-1">{r.text}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Beyond Research">
          <p>
            Nature photography has been a part of my life since my teenage years. I&rsquo;m drawn
            to landscapes, wildlife, and fleeting moments in the natural world, and this gallery
            brings together some of the places and moments I&rsquo;ve documented along the way.
            When I&rsquo;m away from research, you&rsquo;ll also find me biking, cooking, or
            occasionally picking up the guitar or piano.
          </p>
        </Section>

      <div className="mt-8">
        <Gallery srcs={galleryPhotos()} />
      </div>
    </div>
  )
}
