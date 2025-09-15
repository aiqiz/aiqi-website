import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Domino Chain Effect',
      subtitle: 'Using a 3D reconstruction system based on computer vision to record and analyze the mechanics of toppling domino blocks.',
      date: 'Sept 2024 - Ongoing',
      supervisor: 'Prof. Ania Harlick & Prof. Boris Braverman',
      tags: ['Advanced Physics Lab', 'Mechanics', 'Computer Vision'],
    },
    hero: {
      src: '/figures/research/domino/hero.png',
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
        'Built a stereo 3D reconstruction pipeline for capturing domino full dynamics',
        'Quantified 6 DOF chain reaction mechanics with color marker based tracking',
        <>
            Presented poster at{' '}
            <a
            href="https://www.queensu.ca/wipc2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
            >
            Women+ in Physics Canada 2025 
            </a>
            {' '}(poster available in the bottom of the page.)
        </>,
        ],
      },
      {
        title: 'Introduction',
        body: (
          <>
            <P>The domino chain effect serves as a a prototypical marginally stable system, where a sufficient force applied to a single element in the chain initiates the the successive toppling of the dominoes.</P>
            <P>Simplified models, like massless rods, single elastic/inelastic collisions, and relative sliding have been proposed and discussed, however, experimental validation remains limited. This study refines the use of high-speed video and computer vision techniques to analyze the domino effect.</P>
            <P>Initial 2D analysis revealed multi-collision effects and enabled examination of the domino wave's acceleration stage before reaching a plateau of propagation speed. However, this method failed to capture out-of-plane block rotations, shown by Youtuber Smarter Every Day below, which exhibit a periodic influence on propagation speed, highlighting an overlooked aspect of the chain's dynamics.</P>
            <VideoEmbed 
                src="https://www.youtube.com/embed/9hPIobthvHg?start=498" 
                title="Domino demo" 
            />
            <P>A 3D reconstruction system was then developed, enabling the full six degrees of freedom for each domino block within the chain reaction to be captured and analyzed.</P>
          </>
        ),
      },
      {
        title: '2D Approach',
        body: (
          <>
            <P>Following the workflow outlined in Figure 2, the initial positions obtained from edge detection (Figure 1) were used to reconstruct the domino toppling motion in 2D.</P>
            <div className="grid md:grid-cols-2 gap-6 my-6 items-start">
                {/* Column 1 */}
                <div className="col-span-1">
                  <Figure
                    src="/figures/research/domino/2D_extraction.png"
                    alt="2d extraction"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig. 1: 2D motion capture by determining initial position and instantaneous edges."
                    />
                  <P> Examples of different setups with calculated reference points are shown in Figure 3 (detailed calculation steps are available in the project's GitHub repository), and the corresponding angular velocities extracted from the domino chain are presented in Figure 4.</P>
                  
                </div>

                {/* Column 2 */}
                <div className="col-span-1 space-y-4">
                    <Figure
                    src="/figures/research/domino/2D_workflow.png"
                    alt="2d workflow"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig. 2: 2D domino block motion extration & calculation workflow."
                    />
                </div>
            </div>
            <Figure
              variant="full"
              src="/figures/research/domino/2D_reconstruction.png"
              alt="2D reconstruction"
              width={1200}
              height={600}
              caption="Fig. 3: Reconstructed trajectories of domino blocks using edge detection for different setups."
            />
            <Figure
              variant="full"
              src="/figures/research/domino/2D_curves.png"
              alt="2D curves"
              width={1200}
              height={600}
              caption="Fig. 4: Angular velocity curves during the toppling of domino blocks, illustrating initial increase in angular velocity for various spacings."
            />
            <P>We observe differences in the velocity curves (Figure 4) when varying domino spacing (e.g., *3 indicates spacing equal to three block widths). However, these velocities represent only the initial toppling phase and do not capture the system once domino transmission reaches a stable stage.</P>
            <P>The 2D reconstruction pipeline relies on several simplifying assumptions: it assumes no relative sliding, fixes each block's lower-right edge, and ignores both off-plane rotations and near-edge camera distortion. The field of view also limits tracking to roughly 20 dominoes, restricting the scale of analysis. These assumptions deviate from real-world dynamics, where sliding and rotations are present. To address these limitations, a 3D extraction framework has been introduced.</P>
          </>
        ),
      },
      {
        title: '3D Approach',
        body: (
          <>
            <Figure
              variant="full"
              src="/figures/research/domino/twoclips.png"
              alt="3D reconstruction of domino motion"
              width={1200}
              height={600}
              caption="Fig. 5: Recording of single domino block toppling from two synchronized cameras."
            />
            <div className="grid md:grid-cols-2 gap-6 my-6 items-start">
                {/* Column 1 */}
                <div className="col-span-1">
                    <Figure
                    src="/figures/research/domino/setup.png"
                    alt="Experimental setup"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig. 6: 3D reconstruction apparatus setup."
                    />
                </div>

                {/* Column 2 */}
                <div className="col-span-1 space-y-4">
                    <Figure
                    src="/figures/research/domino/methodology.png"
                    alt="Methodology flow"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig. 7: 3D reconstruction workflow."
                    />

                    {/* text inside column 2, under the figure */}
                    <P>The 3D reconstruction setup consists of two cameras positioned at different viewpoints (Figure 5), a calibration board for alignment, and controlled lighting conditions, as shown in Figure 6.</P>
                </div>
            </div>
            
            <P>Following the reconstruction pipeline described in Figure 7, and with careful camera calibration using a checkerboard (Figure 8) along with color markers (Figure 9), we extracted and reconstructed the 3D trajectories of six markers, shown below.</P>
            <div className="grid md:grid-cols-2 gap-6 my-6 items-start">
                <div className="col-span-1">
                    <Figure
                    src="/figures/research/domino/camera_calibration.png"
                    alt="camera calibration"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig. 8: Pinhole camera calibration model using a checkerboard pattern to estimate intrinsic parameters and distortion coefficients."
                    />
                </div>
                <div className="col-span-1 space-y-4">
                    <Figure
                    src="/figures/research/domino/color_markers.png"
                    alt="color markers"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig. 9: Color marker labels with reference frame orientation used in the model."
                    />
                </div>
            </div>
            <HtmlEmbed html="/figures/research/domino/color_markers.html" />

            <P>The reconstruction error averages around ±3[mm]. However, systematic errors in color marker tracking remain difficult to verify. To address this, we are setting up a global reference anchor system (similar to those used in 3D printing).</P>
            <P>While the designed pipeline theoretically captures full degrees of freedom, it still shows depth estimation uncertainty. As seen in the 3D model, marker trajectories are consistently over-slanted, suggesting a depth bias. This likely results from the use of only six co-planar markers, as well as imprecise calibration and world anchor frame setup. To address this, we plan to introduce front-facing markers to improve depth referencing and establish a more robust reference frame system.</P>
          </>
        ),
      },
      {
        title: '6 Degree-of-Freedom Motion',
        body: (
          <>
            <P>Assuming rigid body motion, we project the absolute positions of the color markers to compute translational and rotational velocities, as shown in Figure 10. Rotation ωy and sliding vx along the toppling direction dominate the motion, but wobbling and sliding in other directions remain non-negligible. The observed wobble arises from asymmetric collision points between adjacent domino blocks.</P>
            <Figure
              variant="full"
              src="/figures/research/domino/6dof.png"
              alt="3D reconstruction of domino motion"
              width={1200}
              height={600}
              caption="Fig. 10: Rotational and translational velocities are shown in pairs. The wobble in ωz, reverse alignment of vy and ωx, and COM lift in vz indicate that rotations perpendicular to the toppling direction are non-negligible."
            />
            <P>An additional interactive domino model is provided, offering a more intuitive demonstration of how the absolute positions of six color markers are projected onto rigid frames and subsequently used to compute the motions shown in Figure 10.</P>
            <HtmlEmbed html="/figures/research/domino/cuboid_trajectories.html" />
          </>
        ),
      },
      {
        title: 'Next Step',
        body: (
          <>
            <P>As tools for quantitatively analyzing full domino motion are developed, precise numerical analysis can be extended to evaluate the stability of wave transmission under three-dimensional rotation. With single-block motion already analyzed, future work will expand to multiple blocks and entire chains.</P>
            <P>Additional research directions include studying asymmetric domino chains to account for uneven potential energy, as well as curved or irregularly spaced chains. These variations can be explored in relation to earthquake source models, continuum approximations, and nonlinear dynamics.</P>
            <P>A paper focusing on the basic model and classical analysis is currently in preparation.</P>
          </>
        ),
      },
      {
        title: 'Acknowledgement',
        body: (
          <>
            <P>This project originated in the Advanced Physics Lab as a month-long experiment. With the support of Prof. Harlick, Prof. Braverman, Prof. Morris, and lab technicians Larry and Phil, I was able to further pursue the work and explore the topic in greater depth. </P>
            <P>I am deeply grateful for their guidance and the opportunity to develop this project, and I am excited about the discoveries and science that lie ahead.</P>
          </>
        ),
      },

    ],
    resources: [
      { label: 'Poster PDF', href: '/files/research/domino/WIPC+_Poster.pdf' },
      { label: 'GitHub Repo', href: 'https://github.com/aiqiz/DCE-CV' },
    ],
  } as const

  return <ProjectPage config={config}/>
}