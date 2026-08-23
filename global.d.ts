// global.d.ts
//
// React 19 removed the global `JSX` namespace; custom element types now go
// into the `react` module's JSX namespace instead.
import type React from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string
        alt?: string
        poster?: string
        'camera-controls'?: boolean
        'auto-rotate'?: boolean
        'shadow-intensity'?: string | number
        'shadow-softness'?: string | number
        orientation?: string
        ar?: boolean
        class?: string
        style?: React.CSSProperties
      }
    }
  }
}

export {}
