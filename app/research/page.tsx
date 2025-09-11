'use client'
import { useMemo, useState } from 'react'
import { projects } from '@/lib/research'
import ResearchCard from '@/components/ResearchCard'

export default function ProjectsPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return projects.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <div>
      <h1 className="text-2xl font-semibold">Research</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by keyword (e.g., domino, VPD, Next.js)"
        className="mt-4 w-full rounded-xl border border-black/10 bg-white px-4 py-2 outline-none shadow-soft"
      />
      <div className="mt-6 grid gap-4 ">
        {filtered.map((p) => (
          <ResearchCard key={p.slug} project={p} />
        ))}
        {filtered.length === 0 && (
          <p className="opacity-70">No matches. Try a different keyword.</p>
        )}
      </div>
    </div>
  )
}
