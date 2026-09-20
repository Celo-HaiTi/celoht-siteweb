import type { Metadata } from "next";
import Link from "next/link";
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
        title="Public evidence, not inflated claims"
        lead="CeloHT measures impact in concrete, verifiable terms rather than broad claims. Real public reporting only appears when there is an official reporting period and supporting evidence."
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
          <li>Training completion and participation records</li>
          <li>Knowledge-check results and learning progress</li>
          <li>Session feedback and material relevance</li>
        </ul>
      </Section>

      <Section eyebrow="Agent Network" title="What we measure">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Onboarding and training status</li>
          <li>Service-related activity and local support patterns</li>
          <li>Retention and operational quality over time</li>
        </ul>
      </Section>

      <Section eyebrow="Reforestation" title="What we measure">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Planting records and supporting evidence</li>
          <li>Verification status and monitoring observations</li>
          <li>Public reporting tied to official reporting periods</li>
        </ul>
      </Section>

      <Section eyebrow="Public reporting" title="Starting in Phase 3">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          CeloHT commits to an annual transparency and impact report covering
          all three pillars, in addition to recurring monthly community updates.
          See{" "}
          <Link href="/transparency" className="underline underline-offset-2">
            Transparency
          </Link>{" "}
          for how we report, and{" "}
          <Link href="/roadmap" className="underline underline-offset-2">
            Roadmap
          </Link>{" "}
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
