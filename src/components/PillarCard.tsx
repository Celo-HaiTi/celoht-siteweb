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

export function PillarCard({ number, title, description, href, accent, icon }: Props) {
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-2xl border bg-parchment-50 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-navy-900 ${accentClasses[accent]}`}
    >
      <div className="flex items-center justify-between">
        <span aria-hidden="true" className="text-2xl">
          {icon}
        </span>
        <span className="font-mono text-xs text-ink-soft dark:text-parchment-100/40">{number}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-soft dark:text-parchment-100/70">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:gap-2 dark:text-parchment-100">
        Learn more
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
