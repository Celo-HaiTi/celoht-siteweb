import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { LaunchDappButton } from "@/components/LaunchDappButton";
import { GITHUB_ORG_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-navy-700/10 bg-navy-950 text-parchment-100 dark:border-parchment-100/10">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-semibold">Ready to try it yourself?</p>
            <p className="mt-1 text-sm text-parchment-100/70">
              Connect a Valora-compatible wallet and explore the CeloHT dApp.
            </p>
          </div>
          <LaunchDappButton size="lg" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-5">
          {footerNav.map((group) => (
            <div key={group.heading}>
              <h2 className="font-display text-lg font-semibold text-gold-300">{group.heading}</h2>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-parchment-100/70 transition-colors hover:text-parchment-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-parchment-100/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold">CeloHT</p>
            <p className="mt-1 max-w-md text-sm text-parchment-100/60">
              A community-driven, open-source initiative built on the Celo ecosystem. Not a
              blockchain, a token, an ICO, or an investment platform.
            </p>
          </div>
          <div className="flex gap-4 text-sm">
            <a
              href={GITHUB_ORG_URL}
              className="text-parchment-100/70 hover:text-parchment-100"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/CeloHtOfficial"
              className="text-parchment-100/70 hover:text-parchment-100"
              rel="noreferrer"
            >
              X / Twitter
            </a>
            <a
              href="https://medium.com/@celoht3"
              className="text-parchment-100/70 hover:text-parchment-100"
              rel="noreferrer"
            >
              Medium
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-parchment-100/50">
          © {new Date().getFullYear()} CeloHT Contributors. Code licensed under Apache 2.0.
          &ldquo;Celo,&rdquo; &ldquo;USDm,&rdquo; and &ldquo;Valora&rdquo; are marks of their
          respective owners; CeloHT builds compatible tools and content and is not affiliated with
          or endorsed by them unless explicitly documented.
        </p>
      </div>
    </footer>
  );
}
