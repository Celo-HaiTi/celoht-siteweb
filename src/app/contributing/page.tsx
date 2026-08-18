import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { GITHUB_FLAGSHIP_URL, GITHUB_WEBSITE_URL, GITHUB_DAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contributing",
  description: "How to contribute to any of CeloHT's three open-source repositories.",
  alternates: { canonical: "/contributing" },
};

const repos = [
  {
    name: "Flagship (governance & docs)",
    href: `${GITHUB_FLAGSHIP_URL}/blob/main/CONTRIBUTING.md`,
    detail: "Documentation, translations, governance proposals.",
  },
  {
    name: "Website",
    href: `${GITHUB_WEBSITE_URL}/blob/main/CONTRIBUTING.md`,
    detail: "Next.js, TypeScript, Tailwind CSS.",
  },
  {
    name: "dApp",
    href: `${GITHUB_DAPP_URL}/blob/main/CONTRIBUTING.md`,
    detail: "Frontend and Solidity contract contributions.",
  },
];

export default function ContributingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contributing" }]} />
      <PageHero
        eyebrow="Contributing"
        title="Pick a repository, read its guide"
        lead="Each of CeloHT's three repositories has its own CONTRIBUTING.md with specific setup steps and standards."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-3">
          {repos.map((repo) => (
            <a
              key={repo.href}
              href={repo.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-navy-700/15 p-6 transition-colors hover:border-gold-500/50 dark:border-parchment-100/10"
            >
              <h3 className="font-display text-lg font-semibold">{repo.name}</h3>
              <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">{repo.detail}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section eyebrow="Before you start" title="">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            Read the{" "}
            <Link href="/code-of-conduct" className="underline underline-offset-2">
              Code of Conduct
            </Link>
          </li>
          <li>Search existing issues before opening a new one</li>
          <li>
            Never describe CeloHT as a blockchain, token, or investment product in any contribution
          </li>
        </ul>
      </Section>

      <CTASection
        title="Ready to open your first PR?"
        description="Every repository welcomes documentation fixes, tests, and small improvements as a great first contribution."
        primary={{ label: "Visit the developer portal", href: "/developers" }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
