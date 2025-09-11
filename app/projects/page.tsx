// app/projects/page.tsx
import type { Metadata } from 'next'
import { ProjectRowsHScroll } from '@/components/ProjectKit'
import { projectRows } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Grouped projects with horizontal row scrollers.',
}

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="mt-2 opacity-80">
        Browse projects by group. Drag or scroll each row to see more.
      </p>

      {/* Three horizontal rows with the label as an inner subtitle */}
      <div className="mt-6">
        <ProjectRowsHScroll rows={projectRows} />
      </div>
    </div>
  )
}
