import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "CeloHT's four-phase roadmap — Foundation, Validation, Growth, and Maturity — with dated milestones across all three pillars.",
  alternates: { canonical: "/roadmap" },
};

const phases = [
  {
    name: "Phase 1 — Foundation",
    window: "2026, Q2–Q3",
    status: "In progress",
    goal: "Establish a credible, transparent base — documentation, first agents, first partners.",
    milestones: [
      { text: "Publish the official flagship repository", done: true },
      { text: "Core financial & Web3 training material in Haitian Creole", done: true },
      { text: "Publish this website and the CeloHT dApp repository", done: true },
      { text: "Recruit and train the first cohort of community agents (Léogâne)", done: false },
      { text: "Land first grants/partnerships within the Celo ecosystem", done: false },
    ],
  },
  {
    name: "Phase 2 — Validation",
    window: "2026 Q4 – 2027 Q1",
    status: "Planned",
    goal: "Prove the model works end-to-end in a single pilot area before spending resources on expansion.",
    milestones: [
      { text: "First complete cash-in/cash-out cycle handled entirely by agents", done: false },
      { text: "First reforestation pilot with cUSD-based rewards", done: false },
      { text: "dApp deployed to Celo's Alfajores testnet", done: false },
      { text: "Formal agent code of conduct and verification process live", done: false },
    ],
  },
  {
    name: "Phase 3 — Growth",
    window: "2027",
    status: "Planned",
    goal: "Expand beyond the pilot once the operational model is proven.",
    milestones: [
      { text: "Expand agent network across multiple departments in Haiti", done: false },
      { text: "Translate core curriculum into Spanish", done: false },
      { text: "dApp deployed to Celo mainnet", done: false },
      { text: "Publish first annual transparency & impact report", done: false },
    ],
  },
  {
    name: "Phase 4 — Maturity",
    window: "2028+",
    status: "Planned",
    goal: "A self-sustaining ecosystem with mature governance, rather than grant-dependent.",
    milestones: [
      { text: "Transition toward a more decentralized governance model", done: false },
      { text: "Agent network reaches meaningful fee-based self-sustainability", done: false },
      { text: "Recognized educational certification program with external partners", done: false },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Roadmap" }]} />
      <PageHero
        eyebrow="Roadmap"
        title="Four phases, each depending on the one before it"
        lead="We'd rather move a milestone than hit a date with a half-working program. Every phase below depends on the previous one being validated first."
      />

      <Section>
        <div className="space-y-8">
          {phases.map((phase) => (
            <div
              key={phase.name}
              className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">{phase.name}</h2>
                <span className="rounded-full bg-gold-500/15 px-3 py-1 font-mono text-xs uppercase tracking-wide text-gold-800 dark:text-gold-300">
                  {phase.window} · {phase.status}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm text-ink-soft dark:text-parchment-100/70">
                {phase.goal}
              </p>
              <ul className="mt-5 space-y-2">
                {phase.milestones.map((milestone) => (
                  <li key={milestone.text} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                        milestone.done
                          ? "bg-forest-500 text-white"
                          : "border border-navy-700/30 text-transparent dark:border-parchment-100/30"
                      }`}
                    >
                      {milestone.done ? "✓" : "·"}
                    </span>
                    <span
                      className={
                        milestone.done
                          ? "text-ink dark:text-parchment-100"
                          : "text-ink-soft dark:text-parchment-100/70"
                      }
                    >
                      {milestone.text}
                      <span className="sr-only">
                        {" "}
                        — {milestone.done ? "done" : "not yet started"}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Track progress as it happens"
        description="Monthly community updates and our annual transparency report will keep this page current."
        primary={{ label: "Read transparency practices", href: "/transparency" }}
        secondary={{ label: "View current impact", href: "/impact" }}
      />
    </>
  );
}
