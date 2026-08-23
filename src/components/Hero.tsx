import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { LaunchDappButton } from "@/components/LaunchDappButton";
import { assetPath } from "@/lib/constants";
import { LiveInfoBar } from "@/components/LiveInfoBar";

export function Hero() {
  return (
    <>
      <LiveInfoBar />
      <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-navy-800 bg-navy-950 text-parchment-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(247,208,70,0.13),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-24">
        <div>
          <p className="celoht-hero-reveal font-mono text-xs uppercase tracking-[0.2em] text-gold-300">
            CeloHT
          </p>

          <h1
            id="hero-title"
            className="celoht-hero-reveal celoht-hero-reveal-2 mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building a More Inclusive Digital Economy for Haiti
          </h1>

          <p className="celoht-hero-reveal celoht-hero-reveal-3 mt-6 max-w-2xl text-lg leading-8 text-parchment-100/75">
            An open-source Haitian Web3 initiative building practical pathways through financial
            inclusion, education, digital payments, entrepreneurship, and community development on Celo.
          </p>

          <div className="celoht-hero-reveal celoht-hero-reveal-4 mt-8 flex flex-wrap gap-3">
            <LaunchDappButton size="lg" />
            <Link
              href="/about"
              className="group inline-flex min-h-12 items-center gap-2 rounded-md border border-parchment-100/30 px-6 py-3 text-sm font-semibold text-parchment-50 transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              Explore CeloHT
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="celoht-hero-reveal celoht-hero-reveal-5 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-parchment-100/65">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-forest-500" /> Haitian-led</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Built in public</span>
            <Link href="/technology" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
              Explore ecosystem <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link href="/documentation" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
              <BookOpen size={14} aria-hidden="true" /> Documentation
            </Link>
          </div>
        </div>

        <div
          className="relative flex min-h-[22rem] items-center justify-center overflow-hidden border border-parchment-100/15 bg-navy-900 px-6 py-10 text-parchment-50 shadow-2xl shadow-black/20 lg:min-h-[30rem]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(245,200,66,0.24),transparent_36%)]" />
          <div className="celoht-logo-mark relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-2xl bg-[#ffff58] shadow-[0_24px_80px_rgba(247,208,70,0.2)] sm:h-80 sm:w-80">
            <span className="celoht-logo-ambient" aria-hidden="true" />
            <span className="celoht-logo-sweep" aria-hidden="true" />
            <Image
              src={assetPath("/celoht-logo.png")}
              alt="CeloHT logo"
              width={420}
              height={420}
              className="relative z-10 h-full w-full object-cover"
            />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
