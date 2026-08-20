import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

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

      <Section eyebrow="Structure" title="Three roles">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-semibold">Foundation Director</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Owns overall strategic vision, represents CeloHT externally, and has the final say
              when governance reaches a genuine deadlock.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-semibold">Maintainer Council</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Responsible for technical review, Pull Request approval, and day-to-day repository
              management across all CeloHT repositories.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-semibold">Community Contributors</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Anyone submitting Issues, Pull Requests, or joining Discussions  -  the entry point to
              the Maintainer Council.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Decision-making" title="Not every decision needs the same process">
        <div className="max-w-3xl space-y-3 text-ink-soft dark:text-parchment-100/75">
          <p>
            <strong className="text-ink dark:text-parchment-100">Minor changes</strong>  -  typo
            fixes, documentation improvements  -  are approved by any maintainer after a standard
            review.
          </p>
          <p>
            <strong className="text-ink dark:text-parchment-100">Major changes</strong>  -  new
            structure, policy shifts, brand changes  -  require Maintainer Council consensus,
            discussed publicly first.
          </p>
          <p>
            <strong className="text-ink dark:text-parchment-100">Governance changes</strong>  -  edits
            to the governance policy itself  -  require a minimum 14-day public comment period and
            majority Council approval.
          </p>
        </div>
      </Section>

      <Section eyebrow="No governance token" title="Role-based, not token-weighted">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          CeloHT has no token, so community governance votes (in the dApp&rsquo;s GovernanceVoting
          contract) use one-address-one-vote, restricted to addresses the Maintainer Council has
          approved  -  trading permissionless participation for resistance to Sybil and plutocratic
          attacks. See our{" "}
          <Link href="/developers" className="underline underline-offset-2">
            developer documentation
          </Link>{" "}
          for the technical detail.
        </p>
      </Section>

      <CTASection
        title="Read the full policy"
        description="La page Gouvernance présente le cadre public actuel, ses responsabilités et la manière dont il peut évoluer."
        primary={{ label: "Voir la transparence", href: "/transparency" }}
        secondary={{ label: "See the roadmap", href: "/roadmap" }}
      />
    </>
  );
}
