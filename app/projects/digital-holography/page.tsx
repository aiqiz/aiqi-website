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