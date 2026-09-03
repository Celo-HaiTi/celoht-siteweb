import Link from "next/link";
import { GrowthRings } from "@/components/GrowthRings";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <GrowthRings className="h-40 w-40 text-navy-700/30 dark:text-parchment-100/20" />
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft dark:text-parchment-100/50">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
        This page hasn&rsquo;t taken root yet
      </h1>
      <p className="mt-4 max-w-md text-ink-soft dark:text-parchment-100/70">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or it moved. Try
        the homepage, or search for what you need.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-parchment-50 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-600"
        >
          Back to home
        </Link>
        <Link
          href="/documentation"
          className="rounded-full border border-navy-700/20 px-6 py-3 text-sm font-semibold hover:bg-navy-700/10 dark:border-parchment-100/20 dark:hover:bg-parchment-100/10"
        >
          Browse documentation
        </Link>
      </div>
    </div>
  );
}
