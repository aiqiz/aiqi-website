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