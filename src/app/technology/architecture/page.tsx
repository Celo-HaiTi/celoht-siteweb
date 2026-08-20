import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Technology Architecture",
  description:
    "A plain-language explanation of how CeloHT connects education, wallets, community agents, and reforestation within the Celo ecosystem.",
  alternates: { canonical: "/technology/architecture" },
};

const flow = [
  "Users",
  "CeloHT website and DApp",
  "Wallets",
  "Celo network",
  "Digital assets and payments",
  "Agents + education + community + reforestation",
];

export default function ArchitecturePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Technology", href: "/technology" }, { label: "Architecture" }]} />
      <PageHero
        eyebrow="Architecture"
        title="A clear system, not a mysterious stack"
        lead="CeloHT uses a simple layered model: people, digital tools, wallet access, public blockchain infrastructure, and local community programs."
      />

      <Section eyebrow="For everyone" title="How the ecosystem works">
        <div className="rounded-3xl border border-navy-700/15 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {flow.map((step, index) => (
              <>
                <div key={step} className="min-w-[180px] rounded-2xl border border-navy-700/15 bg-parchment-50 px-4 py-3 text-center text-sm font-medium">
                  {step}
                </div>
                {index < flow.length - 1 && (
                  <span key={`${step}-arrow`} aria-hidden="true" className="text-2xl text-gold-700">
                    ↓
                  </span>
                )}
              </>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="For developers" title="Technical description">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-700/15 p-6">
            <h2 className="font-display text-2xl font-semibold">Application layer</h2>
            <p className="mt-3 text-sm text-ink-soft">
              The public-facing website and the DApp provide access points for information, onboarding, education, community coordination, and product interactions. They are designed to communicate clearly before code becomes the primary experience.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6">
            <h2 className="font-display text-2xl font-semibold">Wallet and chain layer</h2>
            <p className="mt-3 text-sm text-ink-soft">
              Celo provides the underlying blockchain environment. Wallet support and stablecoin use are part of the practical user experience, while CeloHT focuses on education, access, and human coordination rather than operating the chain itself.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6">
            <h2 className="font-display text-2xl font-semibold">Community layer</h2>
            <p className="mt-3 text-sm text-ink-soft">
              Agents, contributors, and local participants turn technical access into practical literacy and local trust. This is where the system becomes useful in real communities.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6">
            <h2 className="font-display text-2xl font-semibold">Impact and verification layer</h2>
            <p className="mt-3 text-sm text-ink-soft">
              Public data, verifiable records, and a transparent reporting model help distinguish action from aspiration. The architecture is designed so evidence can be checked by participants and observers.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Go deeper into the technical stack"
        description="Learn how the smart contracts and DApp fit into the design and governance model."
        primary={{ label: "Review smart contracts", href: "/technology/smart-contracts" }}
        secondary={{ label: "Open the DApp", href: "/dapp" }}
      />
    </>
  );
}
