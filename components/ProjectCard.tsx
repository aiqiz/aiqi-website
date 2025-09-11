'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex-none snap-start w-72 md:w-80 rounded-2xl border border-black/10 p-6 bg-white shadow-soft"
    >
      {/* Header: title + actions on the right */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <div className="flex items-center gap-3">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-2"
            >
              External
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-2"
            >
              GitHub
            </Link>
          )}
          {project.slug && (
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm underline underline-offset-2"
            >
              View
            </Link>
          )}
        </div>
      </div>


      {/* Meta (optional) */}
      {(project.organization || project.supervisor) && (
        <div className="mt-1 text-sm text-gray-700 flex flex-col gap-y-1">
          {project.organization && (
            <span>
              <span className="font-medium">Organization:</span> {project.organization}
            </span>
          )}
          {project.supervisor && (
            <span>
              <span className="font-medium">Supervisor:</span> {project.supervisor}
            </span>
          )}
        </div>
      )}

      {/* Description */}
      {project.description && (
        <p className="mt-2 opacity-80 leading-relaxed">{project.description}</p>
      )}

      {/* Tags */}
      {project.tags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/20 bg-white/70 px-2.5 py-1 text-xs font-medium text-gray-900 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Time */}
      {project.time && (
        <p className="mt-2 text-sm text-gray-500">{project.time}</p>
      )}
    </motion.div>
  )
}
