import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { GITHUB_FLAGSHIP_URL, GITHUB_WEBSITE_URL, GITHUB_DAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How to report a vulnerability, and the security practices behind CeloHT's repositories.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Security" }]} />
      <PageHero
        eyebrow="Security"
        title="Report privately, never in a public issue"
        lead="Each CeloHT repository has its own SECURITY.md — here's the summary and where to send a report."
      />

      <Section eyebrow="Reporting" title="Where to send a vulnerability report">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            Email:{" "}
            <a href="mailto:security@celoht.com" className="underline underline-offset-2">
              security@celoht.com
            </a>
          </li>
          <li>
            Or use GitHub Security Advisories on the relevant repository&rsquo;s &ldquo;Report a
            vulnerability&rdquo; page
          </li>
        </ul>
      </Section>

      <Section eyebrow="This website" title="Practices">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Strict Content Security Policy and standard security headers (see next.config.ts)</li>
          <li>No secrets committed — environment variables only</li>
          <li>CodeQL static analysis and Dependabot on every change</li>
        </ul>
      </Section>

      <Section eyebrow="The dApp and contracts" title="Practices">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            OpenZeppelin&rsquo;s audited AccessControl, Pausable, and ReentrancyGuard base contracts
          </li>
          <li>
            DonationManager&rsquo;s platform fee is hard-capped at 5% directly in the contract code
          </li>
          <li>Every contract has pause/unpause gated to an admin role</li>
          <li>30 passing tests across the contract suite, run on every Pull Request</li>
        </ul>
      </Section>

      <Section eyebrow="Full policies" title="Per repository">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            <a
              href={`${GITHUB_FLAGSHIP_URL}/blob/main/SECURITY.md`}
              className="underline underline-offset-2"
            >
              Flagship repository SECURITY.md
            </a>
          </li>
          <li>
            <a
              href={`${GITHUB_WEBSITE_URL}/blob/main/SECURITY.md`}
              className="underline underline-offset-2"
            >
              Website repository SECURITY.md
            </a>
          </li>
          <li>
            <a
              href={`${GITHUB_DAPP_URL}/blob/main/SECURITY.md`}
              className="underline underline-offset-2"
            >
              dApp repository SECURITY.md
            </a>
          </li>
        </ul>
      </Section>
    </>
  );
}
