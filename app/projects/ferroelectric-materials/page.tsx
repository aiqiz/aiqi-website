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
  } as const

  return <ProjectPage config={config}/>
}