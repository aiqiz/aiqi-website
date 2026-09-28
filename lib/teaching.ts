export type Teaching = {
  role: string
  organization: string
  time?: string
  description: string
}

// Newest first.
export const teaching: Teaching[] = [
  {
    role: 'Graduate Student Instructor, Physics 7B',
    organization: 'University of California, Berkeley, Physics',
    time: 'Aug 2026 - Ongoing',
    description:
      'Teach undergraduate physics laboratories through experiment demos, office hours, grading, and preparation of teaching materials.',
  },
  {
    role: 'Lab Technician, Advanced Undergraduate Physics Laboratory',
    organization: 'University of Toronto, Physics · Supervised by Prof. Ania Harlick',
    time: 'May 2025 - Aug 2025',
    description:
      'Set up new student experiments, including configuring and fine-tuning Spatial Light Modulators for a Digital Holography lab, and authored its experiment manual.',
  },
]
