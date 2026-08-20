import Link from "next/link";

type Props = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  external?: boolean;
};

export function CTASection({ title, description, primary, secondary, external }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="border border-navy-800 bg-navy-950 px-6 py-12 text-center text-parchment-50 shadow-[0_20px_50px_rgba(8,18,37,0.14)] sm:px-16 sm:py-14">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-parchment-100/75">{description}</p>
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
    </section>
  );
}
