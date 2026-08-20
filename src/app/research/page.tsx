import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Research",
  description:
    "CeloHT research, reports, RFCs, and technical studies on financial inclusion, education, reforestation, and community infrastructure.",
  alternates: { canonical: "/research" },
};

const studies = [
  {
    title: "Financial inclusion and digital access",
    summary: "Research content connecting community trust, education, and user onboarding to the adoption of digital financial tools in low-structure environments.",
  },
  {
    title: "Education and literacy",
    summary: "How financial literacy, wallet safety, and digital confidence are essential before any new payment interface can be adopted safely.",
  },
  {
    title: "Practical blockchain adoption",
    summary: "Documentation of the Celo ecosystem’s relevance to mobile-first payments, stable digital value, and community participation in the field.",
  },
  {
    title: "Environmental and community impact",
    summary: "Evidence-based framing for reforestation as an economic and ecological pillar, not a separate side project.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Research" }]} />
      <PageHero
        eyebrow="Research"
        title="Evidence over hype"
        lead="CeloHT treats research as a way to keep its work grounded, understandable, and accountable. This page explains the project’s research posture and the kind of questions it tries to answer."
      />

      <Section eyebrow="What the research covers" title="A public evidence base">
        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((study) => (
            <article key={study.title} className="rounded-2xl border border-navy-700/15 p-6">
              <h2 className="font-display text-2xl font-semibold">{study.title}</h2>
              <p className="mt-3 text-sm text-ink-soft">{study.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="How it is used" title="Research as a tool for practical action">
        <div className="max-w-3xl space-y-4 text-ink-soft">
          <p>
            Research is used to shape program decisions, not just to document them afterward. That means studying wallets, incentives, trust, training flow, and environmental application in the social contexts that matter.
          </p>
          <p>
            Where formal publications are not yet complete, CeloHT distinguishes between published work, in-progress studies, and future research priorities. This keeps the website honest and avoids claiming a level of formalization the project has not yet reached.
          </p>
          <p>
            In practice, the research layer complements the website’s public documentation: the site explains the mission, the DApp and architecture show the technical system, and the research layer explains the evidence and assumptions behind the model.
          </p>
        </div>
      </Section>

      <CTASection
        title="Need the broader ecosystem context?"
        description="Read the technology, governance, and impact materials to understand how research turns into execution."
        primary={{ label: "Read impact", href: "/impact" }}
        secondary={{ label: "Explore technology", href: "/technology" }}
      />
    </>
  );
}
