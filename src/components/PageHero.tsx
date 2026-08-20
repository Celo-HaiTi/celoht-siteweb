type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  tone?: "navy" | "forest" | "gold";
};

const toneClasses: Record<NonNullable<Props["tone"]>, string> = {
  navy: "text-gold-500",
  forest: "text-forest-400",
  gold: "text-gold-300",
};

export function PageHero({ eyebrow, title, lead, tone = "navy" }: Props) {
  return (
    <div className="border-b border-navy-800 bg-navy-950 text-parchment-50">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 lg:pb-20 lg:pt-14">
      <p className={`font-mono text-xs uppercase tracking-[0.2em] ${toneClasses[tone]}`}>
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-parchment-100/75">{lead}</p>
      </div>
    </div>
  );
}
