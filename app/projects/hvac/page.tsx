import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'

export default function Page() {
  const config = {
    meta: {
      title: 'Regenerative Carbon HVAC System',
      subtitle: 'Designed AI-enhanced HVAC system with carbon capture to cut building emissions at the Clarke Prize Challenge.',
      date: 'Feb 2024',
      tags: ['HVAC System', 'Idea Pitch'],
    },
    panel: true,
    sections: [
      {
        title: 'Introduction',
        body: (
          <>
            <P>We explore the Regenerative Carbon HVAC system as a sustainable solution to advance the circular campus concept. By integrating carbon capture technology into existing HVAC infrastructure, the system reduces emissions while repurposing captured carbon for research and industrial applications. Powered by renewable energy and enhanced by AI-driven smart zoning, this approach not only optimizes building circulation but also creates a closed-loop cycle that supports both campus operations and broader sustainability goals.</P>
          </>
        ),
      },
      {
        title: 'Idea Pitch Demo',
        body: (
          <VideoEmbed 
              src="https://www.youtube-nocookie.com/embed/mpx_FO_WDWU?modestbranding=1&rel=0&playsinline=1"
              title="HVAC" 
          />
        ),
      },
      {
        title: 'Acknowledgements',
        body: (
          <>
             <P>
              This project was a team effort. Credit to my wonderful teammates - Rachel, Yifei, and Yijie!
            </P>
          </>
        ),
      },
    ],
  } as const

  return <ProjectPage config={config}/>
}