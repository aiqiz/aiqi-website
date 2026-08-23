import type { Metadata } from 'next'
import { ProjectPage, Figure, P } from '@/components/ProjectKit'

export const metadata: Metadata = {
  title: 'Patchuolink',
  description:
    'An IoT prototype for real-time cultivation monitoring, integrating wireless data flow, storage, analysis, and a web interface.',
}

export default function Page() {
  const config = {
    meta: {
      title: 'Patchuolink',
      subtitle:
        'An IoT prototype for real-time cultivation monitoring, integrating wireless data flow, storage, analysis, and a user-friendly web interface.',
      date: 'Jan 2024 - Apr 2024',
      tags: ['IoT', 'Cultivation Monitoring'],
    },
    hero: {
      src: '/figures/projects/patchuolink/logo.png',
      alt: 'Patchuolink',
      objectPosition: 'center',
    },
    sections: [
      {
        title: 'Overview',
        body: (
          <>
            <P>
              Patchuolink is an IoT system for real-time cultivation monitoring, built for a
              Praxis III engineering design course. Nodes in the field transmit sensor readings
              over wireless links; the data is decoded, stored in a structured backend, and
              presented through a web interface where defined thresholds flag optimal growing
              conditions.
            </P>
            <P>
              I designed and implemented the central data visualization and monitoring hub —
              database architecture and real-time data management with SQL on the backend, and a
              Python-Django web interface on the frontend.
            </P>
            <Figure
              variant="full"
              src="/figures/projects/patchuolink/dashboard1.png"
              alt="Patchuolink web dashboard"
              width={1200}
              height={600}
              caption="The monitoring dashboard."
            />
            <P>
              A team project — credit to Rachel, Kevin, Bella, Vhea, and Caroline.
            </P>
          </>
        ),
      },
    ],
    resources: [{ label: 'GitHub Repo', href: 'https://github.com/aiqiz/Patchuolink' }],
  } as const

  return <ProjectPage config={config} />
}
