import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Reforestation",
  description:
    "Community-led environmental restoration, tree planting support, evidence collection, verification, and transparent public reporting for long-term resilience.",
  alternates: { canonical: "/reforestation" },
};

export default function ReforestationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Reforestation" }]} />
      <PageHero
        eyebrow="Pillar 03 · Reforestation"
        title="We treat land the way we treat financial access  -  as infrastructure"
        lead="Reforestation is a permanent pillar, not a side initiative funded when convenient. The same communities we serve financially are often the ones most exposed to the economic consequences of deforestation. Current reforestation work is framed as evidence-based restoration, with public reporting only when supported by clear records and official reporting periods."
        tone="forest"
      />

      <Section title="Why this belongs in a financial initiative">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          Haiti faces serious environmental challenges, including significant
          deforestation. Communities that depend on agriculture and natural
          resources feel that impact directly in their economic security. We see
          environmental health and financial health as connected, not as
          separate goals competing for attention.
        </p>
      </Section>

      <Section eyebrow="How it works" title="Evidence-based workflow">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-forest-500/30 p-6">
            <h3 className="font-semibold">Planting activity</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Community-led environmental restoration begins with local planting
              activity and participation.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-500/30 p-6">
            <h3 className="font-semibold">Evidence collection</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Records may include location, species, quantity, participants,
              photographs, and other appropriate documentation.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-500/30 p-6">
            <h3 className="font-semibold">Verification</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Field evidence is reviewed before any program claim is treated as
              verified impact.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-500/30 p-6">
            <h3 className="font-semibold">Monitoring and reporting</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Long-term monitoring and public reporting help distinguish active
              restoration from one-time planting activity.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Core principles" title="Structure, not slogans">
        <ul className="max-w-3xl space-y-3 text-ink-soft dark:text-parchment-100/75">
          <li>
            Planting activity is only part of the story; evidence, verification,
            and monitoring matter just as much.
          </li>
          <li>
            The program builds on existing local agricultural knowledge instead
            of importing an outside model without adaptation.
          </li>
          <li>
            Public reporting remains tied to official evidence and reporting
            periods; no unverified totals are treated as current impact.
          </li>
        </ul>
      </Section>

      <Section eyebrow="Current status" title="Design and pilot planning">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          As of this writing, the reforestation program remains in design and
          pilot planning. Verified totals, survival statistics, hectares, and
          other environmental totals are only reported when they are backed by
          official reporting periods and appropriate evidence.
        </p>
      </Section>

      <Section eyebrow="Take action" title="Plant a tree">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <p className="max-w-2xl text-lg leading-8 text-ink-soft dark:text-parchment-100/75">
            Learn how to choose a young tree, prepare the ground, plant it
            correctly, water it, protect it, and monitor it through
            establishment.
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
