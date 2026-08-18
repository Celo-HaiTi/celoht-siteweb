type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  tone?: "navy" | "forest" | "gold";
};

const toneClasses: Record<NonNullable<Props["tone"]>, string> = {
  navy: "text-navy-700 dark:text-gold-300",
  forest: "text-forest-600 dark:text-forest-400",
  gold: "text-gold-800 dark:text-gold-300",
};

export function PageHero({ eyebrow, title, lead, tone = "navy" }: Props) {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-10 pt-8 sm:px-6">
      <p className={`font-mono text-xs uppercase tracking-[0.2em] ${toneClasses[tone]}`}>
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-ink-soft dark:text-parchment-100/75">{lead}</p>
    </div>
  );
}
