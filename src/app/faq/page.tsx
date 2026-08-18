import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about CeloHT, the Celo ecosystem, and how to get involved.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Is CeloHT a cryptocurrency or a token?",
    a: "No. CeloHT uses Celo ecosystem infrastructure (CELO, USDm) but is not itself a token or blockchain, and has never created a token.",
  },
  { q: "Can I invest in CeloHT?", a: "No. CeloHT offers no investment product of any kind." },
  {
    q: "Does CeloHT own or operate Valora?",
    a: "No. CeloHT builds compatible educational content and application features; Valora is developed and operated independently.",
  },
  {
    q: "Why does CeloHT use Celo specifically?",
    a: "Its mobile-first design and low transaction fees match the realities of the communities we serve  -  see our Technology page for detail.",
  },
  {
    q: "How is CeloHT funded?",
    a: "Primarily through Celo ecosystem grants and strategic partnerships today, with a planned transition toward partial self-sustainability through agent-network fees.",
  },
  {
    q: "How can I get involved?",
    a: "Take a course, become a community agent, or contribute to the repository  -  see our Community page for each path.",
  },
  {
    q: "Where do I launch the dApp?",
    a: "Use the \u201cLaunch dApp\u201d button in the header, hero, or footer of any page on this site.",
  },
  {
    q: "How do I report a security issue?",
    a: "Email security@celoht.com or use GitHub Security Advisories  -  never a public GitHub Issue.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <PageHero
        eyebrow="FAQ"
        title="Questions we hear often"
        lead="Didn't find your answer? Ask in GitHub Discussions or reach out through our Support page."
      />

      <Section>
        <div className="max-w-3xl divide-y divide-navy-700/10 dark:divide-parchment-100/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:content-none dark:text-parchment-100">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-ink-soft transition-transform group-open:rotate-45 dark:text-parchment-100/60"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink-soft dark:text-parchment-100/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTASection
        title="Still have a question?"
        description="Our team and community are reachable through several official channels."
        primary={{ label: "Visit Support", href: "/support" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
