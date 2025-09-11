// lib/projectGroups.ts
import type { ProjectRow } from '@/components/ProjectKit'

export const projectRows: ProjectRow[] = [
  {
    label: 'advanced physics lab',
    projects: [
      {
        title: 'Digital Holography Lab',
        subtitle: '2024–2025',
        description:
          'Student-facing digital holography experiment with tunable optical path and lab manual.',
        href: '/projects/digital-holography',
        tags: ['optics', 'holography'],
        tone: '#EEF5FF',
      },
      {
        title: 'Domino Chain Mechanics',
        subtitle: '2024',
        description: 'High-speed camera + feature tracking to model chained impacts.',
        href: '/projects/domino-dynamics',
        tags: ['dynamics', 'cv'],
      },
    ],
  },
  {
    label: 'engineering design',
    projects: [
      {
        title: 'Phenocam Pipeline',
        subtitle: '2023–2025',
        description: 'Python pipeline for urban vegetation phenology (ROI, SOS/EOS fitting).',
        href: '/projects/phenocam',
        tags: ['python', 'cv', 'ecology'],
        tone: '#ECFDF3',
      },
      {
        title: 'Traffic Camera Vegetation Seg',
        subtitle: '2025',
        description: 'SegFormer fine-tuning for vegetation vs road/cars classification.',
        href: '/projects/traffic-veg-seg',
        tags: ['segmentation', 'transformers'],
      },
    ],
  },
  {
    label: 'hackathon',
    projects: [
      {
        title: 'Cortex Analyst',
        subtitle: '2025',
        description: 'Snowflake + LLM demo for multi-table analyses with YAML prompts.',
        href: 'https://example.com/cortex-analyst',
        tags: ['llm', 'snowflake'],
        tone: '#FFF7E6',
      },
      {
        title: 'EUV Lithography Explorer',
        subtitle: '2024',
        description: 'Interactive explainer on SWHL/Holistep concepts and inspection markets.',
        href: '/projects/euv-explorer',
        tags: ['semiconductor', 'viz'],
      },
    ],
  },
]
