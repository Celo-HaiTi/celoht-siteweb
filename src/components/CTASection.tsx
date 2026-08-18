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
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl bg-navy-950 px-8 py-14 text-center text-parchment-50 sm:px-16">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-parchment-100/75">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {external ? (
            <a
              href={primary.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-600"
            >
              {primary.label}
            </a>
          ) : (
            <Link
              href={primary.href}
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-600"
            >
              {primary.label}
            </Link>
          )}
          {secondary && (
            <Link
              href={secondary.href}
              className="rounded-full border border-parchment-100/30 px-6 py-3 text-sm font-semibold text-parchment-50 transition-colors hover:bg-parchment-100/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
