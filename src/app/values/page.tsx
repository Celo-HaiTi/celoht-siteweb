import type { Metadata } from "next";
import { DocumentationArticle } from "@/components/DocumentationArticle";

export const metadata: Metadata = {
  title: "Values",
  description:
    "The principles that guide CeloHT's education, technology, governance, and community work.",
  alternates: { canonical: "/values" },
};

export default function ValuesPage() {
  return (
    <DocumentationArticle
      eyebrow="Identity and vision"
      title="Values"
      lead="CeloHT uses a small set of practical principles to decide what to build, how to explain it, and how to remain accountable to the communities it serves."
      sections={[
        {
          title: "Education before access",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Financial tools are only useful when people understand their
              risks, costs, and limits. CeloHT therefore puts Haitian Creole
              financial literacy and practical Web3 education before product
              adoption.
            </p>
          ),
        },
        {
          title: "Local trust, open systems",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Community agents and local participation provide human context,
              while open documentation and source code make the system
              inspectable by people beyond the immediate team.
            </p>
          ),
        },
        {
          title: "Evidence over promises",
          children: (
            <p className="max-w-3xl text-ink-soft">
              The project distinguishes completed work, current operations, and
              future plans. When a metric, partnership, deployment, or result is
              not verified, CeloHT says so directly.
            </p>
          ),
        },
        {
          title: "Long-term community value",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Financial inclusion, entrepreneurship, and reforestation are
              treated as connected work. The goal is useful infrastructure that
              respects people, local ecosystems, and the wider Celo community.
            </p>
          ),
        },
      ]}
      previous={{ label: "Mission", href: "/mission" }}
      next={{ label: "History", href: "/history" }}
    />
  );
}
