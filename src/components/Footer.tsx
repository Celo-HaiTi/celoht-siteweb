import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { footerNav } from "@/lib/nav";
import { LaunchDappButton } from "@/components/LaunchDappButton";
import {
  GITHUB_DAPP_URL,
  GITHUB_FLAGSHIP_URL,
  GITHUB_ORG_URL,
  GITHUB_WEBSITE_URL,
} from "@/lib/constants";

const githubLinks = [
  {
    label: "CeloHT core",
    detail: "Mission, governance, roadmap",
    href: GITHUB_FLAGSHIP_URL,
  },
  {
    label: "CeloHT DApp",
    detail: "Product code and contracts",
    href: GITHUB_DAPP_URL,
  },
  {
    label: "This website",
    detail: "Public interface and content",
    href: GITHUB_WEBSITE_URL,
  },
];

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

        <section aria-labelledby="footer-github-title" className="mt-12 border-y border-parchment-100/10 py-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold-300">
                <Github size={14} aria-hidden="true" /> Open source
              </p>
              <h2 id="footer-github-title" className="mt-2 font-display text-3xl font-semibold">
                See how CeloHT is built.
              </h2>
            </div>
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-parchment-100/75 underline-offset-4 transition-colors hover:text-gold-300 hover:underline"
            >
              Visit the GitHub organization <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-7 grid gap-px overflow-hidden border border-parchment-100/10 bg-parchment-100/10 sm:grid-cols-3">
            {githubLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group bg-navy-950 p-5 transition-colors hover:bg-navy-800"
              >
                <span className="flex items-center justify-between font-display text-lg font-semibold text-parchment-50">
                  {item.label}
                  <ArrowUpRight size={16} aria-hidden="true" className="text-gold-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="mt-2 block text-sm text-parchment-100/55">{item.detail}</span>
              </a>
            ))}
          </div>
        </section>

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
          <div className="flex items-start gap-4">
            <Image
              src="/celoht-logo.png"
              alt="CeloHT logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-xl"
            />
            <div>
              <p className="font-display text-lg font-semibold">CeloHT</p>
              <p className="mt-1 max-w-md text-sm text-parchment-100/60">
                A community-driven, open-source initiative built on the Celo ecosystem. Not a
                blockchain, a token, an ICO, or an investment platform.
              </p>
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
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
