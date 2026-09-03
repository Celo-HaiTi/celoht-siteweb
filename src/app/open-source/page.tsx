import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  BookOpen,
  Check,
  Code2,
  FileText,
  GitBranch,
  Lightbulb,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  openSourcePrinciples,
  whatWePublic,
  publicProjects,
  governanceInfo,
  transparencyAreas,
  securityItems,
  policies,
  roadmapPhases,
  brandResources,
  publicResourceDirectory,
  getStatusColor,
  getStatusLabel,
} from "@/lib/open-source-professional";

export const metadata: Metadata = {
  title:
    "CeloHT Open Source | Official Public Documentation & Transparency Center",
  description:
    "CeloHT Open Source Center: explore public code, governance, transparency, security, research, policies, and project infrastructure. An independent, professional open-source information resource.",
  alternates: { canonical: "/open-source" },
  openGraph: {
    title: "CeloHT Open Source",
    description:
      "Official CeloHT Open Source Center: public documentation, governance, and transparency.",
    url: "https://celoht.com/open-source/",
    type: "website",
  },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Open Source" }]} />

      {/* HERO */}
      <PageHero
        eyebrow="CeloHT Open Source"
        title="Open by design. Documented for transparency. Built for long-term public value."
        lead="CeloHT develops and documents its public infrastructure, research, policies and ecosystem resources through an open and transparent model designed to make the project understandable, inspectable and accountable."
      />

      <section className="mx-auto flex max-w-6xl flex-wrap gap-4 px-4 pb-10 sm:px-6">
        <Link
          href="#public-resources"
          className="inline-flex min-h-12 items-center gap-2 rounded-md bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-300"
        >
          Explore Public Resources →
        </Link>
        <Link
          href="/docs"
          className="inline-flex min-h-12 items-center gap-2 rounded-md border border-parchment-100/30 px-6 py-3 text-sm font-semibold text-parchment-50 transition-colors hover:border-gold-300 hover:text-gold-300"
        >
          Read the Documentation
        </Link>
      </section>

      {/* PRINCIPLES */}
      <Section
        eyebrow="Our Open Source Principles"
        title="Standards guiding our work"
      >
        <div className="grid gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 sm:grid-cols-2 lg:grid-cols-3">
          {openSourcePrinciples.map((principle) => (
            <div
              key={principle.title}
              className="bg-parchment-50 p-6 dark:bg-navy-900"
            >
              <p className="font-mono text-xs tracking-[0.16em] text-gold-800 dark:text-gold-300">
                {principle.title.toUpperCase()}
              </p>
              <p className="mt-5 text-sm leading-6 text-ink-soft dark:text-parchment-100/70">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT WE MAKE PUBLIC */}
      <section className="border-y border-navy-700/10 bg-navy-950 text-parchment-50 dark:border-parchment-100/10">
        <Section
          eyebrow="What We Make Public"
          title="Nine areas of public transparency"
        >
          <div className="grid gap-px overflow-hidden border border-parchment-100/15 bg-parchment-100/15 sm:grid-cols-2 lg:grid-cols-3">
            {whatWePublic.map((resource) => {
              const icons: Record<string, LucideIcon> = {
                Code2,
                BookOpen,
                Users,
                ShieldCheck,
                Search,
                Lightbulb,
                FileText,
                GitBranch,
              };
              const Icon = icons[resource.icon] || Code2;
              return (
                <Link
                  key={resource.title}
                  href={resource.internalLink}
                  className="group bg-navy-950 p-6 transition-colors hover:bg-navy-800"
                >
                  <Icon
                    size={21}
                    className="text-gold-300"
                    aria-hidden="true"
                  />
                  <h3 className="mt-8 font-display text-xl font-semibold">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-parchment-100/65">
                    {resource.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </Section>
      </section>

      {/* PROJECTS & INFRASTRUCTURE */}
      <Section
        id="projects"
        eyebrow="Projects & Public Infrastructure"
        title="The CeloHT ecosystem"
      >
        <p className="mb-8 max-w-3xl text-base leading-7 text-ink-soft dark:text-parchment-100/70">
          CeloHT maintains a public ecosystem of code, documentation, research,
          and infrastructure. Each project serves a specific role and carries a
          status designation indicating its current state.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {publicProjects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-ink-soft dark:text-parchment-100/70">
                    {project.purpose}
                  </p>
                </div>
                <span
                  className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-semibold ${getStatusColor(project.status)}`}
                >
                  {getStatusLabel(project.status)}
                </span>
              </div>

              <div className="mt-4 space-y-2 border-t border-navy-700/15 pt-4 dark:border-parchment-100/10">
                <p className="text-sm font-semibold text-gold-500">Role</p>
                <p className="text-sm text-ink-soft dark:text-parchment-100/70">
                  {project.role}
                </p>
              </div>

              {project.technology && (
                <div className="mt-3 space-y-2">
                  <p className="text-sm font-semibold text-gold-500">
                    Technology
                  </p>
                  <p className="text-sm text-ink-soft dark:text-parchment-100/70">
                    {project.technology}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* GOVERNANCE */}
      <Section
        eyebrow="Governance"
        title="Public accountability and decision-making"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <p className="text-base leading-7 text-ink-soft dark:text-parchment-100/70">
            CeloHT&apos;s governance is public and documented. Organizational
            structure, decision-making principles, and governance frameworks are
            maintained in public repositories and accessible through
            CeloHT&apos;s official documentation.
          </p>
          <div className="space-y-3">
            {governanceInfo.map((item) => (
              <Link
                key={item.title}
                href={item.link || "#"}
                className="rounded-xl border border-navy-700/15 p-4 transition-colors hover:border-gold-500/60 dark:border-parchment-100/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-ink-soft dark:text-parchment-100/70">
                      {item.description}
                    </p>
                  </div>
                  {item.status === "OPERATIONAL" && (
                    <span className="mt-0.5 whitespace-nowrap rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Operational
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* TRANSPARENCY */}
      <section className="border-y border-forest-500/20 bg-forest-700 text-parchment-50">
        <Section
          eyebrow="Transparency"
          title="How we maintain public accountability"
        >
          <p className="mb-8 text-base leading-7">
            Transparency is not optional at CeloHT. We distinguish current work
            from planned work, maintain public documentation, and preserve a
            history of decisions and organizational development.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {transparencyAreas.map((area) => (
              <Link
                key={area.title}
                href={area.link || "#"}
                className="rounded-xl border border-parchment-100/20 bg-forest-600 p-5 transition-colors hover:bg-forest-500"
              >
                <h4 className="font-semibold">{area.title}</h4>
                <p className="mt-2 text-sm leading-6 text-forest-50/90">
                  {area.description}
                </p>
                {area.status && (
                  <p className="mt-3 text-xs font-semibold text-gold-300">
                    {area.status}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </Section>
      </section>

      {/* SECURITY */}
      <Section
        eyebrow="Security"
        title="Public security practices and responsible disclosure"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <p className="text-base leading-7 text-ink-soft dark:text-parchment-100/70">
            CeloHT documents its security practices and maintains a responsible
            disclosure process for vulnerability reporting. Security information
            is publicly available to enable community review and verification.
          </p>
          <div className="space-y-3">
            {securityItems.map((item) => (
              <Link
                key={item.title}
                href={item.link || "#"}
                className="rounded-xl border border-navy-700/15 p-4 transition-colors hover:border-gold-500/60 dark:border-parchment-100/10"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-ink-soft dark:text-parchment-100/70">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* RESEARCH */}
      <Section
        eyebrow="Research"
        title="Technical analysis and evidence-based work"
      >
        <p className="mb-8 max-w-3xl text-base leading-7 text-ink-soft dark:text-parchment-100/70">
          CeloHT publishes research papers, technical specifications, RFCs, and
          evidence-based analysis. Research is organized and made accessible
          through public repositories and documentation.
        </p>
        <Link
          href="/research"
          className="inline-flex items-center gap-2 rounded-xl border border-navy-700/15 p-4 text-sm font-semibold transition-colors hover:border-gold-500/60 dark:border-parchment-100/10"
        >
          Explore Research Repository →
        </Link>
      </Section>

      {/* POLICIES */}
      <section className="border-y border-navy-700/10 bg-parchment text-ink dark:border-parchment-100/10">
        <Section
          id="policies"
          eyebrow="Policies"
          title="Public rules and frameworks"
        >
          <p className="mb-8 text-base leading-7 text-ink-soft">
            CeloHT maintains public policies governing governance, security,
            privacy, accessibility, community standards, and other relevant
            areas. These policies are regularly reviewed and updated to reflect
            the project&apos;s evolution.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {policies.map((policy) => (
              <Link
                key={policy.title}
                href={policy.link}
                className="rounded-xl border border-navy-700/15 p-4 transition-colors hover:border-gold-500/60 dark:border-parchment-100/10"
              >
                <p className="font-semibold">{policy.title}</p>
                <p className="mt-1 text-sm text-ink-soft dark:text-parchment-100/70">
                  {policy.description}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      </section>

      {/* ROADMAP */}
      <Section eyebrow="Roadmap" title="Public development direction">
        <p className="mb-8 max-w-3xl text-base leading-7 text-ink-soft dark:text-parchment-100/70">
          CeloHT maintains a public roadmap distinguishing completed work,
          current work, near-term plans, and longer-term vision. This allows the
          community to understand our development direction and progress.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {roadmapPhases.map((phase) => (
            <div
              key={phase.title}
              className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">
                  {phase.title}
                </h3>
                <span
                  className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${
                    phase.status === "COMPLETED"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : phase.status === "CURRENT"
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        : phase.status === "NEXT"
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                          : "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                  }`}
                >
                  {phase.status === "COMPLETED"
                    ? "Completed"
                    : phase.status === "CURRENT"
                      ? "Active"
                      : phase.status === "NEXT"
                        ? "Near-Term"
                        : "Long-Term"}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {phase.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm text-ink-soft dark:text-parchment-100/70"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-gold-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* BRAND RESOURCES */}
      <Section
        eyebrow="Brand Resources"
        title="Official visual identity and media"
      >
        <p className="mb-8 text-base leading-7 text-ink-soft dark:text-parchment-100/70">
          CeloHT&apos;s brand resources, including logos, visual identity,
          typography, and brand story, are publicly available for reference and
          approved uses.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {brandResources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.link}
              className="rounded-xl border border-navy-700/15 p-4 transition-colors hover:border-gold-500/60 dark:border-parchment-100/10"
            >
              <p className="font-semibold">{resource.title}</p>
              <p className="mt-1 text-sm text-ink-soft dark:text-parchment-100/70">
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* PUBLIC RESOURCES DIRECTORY */}
      <section className="border-y border-navy-700/10 bg-navy-950 text-parchment-50 dark:border-parchment-100/10">
        <Section
          id="public-resources"
          eyebrow="Public Resources Directory"
          title="Where to find information"
        >
          <p className="mb-8 text-base leading-7 text-parchment-100/70">
            Complete directory of public CeloHT information. All resources are
            internal to the CeloHT website and do not require external
            navigation.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publicResourceDirectory.map((category) => {
              const icons: Record<string, LucideIcon> = {
                BookOpen,
                Users,
                ShieldCheck,
                Search,
                FileText,
                Lightbulb,
              };
              const Icon = icons[category.icon] || Code2;
              return (
                <div
                  key={category.title}
                  className="rounded-2xl border border-parchment-100/15 bg-navy-900 p-6"
                >
                  <Icon
                    size={24}
                    className="text-gold-300"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {category.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {category.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-sm text-gold-300 hover:text-gold-100 underline-offset-4 hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Section>
      </section>

      {/* FINAL CTA */}
      <CTASection
        title="Ready to explore CeloHT's public infrastructure?"
        description="Everything you need to understand CeloHT's open development, transparency, and public resources is available here. No GitHub account required."
        primary={{
          label: "Explore Public Resources",
          href: "#public-resources",
        }}
        secondary={{ label: "Read Full Documentation", href: "/docs" }}
      />
    </>
  );
}
