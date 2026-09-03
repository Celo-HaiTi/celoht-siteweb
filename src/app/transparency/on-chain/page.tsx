import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "On-chain Transparency",
  description:
    "What CeloHT can verify on-chain and how public blockchain records support auditability and trust.",
  alternates: { canonical: "/transparency/on-chain" },
};

const topics = [
  "Smart contract deployment and verification where confirmed",
  "Wallet transactions that are publicly visible on the Celo network",
  "Public donation flows when publicly verifiable",
  "Impact records where they are transparently published",
  "Governance records when available and published",
];

export default function OnChainTransparencyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Transparency", href: "/transparency" },
          { label: "On-chain" },
        ]}
      />
      <PageHero
        eyebrow="On-chain transparency"
        title="Public records, when the data is genuinely public"
        lead="CeloHT’s transparency model relies on public accountability and honest clarity about what is independently verifiable versus what remains off-chain or unpublished."
      />

      <Section
        eyebrow="What is verifiable"
        title="Independent checks we can point to"
      >
        <div className="grid gap-3 md:grid-cols-2">
          {topics.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-navy-700/15 p-4 text-sm text-ink-soft"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Important caveat"
        title="Not everything is public by default"
      >
        <div className="max-w-3xl space-y-4 text-ink-soft">
          <p>
            Some actions are inherently public on a blockchain, but not every
            project decision, personal record, or operational detail is intended
            for public disclosure. Transparent governance means publishing what
            can be responsibly shared without exposing sensitive information or
            creating security risks.
          </p>
          <p>
            The project does not claim on-chain data where it has not been
            published or verified. Where addresses or explorer links are not yet
            confirmed, this website will clearly state that the information is
            pending publication rather than inventing it.
          </p>
        </div>
      </Section>

      <CTASection
        title="Need the broader accountability framework?"
        description="Financial transparency, governance, and security practices are all part of the same public accountability model."
        primary={{
          label: "Read financial transparency",
          href: "/transparency/financial",
        }}
        secondary={{ label: "Visit security", href: "/security" }}
      />
    </>
  );
}
