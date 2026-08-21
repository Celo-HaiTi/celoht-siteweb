import type { Metadata } from "next";
import Link from "next/link";
import { DocumentationArticle } from "@/components/DocumentationArticle";

export const metadata: Metadata = {
  title: "Funding Model",
  description:
    "CeloHT's published funding model, allocation principles, and long-term sustainability approach.",
  alternates: { canonical: "/funding" },
};

export default function FundingPage() {
  return (
    <DocumentationArticle
      eyebrow="Security and funding"
      title="Funding Model"
      lead="CeloHT documents how support may reach education, agent operations, reforestation, and public infrastructure without selling a CeloHT token or offering an investment product."
      sections={[
        {
          title: "Published sources",
          children: (
            <ul className="max-w-3xl list-disc space-y-3 pl-6 text-ink-soft">
              <li>Celo ecosystem grants and aligned programs.</li>
              <li>Strategic partnerships tied to specific project work.</li>
              <li>Voluntary community contributions.</li>
              <li>
                Direct donations routed to a specific registered project where
                the DApp flow supports it.
              </li>
            </ul>
          ),
        },
        {
          title: "What funding is not",
          children: (
            <p className="max-w-3xl text-ink-soft">
              CeloHT does not raise funds by selling a token, running an ICO or
              IDO, or offering an investment product. The{" "}
              <Link
                href="/no-token-policy"
                className="font-semibold text-gold-300 hover:text-gold-500"
              >
                No-Token Policy
              </Link>{" "}
              is the dedicated public statement.
            </p>
          ),
        },
        {
          title: "Allocation and sustainability",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Published policy identifies education material, agent-network
              operations, and reforestation as core uses. The long-term
              direction is to reduce dependence on grants through reasonable,
              transparent service fees within the agent network while keeping
              claims tied to verified reporting.
            </p>
          ),
        },
        {
          title: "Accountability",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Financial transparency is connected to governance and public
              reporting. See{" "}
              <Link
                href="/transparency/financial"
                className="font-semibold text-gold-300 hover:text-gold-500"
              >
                Financial Transparency
              </Link>{" "}
              for the public reporting model and{" "}
              <Link
                href="/governance"
                className="font-semibold text-gold-300 hover:text-gold-500"
              >
                Governance
              </Link>{" "}
              for decision responsibilities.
            </p>
          ),
        },
      ]}
      previous={{ label: "Risks and protections", href: "/security/risks" }}
      next={{ label: "Roadmap", href: "/roadmap" }}
    />
  );
}
