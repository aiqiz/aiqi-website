import Link from 'next/link'

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <Link href="/projects" className="text-sm underline underline-offset-2">← Back to Research</Link>
      <article className="prose max-w-none">{children}</article>
    </div>
  )
}
