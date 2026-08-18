import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatGrid } from "@/components/StatGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How CeloHT measures success across education, the agent network, and reforestation  -  in concrete, verifiable terms.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Impact" }]} />
      <PageHero
        eyebrow="Impact"
        title="Numbers we can actually verify"
        lead="CeloHT measures impact in concrete, verifiable terms rather than broad claims. Here's what we track today, and what we commit to reporting as programs scale."
      />

      <Section eyebrow="Current phase" title="Foundation, 2026">
        <StatGrid
          stats={[
            { value: "Phase 1", label: "Current roadmap phase" },
            { value: "Léogâne", label: "Pilot region" },
            { value: "Creole-first", label: "Curriculum language" },
            { value: "3", label: "Permanent pillars" },
          ]}
        />
      </Section>

      <Section eyebrow="Education" title="What we measure">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Module completion count  -  people who finish at least one training module</li>
          <li>Knowledge-check pass rate  -  whether training is actually landing</li>
          <li>Post-session feedback  -  qualitative signal on relevance and clarity</li>
        </ul>
      </Section>

      <Section eyebrow="Agent Network" title="What we measure">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Active trained agents  -  network capacity</li>
          <li>Transaction volume through agents  -  real usage, not just registrations</li>
          <li>90-day agent retention  -  whether the role is sustainable for agents themselves</li>
        </ul>
      </Section>

      <Section eyebrow="Reforestation" title="What we measure">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Trees planted (verified)  -  direct environmental output</li>
          <li>Tree survival rate over time  -  whether planting translates into lasting impact</li>
          <li>Participants rewarded  -  reach of the financial-environmental link</li>
        </ul>
      </Section>

      <Section eyebrow="Public reporting" title="Starting in Phase 3">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          CeloHT commits to an annual transparency and impact report covering all three pillars, in
          addition to recurring monthly community updates. See{" "}
          <a href="/transparency" className="underline underline-offset-2">
            Transparency
          </a>{" "}
          for how we report, and{" "}
          <a href="/roadmap" className="underline underline-offset-2">
            Roadmap
          </a>{" "}
          for the timeline.
        </p>
      </Section>

      <CTASection
        title="Follow along as numbers become real"
        description="Impact data will populate this page as programs move from pilot to verified practice."
        primary={{ label: "Read the roadmap", href: "/roadmap" }}
        secondary={{ label: "See how we report", href: "/transparency" }}
      />
    </>
  );
}
