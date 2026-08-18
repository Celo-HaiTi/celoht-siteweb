import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "A Haiti — and eventually a wider Caribbean — where distance from a bank branch no longer decides financial access, and growth doesn't come at the environment's expense.",
  alternates: { canonical: "/vision" },
};

export default function VisionPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Vision" }]} />
      <PageHero
        eyebrow="Our vision"
        title="Access shouldn't depend on distance from a bank branch"
        lead="We want to see a Haiti — and eventually a wider Caribbean — where people don't just have a wallet on their phone, but understand how to use it, and where economic progress doesn't cost the land people depend on."
        tone="forest"
      />

      <Section title="Three observations that shaped this vision">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-navy-700/15 p-5 dark:border-parchment-100/10">
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-parchment-100/50">
              01
            </p>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Mobile reach already exceeds banking reach in much of rural Haiti. Where a branch is
              hours away, a phone signal often isn&rsquo;t.
            </p>
          </div>
          <div className="rounded-xl border border-navy-700/15 p-5 dark:border-parchment-100/10">
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-parchment-100/50">
              02
            </p>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Access without understanding is a liability, not a benefit. A tool handed over without
              education creates new risks instead of solving old ones.
            </p>
          </div>
          <div className="rounded-xl border border-navy-700/15 p-5 dark:border-parchment-100/10">
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-parchment-100/50">
              03
            </p>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              Financial development and environmental health aren&rsquo;t separate tracks —
              communities whose security depends on land can&rsquo;t be served by an initiative that
              ignores deforestation.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="By 2030" title="What success looks like">
        <ul className="max-w-3xl space-y-3 text-ink-soft dark:text-parchment-100/75">
          <li>
            Thousands of people who&rsquo;ve completed financial and Web3 training in Haitian Creole
          </li>
          <li>
            An active community agent network operating across several departments in Haiti, and in
            other Caribbean islands
          </li>
          <li>Thousands of trees planted and tracked through community-led reforestation work</li>
          <li>
            A governance model mature enough that other community initiatives look to it as a
            reference
          </li>
        </ul>
      </Section>

      <CTASection
        title="From vision to phases"
        description="Our roadmap turns this vision into concrete, dated milestones across four phases."
        primary={{ label: "View the roadmap", href: "/roadmap" }}
        secondary={{ label: "Read our mission", href: "/mission" }}
      />
    </>
  );
}
