import type { MDXComponents } from "mdx/types";

/**
 * Required by Next.js App Router MDX support  -  provides the mapping from
 * Markdown elements to styled React components for every .mdx file
 * (currently: blog posts under src/app/blog/*).
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="font-display text-4xl font-semibold" {...props} />
    ),
    h2: (props) => (
      <h2 className="mt-8 font-display text-2xl font-semibold" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-6 font-display text-xl font-semibold" {...props} />
    ),
    p: (props) => (
      <p
        className="mt-4 leading-relaxed text-ink-soft dark:text-parchment-100/75"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="mt-4 list-disc space-y-2 pl-6 text-ink-soft dark:text-parchment-100/75"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mt-4 list-decimal space-y-2 pl-6 text-ink-soft dark:text-parchment-100/75"
        {...props}
      />
    ),
    a: (props) => <a className="underline underline-offset-2" {...props} />,
    strong: (props) => (
      <strong
        className="font-semibold text-ink dark:text-parchment-100"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="mt-4 border-l-4 border-gold-500 pl-4 italic text-ink-soft dark:text-parchment-100/70"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded bg-navy-700/10 px-1.5 py-0.5 font-mono text-sm dark:bg-parchment-100/10"
        {...props}
      />
    ),
    wrapper: (props) => (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {props.children}
      </div>
    ),
    ...components,
  };
}
