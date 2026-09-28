"use client"

import { useCallback, useEffect, useMemo, useState } from 'react'

type Photo = { src: string; alt: string }

function toPhotos(srcs: string[]): Photo[] {
  return srcs.map((src, i) => ({ src, alt: `Nature photograph ${i + 1}` }))
}

export default function Gallery({ srcs }: { srcs: string[] }) {
  // Start sequential so server and client markup agree, then shuffle after
  // mount. Shuffling during render caused a hydration mismatch.
  const initial = useMemo(() => toPhotos(srcs), [srcs])
  const [photos, setPhotos] = useState(initial)
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const arr = toPhotos(srcs)
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    setPhotos(arr)
  }, [srcs])

  const total = photos.length
  const next = useCallback(() => setIdx((n) => (n + 1) % total), [total])
  const prev = useCallback(() => setIdx((n) => (n - 1 + total) % total), [total])

  useEffect(() => {
    if (!playing) return
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [playing, next])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  if (total === 0) return null
  const current = photos[idx]
  const upcoming = photos[(idx + 1) % total]

  return (
    <figure>
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm bg-surface sm:aspect-16/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="absolute inset-0 h-full w-full animate-[fade_600ms_ease] object-contain"
        />
        {/* Warm the next frame so the transition does not flash. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={upcoming.src} alt="" aria-hidden className="hidden" />
      </div>

      <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-faint">
        <span className="tabular-nums">
          {idx + 1} / {total}
        </span>
        <span className="flex gap-4 text-muted">
          <button type="button" onClick={prev} className="transition-colors hover:text-fg">
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="transition-colors hover:text-fg"
          >
            {playing ? 'Pause' : 'Play'}
          </button>
          <button type="button" onClick={next} className="transition-colors hover:text-fg">
            Next
          </button>
        </span>
      </figcaption>

      <style>{`@keyframes fade { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </figure>
  )
}
