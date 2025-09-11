import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Digital Holography',
      subtitle: 'Using a 3D reconstruction system based on computer vision to record and analyze the mechanics of toppling domino blocks.',
      date: 'Sept 2024 - Ongoing',
      tags: ['Advanced Physics Lab', 'Mechanics', 'Computer Vision'],
    },
    panel: true,
    sections: [
      {
        title: 'Highlights',
        highlights: [
        'Built a stereo 3D reconstruction pipeline for capturing domino full dynamics',
        'Quantified 6 DOF chain reaction mechanics with color marker based tracking',
        ],
      },
      {
        title: 'Introduction',
        body: (
          <>
            <P>The domino chain effect serves as a a prototypical marginally stable system, where a sufficient force applied to a single element in the chain initiates the the successive toppling of the dominoes.</P>
            <P>Simplified models, like massless rods, single elastic/inelastic collisions, and relative sliding have been proposed and discussed, however, experimental validation remains limited. This study refines the use of high-speed video and computer vision techniques to analyze the domino effect.</P>
            <P>Initial 2D analysis revealed multi-collision effects and enabled examination of the domino wave's acceleration stage before reaching a plateau of propagation speed. However, this method failed to capture out-of-plane block rotations, shown by Youtuber Smarter Every Day below, which exhibit a periodic influence on propagation speed, highlighting an overlooked aspect of the chain's dynamics.</P>
            <VideoEmbed 
                src="https://www.youtube.com/embed/9hPIobthvHg?start=498" 
                title="Domino demo" 
            />
            <P>A 3D reconstruction system was then developed, enabling the full six degrees of freedom for each domino block within the chain reaction to be captured and analyzed.</P>
          </>
        ),
      },
      {
        title: 'Methodology',
        body: (
          <>
            <div className="grid md:grid-cols-2 gap-6 my-6 items-start">
                {/* Column 1 */}
                <div className="col-span-1">
                    <Figure
                    src="/figures/projects/domino/setup.png"
                    alt="Experimental setup"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig 1: 3D reconstruction apparatus setup."
                    />
                </div>

                {/* Column 2 */}
                <div className="col-span-1 space-y-4">
                    <Figure
                    src="/figures/projects/domino/methodology.png"
                    alt="Methodology flow"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig 2: 3D reconstruction workflow."
                    />

                    {/* text inside column 2, under the figure */}
                    <P>This text is placed in **column 2**, under the right figure.</P>
                    <P>You can stack more here as needed.</P>
                </div>
            </div>

            
            <Figure
              variant="full"
              src="/figures/projects/domino/twoclips.png"
              alt="3D reconstruction of domino motion"
              width={1200}
              height={600}
              caption="Fig 3: Recording of single domino block toppling from two synchronized cameras."
            />

            <P>This text is placed in **column 2**, under the right figure.</P>
            <P>You can stack more here as needed.</P>
            
            <HtmlEmbed html="/figures/projects/domino/color_markers.html" />
          </>
        ),
      },
      {
        title: 'Conclusions',
        body: (
          <>
            <P>Accurate 3D motion capture shows energy transfer stages.</P>
            <P>Future work: simulation comparisons and spacing studies.</P>
          </>
        ),
      },
    ],
    resources: [
      { label: 'Poster PDF', href: '/files/domino-poster.pdf' },
      { label: 'GitHub Repo', href: 'https://github.com/username/domino-dynamics' },
    ],
  } as const

  return <ProjectPage config={config}/>
}


/*        <>
            Presented poster at{' '}
            <a
            href="https://www.queensu.ca/wipc2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
            >
            Women+ in Physics Canada 2025
            </a>
        </>, */