import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Agent Network",
  description:
    "A decentralized network of trained community agents who handle cash-in, cash-out, remittances, and hands-on Valora support.",
  alternates: { canonical: "/agent-network" },
};

const steps = [
  "Complete the full education program",
  "Demonstrate a solid understanding of the basics  -  Valora, seed-phrase security",
  "Commit to the community's operational standards",
  "Get sign-off from a local network coordinator",
];

export default function AgentNetworkPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Agent Network" }]} />
      <PageHero
        eyebrow="Pillar 02 · Agent Network"
        title="Trust is a human problem, not just a design problem"
        lead="An app alone doesn't build confidence in a new financial tool. A trained person in the community does  -  that's what CeloHT's agent network is for."
      />

      <Section eyebrow="What an agent does" title="Four responsibilities">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Facilitates cash-to-USDm and USDm-to-cash exchanges (cash-in/cash-out)",
            "Helps new participants set up and understand Valora",
            "Handles peer-to-peer transfer support",
            "Acts as a local point of contact for ongoing questions",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-navy-700/15 p-5 text-sm text-ink-soft dark:border-parchment-100/10 dark:text-parchment-100/70"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Operating standards" title="How agents work">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-navy-700/15 p-5 dark:border-parchment-100/10">
            <h3 className="font-semibold">Fee transparency</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Any fee must be disclosed clearly before a transaction happens.
            </p>
          </div>
          <div className="rounded-xl border border-navy-700/15 p-5 dark:border-parchment-100/10">
            <h3 className="font-semibold">Identity verification</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              A lightweight process adapted to local context, reducing fraud
              without creating unreasonable barriers.
            </p>
          </div>
          <div className="rounded-xl border border-navy-700/15 p-5 dark:border-parchment-100/10">
            <h3 className="font-semibold">Ongoing training</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Regular refresher sessions, not a one-time certification.
            </p>
          </div>
          <div className="rounded-xl border border-navy-700/15 p-5 dark:border-parchment-100/10">
            <h3 className="font-semibold">Code of conduct</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Specific standards designed to protect users from exploitation.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Becoming an agent" title="Four steps">
        <ol className="max-w-2xl space-y-3">
          {steps.map((step, index) => (
            <li key={step} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-950 font-mono text-sm text-parchment-50 dark:bg-gold-500 dark:text-navy-950">
                {index + 1}
              </span>
              <span className="pt-1 text-sm text-ink-soft dark:text-parchment-100/70">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Connection to Reforestation"
        title="Many agents wear two hats"
      >
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          Some community agents also take on responsibility for coordinating
          local reforestation activity, creating a direct operational link
          between financial inclusion and environmental sustainability.
        </p>
      </Section>

      <CTASection
        title="Interested in becoming an agent?"
        description="Reach out through our community channels to learn about the current education cohort in your area."
        primary={{ label: "Get involved", href: "/community" }}
        secondary={{
          label: "See the reforestation link",
          href: "/reforestation",
        }}
      />
    </>
  );
}
