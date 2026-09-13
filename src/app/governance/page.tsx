import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { GITHUB_GOVERNANCE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "How CeloHT is governed today, and how that model is designed to evolve toward more decentralized community governance.",
  alternates: { canonical: "/governance" },
};

export default function GovernancePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Governance" }]} />
      <PageHero
        eyebrow="Governance"
        title="Clear accountability today, a path to decentralization"
        lead="CeloHT is meant to be governed by its community, not run top-down. This model keeps decisions transparent, accountable, and aligned with our three founding pillars."
      />

      <Section eyebrow="Structure" title="Core governance model">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-semibold">Founder</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Johnny Dubic is permanently recognized as the Founder of CeloHT
              in the project&apos;s historical and institutional record. Permanent
              founder recognition is historical and institutional; it does not
              confer perpetual governance authority, ownership rights, veto
              power, or unilateral control.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-semibold">Proposal authors</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Individuals may propose ideas or initiate proposals in a public,
              reviewable process. A proposal remains a proposal until the
              documented collective process reaches a decision.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-semibold">Community participants</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Community members, contributors, maintainers, and working-group
              participants review proposals, deliberate publicly, and help shape
              the final governance outcome.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Decision-making"
        title="Proposal, review, and collective decision"
      >
        <div className="max-w-3xl space-y-3 text-ink-soft dark:text-parchment-100/75">
          <p>
            <strong className="text-ink dark:text-parchment-100">
              Idea
            </strong>{" "}
            - a possible direction or change.
          </p>
          <p>
            <strong className="text-ink dark:text-parchment-100">
              Proposal
            </strong>{" "}
            - a public, reviewable submission that is not yet an official
            decision.
          </p>
          <p>
            <strong className="text-ink dark:text-parchment-100">
              Deliberation
            </strong>{" "}
            - public discussion, review, and refinement under the documented
            governance process.
          </p>
          <p>
            <strong className="text-ink dark:text-parchment-100">
              Decision
            </strong>{" "}
            - a documented outcome reached through the collective governance
            process; no single person may declare it unilaterally.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="No governance token"
        title="Role-based, not token-weighted"
      >
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          CeloHT does not have a native governance token and does not use
          token-weighted voting. Governance is community-driven and based on
          the published proposal and review process rather than ownership or
          token holdings. See our{" "}
          <Link href="/no-token-policy" className="underline underline-offset-2">
            no-token policy
          </Link>{" "}
          for the public statement.
        </p>
      </Section>

      <Section
        eyebrow="Public implementation"
        title="The governance model is documented in public"
      >
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          CeloHT governance is based on transparent proposal review,
          documented deliberation, and collective decision-making. This page
          describes the public model; the repository itself should be read for
          the current status of any implementation details or process updates.
        </p>
        <a
          href={GITHUB_GOVERNANCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex font-semibold text-ink underline-offset-4 hover:text-gold-800 hover:underline dark:text-parchment-50 dark:hover:text-gold-300"
        >
          Review the governance repository <span aria-hidden="true">↗</span>
        </a>
      </Section>

      <CTASection
        title="Read the full policy"
        description="The Governance page presents the current public framework, its responsibilities, and how it can evolve."
        primary={{ label: "View transparency", href: "/transparency" }}
        secondary={{ label: "See the roadmap", href: "/roadmap" }}
      />
    </>
  );
}
