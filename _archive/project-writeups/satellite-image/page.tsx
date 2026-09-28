import type { Metadata } from 'next'
import { ProjectPage, Figure, P } from '@/components/ProjectKit'

export const metadata: Metadata = {
  title: 'Satellite Image Segmentation',
  description:
    'An autoencoder trained from scratch to segment satellite imagery into color-coded land types.',
}

export default function Page() {
  const config = {
    meta: {
      title: 'Satellite Image Segmentation',
      subtitle:
        'An autoencoder trained from scratch to segment satellite imagery into color-coded land types.',
      date: 'Jan 2024 - Apr 2024',
      tags: ['Segmentation Model', 'Autoencoder'],
    },
    hero: {
      src: '/figures/projects/satellite-image/background.png',
      alt: 'Satellite imagery',
      objectPosition: 'center',
    },
    sections: [
      {
        title: 'Overview',
        body: (
          <>
            <P>
              A deep learning course project that developed and trained an autoencoder to
              categorize and segment land cover from satellite imagery, producing color-coded
              outputs for applications ranging from land cover monitoring to natural disaster
              detection.
            </P>
            <P>
              I optimized and iterated on the model architecture and trained the final model,
              built from scratch without pretraining. Each iteration is a step down the figure
              below.
            </P>
            <Figure
              variant="full"
              src="/figures/projects/satellite-image/improvements.png"
              alt="Segmentation results across model iterations"
              width={1200}
              height={600}
              caption="Segmentation results through successive iterations of the model structure."
            />
            <P>A team project — credit to Yijie, Emma, and Kara.</P>
          </>
        ),
      },
    ],
    resources: [
      {
        label: 'GitHub Repo',
        href: 'https://github.com/yijie-04/APS360_Satellite_Image_Categorization',
      },
    ],
  } as const

  return <ProjectPage config={config} />
}
