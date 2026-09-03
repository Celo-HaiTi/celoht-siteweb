import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  number: string;
  title: string;
  description: string;
  href: string;
  accent: "gold" | "forest" | "navy";
  icon: ReactNode;
};

const accentClasses: Record<Props["accent"], string> = {
  gold: "border-gold-500/40 hover:border-gold-500",
  forest: "border-forest-500/40 hover:border-forest-500",
  navy: "border-navy-600/40 hover:border-navy-600",
};

export function PillarCard({
  number,
  title,
  description,
  href,
  accent,
  icon,
}: Props) {
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-lg border bg-white p-6 shadow-[0_12px_30px_rgba(8,18,37,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(8,18,37,0.12)] ${accentClasses[accent]}`}
    >
      <div className="flex items-center justify-between">
        <span aria-hidden="true" className="text-2xl">
          {icon}
        </span>
        <span className="font-mono text-xs text-muted">{number}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">
        {description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-navy-900 group-hover:gap-2">
        Learn more
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
