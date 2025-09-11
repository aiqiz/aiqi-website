// global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string
      alt?: string
      poster?: string
      "camera-controls"?: boolean
      "auto-rotate"?: boolean
      "orientation"?: string;
      ar?: boolean
      class?: string
      style?: React.CSSProperties
    }
  }
}
