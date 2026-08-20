import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { GITHUB_DAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Smart Contracts",
  description:
    "Human-readable overview of the CeloHT smart contracts and their purpose, status, and verification state.",
  alternates: { canonical: "/technology/smart-contracts" },
};

const contracts = [
  {
    name: "Agent Registry",
    purpose: "Stores the identity and status of community agents in a verifiable structure when the program is in operation.",
    network: "Celo ecosystem",
    status: "In development / published as source when available",
    verification: "Verification status varies by deployment; contract address pending publication where not confirmed.",
    address: "Contract address pending publication",
  },
  {
    name: "Certificate Registry",
    purpose: "Tracks learning and credential information associated with education or recognition programs.",
    network: "Celo ecosystem",
    status: "In development / published as source when available",
    verification: "Verification status varies by deployment; contract address pending publication where not confirmed.",
    address: "Contract address pending publication",
  },
  {
    name: "Donation Manager",
    purpose: "Supports donation flows and tracking in a way that is transparent and tied to project or initiative goals.",
    network: "Celo ecosystem",
    status: "In development / published as source when available",
    verification: "Verification status varies by deployment; contract address pending publication where not confirmed.",
    address: "Contract address pending publication",
  },
  {
    name: "Impact Registry",
    purpose: "Captures environmental and social impact data in a public, auditable structure where the project is operational.",
    network: "Celo ecosystem",
    status: "In development / published as source when available",
    verification: "Verification status varies by deployment; contract address pending publication where not confirmed.",
    address: "Contract address pending publication",
  },
  {
    name: "Governance Voting",
    purpose: "Supports governance and community decision-making in the way the project’s public governance model is designed.",
    network: "Celo ecosystem",
    status: "Planned / in governance design",
    verification: "Verification status varies by deployment; not all governance flow elements are published yet.",
    address: "Contract address pending publication",
  },
];

export default function SmartContractsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Technology", href: "/technology" }, { label: "Smart Contracts" }]} />
      <PageHero
        eyebrow="Smart contracts"
        title="Human-readable contract overview"
        lead="The CeloHT project documents its dApp and smart-contract work in source form. This page explains the purpose of the core contracts without fabricating addresses or deployment claims."
      />

      <Section>
        <div className="space-y-6">
          {contracts.map((contract) => (
            <article key={contract.name} className="rounded-2xl border border-navy-700/15 p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-semibold">{contract.name}</h2>
                  <p className="mt-2 text-sm text-ink-soft">{contract.purpose}</p>
                </div>
                <span className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gold-800">
                  {contract.status}
                </span>
              </div>

              <dl className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="font-medium text-ink">Function</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{contract.purpose}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Network</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{contract.network}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Verification status</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{contract.verification}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Contract address</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{contract.address}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Source access" title="Developers can inspect the source directly">
        <div className="rounded-2xl border border-navy-700/15 p-6">
          <p className="text-sm text-ink-soft">
            The CeloHT dApp and its source repositories are the authoritative technical references for contract implementation, verification, and deployment status.
          </p>
          <a
            href={GITHUB_DAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center text-sm font-semibold underline-offset-4 hover:underline"
          >
            View source on GitHub
          </a>
        </div>
      </Section>

      <CTASection
        title="Need the product context too?"
        description="The DApp page shows how these contracts fit into the user experience, while the governance page explains how the ecosystem makes decisions."
        primary={{ label: "Open the DApp", href: "/dapp" }}
        secondary={{ label: "Read governance", href: "/governance" }}
      />
    </>
  );
}
