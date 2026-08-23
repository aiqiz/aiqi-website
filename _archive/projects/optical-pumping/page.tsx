import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Optical Pumping in Rubidium',
      subtitle: 'Explored optical pumping in rubidium vapor with emphasis on calibration methods and signal analysis.',
      date: 'Feb 2025 - Mar 2025',
      tags: ['Quantum Mechanics', 'Signal Analysis'],
      supervisor: 'Prof. Robin Marjoribanks',
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
