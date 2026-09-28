export type Publication = {
  title: string
  /** Author list in order. Your own name is bolded automatically. */
  authors: string[]
  /** Journal / conference, e.g. 'Atmospheric Chemistry and Physics'. */
  venue: string
  year: number | string
  /** Optional note such as 'in review' or 'in prep'. */
  status?: string
  links?: { label: string; href: string }[]
}

/** The name that gets highlighted in author lists. */
export const me = 'Aiqi Zhang'

// Newest first. The entry below is a PLACEHOLDER showing the format —
// replace it with your real publications before deploying.
export const publications: Publication[] = [
  {
    title: 'Paper title goes here',
    authors: ['Aiqi Zhang', 'Co-author Name', 'Debra Wunch'],
    venue: 'Journal or Conference Name',
    year: 2026,
    status: 'in prep',
    links: [
      // { label: 'PDF', href: '/files/papers/my-paper.pdf' },
      // { label: 'DOI', href: 'https://doi.org/...' },
    ],
  },
]
