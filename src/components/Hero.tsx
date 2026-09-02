import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { DAPP_URL, assetPath } from "@/lib/constants";
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
            Web3 infrastructure built for real access in Haiti.
          </h1>

          <p className="celoht-hero-reveal celoht-hero-reveal-3 mt-6 max-w-2xl text-lg leading-8 text-parchment-100/75">
            CeloHT connects education, wallet access, community agents, digital payments, and reforestation through an open-source ecosystem built on Celo.
          </p>

          <div className="celoht-hero-reveal celoht-hero-reveal-4 mt-8 flex flex-wrap gap-3">
            <Link
              href={DAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 items-center gap-2 rounded-md bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300"
            >
              Open CeloHT
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/technology"
              className="group inline-flex min-h-12 items-center gap-2 rounded-md border border-parchment-100/30 px-6 py-3 text-sm font-semibold text-parchment-50 transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              Explore the infrastructure
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
          className="relative flex min-h-[22rem] items-center justify-center overflow-hidden border border-parchment-100/15 bg-navy-900 px-4 py-6 text-parchment-50 shadow-2xl shadow-black/20 lg:min-h-[30rem]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(245,200,66,0.24),transparent_36%)]" />
          <div className="relative w-full max-w-md rounded-[1.75rem] border border-parchment-100/10 bg-navy-950/80 p-4 shadow-[0_24px_80px_rgba(2,8,20,0.25)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-parchment-100/10 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#ffff58]">
                  <Image
                    src={assetPath("/celoht-logo.png")}
                    alt="CeloHT logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-gold-300">CeloHT</p>
                  <p className="mt-1 text-xs text-parchment-100/60">Platform</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-forest-500/40 bg-forest-500/10 px-2 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-forest-300">
                <span className="h-1.5 w-1.5 rounded-full bg-forest-400" aria-hidden="true" />
                Operational
              </span>
            </div>

            <div className="mt-4 rounded-2xl border border-parchment-100/10 bg-navy-900 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.62rem] uppercase tracking-[0.18em] text-parchment-100/55">Wallet</p>
                <button type="button" className="rounded-full bg-gold-500 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-navy-950">
                  Connect Wallet
                </button>
              </div>
              <div className="mt-4 rounded-xl border border-dashed border-parchment-100/15 bg-navy-800/80 p-3 text-sm text-parchment-100/70">
                No wallet connected yet.
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-parchment-100/10 bg-navy-800/80 p-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.16em] text-parchment-100/55">CELO</p>
                  <p className="mt-2 text-lg font-semibold text-parchment-50">—</p>
                </div>
                <div className="rounded-xl border border-parchment-100/10 bg-navy-800/80 p-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.16em] text-parchment-100/55">USDm</p>
                  <p className="mt-2 text-lg font-semibold text-parchment-50">—</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-parchment-100/10 bg-navy-900/80 p-3">
                <p className="text-[0.58rem] uppercase tracking-[0.16em] text-parchment-100/55">Learn</p>
                <p className="mt-2 text-sm font-semibold text-parchment-50">Courses</p>
              </div>
              <div className="rounded-xl border border-parchment-100/10 bg-navy-900/80 p-3">
                <p className="text-[0.58rem] uppercase tracking-[0.16em] text-parchment-100/55">Agents</p>
                <p className="mt-2 text-sm font-semibold text-parchment-50">Support</p>
              </div>
              <div className="rounded-xl border border-parchment-100/10 bg-navy-900/80 p-3">
                <p className="text-[0.58rem] uppercase tracking-[0.16em] text-parchment-100/55">Reforest</p>
                <p className="mt-2 text-sm font-semibold text-parchment-50">Impact</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
