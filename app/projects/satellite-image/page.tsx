import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Satellite Image Segmentation',
      subtitle: 'Built and trained an autoencoder for satellite image segmentation into color-coded land types, with self-tuned architecture and training.',
      date: 'Jan 2024 - Apr 2024',
      tags: ['Segmentation Model', 'Autoencoder'],
    },
    hero: {
      src: '/figures/projects/satellite-image/background.png',
      alt: 'Satellite hero',
      heightClass: 'h-[40vh] md:h-[56vh]',
      gradient: true,
      objectPosition: 'center',
    },
    panel: true,
    sections: [
      {
        title: 'Highlight Contributions',
        highlights: [
          'Optimized and iterated on model architectures, testing various techniques to improve accuracy.',
          'Programmed and trained the model for effective performance.',
        ],
      },
      {
        title: 'Introduction',
        body: (
          <>
            <P>The Satellite Image Segmentation project developed and trained an autoencoder to automatically categorize and segment land covers from satellite imagery, producing color-coded outputs for applications ranging from land cover monitoring to natural disaster detection.</P>
          </>
        ),
      },
      {
        title: 'Interation of Model Structure',
        body: (
          <>
            <P>By iterating on the model structure (Figure 1), we achieved clear improvements in segmentation accuracy with a fully self-built model trained from scratch, without pretraining.</P>
            <Figure
              variant="full"
              src="/figures/projects/satellite-image/improvements.png"
              alt="model improvements"
              width={1200}
              height={600}
              caption="Fig 1: Segmentation results through iteration of model structure."
            />

            <P>We've setteled down in the final model architecture as illustrated in Figure 2, and their training accuracy and loss function can be found in the Figure 3 & 4.</P>
            <Figure
              variant="full"
              src="/figures/projects/satellite-image/structure.png"
              alt="model sturcture"
              width={1200}
              height={600}
              caption="Fig 2: Model architecture of final model."
            />
            <div className="grid md:grid-cols-2 gap-6 my-6 items-start">
                {/* Column 1 */}
                <div className="col-span-1">
                    <Figure
                    src="/figures/projects/satellite-image/accuracy.png"
                    alt="Experimental setup"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig 3: Final model accuracy."
                    />
                </div>

                {/* Column 2 */}
                <div className="col-span-1 space-y-4">
                    <Figure
                    src="/figures/projects/satellite-image/loss.png"
                    alt="Methodology flow"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig 4: Final model loss."
                    />
                </div>
            </div>
          </>
        ),
      },
      {
        title: 'Acknowledgements',
        body: (
          <>
             <P>
              This project was a team effort. Credit to my wonderful teammates - Yijie, Emma, and Kara!
            </P>
          </>
        ),
      },
    ],
    resources: [
      { label: 'Report PDF', href: '/Users/aiqizhang/Desktop/zaq-website/public/figures/projects/satellite-image/APS360_Final_Report.pdf' },
      { label: 'GitHub Repo', href: 'https://github.com/yijie-04/APS360_Satellite_Image_Categorization' },
    ],
  } as const

  return <ProjectPage config={config}/>
}
