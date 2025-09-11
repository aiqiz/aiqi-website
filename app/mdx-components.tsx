import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-2xl font-semibold mt-2 mb-4" {...props} />,
    h2: (props) => <h2 className="text-xl font-semibold mt-6 mb-3" {...props} />,
    p: (props) => <p className="my-3 leading-7" {...props} />,
    a: (props) => <a className="underline underline-offset-2" {...props} />,
    ul: (props) => <ul className="list-disc pl-6 my-3" {...props} />,
    img: (props) => <img className="rounded-xl border border-black/10 my-4" {...props} />,
    ...components,
  }
}
