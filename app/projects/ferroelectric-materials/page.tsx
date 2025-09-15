import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Ferroelectric Materials and Phase Transitions',
      subtitle: 'Studied electrical properties of Rochelle salt crystals through preparation, fabrication, and testing.',
      date: 'Nov 2024 - Dec 2024',
      tags: ['Crystal Preparation', 'Phase Change'],
      supervisor: 'Prof. Stephen Julian',
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