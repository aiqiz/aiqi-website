export type Publication = {
  title: string
  /** Author list in order, e.g. 'Zhang, A.'. Use 'et al.' as the last entry if needed. */
  authors: string[]
  /** Journal / conference, if known. */
  venue?: string
  venueUrl?: string
  /** Journal it will be submitted to (shown as 'to be submitted to …'). */
  target?: { name: string; href?: string }
  year?: number | string
  /** e.g. 'Manuscript under review', 'Manuscript in preparation'. */
  status?: string
  links?: { label: string; href: string }[]
}

/** The author name that gets bolded in author lists. */
export const me = 'Zhang, A.'

// Newest / most advanced first.
export const publications: Publication[] = [
  {
    title: 'Adding Environmental Science into Advanced Physics Laboratories',
    authors: [
      'Harlick, A. M.',
      'Wunch, D.',
      'Lee, C.',
      'Hopper, M.',
      'Banwait, P.',
      'Chen, J.',
      'Kou, M.',
      'Xue, Q.',
      'Espinas, C.',
      'Zhang, A.',
    ],
    venue: 'Physics in Canada',
    venueUrl: 'https://pic-pac.cap.ca/',
    status: 'Accepted',
  },
  {
    title:
      'Phenology and the City: The Role of Vegetation in Monitoring Toronto’s Atmospheric Emissions',
    authors: [
      'Restrepo-Coupe, N.',
      'Wunch, D.',
      'Zhang, A.',
      'Madsen-Colford, S.',
      'Ars, S.',
      'Weaver, D.',
      'Munger, B.',
      'Arain, M. A.',
      'Brodeur, J.',
    ],
    status: 'Manuscript in preparation',
    // Once submitted: move this into `venue` / `venueUrl` and update `status`.
    target: { name: 'Biogeosciences', href: 'https://www.biogeosciences.net/' },
  },
  {
    title:
      'High Resolution Estimation of Urban Vegetation Carbon Uptake through Phenocam and Fluorescence-based Remote-Sensing Observational Framework',
    authors: [
      'Zhang, A.',
      'Restrepo-Coupe, N.',
      'Madsen-Colford, S.',
      'Ars, S.',
      'Weaver, D.',
      'Wu, D.',
      'Kandapath, M.',
      'Ma, W.',
      'Arain, A.',
      'Wunch, D.',
    ],
    status: 'Manuscript in preparation',
  },
]
