import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'
import dynamic from "next/dynamic";
const ModelViewer = dynamic(() => import("@/components/ModelViewer"), { ssr: false });


export default function Page() {
  const config = {
    meta: {
      title: 'Betta-Trap',
      subtitle: 'Designed Betta-Trap, an inlet stormdrain filter that captures plastics to protect the Great Lakes, developed through prototyping, CAD modeling, and accessibility testing.',
      date: 'Jan 2023 - Apr 2023',
      tags: ['CAD', 'Engineering Design Practice'],
    },
    hero: {
      src: '/figures/projects/betta-trap/poster.png',
      alt: 'Betta-trap hero',
      heightClass: 'h-[40vh] md:h-[56vh]',
      gradient: true,
      objectPosition: 'center',
    },
    panel: true,
    sections: [
      {
        title: 'Highlights',
        highlights: [
          'Designed the CAD model for a storm drain filter with an overflow mechanism and maintenance alert system.',
          'Created the one-pager and poster to communicate the design opportunity.',
        ],
      },
      {
        title: 'Introduction',
        body: (
          <>
            <P>Each year, over 22 million pounds of plastic enter the Great Lakes, with stormwater runoff carrying the bulk of urban microplastics into rivers and tributaries. A single outfall can release millions to billions of particles per rain event, making storm drains one of the most critical entry points for pollution.</P>
            <P><>
              {' '}
                <a
                href="https://www.greatlakesplasticcleanup.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
                >
                Great Lake Plastic Cleanup
                </a>
              </>, led by Pollution Probe, focuses on prevention by intercepting plastics at storm drains before they reach the lakes. This approach helps safeguard ecosystems, wildlife, and the 40 million people who rely on the Great Lakes for freshwater.</P>
            <P>Through this design opportunity, we developed the Betta-Trap, an overflow-preventing, easy-to-maintain inlet storm sewer filter.</P>
            <P>The highlight of my role was designing the CAD model of our solution and creating graphical deliverables for presentations.</P>
          </>
        ),
      },
      {
        title: 'CAD model',
        body: (
          <>
            <P>Feel free to rotate around and observe the CAD model in detail.</P>
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
              style={{ width: "100%", height: 480, backgroundColor: "black" }}
            />
          </>
        ),
      },
      {
        title: 'One-Pager',
        body: (
          <>
            <P>One-pager designed for the final presentation for details of the design solution.</P>
            <iframe
              src="/files/projects/betta-trap/Onepager.pdf"
              style={{ width: "100%", height: 700, border: "none" }}
            />
          </>
        ),
      },
      {
        title: 'Acknowledgements',
        body: (
          <>
             <P>
              This project was a team effort. Credit to my wonderfual teammates - Mikayla Banman, James Tan, and Chen Zhang!
            </P>
          </>
        ),
      },
    ],
  } as const

  return <ProjectPage config={config}/>
}