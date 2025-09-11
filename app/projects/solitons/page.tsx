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
  } as const

  return <ProjectPage config={config}/>
}