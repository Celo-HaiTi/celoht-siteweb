import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  BookOpen,
  Check,
  Code2,
  FileText,
  GitBranch,
  Github,
  LockKeyhole,
  Search,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  GITHUB_ORG_URL,
  openSourceDocuments,
  openSourceRepositories,
  technologyStack,
} from "@/lib/open-source";

export const metadata: Metadata = {
  title: "CeloHT Open Source | Build, Inspect & Contribute",
  description:
    "Understand how CeloHT builds in public: explore the code, documentation, governance, security practices, and real contribution paths behind the ecosystem.",
  alternates: { canonical: "/open-source" },
  openGraph: {
    title: "CeloHT Open Source | Build, Inspect & Contribute",
    description:
      "Explore CeloHT's public code, documentation, governance, security practices, and contribution paths.",
    url: "https://celoht.com/open-source/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CeloHT Open Source | Build, Inspect & Contribute",
    description: "Explore the public development ecosystem behind CeloHT.",
  },
};

const publicAreas = [
  { icon: Code2, title: "Source code", detail: "Website, product, documentation, contracts, and supporting tools are organized in public repositories." },
  { icon: BookOpen, title: "Documentation", detail: "The site and documentation repositories explain the mission, architecture, APIs, education, and contributor workflows." },
  { icon: UsersRound, title: "Governance", detail: "Public governance material describes accountability, decision-making, and how the model can evolve." },
  { icon: ShieldCheck, title: "Security", detail: "Security reporting, dependency hygiene, secret management, and scope are documented for inspection." },
  { icon: Search, title: "Research", detail: "Research, RFCs, technical specifications, and evidence-based analysis live in the research ecosystem." },
  { icon: BookOpen, title: "Education", detail: "Learning resources connect financial literacy, blockchain fundamentals, wallet safety, and practical participation." },
  { icon: FileText, title: "Brand resources", detail: "The public brand repository contains identity guidance, assets, messaging, and usage standards." },
  { icon: GitBranch, title: "Roadmap", detail: "Public planning distinguishes current work, future phases, and commitments from completed results." },
  { icon: LockKeyhole, title: "Policies", detail: "Contribution, security, conduct, accessibility, privacy, and no-token policies are available for review." },
  { icon: Accessibility, title: "Community contributions", detail: "Code, documentation, translation, education, design, research, testing, and accessibility all have a place." },
];

const principles = [
  ["OPEN BY DEFAULT", "Important project information should be publicly documented whenever appropriate."],
  ["BUILD IN PUBLIC", "Development should be understandable, inspectable, and connected to a visible history."],
  ["COMMUNITY CONTRIBUTION", "People should have a clear path to participate, whether or not they write code."],
  ["VERIFY, DON'T ASSUME", "Claims must be supported by project documentation or public evidence."],
  ["DOCUMENTATION MATTERS", "Open source only works when people can understand what they are inspecting."],
  ["RESPONSIBLE SECURITY", "Security issues should be reported privately and handled through a documented process."],
];

const contributionSteps = [
  "Explore the project and choose a question or area that interests you.",
  "Read the relevant documentation, contribution guide, and code of conduct.",
  "Choose an area: code, docs, translation, education, design, research, testing, accessibility, or community.",
  "Search existing issues before opening a new issue or proposal.",
  "Fork or clone the relevant repository and create a focused branch.",
  "Make the change, run the local checks, and document what you verified.",
  "Submit a pull request with enough context for another person to review it.",
  "Participate in review, respond to feedback, and help improve the public record.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CeloHT Open Source",
  description: metadata.description,
  url: "https://celoht.com/open-source/",
  isPartOf: { "@type": "WebSite", name: "CeloHT", url: "https://celoht.com/" },
};

export default function OpenSourcePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: "Open Source" }]} />
      <PageHero
        eyebrow="CeloHT Open Source"
        title="Built in the open. Designed for transparency. Open to contribution."
        lead="CeloHT is an open-source Haitian Web3 initiative focused on financial inclusion, education, community infrastructure, and environmental impact within the Celo ecosystem."
      />

      <section className="mx-auto flex max-w-6xl flex-wrap gap-4 px-4 pb-10 sm:px-6">
        <a href={GITHUB_ORG_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-300">
          <Github size={18} aria-hidden="true" /> Explore GitHub
        </a>
        <Link href="/contributing" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-parchment-100/30 px-6 py-3 text-sm font-semibold text-parchment-50 transition-colors hover:border-gold-300 hover:text-gold-300">
          How to contribute
        </Link>
      </section>

      <Section eyebrow="Why open source" title="Trust should be verifiable">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <p className="font-display text-3xl leading-tight text-ink dark:text-parchment-50 sm:text-4xl">
            CeloHT believes people should be able to inspect the ideas, code, policies, and decisions that shape the ecosystem.
          </p>
          <div className="space-y-5 text-base leading-7 text-ink-soft dark:text-parchment-100/70">
            <p>Open development gives communities, developers, researchers, partners, and contributors a shared source of evidence. It makes questions easier to ask and improvements easier to propose.</p>
            <p>For CeloHT, open source means more than publishing a repository. It means documenting context, separating plans from results, reviewing changes, and maintaining a public trail of the work.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Transparency", "Accountability", "Community participation", "Reproducibility", "Collaborative development", "Security through review", "Public documentation", "Long-term maintainability"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-navy-700/15 p-4 text-sm font-semibold dark:border-parchment-100/10"><Check size={17} className="shrink-0 text-gold-500" aria-hidden="true" />{item}</div>
          ))}
        </div>
      </Section>

      <section className="border-y border-navy-700/10 bg-navy-950 text-parchment-50 dark:border-parchment-100/10">
        <Section eyebrow="What is public" title="A project you can understand before you inspect it">
          <div className="grid gap-px overflow-hidden border border-parchment-100/15 bg-parchment-100/15 sm:grid-cols-2 lg:grid-cols-3">
            {publicAreas.map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="bg-navy-950 p-6 transition-colors hover:bg-navy-800"><Icon size={21} className="text-gold-300" aria-hidden="true" /><h2 className="mt-8 font-display text-xl font-semibold">{item.title}</h2><p className="mt-3 text-sm leading-6 text-parchment-100/65">{item.detail}</p></article>;
            })}
          </div>
        </Section>
      </section>

      <Section eyebrow="CeloHT on GitHub" title="The public development ecosystem">
        <div className="flex flex-col gap-4 border-b border-navy-700/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-base leading-7 text-ink-soft dark:text-parchment-100/70">GitHub is CeloHT&apos;s primary public development environment. The directory below uses verified repositories and descriptions; it intentionally does not display unverified stars, forks, commits, or contributor counts.</p>
          <a href={GITHUB_ORG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-500">View the organization <Github size={16} aria-hidden="true" /></a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {openSourceRepositories.map((repo) => <a key={repo.name} href={repo.href} target="_blank" rel="noreferrer" className="group flex min-h-56 flex-col rounded-2xl border border-navy-700/15 p-5 transition-colors hover:border-gold-500/60 dark:border-parchment-100/10"><div className="flex items-start justify-between gap-3"><span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold-800 dark:text-gold-300">{repo.category}</span><Github size={17} className="text-muted transition-colors group-hover:text-gold-300" aria-hidden="true" /></div><h2 className="mt-8 font-display text-xl font-semibold">{repo.name}</h2><p className="mt-3 flex-1 text-sm leading-6 text-ink-soft dark:text-parchment-100/65">{repo.description}</p>{repo.language && <span className="mt-5 text-xs font-semibold text-muted">{repo.language}</span>}</a>)}
        </div>
      </Section>

      <Section eyebrow="Governance and transparency" title="Open source is not only about source code">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5 text-base leading-7 text-ink-soft dark:text-parchment-100/70"><p>Governance, treasury transparency, fund allocation principles, security policy, contribution rules, research, and public development history are part of the same accountability layer.</p><p>Where a policy or repository is the authoritative source, the site explains its role and links to the document rather than repeating unsupported details.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{openSourceDocuments.map((document) => document.external ? <a key={document.label} href={document.href} target="_blank" rel="noreferrer" className="rounded-xl border border-navy-700/15 p-4 text-sm font-semibold transition-colors hover:border-gold-500/60 dark:border-parchment-100/10">{document.label} ↗</a> : <Link key={document.label} href={document.href} className="rounded-xl border border-navy-700/15 p-4 text-sm font-semibold transition-colors hover:border-gold-500/60 dark:border-parchment-100/10">{document.label} →</Link>)}</div>
        </div>
      </Section>

      <section className="border-y border-forest-500/20 bg-forest-700 text-parchment-50">
        <Section eyebrow="Open source security" title="Responsible reporting, review, and maintenance">
          <div className="grid gap-8 lg:grid-cols-3"><p className="text-sm leading-6 text-forest-50/80">Never publish a vulnerability in a public issue. Report website issues privately at <a className="font-semibold text-gold-300 underline-offset-4 hover:underline" href="mailto:security@celoht.com">security@celoht.com</a>.</p><p className="text-sm leading-6 text-forest-50/80">The website documents its static-first scope, dependency hygiene, secret management, security headers, service worker boundaries, CodeQL, and secret scanning.</p><p className="text-sm leading-6 text-forest-50/80">Smart-contract security claims belong to the relevant contract repository. CeloHT does not claim an external audit here without published evidence.</p></div>
        </Section>
      </section>

      <Section eyebrow="How to contribute" title="A clear path from interest to pull request">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <ol className="space-y-3">{contributionSteps.map((step, index) => <li key={step} className="flex gap-4 rounded-xl border border-navy-700/15 p-4 dark:border-parchment-100/10"><span className="font-mono text-xs text-gold-800 dark:text-gold-300">0{index + 1}</span><span className="text-sm leading-6 text-ink-soft dark:text-parchment-100/70">{step}</span></li>)}</ol>
          <div className="border-l-2 border-gold-500 pl-6"><h3 className="font-display text-2xl font-semibold">Contribution is broader than code.</h3><p className="mt-4 text-base leading-7 text-ink-soft dark:text-parchment-100/70">Documentation, translation, education, design, research, community support, accessibility, testing, and responsible security reporting all improve the public project.</p><Link href="/contributing" className="mt-7 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline">Read the contributor page →</Link></div>
        </div>
      </Section>

      <Section eyebrow="Developer experience" title="A verified, static-first toolchain">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><p className="max-w-xl text-base leading-7 text-ink-soft dark:text-parchment-100/70">This website is built for inspectable changes: the production build exports static pages for GitHub Pages, while automated checks protect types, behavior, accessibility, and deployment quality.</p><div className="grid gap-3 sm:grid-cols-2">{technologyStack.map((item) => <div key={item} className="rounded-xl border border-navy-700/15 p-4 text-sm font-semibold dark:border-parchment-100/10">{item}</div>)}</div></div>
      </Section>

      <section className="border-y border-navy-700/10 bg-parchment text-ink dark:border-parchment-100/10">
        <Section eyebrow="Inspect the project" title="The website tells you what CeloHT is. GitHub lets you inspect how it is built.">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><p className="max-w-2xl text-base leading-7 text-ink-soft">Inspect source code, commit history, issues, pull requests, documentation, releases, repository structure, and public development discussions where available.</p><a href={GITHUB_ORG_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy-950 px-6 py-3 text-sm font-bold text-parchment-50 transition-colors hover:bg-navy-800"><Github size={18} aria-hidden="true" /> Inspect on GitHub</a></div>
        </Section>
      </section>

      <Section eyebrow="Open-source principles" title="A public standard for the work">
        <div className="grid gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 sm:grid-cols-2 lg:grid-cols-3">{principles.map(([title, detail]) => <div key={title} className="bg-parchment-50 p-6 dark:bg-navy-900"><p className="font-mono text-xs tracking-[0.16em] text-gold-800 dark:text-gold-300">{title}</p><p className="mt-5 text-sm leading-6 text-ink-soft dark:text-parchment-100/70">{detail}</p></div>)}</div>
      </Section>

      <CTASection title="Ready to explore the work?" description="Start with the public documentation, then inspect the repositories and choose a contribution that fits your skills and context." primary={{ label: "Explore GitHub", href: GITHUB_ORG_URL }} secondary={{ label: "Read the documentation", href: "/docs" }} external />
    </>
  );
}
