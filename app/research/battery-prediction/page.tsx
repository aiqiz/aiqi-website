import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Battery Life Prediction',
      subtitle: 'Develop a database framework of battery charging and discharging cycles to support early prediction of battery end-of-life with physics-informed neural network.',
      date: 'May 2024 - Aug 2024',
      supervisor: 'Prof. Xiaodong Chen',
      tags: ['Database Management', 'Physics-induced neural network', 'Battery End-of-life Definition'],
    },
    panel: true,
    sections: [
      {
        title: 'Highlights',
        highlights: [
        'Designed and optimized a large battery charging-discharging cycle database framework for battery life prediction, improving data management and analysis efficiency',
        'Developed and refined feature extraction models to integrate machine learning with empirical and theoretical frameworks, enabling scientific analysis and interpretable in battery life modeling',
        'Investigated and addressed the end-of-life definition problem in battery life prediction, conducting preliminary analysis to evaluate machine learning accuracy under varying definitions'
        ],
      },
      {
        title: 'Note',
        body: (
          <>
            <P>Details of this work are considered the intellectual property of the research group and are not publicly disclosed. For further information regarding my contributions and experience, please contact me directly.</P>
          </>
        ),
      },
    ],
  } as const

  return <ProjectPage config={config}/>
}