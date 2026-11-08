import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { assetPath } from "@/lib/constants";

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
              <h3 className="font-display text-xl font-semibold">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
                {category.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Strategic Ecosystem Partner" title="FreClean">
        <article className="overflow-hidden rounded-[28px] border border-navy-700/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(246,241,234,0.92))] p-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] dark:border-parchment-100/10 dark:bg-[linear-gradient(135deg,rgba(14,20,30,0.97),rgba(17,27,39,0.96))] sm:p-6">
          <div className="grid gap-5 sm:grid-cols-[minmax(0,176px)_1fr] sm:items-center">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full border border-[#dfeee5] bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,1),rgba(239,245,241,0.98)_42%,rgba(220,234,227,0.95)_100%)] p-3 shadow-[0_16px_32px_rgba(16,24,40,0.10)] ring-6 ring-white/75 dark:border-parchment-100/10 dark:bg-[radial-gradient(circle_at_35%_30%,rgba(10,16,24,1),rgba(17,24,35,0.98)_42%,rgba(20,33,47,0.95)_100%)] dark:ring-[#0d1824]">
              <div className="absolute inset-2 rounded-full border border-[#afd8c7]/80 dark:border-[#51728a]/65" />
              <Image
                src={assetPath("/freclean-logo.jpg")}
                alt="FreClean logo"
                width={1536}
                height={1536}
                className="relative z-10 h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-800 dark:text-gold-300">
                Strategic Ecosystem Partner
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-950 dark:text-parchment-100 sm:text-4xl">
                FreClean
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-soft dark:text-parchment-100/70">
                FreClean is a Haitian cleaning services and cleaning products
                company building reliable, professional, and accessible cleaning
                solutions for homes, businesses, and organizations.
              </p>
              <div
                className="mt-5 flex flex-wrap gap-2"
                aria-label="Partnership focus"
              >
                {[
                  "Cleaning Services",
                  "Consumer Products",
                  "Entrepreneurship",
                  "Digital Payments",
                ].map((focus) => (
                  <span
                    key={focus}
                    className="rounded-full border border-navy-700/15 bg-white/70 px-3 py-1.5 text-[11px] font-medium tracking-[0.02em] text-ink-soft shadow-sm dark:border-parchment-100/15 dark:bg-navy-900/60 dark:text-parchment-100/75"
                  >
                    {focus}
                  </span>
                ))}
              </div>
              <Link
                href="https://freclean.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center rounded-md bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Visit FreClean
              </Link>
            </div>
          </div>
        </article>
      </Section>

      <Section eyebrow="What we bring" title="A specific, honest offer">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Access to an engaged community and a growing agent network</li>
          <li>
            Training material that&rsquo;s already culturally and linguistically
            adapted
          </li>
          <li>
            Full transparency through our public repository and this website
          </li>
          <li>
            A documented track record of shipping real content and programs
          </li>
        </ul>
      </Section>

      <CTASection
        title="Start a conversation"
        description="Reach out with a short description of your organization and how you see a potential collaboration working."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{
          label: "Read our transparency practices",
          href: "/transparency",
        }}
      />
    </>
  );
}
