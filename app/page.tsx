'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="py-6 flex flex-col md:flex-row items-center gap-8">
        <div className="shrink-0 rounded-2xl border border-black/10 overflow-hidden bg-white">
          <Image
            src="/figures/about/me.JPG"
            alt="Your portrait"
            width={192}         // 48 * 4 px = 192px
            height={192}
            className="object-cover"
          />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Hi, this is Aiqi.
          </motion.h1>
          <p className="mt-3 max-w-2xl opacity-80">
            I'm a fourth-year undergraduate student in Engineering Science (Major Engineering Physics, Minor Artificial Intelligence) at the University of Toronto.
          </p>
          <div className="mt-3 flex gap-4 text-lg">
            <Link
              href="https://www.linkedin.com/in/aiqi-zhang-3821b92aa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-blue-600 transition-colors" />
            </Link>
            <Link
              href="https://github.com/aiqiz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:text-gray-800 transition-colors" />
            </Link>
            <Link
              href="https://devpost.com/zaqangela804?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devpost"
            >
              <SiDevpost className="hover:text-cyan-500 transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3 ">
        <Card title="About" desc={'Brief Bio\nResearch Interest\nGeneral Interets'} href="/about" />
        <Card title="Research" desc={'Environmental Science\nClassical Physics\nData Science\nMachine Learning'} href="/research" />
        <Card title="Projects" desc={'Engineering Design\nAdvanced Physics Lab\nHackathon'} href="/projects" />
      </section>
    </div>
  )
}


function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  const lines = desc.split('\n')

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-black/10 p-6 bg-white shadow-soft"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Link href={href} aria-label={`Go to ${title}`}>
          <span className="cursor-pointer hover:underline" aria-hidden>
            →
          </span>
        </Link>
      </div>

      {/* render desc as list */}
      <ul className="mt-2 opacity-80 list-disc pl-5 space-y-1">
        {lines.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>


    </motion.div>
  )
}
