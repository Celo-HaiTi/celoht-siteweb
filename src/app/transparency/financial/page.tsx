import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Financial Transparency",
  description:
    "How CeloHT explains its funding model, donation flows, allocation, and public accountability without exposing sensitive private information.",
  alternates: { canonical: "/transparency/financial" },
};

const topics = [
  "Funding model and grant or partnership support",
  "Donation flows and project-level allocation where applicable",
  "Expense categories and operational disclosure in public summaries",
  "Public approval and decision processes for significant use of funds",
  "Conflict-of-interest controls and responsible governance",
];

export default function FinancialTransparencyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Transparency", href: "/transparency" },
          { label: "Financial" },
        ]}
      />
      <PageHero
        eyebrow="Financial transparency"
        title="Clear public reporting without sharing sensitive private detail"
        lead="CeloHT is not a token project and does not promise financial returns. This page explains how the organization addresses funding, donations, and allocation in a way that is understandable and accountable."
      />

      <Section eyebrow="What this includes" title="The public-facing model">
        <div className="grid gap-3 md:grid-cols-2">
          {topics.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-navy-700/15 p-4 text-sm text-ink-soft"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Key principle" title="No hidden allocation">
        <div className="max-w-3xl space-y-4 text-ink-soft">
          <p>
            Transparency is more important than perfect reporting in one moment.
            The goal is to make the logic of funding and allocation
            understandable to ordinary users, even when a project does not
            publish every internal financial detail in public.
          </p>
          <p>
            That means distinguishing between genuinely public information,
            operationally sensitive information, and future reporting
            priorities. CeloHT does not invent revenue, user growth, or treasury
            figures it cannot verify.
          </p>
        </div>
      </Section>

      <CTASection
        title="Need the governance context?"
        description="Budgeting, decision-making, and public accountability are tied directly to the project’s governance model."
        primary={{ label: "Read governance", href: "/governance" }}
        secondary={{ label: "View the roadmap", href: "/roadmap" }}
      />
    </>
  );
}
