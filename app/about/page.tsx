"use client";

import React, { useEffect, useMemo, useState } from "react";

type BioBody = string | string[] | React.ReactNode | React.ReactNode[];
type BioSection = {
  title: string;
  body?: BioBody;
  bullets?: string[];
  chips?: string[];
};

function MultiParagraph({ body }: { body?: BioBody }) {
  if (body == null) return null;

  const paras: React.ReactNode[] = Array.isArray(body)
    ? body
    : typeof body === "string"
    ? body.split(/\n{2,}/)
    : [body];

  return (
    <div className="mt-1.5 space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
      {paras.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

export default function AboutPage() {
  const galleryBasePath = "/figures/about/gallery";
  const galleryCount = 47;
  const photos = useMemo(
    () => makeRandomPhotos(galleryBasePath, galleryCount),
    [galleryBasePath, galleryCount]
  );

  const bioSections: Array<BioSection> = [
    {
      title: "Hi, I'm Aiqi.",
      body: [
        "I'm a fourth-year undergraduate student in Engineering Science (Major Engineering Physics, Minor Artificial Intelligence) at the University of Toronto.",
        "I am passionate about developing engineering tools that reveal hidden patterns in the physical world and advancing our understanding of complex systems through data analysis and modeling."
      ],
    },
    {
      title: "Research Interest",
      bullets: [
        "Atmospheric and carbon cycle modeling across diverse spatial and temporal scales",
        "Remote sensing and time-series data processing integrated with machine learning–driven analysis",
        "Urban environmental systems and their impact on climate and carbon dynamics",
        "Experimental physics with a focus on data-driven pattern analysis and modeling"
      ]
    },
    {
      title: "Experience & Past Projects",
      body: [
        "As an Engineering Science student, I have gained experience in both engineering design and scientific research through coursework, labs, and summer programs.",
        "In the first two years of the program, I focused on building core engineering skills through coursework, design projects, and hackathons. In the summer after my second year, I conducted research at Nanyang Technological University (NTU), gaining international academic and laboratory experience. Entering the Engineering Physics program in third year, I engaged in advanced physics topics and laboratory research. During the summer, I worked as a student researcher in the Atmospheric Physics Group under Prof. Debra Wunch and as a lab technician in the Advanced Undergraduate Laboratory, where I contributed to setting up new experiments while continuing my own research.",
      ],
    },
    {
      title: "Tools I Reach For",
      body: [
        <>
          <span className="underline underline-offset-2">Programming:</span> Python, MATLAB, C, C++, SQL, JavaScript, HTML, CSS, Assembly, Linux
        </>,
        <>
          <span className="underline underline-offset-2">Hardware & CAD Design:</span> Arduino, Raspberry Pi, Fusion 360, SolidWorks
        </>,
        <>
          <span className="underline underline-offset-2">Photography & Video Editing:</span> Final Cut Pro, Adobe Photoshop, Adobe Lightroom
        </>
      ],
    },
    {
      title: "General Interests",
      body: [
        "I first discovered nature photography as a teenager, and it has remained a lasting passion. Each photo captures a fleeting moment with the creatures I’ve been fortunate to encounter, and I've put together a small gallery for you to explore."
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 text-lg md:text-xl">
      {/* Hero Header with portrait */}
      <header className="relative h-[40vh] md:h-[56vh] w-full overflow-hidden">
        <img
          src="/figures/about/me2.JPG"
          alt="Portrait"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      </header>

      {/* Bio section */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 -mt-16 relative z-10">
        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-lg">
          <div className="space-y-6">
            {bioSections.map((sec, i) => (
              <section key={i}>
                {/* Section title */}
                <h2 className="text-lg md:text-xl font-medium text-gray-900">{sec.title}</h2>

                {/* Body paragraphs */}
                <div className="text-base md:text-lg text-gray-700">
                  <MultiParagraph body={sec.body} />
                </div>

                {/* Bullets */}
                {sec.bullets && (
                  <div className="text-base md:text-lg text-gray-700">
                    <ul className="mt-2 list-disc pl-5 space-y-1.5 marker:text-base md:marker:text-lg marker:text-gray-700">
                      {sec.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Chips */}
                {sec.chips && (
                  <div className="mt-2 flex flex-wrap gap-2 text-[13px] md:text-sm">
                    {sec.chips.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-full ring-1 ring-gray-200 bg-gray-50"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 mt-12 pb-20">
        <MovieGallery photos={photos} />
      </section>
    </main>
  );
}

function makeRandomPhotos(basePath: string, count: number) {
  const arr = Array.from({ length: count }, (_, i) => {
    const idx = String(i + 1).padStart(2, "0");
    return { src: `${basePath}/photo-${idx}.jpg`, alt: `Photo ${idx}` };
  });
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function MovieGallery({ photos }: { photos: { src: string; alt?: string }[] }) {
  const [idx, setIdx] = useState(0);
  const total = photos.length;
  const next = () => setIdx((n) => (n + 1) % total);
  const prev = () => setIdx((n) => (n - 1 + total) % total);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, [total, playing]);

  return (
    <div className="relative h-[60vh] md:h-[68vh] lg:h-[72vh] bg-black rounded-2xl overflow-hidden shadow-sm">
      <img
        src={photos[idx].src}
        alt={photos[idx].alt}
        className="absolute inset-0 w-full h-full object-contain select-none opacity-0 animate-[fadeIn_800ms_ease_forwards]"
      />
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={prev} className="bg-white/80 px-3 py-1 rounded-full shadow">←</button>
        <button onClick={next} className="bg-white/80 px-3 py-1 rounded-full shadow">→</button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        <button onClick={() => setPlaying(!playing)} className="bg-white/80 px-3 py-1 rounded-full shadow">
          {playing ? "Pause" : "Play"}
        </button>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  );
}
