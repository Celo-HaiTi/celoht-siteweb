import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  BookOpen,
  Check,
  Code2,
  FileText,
  GitBranch,
  Lightbulb,
  LockKeyhole,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  publicEcosystemProjects,
  publicDocumentationLinks,
  technologyStack,
} from "@/lib/open-source";

export const metadata: Metadata = {
  title: "CeloHT Open Source & Transparency Center | Public Code, Governance & Documentation",
  description:
    "CeloHT Open Source & Transparency Center: explore public code, governance, documentation, research, security practices, and verified development infrastructure behind the ecosystem.",
  alternates: { canonical: "/open-source" },
  openGraph: {
    title: "CeloHT Open Source & Transparency Center",
    description:
      "Explore CeloHT's public code, governance, documentation, and development infrastructure.",
    url: "https://celoht.com/open-source/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CeloHT Open Source & Transparency Center",
    description: "Understand how CeloHT operates in public: code, governance, and documented development.",
  },
};

const publicAreas = [
  { icon: Code2, title: "Source Code", detail: "Website, product, documentation, contracts, and supporting tools are organized in public repositories." },
  { icon: BookOpen, title: "Documentation", detail: "Comprehensive guides explain mission, architecture, APIs, education, and contributor workflows." },
  { icon: Users, title: "Governance", detail: "Public governance materials describe accountability, decision-making, and ecosystem evolution." },
  { icon: ShieldCheck, title: "Security", detail: "Security reporting, dependency management, and scope are documented for inspection." },
  { icon: Search, title: "Research", detail: "Research papers, RFCs, technical specifications, and evidence-based analysis." },
  { icon: Lightbulb, title: "Education", detail: "Learning resources covering financial literacy, blockchain fundamentals, and practical participation." },
  { icon: FileText, title: "Brand Resources", detail: "Official logos, brand guidelines, messaging, typography, colors, and media assets." },
  { icon: GitBranch, title: "Roadmap", detail: "Public planning that distinguishes current work, future phases, and completed results." },
  { icon: LockKeyhole, title: "Policies", detail: "Contribution, security, conduct, accessibility, and privacy policies for review." },
  { icon: Accessibility, title: "Community Contributions", detail: "Code, documentation, translation, design, research, testing, and accessibility all have a place." },
];

const principles = [
  ["OPEN BY DEFAULT", "Important project information should be publicly documented whenever appropriate."],
  ["BUILD IN PUBLIC", "Development should be understandable, inspectable, and connected to a visible history."],
  ["COMMUNITY CONTRIBUTION", "People should have a clear path to participate, whether or not they write code."],
  ["VERIFY, DON'T ASSUME", "Claims must be supported by project documentation or public evidence."],
  ["DOCUMENTATION FIRST", "Open source only works when people can understand what they are inspecting."],
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
  name: "CeloHT Open Source & Transparency Center",
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
        eyebrow="Open Source & Transparency"
        title="Built in the open. Designed for transparency. Open to contribution."
        lead="CeloHT is an open-source initiative built on verifiable code, public documentation, transparent governance, and accessible participation. Understand our work before you inspect it."
      />

      <Section eyebrow="Why Open Source?" title="Trust should be verifiable">
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
        <Section eyebrow="What is Public?" title="A project you can understand before you inspect it">
          <div className="grid gap-px overflow-hidden border border-parchment-100/15 bg-parchment-100/15 sm:grid-cols-2 lg:grid-cols-3">
            {publicAreas.map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="bg-navy-950 p-6 transition-colors hover:bg-navy-800"><Icon size={21} className="text-gold-300" aria-hidden="true" /><h2 className="mt-8 font-display text-xl font-semibold">{item.title}</h2><p className="mt-3 text-sm leading-6 text-parchment-100/65">{item.detail}</p></article>;
            })}
          </div>
        </Section>
      </section>

      <Section eyebrow="CeloHT Public Ecosystem" title="Public resources and verified development">
        <p className="mb-8 max-w-3xl text-base leading-7 text-ink-soft dark:text-parchment-100/70">
          CeloHT maintains a public ecosystem of code, documentation, research, and infrastructure. These projects represent our commitment to transparent development and community participation. Each project serves a specific role in the ecosystem.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {publicEcosystemProjects.map((project) => (
            <div key={project.name} className="flex flex-col rounded-2xl border border-navy-700/15 p-5 transition-colors dark:border-parchment-100/10 hover:border-gold-500/60">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold-800 dark:text-gold-300">{project.role}</span>
              <h3 className="mt-6 font-display text-lg font-semibold">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft dark:text-parchment-100/65">{project.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Transparency & Governance" title="Open accountability and public decision-making">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5 text-base leading-7 text-ink-soft dark:text-parchment-100/70">
            <p>Governance, transparency, fund allocation principles, security policies, contribution rules, research, and public development history are fundamental to CeloHT's accountability.</p>
            <p>When a policy or documentation is authoritative, the site explains its role and provides direct access rather than repeating details. The goal is to enable understanding through primary sources, not intermediaries.</p>
            <p>
              <Link href="/transparency" className="font-semibold text-gold-500 hover:text-gold-400">
                Learn how we maintain public transparency →
              </Link>
            </p>
          </div>
          <div className="space-y-3">
            {[
              { label: "Governance", href: "/governance" },
              { label: "Security", href: "/security" },
              { label: "Roadmap", href: "/roadmap" },
              { label: "Architecture", href: "/technology" },
              { label: "Transparency", href: "/transparency" },
              { label: "Accessibility", href: "/accessibility" },
            ].map((document) => (
              <Link key={document.label} href={document.href} className="flex items-center justify-between rounded-xl border border-navy-700/15 p-4 text-sm font-semibold transition-colors hover:border-gold-500/60 dark:border-parchment-100/10">
                {document.label}
                <span className="text-xs text-gold-300">→</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <section className="border-y border-forest-500/20 bg-forest-700 text-parchment-50">
        <Section eyebrow="Security & Responsibility" title="How we handle vulnerability reporting and security practices">
          <div className="grid gap-8 lg:grid-cols-3">
            <p className="text-sm leading-6 text-forest-50/80">
              Never publish a vulnerability in a public issue. Report security concerns privately at{" "}
              <a className="font-semibold text-gold-300 underline-offset-4 hover:underline" href="mailto:security@celoht.com">
                security@celoht.com
              </a>
              .
            </p>
            <p className="text-sm leading-6 text-forest-50/80">
              The website is static-first and documents its dependency management, secret scanning, security headers, and automated protections. These practices are verifiable in the public repository.
            </p>
            <p className="text-sm leading-6 text-forest-50/80">
              Smart-contract security belongs with the relevant contract repository. CeloHT does not publish security claims without public evidence and disclosure.
            </p>
          </div>
        </Section>
      </section>

      <Section eyebrow="Documentation & Resources" title="Key reference materials">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {publicDocumentationLinks.map((doc) => (
            <Link key={doc.label} href={doc.href} className="rounded-xl border border-navy-700/15 p-4 text-sm font-semibold transition-colors hover:border-gold-500/60 dark:border-parchment-100/10 flex items-center justify-between gap-2">
              <span>{doc.label}</span>
              <span className="text-xs text-gold-300 shrink-0">→</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="How to Contribute" title="A clear path from interest to participation">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <ol className="space-y-3">
            {contributionSteps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-xl border border-navy-700/15 p-4 dark:border-parchment-100/10">
                <span className="font-mono text-xs text-gold-800 dark:text-gold-300">0{index + 1}</span>
                <span className="text-sm leading-6 text-ink-soft dark:text-parchment-100/70">{step}</span>
              </li>
            ))}
          </ol>
          <div className="border-l-2 border-gold-500 pl-6">
            <h3 className="font-display text-2xl font-semibold">Contribution is broader than code.</h3>
            <p className="mt-4 text-base leading-7 text-ink-soft dark:text-parchment-100/70">
              Documentation, translation, education, design, research, community support, accessibility, testing, and responsible security reporting all improve the public project.
            </p>
            <Link href="/contributing" className="mt-7 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline">
              Read the contributor guide →
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Technical Standards" title="A verified, static-first architecture">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="max-w-xl text-base leading-7 text-ink-soft dark:text-parchment-100/70">
            This website is built for transparency: production builds export static pages, while automated checks protect types, behavior, accessibility, and deployment quality. All tools and practices are documented.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {technologyStack.map((item) => (
              <div key={item} className="rounded-xl border border-navy-700/15 p-4 text-sm font-semibold dark:border-parchment-100/10">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Core Principles" title="Standards guiding our work">
        <div className="grid gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(([title, detail]) => (
            <div key={title} className="bg-parchment-50 p-6 dark:bg-navy-900">
              <p className="font-mono text-xs tracking-[0.16em] text-gold-800 dark:text-gold-300">{title}</p>
              <p className="mt-5 text-sm leading-6 text-ink-soft dark:text-parchment-100/70">{detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-navy-700/10 bg-parchment text-ink dark:border-parchment-100/10">
        <Section eyebrow="Inspect the Source" title="The website explains what we do. The repositories show how we do it.">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="max-w-2xl text-base leading-7 text-ink-soft">
              Explore source code, commit history, issues, pull requests, documentation, releases, and public development discussions across our repositories to understand our work in detail.
            </p>
            <Link href="/contributing" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy-950 px-6 py-3 text-sm font-bold text-parchment-50 transition-colors hover:bg-navy-800">
              Get Started →
            </Link>
          </div>
        </Section>
      </section>

      <CTASection
        title="Ready to understand the work?"
        description="Start with the documentation, explore the ecosystem, and find a way to participate that matches your interests and skills."
        primary={{ label: "Read Documentation", href: "/docs" }}
        secondary={{ label: "Contribute", href: "/contributing" }}
      />
    </>
  );
}
