import type { Metadata } from 'next'
import { ProjectPage, P } from '@/components/ProjectKit'
import ModelViewer from '@/components/ModelViewer'

export const metadata: Metadata = {
  title: 'Betta-Trap',
  description:
    'An inlet stormdrain filter that captures plastics before they reach the Great Lakes, developed through prototyping and CAD modeling.',
}

export default function Page() {
  const config = {
    meta: {
      title: 'Betta-Trap',
      subtitle:
        'An inlet stormdrain filter that captures plastics before they reach the Great Lakes.',
      date: 'Jan 2023 - Apr 2023',
      tags: ['CAD', 'Engineering Design Practice'],
    },
    hero: {
      src: '/figures/projects/betta-trap/poster.png',
      alt: 'Betta-Trap',
      objectPosition: 'center',
    },
    sections: [
      {
        title: 'Overview',
        body: (
          <>
            <P>
              Each year, over 22 million pounds of plastic enter the Great Lakes, with stormwater
              runoff carrying the bulk of urban microplastics into rivers and tributaries — which
              makes storm drains one of the most critical interception points.{' '}
              <a
                href="https://www.greatlakesplasticcleanup.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Great Lakes Plastic Cleanup
              </a>
              , led by Pollution Probe, works on catching plastics there before they reach the
              lakes.
            </P>
            <P>
              For a Praxis II design course we developed the Betta-Trap, an overflow-preventing,
              easy-to-maintain inlet storm sewer filter. My role was the CAD model — a
              double-liner system with an overflow mechanism and an automated maintenance alert —
              along with the graphical deliverables for presentations.
            </P>
            <P>A team project — credit to Mikayla Banman, James Tan, and Chen Zhang.</P>
          </>
        ),
      },
      {
        title: 'CAD model',
        body: (
          <>
            <P>Rotate to look around the model.</P>
            <ModelViewer
              src="/figures/projects/betta-trap/CAD.glb"
              camera-controls
              auto-rotate
              environment-image="neutral"
              exposure="0.6"
              shadow-intensity="0.4"
              shadow-softness="0.8"
              orientation="0deg 270deg 0deg"
              camera-orbit="30deg 70deg 120%"
              style={{ width: '100%', height: 480, borderRadius: 2 }}
            />
          </>
        ),
      },
    ],
  } as const

  return <ProjectPage config={config} />
}
