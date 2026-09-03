import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Agent Network",
  description:
    "CeloHT’s community agent network supports cash-in and cash-out, education, digital payment assistance, and trusted local access to the ecosystem.",
  alternates: { canonical: "/agents" },
};

const agentDuties = [
  "Cash-in and cash-out assistance",
  "Digital payment guidance and wallet onboarding",
  "User education and basic digital security support",
  "Local community support for onboarding and troubleshooting",
  "Help connecting people to the broader CeloHT ecosystem",
];

const agentPrinciples = [
  {
    title: "Human trust first",
    text: "The agent model is built around people who can explain the system clearly and support new users without pressure or confusion.",
  },
  {
    title: "Practical support",
    text: "Agents help people safely move from understanding to usage, especially in contexts where a first transaction feels unfamiliar.",
  },
  {
    title: "Local accountability",
    text: "An agent does more than facilitate transactions; they help maintain trust in the learning and onboarding process.",
  },
];

export default function AgentsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Agent Network" }]} />
      <PageHero
        eyebrow="Agent Network"
        title="People who make digital access understandable"
        lead="The CeloHT agent model is a community-driven access layer for education, wallet use, and local support. It helps put the ecosystem in the hands of people who can explain it clearly."
      />

      <Section eyebrow="What agents do" title="Core responsibilities">
        <div className="grid gap-3 md:grid-cols-2">
          {agentDuties.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-navy-700/15 p-4 text-sm text-ink-soft"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="How it works" title="A local, trusted bridge">
        <div className="grid gap-6 md:grid-cols-3">
          {agentPrinciples.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-navy-700/15 p-6"
            >
              <h2 className="font-display text-2xl font-semibold">
                {item.title}
              </h2>
              <p className="mt-3 text-sm text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Participation" title="How someone can become an agent">
        <div className="max-w-3xl space-y-4 text-ink-soft">
          <p>
            The exact agent recruitment and training process is documented as
            part of the project’s public governance and program material. At
            this stage, the model is designed to be community-based and locally
            accountable.
          </p>
          <p>
            A prospective agent should expect to complete onboarding, receive
            core training, and be prepared to support users with attention to
            security, trust, and community context. A formal revenue or
            commission model is not presented here as a confirmed public policy;
            that information is still described as under development or not yet
            finalized where appropriate.
          </p>
          <p className="font-medium text-ink">
            Coming soon: finalized agent operating policy, onboarding
            requirements, and compensation framework.
          </p>
        </div>
      </Section>

      <CTASection
        title="Ready to learn more?"
        description="The agent model is connected to education, wallets, digital payment access, and governance."
        primary={{ label: "Explore education", href: "/education" }}
        secondary={{ label: "Read the roadmap", href: "/roadmap" }}
      />
    </>
  );
}
