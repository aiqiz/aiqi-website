import type { Metadata } from 'next'
import Image from 'next/image'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Engineering Science at the University of Toronto — atmospheric and carbon cycle modelling, remote sensing, and experimental physics. Plus a gallery of nature photography.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="eyebrow">{title}</h2>
      <div className="mt-4 space-y-4 text-muted">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-8 sm:py-24">
      <Image
        src="/figures/about/me2.JPG"
        alt="Aiqi Zhang"
        width={5219}
        height={3188}
        priority
        sizes="(min-width: 768px) 46rem, 100vw"
        className="mb-14 aspect-16/9 w-full rounded-sm object-cover"
      />

      <div className="max-w-measure">
        <h1 className="text-3xl sm:text-4xl">Hi, my name is Aiqi Zhang.</h1>

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

        <Section title="Research Interest">
          <ul className="space-y-2">
            {[
              'Atmospheric and carbon cycle modeling across diverse spatial and temporal scales',
              'Remote sensing and time-series data processing integrated with machine learning–driven analysis',
              'Urban environmental systems and their impact on climate and carbon dynamics',
              'Experimental physics with a focus on data-driven pattern analysis and modeling',
            ].map((b) => (
              <li key={b} className="pl-5 -indent-5 before:mr-3 before:text-faint before:content-['—']">
                {b}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Experience & Past Projects">
          <p>
            As an Engineering Science student, I have gained experience in both engineering design
            and scientific research through coursework, labs, and summer programs.
          </p>
          <p>
            In the first two years of the program, I focused on building core engineering skills
            through coursework, design projects, and hackathons. In the summer after my second
            year, I conducted research at Nanyang Technological University (NTU), gaining
            international academic and laboratory experience. Entering the Engineering Physics
            program in third year, I engaged in advanced physics topics and laboratory research.
            During the summer, I worked as a student researcher in the Atmospheric Physics Group
            under Prof. Debra Wunch and as a lab technician in the Advanced Undergraduate
            Laboratory, where I contributed to setting up new experiments while continuing my own
            research.
          </p>
        </Section>

        <Section title="Tools I Reach For">
          <dl className="space-y-3">
            {[
              {
                k: 'Programming',
                v: 'Python, MATLAB, C, C++, SQL, JavaScript, HTML, CSS, Assembly, Linux',
              },
              { k: 'Hardware & CAD Design', v: 'Arduino, Raspberry Pi, Fusion 360, SolidWorks' },
              {
                k: 'Photography & Video Editing',
                v: 'Final Cut Pro, Adobe Photoshop, Adobe Lightroom',
              },
            ].map((row) => (
              <div key={row.k}>
                <dt className="text-sm text-faint">{row.k}</dt>
                <dd>{row.v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="General Interests">
          <p>
            I first discovered nature photography as a teenager, and it has remained a lasting
            passion. Each photo captures a fleeting moment with the creatures I&rsquo;ve been
            fortunate to encounter, and I&rsquo;ve put together a small gallery for you to explore.
          </p>
        </Section>
      </div>

      <div className="mt-8">
        <Gallery />
      </div>
    </div>
  )
}
