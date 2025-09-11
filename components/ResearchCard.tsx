'use client'
import { motion } from 'framer-motion'
import type { Research } from '@/lib/research'
import Link from 'next/link'

export default function ResearchCard({ project }: { project: Research }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-black/10 p-6 bg-white shadow-soft"
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
          <Link
            href={`/research/${project.slug}`}
            className="text-sm underline underline-offset-2"
          >
            View Detail
          </Link>
        </div>
      </div>

      {/* Meta: University */}
      {(project.university) && (
        <div className="mt-1 text-sm text-gray-700 flex flex-wrap gap-x-6 gap-y-1">
          {project.university && (
            <span>
              <span className="font-medium">University:</span> {project.university}
            </span>
          )}
        </div>
      )}

      {/* Meta: Supervisor */}
      {(project.university) && (
        <div className="mt-1 text-sm text-gray-700 flex flex-wrap gap-x-6 gap-y-1">
          {project.supervisor && (
            <span>
              <span className="font-medium">Supervisor:</span> {project.supervisor}
            </span>
          )}
        </div>
      )}

              
      {/* Description */}
      <p className="mt-2 opacity-80">{project.description}</p>

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

      {/* Time (plain grey line) */}
      {project.time && (
        <p className="mt-2 text-sm text-gray-500">{project.time}</p>
      )}
    </motion.div>
  )
}
