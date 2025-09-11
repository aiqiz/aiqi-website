import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Urban Phenology',
      subtitle: 'Using phenocam-based greenness indices to model the influence of urban vegetation phenology on carbon sequestration in city ecosystems.',
      date: 'May 2025 - Ongoing',
      supervisor: 'Prof. Debra Wunch',
      tags: ['Environmental Science', 'Data-based Modelling', 'Urban Phenology', 'Remote Sensing']
    },
    hero: {
      src: '/figures/projects/phenocam/hero.png',
      alt: 'Domino hero',
      heightClass: 'h-[40vh] md:h-[56vh]',
      gradient: true,
      objectPosition: 'center',
    },
    panel: true,
    sections: [
      {
        title: 'Highlights',
        highlights: [
        'Developed a computer vision pipeline combining manual and automated phenocam labelling to extract high-resolution urban phenology signals.',
        'Linking phenology indices with flux tower data enables modeling of urban carbon dynamics, with future extensions to traffic cameras and integration with SIF data.'
        ],
      },
      {
        title: 'Abstract',
        body: (
          <>
            <P>Urban areas, covering less than 2.4% of Earth's land, generate over 80% of global CO₂ emissions. Carbon cycles in urban areas are shaped by both human activities and vegetation, whose seasonal changes are described by plant phenology. Field-based phenology monitoring is labor-intensive and limited in scope, while satellite remote sensing lacks the spatial resolution needed for complex urban settings. Phenocams, fixed-position cameras capturing regular images of vegetation, offer a high-resolution, near-continuous alternative for tracking canopy changes.</P>
            <P>
              <>
              Since 2022, the{" "}
              <a
                href="https://tame.physics.utoronto.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                Toronto Atmospheric Monitoring of Emissions (TAME)
              </a>{" "}
              project has deployed nine phenocams across the University of Toronto and the Greater Toronto Area, complemented by City of Toronto traffic camera footage. Within this effort, our sub-project develops a{" "}
              <a
                href="https://github.com/WunchLab/phenocam-code"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                computer vision pipeline
              </a>{" "}
              that combines auto-labeling for traffic cameras and manual labeling for high-resolution phenocams. 
              </>
            </P>
            <Figure
              variant="full"
              src="/figures/research/phenocam/map.png"
              alt="phenocam distribution"
              width={1200}
              height={600}
              caption="Fig. 1: Phenocam network map and example image across the Greater Toronto Area."
            />
            <P>The project will continue to refine the computer vision pipeline for extracting phenology indices, then analyze their relationship with urban carbon fluxes. Flux tower data from Turkey Point will validate phenology based models, which can be extended to traffic cameras for broader spatial coverage. Future work will compare greenness-based models with downscaled solar-induced fluorescence (SIF) to deepen insights into urban vegetation's role in carbon cycling.</P>
          </>
        ),
      },
      {
        title: 'Manual-labelling Workflow',
        body: (
          <>
            <P>The key challenge in analyzing long time-series images with manually labeled trees (figure 2) is frequent camera movement. To address this, we applied key point extraction with alignment checks to transform each image back to a reference frame with accurately labeled regions. </P>
            <Figure
              variant="full"
              src="/figures/research/phenocam/manual_labels.png"
              alt="manual labelling workflow"
              width={1200}
              height={600}
              caption="Fig. 2: Manually labeled reference image for phenocam 1-4."
            />
            <P>We then introduced soft-boundary ROIs with uncertainty estimation, enabling precise extraction of time-series greenness. For this analysis, greenness was quantified using green chromatic coordinates (GCC), defined as the ratio of RGB values (G/(R+G+B)). The full processing pipeline can be found in figure 3.</P>
            <Figure
              variant="full"
              src="/figures/research/phenocam/manual_workflow.png"
              alt="manual labelling workflow"
              width={1200}
              height={600}
              caption="Fig. 3: Manual-labelling image series processing workflow."
            />
          
            <P>An example of the extracted GCC curve is shown in Figure 4; with appropriate fitting and definition, the growing season is identified as the green bar in Figure 5.</P>
            
            <div className="grid md:grid-cols-2 gap-6 my-6 items-start">
                {/* Column 1 */}
                <div className="col-span-1">
                  <Figure
                    src="/figures/research/phenocam/manual_curve.png"
                    alt="gcc example curve"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig. 4: Example GCC time series in 2023 from Phenocam 1."
                  />
                </div>

                {/* Column 2 */}
                <div className="col-span-1 space-y-4">
                  <Figure
                    src="/figures/research/phenocam/manual_growing_season.png"
                    alt="growing season"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig. 5: Visualization of growing seasons across different phenocams."
                  />
                </div>
            </div>
            <P>In Figure 5, it can be observed that phenocams 1-4, all located on the downtown campus, generally show a later start and end of season compared to the phenocams in Scarborough and Egbert, which are situated in more rural areas. However, since the spatial resolution of all six cameras is relatively low, traffic cameras are used to provide additional observations.</P>
          </>
        ),
      },
      {
        title: 'Auto-labelling Workflow',
        body: (
          <>
          <P>Similar to the workflow for manual labelling, we applied a comparable methodology to process time series data from traffic cameras. However, because these cameras were originally designed for traffic monitoring, their viewpoints shift significantly over time, making manual labelling impractical. To address this, we employed a pretrained semantic segmentation model to mask regions containing grass and trees, as shown in Figure 6. </P>
          <Figure
            variant="full"
            src="/figures/research/phenocam/auto_masking.png"
            alt="auto masking"
            width={1200}
            height={600}
            caption="Fig. 6: Semantic segmentation on City of Toronto traffic cameras."
          />
            
          <P>Specifically, we used SegFormer-B0, the most lightweight model of the SegFormer architecture, pretrained on the ADE20K dataset. The full processing pipeline is illustrated in Figure 7.</P>
          <Figure
            variant="full"
            src="/figures/research/phenocam/auto_workflow.png"
            alt="auto workflow"
            width={1200}
            height={600}
            caption="Fi. 7: Auto-labeling workflow."
          />

          <P>The processed GCC time series are shown in Figure 8; however, due to the properties of traffic cameras, these series are noticeably noisier than those from high-resolution images. A spatial interpolation across the GTA has also been performed, as illustrated in Figure 9. To address the lack of clear patterns, ongoing research is focusing on refining the definitions of SOS (start of season) and EOS (end of season), and incorporating additional color indices in autumn as well as other meteorological data sources.</P>
          
          <Figure
            variant="full"
            src="/figures/research/phenocam/auto_curve.png"
            alt="auto curve"
            width={1200}
            height={600}
            caption="Fig. 8: GCC time series from traffic cameras (dark green = trees, light green = grass)."
          />
          <Figure
            variant="full"
            src="/figures/research/phenocam/auto_field.gif"
            alt="auto field"
            width={1200}
            height={600}
            caption="Fig. 9: Continuous fields generated from point-source measurements using spatial interpolation of GCC time series."
          />
          </>
        ),
      },
      {
        title: 'Validation',
        body: (
          <>
            <P>To link phenology with carbon cycles in urban areas, we used Turkey Point in southern Ontario as a validation site and developed a model based on photosynthetically active radiation (PAR) and environmental factors such as vapor pressure deficit (VPD) and temperature (T), with GCC serving as a proxy for fPAR (fraction of PAR). This model was applied to estimate GPP, as shown in Figure 10. To extend the approach to traffic cameras, future work will focus on modeling with relative humidity and temperature as the main drivers and validating results across multiple data sources.</P>
            <Figure
              variant="full"
              src="/figures/research/phenocam/validation_model.png"
              alt="validation model"
              width={1200}
              height={600}
              caption="Fig. 10: Modelling GPP through environmental factors and GCC."
          />
          </>
        ),
      },
      {
        title: 'Next Step',
        body: (
          <>
            <P>Several directions are currently being pursued in this project. One focus is on expanding and validating the traffic-camera GCC network against high-resolution camera observations, with the goal of making the data both interpretable and quantifiable. Another approach involves integrating the GCC network with solar-induced fluorescence (SIF) data to provide deeper insights and enhance confidence in the results. These efforts will be further developed and formalized through the fourth-year thesis.</P>
          </>
        ),
      },
    ],
    resources: [
      { label: 'GitHub Repo', href: 'https://github.com/WunchLab/phenocam-code' },
    ],
  } as const

  return <ProjectPage config={config}/>
}



