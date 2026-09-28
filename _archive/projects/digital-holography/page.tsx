import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Digital Holography',
      subtitle: 'Configured and fine-tuned Spatial Light Modulators for a student lab setup, and authored a experiment manual.',
      date: 'May 2025 - Jun 2025',
      tags: ['Information Optics', 'Manual Write-up'],
      supervisor: 'Prof. Ania Harlick',
    },
    panel: true,
    sections: [{
        title: 'Note',
        body: (
          <>
            <P>Specific details of this work are withheld to maintain the integrity of the Advanced Physics Lab course. For further information about my contributions and experience, please contact me directly.</P>
          </>
        ),
      },
    ]
  } as const

  return <ProjectPage config={config}/>
}


/*        sections: [
      {
        title: 'Highlight Contributions',
        highlights: [
          'Designed and implemented a full-stack data visualization and monitoring center, from SQL backend to Python-Django web interface.',
          'Produced a demo video and documentation detailing the design concept, process, and final solution.',
        ],
      },
    ],  
 */