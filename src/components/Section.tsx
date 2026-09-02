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
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-300">
          {eyebrow}
        </p>
      )}
      {title && <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-parchment-50 sm:text-5xl">{title}</h2>}
      <div className={title || eyebrow ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
