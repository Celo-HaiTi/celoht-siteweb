import type { Metadata } from "next";
import { DocumentationArticle } from "@/components/DocumentationArticle";

export const metadata: Metadata = {
  title: "History",
  description:
    "The documented origin and development of the CeloHT initiative in Haiti.",
  alternates: { canonical: "/history" },
};

export default function HistoryPage() {
  return (
    <DocumentationArticle
      eyebrow="Identity and vision"
      title="History"
      lead="CeloHT began with a local question in Léogâne: how can people access modern financial tools without losing the human explanation and community trust those tools require?"
      sections={[
        {
          title: "A Haitian starting point",
          children: (
            <p className="max-w-3xl text-ink-soft">
              The initiative was founded by Johnny Dubic in Léogâne, Haiti. Its
              starting context was practical: smartphone access can reach
              communities where a traditional bank branch is difficult to reach,
              but access without understanding can create new risk.
            </p>
          ),
        },
        {
          title: "Why Celo",
          children: (
            <p className="max-w-3xl text-ink-soft">
              CeloHT chose to build within the Celo ecosystem because its
              mobile-first orientation, public blockchain infrastructure, CELO
              network asset, USDm stablecoin, and wallet-compatible tools
              provide a technical foundation for the project&apos;s education
              and community work. CeloHT does not operate the Celo blockchain.
            </p>
          ),
        },
        {
          title: "From education to a wider model",
          children: (
            <p className="max-w-3xl text-ink-soft">
              The work developed around three connected pillars: Haitian Creole
              financial and Web3 education, a trained community agent network,
              and reforestation. The website, DApp, documentation, governance,
              and transparency pages form the public information layer for that
              model.
            </p>
          ),
        },
        {
          title: "Current status",
          children: (
            <p className="max-w-3xl text-ink-soft">
              The published roadmap identifies Foundation as the current phase,
              followed by Validation, Growth, and Maturity. Future milestones
              remain plans until the project publishes evidence that they are
              complete.
            </p>
          ),
        },
      ]}
      previous={{ label: "Values", href: "/values" }}
      next={{ label: "Project vision", href: "/project-vision" }}
    />
  );
}
