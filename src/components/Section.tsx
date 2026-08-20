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
    <section id={id} className={`mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20 ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-800">
          {eyebrow}
        </p>
      )}
      {title && <h2 className="mt-3 max-w-4xl font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">{title}</h2>}
      <div className={title || eyebrow ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
