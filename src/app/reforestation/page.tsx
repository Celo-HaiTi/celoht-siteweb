import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Reforestation",
  description:
    "Tree planting, ecological restoration, and environmental education  -  a permanent pillar equal to education and the agent network, rewarded through USDm.",
  alternates: { canonical: "/reforestation" },
};

export default function ReforestationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Reforestation" }]} />
      <PageHero
        eyebrow="Pillar 03 · Reforestation"
        title="We treat land the way we treat financial access  -  as infrastructure"
        lead="Reforestation is a permanent pillar, not a side initiative funded when convenient. The same communities we serve financially are often the ones most exposed to the economic consequences of deforestation."
        tone="forest"
      />

      <Section title="Why this belongs in a financial initiative">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          Haiti faces serious environmental challenges, including significant deforestation.
          Communities that depend on agriculture and natural resources feel that impact directly in
          their economic security. We see environmental health and financial health as connected,
          not as separate goals competing for attention.
        </p>
      </Section>

      <Section eyebrow="How it works" title="Four moving parts">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-forest-500/30 p-6">
            <h3 className="font-semibold">Agents as coordinators</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              The same agents who facilitate financial transactions often coordinate local planting
              activity too.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-500/30 p-6">
            <h3 className="font-semibold">Environmental education</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Training modules covering why trees matter, basic planting technique, and long-term
              care.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-500/30 p-6">
            <h3 className="font-semibold">USDm rewards</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Participants who commit to verified planting and tracking can receive symbolic rewards
              in USDm.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-500/30 p-6">
            <h3 className="font-semibold">Tracking and transparency</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Basic photo and geolocation documentation, with periodic public reporting.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Core principles" title="Structure, not slogans">
        <ul className="max-w-3xl space-y-3 text-ink-soft dark:text-parchment-100/75">
          <li>
            Every reward is tied to a verifiable action  -  we don&rsquo;t distribute USDm without
            structure.
          </li>
          <li>
            The program builds on existing local agricultural knowledge instead of importing an
            outside model without adaptation.
          </li>
          <li>Success is measured by long-term survival rate, not initial planting count alone.</li>
        </ul>
      </Section>

      <Section eyebrow="Current status" title="Design and pilot phase">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          As of this writing, the reforestation program is in its design and pilot phase, with a
          full pilot targeted for Phase 2 of our roadmap.
        </p>
      </Section>

      <Section eyebrow="Take action" title="Plant a tree">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <p className="max-w-2xl text-lg leading-8 text-ink-soft dark:text-parchment-100/75">
            Learn how to choose a young tree, prepare the ground, plant it correctly, water it,
            protect it, and monitor it through establishment.
          </p>
          <Link
            href="/en/reforestation/plant-a-tree"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-600"
          >
            Learn how to plant a tree <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <CTASection
        title="Track our environmental progress"
        description="Once verified planting begins, results will appear on our impact dashboard."
        primary={{ label: "View impact", href: "/impact" }}
        secondary={{ label: "See the full roadmap", href: "/roadmap" }}
      />
    </>
  );
}
