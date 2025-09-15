import { ProjectPage, Figure, HtmlEmbed, VideoEmbed, P, ClearFloats } from '@/components/ProjectKit'
import ModelViewer from '@/components/ModelViewer'


export default function Page() {
  const config = {
    meta: {
      title: 'Patchuolink',
      subtitle: 'Developed an IoT prototype for real-time cultivation monitoring, integrating wireless data flow, storage, analysis, and a user-friendly web interface.',
      date: 'Jan 2024 - Apr 2024',
      tags: ['IoT', 'Cultivation Monitoring'],
    },
    hero: {
      src: '/figures/projects/patchuolink/logo.png',
      alt: 'Patchuolink hero',
      heightClass: 'h-[40vh] md:h-[56vh]',
      gradient: true,
      objectPosition: 'center',
    },
    panel: true,
    sections: [
      {
        title: 'Highlight Contributions',
        highlights: [
          'Designed and implemented a full-stack data visualization and monitoring center, from SQL backend to Python-Django web interface.',
          'Produced a demo video and documentation detailing the design concept, process, and final solution.',
        ],
      },
      {
        title: 'Demo Video',
        body: (
          <VideoEmbed 
              src="https://www.youtube-nocookie.com/embed/TVWjlOE97k4?modestbranding=1&rel=0&playsinline=1" 
              title="patchuolink demo" 
          />
        ),
      },
      {
        title: 'Introduction',
        body: (
          <>
            <P>The opportunity space lies in tackling the soil degradation caused by patchouli cultivation, which often forces farmers to abandon and relocate farmland. By integrating IoT technologies into the growth phase, there is potential to guide more sustainable land management, improve crop yield and quality, and ultimately increase farmers' revenue. This space directly engages farmers as the main beneficiaries, with farm extension workers supporting adoption and knowledge transfer.</P>
            <P>We introduce Patchoulink, an advanced IoT system for real-time cultivation monitoring. Our prototype focuses on data flow through wireless communication, data management, storage, and analysis, with a user-friendly website interface. Our prototype focuses on data flow through wireless communication, data management, storage, and analysis, with a user-friendly website interface.</P>
            <iframe
              src="/files/projects/patchuolink/patchuolink_visual.pdf"
              style={{ width: "100%", height: 700, border: "none" }}
            />
            <P>Utilizing wireless communication, nodes in the field transmit data in real time. The data journey begins with capturing analog signals from the sensor, packaging the data with communication protocols, and converting it into digital signals for transmission. Once received, the data is decoded and stored in a structured backend database, which records node configurations.</P>
            <P>The heart of Patchoulink lies in its ability to analyze and present this data in a website interface. Here, farmers gain actionable insights, visualized with clarity and precision. Defined thresholds alert users to optimal growing conditions, ensuring informed decision-making. Further enhancing usability, Patchoulink features an OpenAI chatbot for immediate support, simplifying the translation of complex data into actionable farming strategies.</P>
            <P>Patchoulink is more than a technological advancement for Indonesian patchouli farming—it's a sustainable, intelligent revolution, empowering farmers with instant insights for informed decision-making.</P>
          </>
        ),
      },
      {
        title: 'Hub Design',
        body: (
          <>
            <P>I was responsible for designing the central data visualization and monitoring hub, including database architecture and real-time data management with SQL on the backend, and a Python-Django web interface on the frontend.</P>
            <Figure
              variant="full"
              src="/figures/projects/patchuolink/dashboard1.png"
              alt="patchuolink webpage dashboard"
              width={1200}
              height={600}
              caption="Fig 1: Pachuolink webpage dashboard."
            />
            <div className="grid md:grid-cols-2 gap-6 my-6 items-start">
                {/* Column 1 */}
                <div className="col-span-1">
                    <Figure
                    src="/figures/projects/patchuolink/dashboard2.png"
                    alt="Experimental setup"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig 2: Dashboard page for overview of all information."
                    />
                </div>

                {/* Column 2 */}
                <div className="col-span-1 space-y-4">
                    <Figure
                    src="/figures/projects/patchuolink/chatbot.png"
                    alt="Methodology flow"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig 3: Chatbot page for information integration and Q&A type of query."
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 my-6 items-start">
                {/* Column 1 */}
                <div className="col-span-1">
                    <Figure
                    src="/figures/projects/patchuolink/maps.png"
                    alt="Experimental setup"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig 4: Map page including measurement node's geographical location for easy view and check."
                    />
                </div>

                {/* Column 2 */}
                <div className="col-span-1 space-y-4">
                    <Figure
                    src="/figures/projects/patchuolink/rawtable.png"
                    alt="Methodology flow"
                    width={600}
                    height={400}
                    variant="inline"
                    caption="Fig 5: Update history page for all raw data table."
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
              This project was a team effort. Credit to my wonderful teammates - Rachel, Kevin, Bella, Vhea, and Caroline!
            </P>
          </>
        ),
      },
    ],
    resources: [
      { label: 'GitHub Repo', href: 'https://github.com/aiqiz/Patchuolink' },
      { label: 'Team Design Dossier', href: 'https://drive.google.com/drive/folders/18xV06bwRk_xcrWZuJ-arpAHzBY_tWKWn?usp=sharing' },
    ],
  } as const

  return <ProjectPage config={config}/>
}