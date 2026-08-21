import type { Metadata } from "next";
import { DocumentationArticle } from "@/components/DocumentationArticle";

export const metadata: Metadata = {
  title: "No-Token Status and Policy",
  description:
    "CeloHT's explicit policy that it has not created, issued, or planned a CeloHT token.",
  alternates: { canonical: "/no-token-policy" },
};

export default function NoTokenPolicyPage() {
  return (
    <DocumentationArticle
      eyebrow="Governance and legal"
      title="No-Token Status and Policy"
      lead="CeloHT has not created, issued, or planned a token of its own. This policy is published separately so the position is easy to find and independently evaluate."
      sections={[
        {
          title: "What the policy means",
          children: (
            <ul className="max-w-3xl list-disc space-y-3 pl-6 text-ink-soft">
              <li>
                CeloHT is not a blockchain, Layer 1 network, cryptocurrency,
                ICO, IDO, NFT project, or investment platform.
              </li>
              <li>
                CELO and USDm are assets of the Celo ecosystem, not
                CeloHT-issued assets.
              </li>
              <li>
                CeloHT governance is role-based and is not token-weighted.
              </li>
            </ul>
          ),
        },
        {
          title: "Why this is published separately",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Projects in the crypto and fintech space can change direction
              without making that change easy to find. A standalone policy makes
              any future departure visible, deliberate, and subject to the
              published governance process.
            </p>
          ),
        },
        {
          title: "Changing the policy",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Any change would require the governance process, public
              discussion, and the applicable comment period. Until an official
              public change is documented, this no-token policy remains the
              CeloHT position.
            </p>
          ),
        },
      ]}
      previous={{ label: "Governance", href: "/governance" }}
      next={{ label: "Brand identity", href: "/brand-identity" }}
    />
  );
}
