import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { getStatusLabel, publicProjects } from "@/lib/open-source-professional";
import { GITHUB_ORG_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects & Public Infrastructure",
  description:
    "Explore the public repositories and infrastructure that make up the CeloHT open-source ecosystem.",
  alternates: { canonical: "/projects" },
};

const categories = [
  "Core & Public Layer",
  "Production Infrastructure",
  "Governance, Research & Ecosystem",
];

const statusLabel: Record<string, string> = {
  ACTIVE: "Live",
  IN_DEVELOPMENT: "In development",
  PLANNED: "Planned",
  EXPERIMENTAL: "Pilot",
  ARCHIVED: "Archived",
};

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Projects & Public Infrastructure" }]} />
      <PageHero
        eyebrow="Projects & Public Infrastructure"
        title="CeloHT is more than a website or a dApp."
        lead="CeloHT is built as an open-source ecosystem of public software, applications, and infrastructure. Its work is rooted in Haiti and designed around practical real-world access, while its open architecture can evolve beyond a single geography. Each repository has a defined role and an honest maturity label."
      />

      <Section
        eyebrow="The public stack"
        title="Explore the ecosystem by layer"
      >
        <div className="space-y-10">
          {categories.map((category) => {
            const projects = publicProjects.filter(
              (project) => project.category === category,
            );

            return (
              <section key={category} aria-labelledby={`${category}-title`}>
                <h3
                  id={`${category}-title`}
                  className="mb-4 font-display text-2xl font-semibold"
                >
                  {category}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {projects.map((project) => (
                    <article
                      key={project.name}
                      className="flex flex-col border border-navy-700/15 p-6 dark:border-parchment-100/10"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-display text-xl font-semibold">
                          {project.name}
                        </h4>
                        <span className="shrink-0 rounded-full border border-navy-700/20 px-2.5 py-1 text-xs font-semibold text-ink-soft dark:border-parchment-100/15 dark:text-parchment-100/70">
                          {statusLabel[project.status] ??
                            getStatusLabel(project.status)}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-ink-soft dark:text-parchment-100/70">
                        {project.purpose}
                      </p>
                      <dl className="mt-5 space-y-2 border-t border-navy-700/10 pt-4 text-sm dark:border-parchment-100/10">
                        <div>
                          <dt className="font-semibold text-gold-800 dark:text-gold-300">
                            Role
                          </dt>
                          <dd className="mt-1 text-ink-soft dark:text-parchment-100/70">
                            {project.role}
                          </dd>
                        </div>
                        {project.technology && (
                          <div>
                            <dt className="font-semibold text-gold-800 dark:text-gold-300">
                              Technology
                            </dt>
                            <dd className="mt-1 text-ink-soft dark:text-parchment-100/70">
                              {project.technology}
                            </dd>
                          </div>
                        )}
                      </dl>
                      {project.documentation && (
                        <a
                          href={project.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-ink underline-offset-4 hover:text-gold-800 hover:underline dark:text-parchment-50 dark:hover:text-gold-300"
                        >
                          View repository
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Status language"
        title="Repository presence is not a production claim"
      >
        <p className="max-w-3xl text-base leading-7 text-ink-soft dark:text-parchment-100/70">
          “Live” means the repository is an active public reference or operating
          public layer. “In development” identifies infrastructure that is being
          built or verified and should not be read as a promise of production
          availability. Pilot and planned work are labeled separately as it
          matures.
        </p>
      </Section>

      <CTASection
        title="Read the project context"
        description="The Open Source center connects these repositories to CeloHT's policies, governance, research, and transparency commitments."
        primary={{ label: "Open Source center", href: "/open-source" }}
        secondary={{
          label: "Visit the GitHub organization",
          href: GITHUB_ORG_URL,
        }}
      />
    </>
  );
}
