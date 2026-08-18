import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Code2, GitBranch, Search } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  GITHUB_BRAND_URL,
  GITHUB_CONTRACTS_URL,
  GITHUB_DAPP_URL,
  GITHUB_DEMO_URL,
  GITHUB_DOCS_URL,
  GITHUB_FLAGSHIP_URL,
  GITHUB_RESEARCH_URL,
  GITHUB_WEBSITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Explore the CeloHT repositories, documentation, research, contracts, brand system, and contribution paths built in public.",
  alternates: { canonical: "/open-source" },
};

const repositories = [
  { name: "CeloHT", detail: "Core mission, governance, and public project record.", category: "Foundation", href: GITHUB_FLAGSHIP_URL },
  { name: "CeloHT Docs", detail: "Architecture, APIs, roadmap, standards, and contributor guidance.", category: "Documentation", href: GITHUB_DOCS_URL },
  { name: "CeloHT DApp", detail: "Smart contracts powering education, agents, and impact tracking.", category: "Product", href: GITHUB_DAPP_URL },
  { name: "Smart Contracts", detail: "Solidity infrastructure for the CeloHT ecosystem.", category: "Infrastructure", href: GITHUB_CONTRACTS_URL },
  { name: "Research", detail: "Research papers, RFCs, specifications, and security studies.", category: "Research", href: GITHUB_RESEARCH_URL },
  { name: "Brand", detail: "Official identity, visual assets, messaging, and usage standards.", category: "Brand", href: GITHUB_BRAND_URL },
  { name: "Demo", detail: "Interactive investor and grant-reviewer product demonstration.", category: "Experience", href: GITHUB_DEMO_URL },
  { name: "Website", detail: "The public interface and content system you are reading now.", category: "Interface", href: GITHUB_WEBSITE_URL },
];

const actions = [
  { icon: Search, title: "Explore", detail: "Start with the repository that matches your question." },
  { icon: BookOpen, title: "Read", detail: "Use the canonical documentation for the full context." },
  { icon: Code2, title: "Build", detail: "Run the projects locally and understand the architecture." },
  { icon: GitBranch, title: "Contribute", detail: "Open an issue, propose a change, or improve the record." },
];

export default function OpenSourcePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Open Source" }]} />
      <PageHero
        eyebrow="Built in public"
        title="Technology built by people, in the open."
        lead="CeloHT publishes its code, documentation, research, brand system, and project direction so the ecosystem can be understood, questioned, and improved by the people around it."
      />

      <Section eyebrow="A simple way in" title="Choose your next move">
        <div className="grid gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 dark:border-parchment-100/10 dark:bg-parchment-100/10 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-parchment-50 p-6 dark:bg-navy-900">
                <Icon size={22} strokeWidth={1.5} className="text-gold-700 dark:text-gold-300" aria-hidden="true" />
                <h2 className="mt-10 font-display text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink-soft dark:text-parchment-100/65">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="CeloHT Open Source Universe" title="The repositories behind the work">
        <div className="grid gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 dark:border-parchment-100/10 dark:bg-parchment-100/10 sm:grid-cols-2 lg:grid-cols-4">
          {repositories.map((repo) => (
            <a key={repo.href} href={repo.href} target="_blank" rel="noreferrer" className="group flex min-h-56 flex-col bg-parchment-50 p-6 transition-colors hover:bg-gold-500/10 dark:bg-navy-900 dark:hover:bg-navy-800">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-gold-800 dark:text-gold-300">{repo.category}</span>
              <h2 className="mt-8 flex items-center justify-between font-display text-xl font-semibold">
                {repo.name}
                <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft dark:text-parchment-100/65">{repo.detail}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink dark:text-parchment-50">View source <ArrowUpRight size={14} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </Section>

      <CTASection
        title="Make the next contribution count."
        description="Read the context, run the code, and help CeloHT keep building a clearer path into the Celo ecosystem."
        primary={{ label: "Read the documentation", href: GITHUB_DOCS_URL }}
        secondary={{ label: "Contributing guide", href: "/contributing" }}
        external
      />
    </>
  );
}