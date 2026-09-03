import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What CeloHT collects, why, and the principles that govern how we handle it.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        lead="Last reviewed alongside our documentation repository."
      />

      <Section title="What this website collects">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          This website does not use tracking cookies or third-party analytics -
          see our{" "}
          <Link href="/cookies" className="underline underline-offset-2">
            Cookie Policy
          </Link>{" "}
          except for a local theme preference. Information shared with external
          services is subject to their own privacy policies.
        </p>
      </Section>

      <Section title="What the dApp collects">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          The CeloHT dApp interacts with public blockchain data by nature - any
          on-chain action (registering as an agent, donating, voting) is
          inherently public. See the dApp&rsquo;s own Privacy Policy, linked
          from the dApp itself, for full detail.
        </p>
      </Section>

      <Section title="Principles we follow">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            <strong className="text-ink dark:text-parchment-100">
              Minimization
            </strong>{" "}
            - we only collect what&rsquo;s genuinely necessary.
          </li>
          <li>
            <strong className="text-ink dark:text-parchment-100">
              Transparency
            </strong>{" "}
            - users are told what&rsquo;s collected and why.
          </li>
          <li>
            <strong className="text-ink dark:text-parchment-100">
              No data sales
            </strong>{" "}
            - CeloHT does not sell personal information to third parties.
          </li>
        </ul>
      </Section>

      <Section title="Contact">
        <p className="text-sm text-ink-soft dark:text-parchment-100/70">
          Privacy questions:{" "}
          <a
            href="mailto:privacy@celoht.com"
            className="underline underline-offset-2"
          >
            privacy@celoht.com
          </a>
        </p>
      </Section>
    </>
  );
}
