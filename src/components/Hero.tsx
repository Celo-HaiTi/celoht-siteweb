import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Coins, Globe2, Leaf, UsersRound, WalletCards } from "lucide-react";
import { DAPP_URL, assetPath } from "@/lib/constants";
import { LiveInfoBar } from "@/components/LiveInfoBar";

const orbitItems = [
  { icon: BookOpen, label: "Learn", className: "celoht-orbit-chip celoht-orbit-chip-1 left-0 top-8" },
  { icon: UsersRound, label: "Agents", className: "celoht-orbit-chip celoht-orbit-chip-2 right-0 top-10" },
  { icon: Leaf, label: "Impact", className: "celoht-orbit-chip celoht-orbit-chip-3 bottom-6 left-5" },
  { icon: Coins, label: "Payments", className: "celoht-orbit-chip celoht-orbit-chip-4 bottom-7 right-8" },
];

export function Hero() {
  return (
    <>
      <LiveInfoBar />
      <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-navy-800 bg-[radial-gradient(circle_at_top_left,rgba(255,212,59,0.08),transparent_28%),linear-gradient(180deg,#061426_0%,#091b2e_55%,#061426_100%)] text-parchment-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(247,208,70,0.17),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-24">
          <div className="relative z-10">
            <div className="celoht-hero-reveal inline-flex items-center gap-2 rounded-full border border-gold-300/25 bg-gold-500/8 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden="true" />
              CeloHT
            </div>

            <h1
              id="hero-title"
              className="celoht-hero-reveal celoht-hero-reveal-2 mt-5 max-w-3xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.05em] text-parchment-50 sm:text-6xl lg:text-7xl"
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
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-6 py-3 text-sm font-semibold text-navy-950 shadow-[0_12px_30px_rgba(255,212,59,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(255,212,59,0.42)]"
              >
                Open CeloHT
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/technology"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-parchment-100/30 bg-white/3 px-6 py-3 text-sm font-semibold text-parchment-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-300"
              >
                Explore the infrastructure
              </Link>
            </div>
            <div className="celoht-hero-reveal celoht-hero-reveal-5 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-parchment-100/65">
              <span className="inline-flex items-center gap-2 rounded-full border border-forest-500/25 bg-forest-500/8 px-2.5 py-1"><span className="h-1.5 w-1.5 rounded-full bg-forest-400" /> Haitian-led</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/8 px-2.5 py-1"><span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> Built in public</span>
              <Link href="/technology" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
                Explore ecosystem <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link href="/documentation" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
                <BookOpen size={14} aria-hidden="true" /> Documentation
              </Link>
            </div>
          </div>

          <div className="celoht-hero-visual relative flex min-h-[22rem] items-center justify-center overflow-hidden rounded-[2rem] border border-parchment-100/15 bg-[radial-gradient(circle_at_50%_35%,rgba(245,200,66,0.22),transparent_24%),linear-gradient(160deg,#0b1120_0%,#0f172a_36%,#111827_100%)] p-4 shadow-[0_30px_100px_rgba(2,8,20,0.42)] lg:min-h-[30rem]">
            <div className="absolute inset-0 opacity-90">
              <div className="celoht-halo-ring absolute inset-x-10 top-10 h-52 rounded-full border border-gold-400/25" />
              <div className="celoht-halo-ring celoht-halo-ring-2 absolute inset-x-16 top-16 h-40 rounded-full border border-parchment-100/15" />
              <div className="celoht-halo-ring celoht-halo-ring-3 absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-parchment-100/12" />
            </div>

            <div className="relative flex h-full w-full max-w-md items-center justify-center">
              {orbitItems.map(({ icon: Icon, label, className }) => {
                const IconComponent = Icon;
                return (
                  <div
                    key={label}
                    className={`absolute flex items-center gap-2 rounded-full border border-parchment-100/15 bg-navy-900/80 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-parchment-100/80 shadow-lg shadow-navy-950/40 ${className}`}
                  >
                    <IconComponent size={12} aria-hidden="true" className="text-gold-300" />
                    {label}
                  </div>
                );
              })}

              <div className="relative z-10 flex items-center justify-center">
                <div className="celoht-core-glow absolute h-28 w-28 rounded-full border border-gold-300/30 bg-gold-500/10 blur-2xl" aria-hidden="true" />
                <div className="celoht-logo-mark relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border border-gold-300/30 bg-[radial-gradient(circle_at_32%_28%,#fff5be_0%,#f7dc70_20%,#d39c1d_58%,#8d5f08_100%)] shadow-[0_20px_70px_rgba(247,208,70,0.34)]">
                  <div className="absolute inset-3 rounded-full border border-navy-950/20" aria-hidden="true" />
                  <Image
                    src={assetPath("/celoht-logo.png")}
                    alt="CeloHT logo"
                    width={128}
                    height={128}
                    className="relative z-10 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="celoht-badge-drift absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-parchment-100/15 bg-navy-950/80 px-4 py-2 text-center shadow-[0_10px_28px_rgba(2,8,20,0.35)] backdrop-blur-sm">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-gold-300">CeloHT</p>
                <div className="mt-2 flex items-center justify-center gap-2 text-[0.56rem] uppercase tracking-[0.18em] text-parchment-100/70">
                  <Globe2 size={12} aria-hidden="true" className="text-forest-400" />
                  Haiti
                </div>
              </div>

              <div className="celoht-badge-drift celoht-badge-drift-2 absolute left-8 top-8 inline-flex items-center gap-2 rounded-full border border-forest-500/30 bg-forest-500/10 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-forest-300 shadow-[0_12px_24px_rgba(24,119,86,0.22)]">
                <WalletCards size={12} aria-hidden="true" />
                Wallet access
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
