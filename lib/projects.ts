// lib/projects.ts
export type Project = {
  slug?: string
  title: string
  description: string
  organization?: string
  supervisor?: string
  time?: string
  tags: string[]
  link?: string
  github?: string;
}

export type ProjectRow = {
  label: string
  description?: string
  projects: Project[]
}

export const projectRows: ProjectRow[] = [
  {
    label: 'Engineering Design',
    description: 'Completed various engineering design courses in Years 1 & 2, contributing to team projects primarily as a software programmer or full-stack developer.',
    projects: [
      {
        slug: 'patchuolink',
        title: 'Patchuolink',
        time: 'Jan 2024 - Apr 2024',
        description:
          'Developed an IoT prototype for real-time cultivation monitoring, integrating wireless data flow, storage, analysis, and a user-friendly web interface.',
        tags: ['IoT', 'Cultivation Monitoring'],
      },
      {
        slug: 'betta-trap',
        title: 'Betta-Trap',
        time: 'Jan 2023 - Apr 2023',
        description:
          'Designed Betta-Trap, an inlet stormdrain filter that captures plastics to protect the Great Lakes, developed through prototyping, CAD modeling, and accessibility testing.',
        tags: ['CAD', 'Engineering Design Practice'],
      },
      {
        slug: 'satellite-image',
        title: 'Satellite Image Segmentation',
        time: 'Jan 2024 - Apr 2024',
        description:
          'Built and trained an autoencoder for satellite image segmentation into color-coded land types, with self-tuned architecture and training.',
        tags: ['Segmentation Model', 'Autoencoder'],
      },
    ],
  },
  {
    label: 'Advanced Physics Lab',
    description: 'Hands-on experiments in diverse areas of physics, each spanning about a month, completed as part of the UofT Advanced Undergraduate Laboratory course in year 3.',
    projects: [
      {
        slug: 'digital-holography',
        title: 'Digital Holography',
        time: 'May 2025 - Jun 2025',
        supervisor: 'Prof. Ania Harlick',
        description:
          'Configured and fine-tuned Spatial Light Modulators for a student lab setup, and authored a experiment manual.',
        tags: ['Information Optics', 'Manual Write-up'],
      },
      {
        slug: 'optical-pumping',
        title: 'Optical Pumping in Rubidium',
        time: 'Feb 2025 - Mar 2025',
        supervisor: 'Prof. Robin Marjoribanks',
        description:
          'Explored optical pumping in rubidium vapor with emphasis on calibration methods and signal analysis.',
        tags: ['Quantum Mechanics', 'Signal Analysis'],
      },
      {
        slug: 'ozone-measurements',
        title: 'Ozone Measurements',
        time: 'Jan 2025 - Feb 2025',
        supervisor: 'Prof. Debra Wunch',
        description:
          'Calibrated a Microtops Ozonometer using in-situ measurements, reference datasets, and simulation.',
        tags: ['Atmospheric Physics', 'Apparatus Calibration'],
      },
      {
        slug: 'ferroelectric-materials',
        title: 'Ferroelectric Materials and Phase Transitions',
        time: 'Nov 2024 - Dec 2024',
        supervisor: 'Prof. Stephen Julian',
        description:
          'Studied electrical properties of Rochelle salt crystals through preparation, fabrication, and testing.',
        tags: ['Crystal Preparation', 'Phase Change'],
      },
      {
        slug: 'solitons',
        title: 'Solitons',
        time: 'Oct 2024 - Nov 2024',
        supervisor: 'Prof. Kaley Walker',
        description:
          'Investigated classical soliton wave theory using a shallow water tank with varied boundary conditions.',
        tags: ['Nonlinear Physics', 'Wave Mechanics'],
      },
    ],
  },
  {
    label: 'Hackathon',
    description: 'Collaborated in various hackathon competitions, driving team projects with contributions as a software programmer and full-stack developer.',
    projects: [
      {
        title: 'CampusPulse',
        time: 'Mar 2024',
        organization: 'Amazon Web Server Design Challenge',
        description:
          'Built CampusPulse, a Next.js + AWS platform with event filtering, interactive maps, smart scheduling, and an AI chatbot to enhance student engagement.',
        tags: ['Campus Events', 'AI Chatbot'],
        link: 'https://devpost.com/software/campus-pulse',
        github: 'https://github.com/gracelliu/CampusPulse'
      },
      {
        slug: 'hvac',
        title: 'Regenerative Carbon HVAC System',
        time: 'Feb 2024',
        organization: 'Clarke Prize Environmental Design Challenge',
        description:
          'Designed AI-enhanced HVAC system with carbon capture to cut building emissions at the Clarke Prize Challenge.',
        tags: ['HVAC System', 'Idea Pitch'],
      },
      {
        title: 'CardiacSOS',
        time: 'Feb 2024',
        organization: 'Hack the Heart 2024',
        description:
          'CardiacSOS is a wearable AI-powered vest that monitors heart patients in real time and triggers immediate emergency responses.',
        tags: ['AI Healthcare', 'Wearable Technology'],
        github: 'https://github.com/yijie-04/CardiacSOS'
      },
      {
        title: 'SmartGEMS',
        time: 'Jan 2024',
        organization: 'UTRA Hackathon 2024',
        description:
          'Built a smart grid model using sensors and AI to optimize renewable energy use and provide interactive sustainability insights.',
        tags: ['Smart Grid', 'Prototyping'],
        link: 'https://devpost.com/software/smartgems-green-energy-management-system'
      },
      {
        title: 'OpenSOS',
        time: 'Nov 2023',
        organization: '1st Theme Prize - NewHacks 2023',
        description:
          'Built OpenSOS, an AI-driven agent for real-time emergency response using speech recognition, GPT-3.5, and AWS.',
        tags: ['Emergency Response', 'AI Agent'],
        link: 'https://devpost.com/software/opensos-emergency-response-ai-agent',
        github: 'https://github.com/yijie-04/OpenSOS-Emergency-Response-AI-Agent'
      },
    ],
  },
  
]
