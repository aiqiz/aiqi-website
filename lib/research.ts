export type Research = {
  slug: string
  title: string
  /** One-sentence summary. */
  description: string
  university?: string
  supervisor?: string
  /** Co-authors / collaborators, shown next to the supervisor. */
  collaborators?: string[]
  time?: string
  /** What came out of it. `href` starting with '/' stays on-site. */
  outcome?: { text: string; linkText?: string; href?: string }
}

// Newest first.
export const research: Research[] = [
  {
    slug: 'air-quality-modeling',
    title: 'Air Quality Modeling',
    time: 'Sep 2026 - Ongoing',
    university: 'UC Berkeley, Civil and Environmental Engineering',
    supervisor: 'Prof. Josh Apte',
    description:
      'Exploring reduced-complexity air quality modeling with InMAP, focusing on atmospheric transport, mixing, and efficient tools for air quality assessment and decision-making.',
  },
  {
    slug: 'urban-phenology',
    title: 'Urban Carbon Uptake from Cameras & SIF',
    time: 'May 2025 - Aug 2026',
    university: 'University of Toronto, Physics',
    supervisor: 'Prof. Debra Wunch & Dr. Natalia Restrepo-Coupe',
    description:
      'Integrating city traffic camera networks, downscaled high-resolution satellite SIF, and vegetation modeling to characterize urban vegetation phenology and carbon uptake across the City of Toronto.',
    outcome: { text: 'See', linkText: 'list of publications', href: '/#publications' },
  },
  {
    slug: 'domino-dynamics',
    title: 'Domino Chain Effect',
    time: 'Sep 2024 - Jun 2026',
    university: 'University of Toronto, Physics',
    supervisor: 'Prof. Ania Harlick & Prof. Boris Braverman',
    description:
      'Using a 3D reconstruction system based on computer vision to record and analyze the mechanics of toppling domino blocks.',
    outcome: {
      text: 'A new lab designed for undergraduate students; educational manuscript in preparation.',
      linkText: 'Code on GitHub',
      href: 'https://github.com/aiqiz/domino3d_processing_code',
    },
  },
]
