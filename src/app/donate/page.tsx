import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { DAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support CeloHT's work directly through the dApp's donation flow  -  no intermediary custody of funds.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Donate" }]} />
      <PageHero
        eyebrow="Donate"
        title="Support goes directly to a registered project"
        lead="Donations happen inside the CeloHT dApp, where they're routed through our open-source DonationManager contract  -  earmarked to a specific project, never pooled into a general fund CeloHT controls freely."
      />

      <Section eyebrow="How it works" title="Three steps">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gold-500/30 p-6">
            <h3 className="font-semibold">1. Connect your wallet</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Any Valora-compatible or WalletConnect-supported wallet, in the
              dApp.
            </p>
          </div>
          <div className="rounded-2xl border border-gold-500/30 p-6">
            <h3 className="font-semibold">2. Choose a project</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Pick a registered reforestation project to support directly.
            </p>
          </div>
          <div className="rounded-2xl border border-gold-500/30 p-6">
            <h3 className="font-semibold">3. Donate in USDm</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Your donation is recorded on-chain and earmarked to that
              project&rsquo;s available balance.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Fee policy" title="0% by default, capped at 5%">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          The platform fee on donations defaults to 0% and is hard-capped at 5%
          directly in the smart contract&rsquo;s code - no administrator can
          raise it further without redeploying the contract entirely, which
          would be a publicly visible, auditable change.
        </p>
      </Section>

      <CTASection
        title="Ready to donate?"
        description="Open the dApp to connect your wallet and support a project directly."
        primary={{ label: "Launch dApp to donate", href: DAPP_URL }}
        secondary={{ label: "Read the donation model", href: "/transparency" }}
        external
      />
    </>
  );
}
