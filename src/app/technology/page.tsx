import type { Metadata } from "next";
import { CircleDollarSign, Fuel, Network, WalletCards } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { WalletConnectivitySection } from "@/components/WalletConnectivitySection";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How CeloHT uses Celo, CELO, USDm, Valora, MiniPay, and WalletConnect as wallet and payment infrastructure we build on, not products we own.",
  alternates: { canonical: "/technology" },
};

const technologyCards = [
  {
    number: "01",
    title: "Celo",
    label: "Base network",
    description:
      "A public Layer-1 blockchain built for mobile-first access, using Proof-of-Stake consensus and EVM compatibility. CeloHT uses it as the base chain for agent-network transactions and reforestation rewards.",
    icon: Network,
  },
  {
    number: "02",
    title: "USDm",
    label: "Stable-value payments",
    description:
      "A stablecoin pegged to the US dollar, used for everyday transactions - cash-in/cash-out, transfers, and rewards - because price stability makes it practical for daily use.",
    icon: CircleDollarSign,
  },
  {
    number: "03",
    title: "CELO",
    label: "Network utility",
    description:
      "The network's native asset, used for transaction fees and governance within the Celo protocol itself. We teach users what it is without positioning it as our primary product.",
    icon: Fuel,
  },
  {
    number: "04",
    title: "Valora",
    label: "Mobile wallet",
    description:
      "A mobile wallet built for simplicity, letting users send and receive USDm and CELO without needing to understand everything under the hood. CeloHT does not own or operate it.",
    icon: WalletCards,
  },
] as const;

export default function TechnologyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Technology" }]} />
      <PageHero
        eyebrow="Technology"
        title="Infrastructure we use, not infrastructure we own"
        lead="Celo, CELO, USDm, and Valora are our technical foundation. CeloHT doesn't operate any of them  -  we build the education and community process that makes them accessible."
      />

      <Section eyebrow="The CeloHT foundation" title="The infrastructure layer">
        <div className="grid gap-5 sm:grid-cols-2">
          {technologyCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group relative flex h-full min-h-64 flex-col overflow-hidden rounded-2xl border border-parchment-100/12 bg-[linear-gradient(145deg,rgba(16,38,64,0.9),rgba(6,20,38,0.98))] p-6 shadow-[0_18px_50px_rgba(2,8,20,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/45 hover:shadow-[0_24px_60px_rgba(2,8,20,0.32)] sm:p-7"
              >
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-500/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-300">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[0.62rem] tracking-[0.16em] text-parchment-100/40">
                    {card.number}
                  </span>
                </div>
                <div className="relative mt-7">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold-300">
                    {card.label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-parchment-50">
                    {card.title}
                  </h3>
                </div>
                <p className="relative mt-4 text-sm leading-7 text-parchment-100/70">
                  {card.description}
                </p>
                <div className="relative mt-auto flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-parchment-100/45">
                  <span
                    className="h-px w-8 bg-gold-500/45"
                    aria-hidden="true"
                  />
                  CeloHT foundation
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Not a permanent, exclusive choice"
        title="Governed, not assumed"
      >
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          Celo and Valora are our current standard, but we&rsquo;re aware the
          crypto ecosystem keeps evolving. Any change to this foundational
          technology has to go through our governance process and be documented
          publicly.
        </p>
      </Section>

      <WalletConnectivitySection />

      <CTASection
        title="See the architecture behind it"
        description="Our public documentation covers the technical layers of the CeloHT ecosystem in full detail."
        primary={{
          label: "Read technical documentation",
          href: "/documentation",
        }}
        secondary={{ label: "View governance", href: "/governance" }}
      />
    </>
  );
}
