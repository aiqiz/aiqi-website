export type Research = {
  slug: string
  title: string
  description: string
  university?: string
  supervisor?: string
  time?: string
  tags: string[]
  link?: string
}

export const projects: Research[] = [
  {
    slug: 'urban-phenology',
    title: 'Urban Phenology',
    time:'May 2025 - Ongoing',
    university: 'University of Toronto, Physics',
    supervisor: 'Prof. Debra Wunch',
    description: 'Using phenocam-based greenness indices to model the influence of urban vegetation phenology on carbon sequestration in city ecosystems.',
    tags: ['Environmental Science', 'Data-based Modelling', 'Urban Phenology', 'Remote Sensing']
  },
  {
    slug: 'domino-dynamics',
    title: 'Domino Chain Effect',
    time:'Sept 2024 - Ongoing',
    university: 'University of Toronto, Physics',
    supervisor: 'Prof. Ania Harlick & Prof. Boris Braverman',
    description: 'Using a 3D reconstruction system based on computer vision to record and analyze the mechanics of toppling domino blocks.',
    tags: ['Advanced Physics Lab', 'Computer Vision Reconstruction', 'Classical Mechanics', 'Non-linear Physics']
  },
  {
    slug: 'battery-prediction',
    title: 'Battery Life Prediction',
    time:'May 2024 - Aug 2024',
    university: 'Nanyang Technological University, Materials Engineering',
    supervisor: 'Prof. Xiaodong Chen',
    description: 'Develop a database framework of battery charging and discharging cycles to support early prediction of battery end-of-life with physics-informed neural network.',
    tags: ['Database Management', 'Physics-induced neural network', 'Battery End-of-life Definition'],
  },
];
