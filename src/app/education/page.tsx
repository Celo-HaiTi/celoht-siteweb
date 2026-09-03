import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Financial literacy, blockchain and Web3 fundamentals, and hands-on Valora/USDm training  -  delivered in Haitian Creole, before any tool is introduced.",
  alternates: { canonical: "/education" },
};

const modules = [
  {
    title: "Basic financial literacy",
    detail: "Budgeting, saving, risk management, and the concept of interest.",
    before: "Any wallet setup",
  },
  {
    title: "Blockchain & Web3 fundamentals",
    detail:
      "What a blockchain is and how a transaction works, in plain language.",
    before: "Wallet setup",
  },
  {
    title: "Hands-on Valora/USDm use",
    detail:
      "Step-by-step guided use, with heavy emphasis on seed-phrase security.",
    before: "First live transaction",
  },
  {
    title: "Crypto risk awareness",
    detail:
      "Volatility, common scams, and never risking more than you can afford to lose.",
    before: "Reinforced on an ongoing basis",
  },
];

export default function EducationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Education" }]} />
      <PageHero
        eyebrow="Pillar 01 · Education"
        title="Understanding comes before access"
        lead="Give communities the financial, blockchain, and digital skills they need to use digital financial services with real confidence  -  before they're ever handed a specific tool like Valora or USDm."
        tone="gold"
      />

      <Section eyebrow="Curriculum" title="Four modules, in order">
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-2xl border border-gold-500/30 p-6 dark:border-gold-500/20"
            >
              <h3 className="font-display text-xl font-semibold">
                {module.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
                {module.detail}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wide text-gold-800 dark:text-gold-300">
                Delivered before: {module.before}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Delivery" title="Written, visual, and in person">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          Material combines written guides, visual diagrams, and in-person
          community sessions - deliberately not confined to a single digital
          channel, since not every participant has reliable connectivity at the
          point they need the material most.
        </p>
      </Section>

      <Section eyebrow="Measuring effectiveness" title="What we track">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Number of people who complete at least one training module</li>
          <li>Pass rate on a basic knowledge assessment</li>
          <li>Structured community feedback collected after each session</li>
        </ul>
      </Section>

      <CTASection
        title="Education leads into the agent network"
        description="Once someone completes core training, the next step is understanding how community agents put that knowledge to work."
        primary={{ label: "Meet the agent network", href: "/agent-network" }}
        secondary={{
          label: "See the technology behind it",
          href: "/technology",
        }}
      />
    </>
  );
}
