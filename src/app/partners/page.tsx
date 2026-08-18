import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Who CeloHT works with  -  the Celo ecosystem, local Haitian organizations, educational institutions, and environmental partners.",
  alternates: { canonical: "/partners" },
};

const categories = [
  {
    title: "The Celo ecosystem",
    detail:
      "Grants, technical support, and visibility through official Celo channels  -  the Celo Foundation, Celo Forum, and community grant programs.",
  },
  {
    title: "Local Haitian organizations",
    detail:
      "Collaboration with NGOs, cooperatives, and community groups that already have trust and presence where we operate, particularly for education and reforestation.",
  },
  {
    title: "Educational institutions",
    detail:
      "Partnerships with schools and training centers to fold our financial literacy and Web3 material into programs that already exist.",
  },
  {
    title: "Environmental partners",
    detail:
      "Organizations already working on reforestation or sustainable agriculture in Haiti, so we complement existing work instead of duplicating it.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Partners" }]} />
      <PageHero
        eyebrow="Partners"
        title="We complement existing work, not duplicate it"
        lead="CeloHT looks for partners whose work already overlaps with our mission  -  and brings a specific, honest offer to that conversation."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10"
            >
              <h3 className="font-display text-xl font-semibold">{category.title}</h3>
              <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
                {category.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="What we bring" title="A specific, honest offer">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Access to an engaged community and a growing agent network</li>
          <li>Training material that&rsquo;s already culturally and linguistically adapted</li>
          <li>Full transparency through our public repository and this website</li>
          <li>A documented track record of shipping real content and programs</li>
        </ul>
      </Section>

      <CTASection
        title="Start a conversation"
        description="Reach out with a short description of your organization and how you see a potential collaboration working."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Read our transparency practices", href: "/transparency" }}
      />
    </>
  );
}
