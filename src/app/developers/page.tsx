import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { GITHUB_FLAGSHIP_URL, GITHUB_WEBSITE_URL, GITHUB_DAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Architecture, API docs, SDK, and how to contribute across CeloHT's three open-source repositories.",
  alternates: { canonical: "/developers" },
};

const repos = [
  {
    name: "Flagship (governance & docs)",
    href: GITHUB_FLAGSHIP_URL,
    detail: "The canonical source of truth: vision, governance, roadmap, and full documentation.",
  },
  {
    name: "Website",
    href: GITHUB_WEBSITE_URL,
    detail: "This site — Next.js, TypeScript, Tailwind CSS.",
  },
  {
    name: "dApp",
    href: GITHUB_DAPP_URL,
    detail: "The CeloHT dApp — Next.js frontend plus a Hardhat/Solidity contracts package.",
  },
];

export default function DevelopersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Developers" }]} />
      <PageHero
        eyebrow="Developers"
        title="Everything here is open, on purpose"
        lead="CeloHT operates fully in the open across three repositories. Code, documentation, and governance policy are published under the Apache 2.0 License."
      />

      <Section eyebrow="Repositories" title="Where the code lives">
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

      <Section eyebrow="Quick start" title="This website">
        <pre className="overflow-x-auto rounded-xl bg-navy-950 p-4 text-sm text-parchment-100">
          <code>{`git clone ${GITHUB_WEBSITE_URL}.git
cd website
npm install
npm run dev`}</code>
        </pre>
      </Section>

      <Section eyebrow="Quick start" title="The dApp and its contracts">
        <pre className="overflow-x-auto rounded-xl bg-navy-950 p-4 text-sm text-parchment-100">
          <code>{`git clone ${GITHUB_DAPP_URL}.git
cd dapp
npm install
npm run dev                        # frontend
npm run contracts:compile           # contracts
npm run contracts:test`}</code>
        </pre>
      </Section>

      <Section eyebrow="Standards" title="What every change goes through">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Pull Request review, with CODEOWNERS-mandated sign-off on sensitive paths</li>
          <li>Automated linting, type checking, and build verification</li>
          <li>CodeQL static analysis and secret scanning on every repository</li>
          <li>Dependency review on every change, with Dependabot keeping packages current</li>
        </ul>
      </Section>

      <CTASection
        title="Ready to open your first PR?"
        description="Every repository has its own contributing guide with specific setup steps."
        primary={{ label: "Contributing guide", href: "/contributing" }}
        secondary={{ label: "Full documentation", href: "/documentation" }}
      />
    </>
  );
}
