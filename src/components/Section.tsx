import type { ReactNode } from "react";

type Props = {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ title, eyebrow, children, className = "", id }: Props) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-12 sm:px-6 ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft dark:text-parchment-100/50">
          {eyebrow}
        </p>
      )}
      {title && <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>}
      <div className={title || eyebrow ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
