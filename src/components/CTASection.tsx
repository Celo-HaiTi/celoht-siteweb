import Link from "next/link";

type Props = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  external?: boolean;
};

export function CTASection({
  title,
  description,
  primary,
  secondary,
  external,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-gold-300/20 bg-[radial-gradient(circle_at_85%_15%,rgba(111,196,155,0.16),transparent_28%),linear-gradient(145deg,#102d46,#091a2d)] px-6 py-14 text-center text-parchment-50 shadow-[0_24px_80px_rgba(1,8,18,0.28)] sm:px-16 sm:py-16">
        <div
          className="celoht-grid pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-parchment-100/75">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {external ? (
              <a
                href={primary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center rounded-md bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-300"
              >
                {primary.label}
              </a>
            ) : (
              <Link
                href={primary.href}
                className="inline-flex min-h-12 items-center rounded-md bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-300"
              >
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex min-h-12 items-center rounded-md border border-parchment-100/30 px-6 py-3 text-sm font-semibold text-parchment-50 transition-colors hover:border-gold-300 hover:text-gold-300"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
