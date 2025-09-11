import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Solitons',
      subtitle: 'Investigated classical soliton wave theory using a shallow water tank with varied boundary conditions.',
      date: 'Oct 2024 - Nov 2024',
      tags: ['Nonlinear Physics', 'Wave Mechanics'],
      supervisor: 'Prof. Kaley Walker',
    },
    panel: true,
    sections: [
      {
        title: 'Highlights',
        highlights: [
        'Refinement of original analysis code with energy-based approach',
        'Comprehensive analysis of single soliton wave behavior',
        ],
      },
      {
        title: 'Introduction',
        body: (
          <>
            <P>This experiment investigates classical soliton wave theory using a shallow water tank with water depth of 5-7 cm and a wave-maker. The workflow for data extraction, from edge detection to waveform fitting, is clearly outlined, refined from prior work, and quantitatively evaluated. The experimental design explores the behavior of a single soliton wave, head-on soliton collisions, and soliton wave reflections from different boundary shapes at the tank's end. A total of 42 experimental sets were conducted, each with two repetitions.</P>
            <P>The analysis of single solitons examines the relationship between soliton parameters, their alignment with theoretical KdV equations and related uncertainties, dissipation factors, and introduces a new energy-based model relative to the wave-maker's initial conditions. For head-on soliton collisions, the analysis provides a qualitative assessment of the interaction. The reflection analysis investigates waveform alignment prior to reflection and compares amplitude and energy changes due to variations in the tank's boundary shape. Each section deepens the understanding of soliton dynamics under varying experimental conditions.</P>
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