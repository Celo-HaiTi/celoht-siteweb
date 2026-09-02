import { ArrowUpRight, Check, CircleDollarSign, Network, Smartphone, WalletCards } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/Section";

const walletCards = [
  {
    title: "MiniPay",
    badge: "Mobile-first Celo Wallet",
    description:
      "MiniPay provides a lightweight, mobile-first wallet experience for accessing stablecoins and Web3 applications on Celo. CeloHT is designed to support MiniPay as part of its broader wallet connectivity infrastructure.",
    features: [
      "Celo-native wallet experience",
      "Mobile-first design",
      "Stablecoin-focused payments",
      "Web3 application connectivity",
      "Designed for accessible digital finance",
    ],
    href: "https://docs.minipay.xyz/",
    icon: Smartphone,
    logo: "https://docs.minipay.xyz/minipay-logo.svg",
    logoAlt: "MiniPay",
  },
  {
    title: "WalletConnect",
    badge: "Multi-Wallet Connectivity",
    description:
      "WalletConnect provides an interoperability layer that enables users to connect compatible Web3 wallets to CeloHT applications, creating a flexible and wallet-agnostic user experience.",
    features: [
      "Multi-wallet connectivity",
      "Secure wallet sessions",
      "Web3 interoperability",
      "Mobile and desktop support",
      "Celo application integration",
    ],
    href: "https://walletconnect.network/",
    icon: Network,
    logo: "https://cdn.sanity.io/files/1t8iva7t/production/9c557fdfabdc747eda382bbe4c372579916567b7.svg",
    logoAlt: "WalletConnect",
  },
] as const;

export function WalletConnectivitySection() {
  return (
    <Section
      id="wallet-connectivity"
      eyebrow="Wallet infrastructure"
      title="Wallet Connectivity"
      className="relative overflow-hidden"
    >
      <p className="max-w-3xl text-lg leading-8 text-ink-soft dark:text-parchment-100/75">
        Connecting CeloHT to the next generation of mobile and Web3 wallets.
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-soft dark:text-parchment-100/65">
        CeloHT is designed to make digital finance accessible across the Celo ecosystem. Our
        wallet infrastructure is built to support seamless connections between users, CeloHT
        applications, and modern Web3 wallets.
      </p>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold-300">
            Current wallet reference
          </p>
          <p className="mt-2 text-sm leading-6 text-parchment-100/75">
            Valora remains the wallet we use across our training material, while this broader
            connectivity strategy keeps the ecosystem open to additional wallet experiences.
          </p>
        </div>
        <a
          href="https://valoraapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md border border-gold-300/40 px-4 py-2.5 text-sm font-semibold text-gold-300 transition-colors hover:border-gold-300 hover:bg-gold-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
        >
          Valora wallet
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {walletCards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.title}
              className="group flex h-full flex-col rounded-2xl border border-parchment-100/12 bg-[linear-gradient(145deg,rgba(16,38,64,0.92),rgba(6,20,38,0.92))] p-6 shadow-[0_20px_60px_rgba(2,8,20,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/45 hover:shadow-[0_24px_70px_rgba(2,8,20,0.35)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 p-2.5">
                    <Image
                      src={card.logo}
                      alt={card.logoAlt}
                      width={120}
                      height={40}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold-300">
                      {card.badge}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-parchment-50">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <Icon className="mt-1 shrink-0 text-gold-300/80" size={22} aria-hidden="true" />
              </div>
              <p className="mt-7 text-sm leading-7 text-parchment-100/70">{card.description}</p>
              <ul className="mt-6 grid gap-3 border-t border-parchment-100/10 pt-6 text-sm text-parchment-100/80 sm:grid-cols-2">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold-300" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 rounded-md bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
              >
                Explore {card.title}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-gold-500/20 bg-navy-900/65 px-5 py-7 sm:px-8">
        <p className="text-center font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gold-300">
          One accessible path into the Celo ecosystem
        </p>
        <div className="mt-7 grid items-center gap-3 text-center sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          <div className="font-display text-lg font-semibold text-parchment-50">CeloHT</div>
          <span className="hidden text-gold-300/70 sm:block" aria-hidden="true">-&gt;</span>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-parchment-100/75">
            <span className="rounded-full border border-gold-500/25 bg-gold-500/5 px-3 py-1.5">Valora</span>
            <span className="rounded-full border border-parchment-100/15 px-3 py-1.5">MiniPay</span>
            <span className="rounded-full border border-parchment-100/15 px-3 py-1.5">WalletConnect</span>
          </div>
          <span className="hidden text-gold-300/70 sm:block" aria-hidden="true">-&gt;</span>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-parchment-50">
            <WalletCards size={17} className="text-gold-300" aria-hidden="true" />
            Celo Network
          </div>
          <span className="hidden text-gold-300/70 sm:block" aria-hidden="true">-&gt;</span>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-parchment-50">
            <CircleDollarSign size={17} className="text-gold-300" aria-hidden="true" />
            USDm / CELO
          </div>
        </div>
      </div>
    </Section>
  );
}