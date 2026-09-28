export type Teaching = {
  role: string
  organization: string
  time?: string
  description: string
}

// Add TA positions etc. here — newest first.
export const teaching: Teaching[] = [
  {
    role: 'Lab Technician, Advanced Undergraduate Physics Laboratory',
    organization: 'University of Toronto, Physics',
    time: 'May 2025 - Aug 2025',
    description:
      'Set up new student experiments, including configuring and fine-tuning Spatial Light Modulators for a Digital Holography lab, and authored its experiment manual.',
  },
]
