import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PillarCard } from "@/components/PillarCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Expand financial inclusion through education, a decentralized network of community agents, and environmental reforestation  -  built on the Celo ecosystem.",
  alternates: { canonical: "/mission" },
};

export default function MissionPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Mission" }]} />
      <PageHero
        eyebrow="Our mission"
        title="Expand financial inclusion through education, agents, and reforestation"
        lead="Built on the Celo ecosystem as our technical foundation  -  three pillars working together, not three separate projects."
        tone="gold"
      />

      <Section title="Why this order matters">
        <div className="max-w-3xl space-y-4 text-ink-soft dark:text-parchment-100/75">
          <p>
            Education is named first because we treat it as a prerequisite, not a companion feature.
            Nobody should use a financial tool they don&rsquo;t understand  -  so every CeloHT program
            starts with a curriculum, in Haitian Creole, before Valora or USDm ever enters the
            conversation.
          </p>
          <p>
            The agent network comes second because trust is a human problem, not just a design
            problem. An app alone doesn&rsquo;t build confidence in a new financial tool; a trained
            person from the community does.
          </p>
          <p>
            Reforestation is third  -  not because it matters less, but because it&rsquo;s the pillar
            most directly tied to the long-term economic security of the same communities the first
            two pillars serve.
          </p>
        </div>
      </Section>

      <Section eyebrow="How it works" title="Mission in practice">
        <div className="grid gap-6 sm:grid-cols-3">
          <PillarCard
            number="01"
            title="Education"
            description="Creole-language curriculum on financial literacy, blockchain and Web3 fundamentals, and hands-on Valora/USDm use."
            href="/education"
            accent="gold"
            icon="📘"
          />
          <PillarCard
            number="02"
            title="Agent Network"
            description="Trained community members who handle cash-in/cash-out, transfers, and local support."
            href="/agent-network"
            accent="navy"
            icon="🤝"
          />
          <PillarCard
            number="03"
            title="Reforestation"
            description="Coordinated tree-planting tied to verified activity and rewarded through USDm."
            href="/reforestation"
            accent="forest"
            icon="🌱"
          />
        </div>
      </Section>

      <CTASection
        title="See where the mission is headed"
        description="Our vision describes what success looks like by 2030  -  and our roadmap breaks it into phases with real milestones."
        primary={{ label: "Read our vision", href: "/vision" }}
        secondary={{ label: "View the roadmap", href: "/roadmap" }}
      />
    </>
  );
}
