import type { Metadata } from "next";
import { DocumentationArticle } from "@/components/DocumentationArticle";

export const metadata: Metadata = {
  title: "DApp Services",
  description:
    "The documented CeloHT DApp services for learning, wallet access, payments, agents, donations, and impact.",
  alternates: { canonical: "/dapp/services" },
};

export default function DAppServicesPage() {
  return (
    <DocumentationArticle
      eyebrow="DApp technical documentation"
      title="DApp Services"
      lead="The CeloHT DApp is the product layer where education, wallet-compatible payments, community support, donations, and impact information meet."
      sections={[
        {
          title: "Education and onboarding",
          children: (
            <p className="max-w-3xl text-ink-soft">
              The product experience is connected to CeloHT&apos;s Haitian
              Creole financial literacy and Web3 curriculum. Users should be
              able to understand wallet safety, USDm, CELO network fees, and the
              limits of a digital payment tool before using it.
            </p>
          ),
        },
        {
          title: "Wallets and payments",
          children: (
            <p className="max-w-3xl text-ink-soft">
              The DApp is designed around wallet-compatible access in the Celo
              ecosystem. Transfer and payment flows use the relevant network
              assets and services; CeloHT does not own the Celo blockchain,
              CELO, USDm, or Valora.
            </p>
          ),
        },
        {
          title: "Agents, donations, and impact",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Community agents provide human support around access and
              education. Donation and impact features are documented as separate
              responsibilities so users can distinguish a planned capability
              from an operational result.
            </p>
          ),
        },
      ]}
      previous={{ label: "Architecture", href: "/technology/architecture" }}
      next={{ label: "Deployment", href: "/dapp/deployment" }}
    />
  );
}
