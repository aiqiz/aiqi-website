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
  } as const

  return <ProjectPage config={config}/>
}
