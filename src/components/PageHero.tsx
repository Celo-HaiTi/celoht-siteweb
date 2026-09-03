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
    <div className="relative overflow-hidden border-b border-navy-800 bg-[linear-gradient(135deg,#071525_0%,#0b1d31_58%,#071525_100%)] text-parchment-50">
      <div
        className="celoht-grid pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:pb-24 lg:pt-20">
        <p
          className={`font-mono text-xs uppercase tracking-[0.2em] ${toneClasses[tone]}`}
        >
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-parchment-100/75 sm:text-xl">
          {lead}
        </p>
      </div>
    </div>
  );
}
