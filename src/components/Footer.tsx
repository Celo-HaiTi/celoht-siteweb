import Image from "next/image";
import { DISCORD_URL, GITHUB_ORG_URL, assetPath } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-navy-700/10 bg-navy-950 text-parchment-100 dark:border-parchment-100/10">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-t border-parchment-100/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={assetPath("/celoht-logo.png")}
              alt="CeloHT logo"
              width={52}
              height={52}
              className="h-12 w-12 rounded-xl ring-1 ring-gold-500/30"
            />
            <span className="font-display text-xl font-semibold tracking-tight text-parchment-100">
              CeloHT
            </span>
          </div>

          <nav aria-label="Social links" className="flex items-center gap-4 text-sm sm:gap-6">
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noreferrer"
              className="text-gold-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-gold-400"
            >
              GitHub
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join CeloHT on Discord"
              className="text-parchment-100/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-parchment-100"
            >
              Discord
            </a>
            <a
              href="https://medium.com/@celoht3"
              target="_blank"
              rel="noreferrer"
              className="text-parchment-100/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-parchment-100"
            >
              Medium
            </a>
          </nav>
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-parchment-100/55">
          © 2026 CeloHT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
