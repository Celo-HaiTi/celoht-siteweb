import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { GITHUB_ORG_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "How CeloHT documents decisions, reports progress, and keeps its governance and finances auditable.",
  alternates: { canonical: "/transparency" },
};

export default function TransparencyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Transparency" }]} />
      <PageHero
        eyebrow="Transparency"
        title="Radical transparency isn't a slogan here  -  it's a mechanism"
        lead="An organization asking communities to trust it with financial education should be auditable, not opaque. Here's specifically how we keep it that way."
      />

      <Section eyebrow="What's public today" title="Open by default">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            Public repositories covering the core project, website, dApp,
            infrastructure, governance, research, and documentation
          </li>
          <li>Automated checks used for delivery quality and security</li>
          <li>All Pull Request and Issue history</li>
          <li>Governance decisions, discussed publicly before being applied</li>
          <li>Every smart contract&rsquo;s source code and test suite</li>
        </ul>
      </Section>

      <Section
        eyebrow="Infrastructure register"
        title="Inspect the public system"
      >
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          Projects and infrastructure are listed with their role and maturity so
          that a repository is not mistaken for a production guarantee. Live
          data, deployment evidence, and credentials remain separate concerns.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="font-semibold text-ink underline-offset-4 hover:text-gold-800 hover:underline dark:text-parchment-50 dark:hover:text-gold-300"
          >
            View Projects &amp; Public Infrastructure
          </Link>
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline-offset-4 hover:text-gold-800 hover:underline dark:text-parchment-50 dark:hover:text-gold-300"
          >
            Inspect the GitHub organization <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Section>

      <Section eyebrow="Reporting cadence" title="Two recurring commitments">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-semibold">Monthly community updates</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              A recurring, dated summary of progress across all three pillars,
              shared through our social channels and repositories.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
            <h3 className="font-semibold">
              Annual transparency & impact report
            </h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Starting in Phase 3 of our roadmap: a published, dated report
              covering education, agent network, and reforestation metrics
              together.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Financial transparency"
        title="No token, no hidden allocation"
      >
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          CeloHT is a community-driven initiative, not a company issuing equity
          or promising returns, and it has never created a token. Funding comes
          from ecosystem grants, partnerships, and voluntary community
          contributions - see our{" "}
          <Link href="/documentation" className="underline underline-offset-2">
            public documentation
          </Link>{" "}
          for the funding model documented alongside the codebase.
        </p>
      </Section>

      <CTASection
        title="See what we've committed to"
        description="Our roadmap lists dated milestones and honest status markers  -  done, in progress, or planned."
        primary={{ label: "View the roadmap", href: "/roadmap" }}
        secondary={{ label: "Read our values", href: "/mission" }}
      />
    </>
  );
}
