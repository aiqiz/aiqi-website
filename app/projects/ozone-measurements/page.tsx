import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Ozone Measurements',
      subtitle: 'Calibrated a Microtops Ozonometer using in-situ measurements, reference datasets, and simulation.',
      date: 'Jan 2025 - Feb 2025',
      tags: ['Atmospheric Physics', 'Apparatus Calibration'],
      supervisor: 'Prof. Debra Wunch',
    },
  } as const

  return <ProjectPage config={config}/>
}