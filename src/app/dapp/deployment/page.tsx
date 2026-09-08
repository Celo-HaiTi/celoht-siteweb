import type { Metadata } from "next";
import { DocumentationArticle } from "@/components/DocumentationArticle";
import { LaunchDappButton } from "@/components/LaunchDappButton";
import { GITHUB_CONTRACTS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "DApp Deployment and Availability",
  description:
    "What CeloHT publishes about DApp availability, network context, and deployment status.",
  alternates: { canonical: "/dapp/deployment" },
};

export default function DAppDeploymentPage() {
  return (
    <DocumentationArticle
      eyebrow="DApp technical documentation"
      title="Deployment and Availability"
      lead="CeloHT separates a public product entry point from claims about deployment status. This page explains what users can verify and where availability may still be limited."
      sections={[
        {
          title: "The public entry point",
          children: (
            <div className="space-y-4">
              <p className="max-w-3xl text-ink-soft">
                The current website provides a single Launch CeloHT DApp
                destination. Use it to open the product and review the wallet,
                network, and safety context before taking action.
              </p>
              <LaunchDappButton size="lg" />
            </div>
          ),
        },
        {
          title: "Network and deployment status",
          children: (
            <div>
              <p className="max-w-3xl text-ink-soft">
                The current DApp and contract deployment path is documented as
                Celo Sepolia, chain ID 11142220. Consult the official
                smart-contract repository for the current deployment manifest
                and verification evidence. Mainnet is not enabled or claimed;
                any future deployment requires independent audit and operational
                approval.
              </p>
              <a
                href={GITHUB_CONTRACTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex font-semibold text-gold-800 underline-offset-4 hover:underline"
              >
                Review contract deployment evidence{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          ),
        },
        {
          title: "Availability guidance",
          children: (
            <ul className="max-w-3xl list-disc space-y-3 pl-6 text-ink-soft">
              <li>
                Check the live network status bar for current Celo RPC
                verification.
              </li>
              <li>
                Never share a private key, seed phrase, or wallet password with
                anyone claiming to represent CeloHT.
              </li>
              <li>
                When a service is unavailable, return to the documentation and
                support channels rather than assuming a transaction succeeded.
              </li>
            </ul>
          ),
        },
      ]}
      previous={{ label: "DApp services", href: "/dapp/services" }}
      next={{
        label: "Technical architecture",
        href: "/technology/architecture",
      }}
    />
  );
}
