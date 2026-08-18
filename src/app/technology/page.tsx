import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How CeloHT uses Celo, CELO, USDm, and Valora  -  as infrastructure we build on, not products we own.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Technology" }]} />
      <PageHero
        eyebrow="Technology"
        title="Infrastructure we use, not infrastructure we own"
        lead="Celo, CELO, USDm, and Valora are our technical foundation. CeloHT doesn't operate any of them  -  we build the education and community process that makes them accessible."
      />

      <Section title="">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-display text-2xl font-semibold">Celo</h3>
            <p className="mt-3 text-sm text-ink-soft dark:text-parchment-100/70">
              A public Layer-1 blockchain built for mobile-first access, using Proof-of-Stake
              consensus and EVM compatibility. CeloHT uses it as the base chain for agent-network
              transactions and reforestation rewards.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-display text-2xl font-semibold">USDm</h3>
            <p className="mt-3 text-sm text-ink-soft dark:text-parchment-100/70">
              A stablecoin pegged to the US dollar, used for everyday transactions  - 
              cash-in/cash-out, transfers, rewards  -  because its price stability makes it far more
              practical than a volatile asset for daily use.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-display text-2xl font-semibold">CELO</h3>
            <p className="mt-3 text-sm text-ink-soft dark:text-parchment-100/70">
              The network&rsquo;s native token, used for transaction fees and governance within the
              Celo protocol itself. We teach users what it is without positioning it as our primary
              product.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-display text-2xl font-semibold">Valora</h3>
            <p className="mt-3 text-sm text-ink-soft dark:text-parchment-100/70">
              A mobile wallet built for simplicity, letting users send and receive USDm and CELO
              without needing to understand everything under the hood. It&rsquo;s the wallet we
              recommend across our training material  -  CeloHT doesn&rsquo;t own or operate it.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Not a permanent, exclusive choice" title="Governed, not assumed">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          Celo and Valora are our current standard, but we&rsquo;re aware the crypto ecosystem keeps
          evolving. Any change to this foundational technology has to go through our governance
          process and be documented publicly.
        </p>
      </Section>

      <CTASection
        title="See the architecture behind it"
        description="Our developer documentation covers the technical layers of the CeloHT ecosystem in full detail."
        primary={{ label: "Read developer docs", href: "/developers" }}
        secondary={{ label: "View governance", href: "/governance" }}
      />
    </>
  );
}
