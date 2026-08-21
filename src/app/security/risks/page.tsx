import type { Metadata } from "next";
import Link from "next/link";
import { DocumentationArticle } from "@/components/DocumentationArticle";

export const metadata: Metadata = {
  title: "Risks and Protections",
  description:
    "The main user, wallet, smart-contract, and adoption risks CeloHT documents and the protections around them.",
  alternates: { canonical: "/security/risks" },
};

export default function RisksAndProtectionsPage() {
  return (
    <DocumentationArticle
      eyebrow="Security and funding"
      title="Risks and Protections"
      lead="CeloHT is built around financial and blockchain tools that carry real risks. Clear education, cautious product claims, and private vulnerability reporting are part of the protection model."
      sections={[
        {
          title: "Wallet and user risk",
          children: (
            <p className="max-w-3xl text-ink-soft">
              A lost seed phrase, leaked private key, phishing message, or
              mistaken transaction can cause irreversible loss. CeloHT never
              asks for wallet secrets and directs sensitive security reports to{" "}
              <a
                href="mailto:security@celoht.com"
                className="font-semibold text-gold-300 hover:text-gold-500"
              >
                security@celoht.com
              </a>
              .
            </p>
          ),
        },
        {
          title: "Smart-contract and network risk",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Smart contracts, wallets, RPC providers, stablecoins, and the Celo
              network can change or fail. The project publishes contract status
              and addresses only when verified, and separates planned
              deployments from live deployments.
            </p>
          ),
        },
        {
          title: "Protection practices",
          children: (
            <ul className="max-w-3xl list-disc space-y-3 pl-6 text-ink-soft">
              <li>
                Content Security Policy and security headers for the website.
              </li>
              <li>
                Automated typecheck, lint, tests, build verification, CodeQL,
                and dependency review in the project workflow.
              </li>
              <li>Education that explains risks before encouraging use.</li>
              <li>
                Public governance and transparency pages that make policy
                changes inspectable.
              </li>
            </ul>
          ),
        },
        {
          title: "Continue to the full policy",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Read the{" "}
              <Link
                href="/security"
                className="font-semibold text-gold-300 hover:text-gold-500"
              >
                Security Policy
              </Link>{" "}
              for reporting instructions and the{" "}
              <Link
                href="/no-token-policy"
                className="font-semibold text-gold-300 hover:text-gold-500"
              >
                No-Token Policy
              </Link>{" "}
              for project boundaries.
            </p>
          ),
        },
      ]}
      previous={{ label: "Developer guide", href: "/developers/guide" }}
      next={{ label: "Funding model", href: "/funding" }}
    />
  );
}
