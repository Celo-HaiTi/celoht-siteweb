import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BookOpen, Code2, Leaf, UsersRound, WalletCards } from "lucide-react";
import { footerNav } from "@/lib/nav";
import { LaunchDappButton } from "@/components/LaunchDappButton";
import {
  DAPP_URL,
  GITHUB_ORG_URL,
  assetPath,
} from "@/lib/constants";

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

        <section aria-labelledby="footer-ecosystem-title" className="mt-12 border-y border-parchment-100/10 py-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-300">Écosystème ouvert</p>
          <h2 id="footer-ecosystem-title" className="mt-2 max-w-3xl font-display text-3xl font-semibold">
            Explorez l&apos;écosystème CeloHT
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-parchment-100/70">
            CeloHT est une initiative haïtienne Web3 open source qui relie outils numériques, apprentissage, participation communautaire et impact local.
          </p>
          <div className="mt-7 grid gap-px overflow-hidden border border-parchment-100/15 bg-parchment-100/15 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: WalletCards, title: "CeloHT DApp", copy: "Paiements, connexions aux wallets et services Web3.", href: DAPP_URL, external: true },
              { icon: BookOpen, title: "Éducation Web3", copy: "Ressources pour apprendre la blockchain, les actifs numériques et les paiements numériques.", href: "/education" },
              { icon: UsersRound, title: "Réseau d'agents", copy: "Une infrastructure communautaire pour rapprocher les services numériques et financiers.", href: "/agent-network" },
              { icon: Leaf, title: "Reboisement et impact", copy: "Plantation d'arbres, suivi de leur croissance et impact environnemental.", href: "/reforestation" },
              { icon: Code2, title: "Open Source", copy: "Comprendre le code, la documentation et les méthodes publiques de CeloHT.", href: "/open-source" },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon size={20} className="text-gold-300" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-parchment-100/65">{item.copy}</p>
                </>
              );
              return item.external ? (
                <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group bg-navy-950 p-5 transition-colors hover:bg-navy-800">{content}<ArrowUpRight size={15} className="mt-5 text-gold-300" aria-hidden="true" /></a>
              ) : (
                <Link key={item.title} href={item.href} className="group bg-navy-950 p-5 transition-colors hover:bg-navy-800">{content}<ArrowRight size={15} className="mt-5 text-gold-300" aria-hidden="true" /></Link>
              );
            })}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300">
              Explorer CeloHT <ArrowRight size={16} aria-hidden="true" />
            </Link>
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
              src={assetPath("/celoht-logo.png")}
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
            <a href={GITHUB_ORG_URL} target="_blank" rel="noreferrer" className="text-gold-300 hover:text-gold-500">
              GitHub →
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
          © {new Date().getFullYear()} CeloHT. Open source and community driven. Code licensed under Apache 2.0.
          &ldquo;Celo,&rdquo; &ldquo;USDm,&rdquo; and &ldquo;Valora&rdquo; are marks of their
          respective owners; CeloHT builds compatible tools and content and is not affiliated with
          or endorsed by them unless explicitly documented.
        </p>
      </div>
    </footer>
  );
}
