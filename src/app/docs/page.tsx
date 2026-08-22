import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Official CeloHT documentation for everyone, community members, and developers, written for comprehension before source-code exploration.",
  alternates: { canonical: "/docs" },
};

const audiences = [
  {
    heading: "For everyone",
    items: [
      { title: "What is CeloHT?", href: "/about" },
      { title: "Mission", href: "/mission" },
      { title: "Vision", href: "/vision" },
      { title: "How it works", href: "/technology" },
      { title: "Wallets and USDm", href: "/technology" },
      { title: "Security", href: "/security" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "For the community",
    items: [
      { title: "Education", href: "/education" },
      { title: "Agent Network", href: "/agents" },
      { title: "Reforestation", href: "/reforestation" },
      { title: "Community", href: "/community" },
      { title: "Governance", href: "/governance" },
      { title: "Transparency", href: "/transparency" },
      { title: "Impact", href: "/impact" },
    ],
  },
  {
    heading: "For developers",
    items: [
      { title: "Architecture", href: "/technology/architecture" },
      { title: "DApp", href: "/dapp" },
      { title: "Smart contracts", href: "/technology/smart-contracts" },
      { title: "Open source", href: "/open-source" },
      { title: "Developers", href: "/developers" },
      { title: "Research", href: "/research" },
    ],
  },
];

export default function DocumentationHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Documentation" }]} />
      <PageHero
        eyebrow="Documentation"
        title="The public explanation layer for CeloHT"
        lead="CeloHT’s website is the place to understand the mission, the product, the community model, and the governance structure before exploring technical source code."
      />

      <Section eyebrow="Browse by audience" title="Documentation built for real users">
        <div className="grid gap-8 lg:grid-cols-3">
          {audiences.map((group) => (
            <div key={group.heading} className="rounded-2xl border border-navy-700/15 p-6">
              <h2 className="font-display text-2xl font-semibold">{group.heading}</h2>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="text-sm text-ink-soft underline-offset-2 hover:text-ink hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Documentation principles" title="Clear before technical">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-navy-700/15 p-6">
            <h3 className="font-display text-xl font-semibold">Understand first</h3>
            <p className="mt-3 text-sm text-ink-soft">
              The website explains what CeloHT is, why it exists, and what problems it is trying to solve.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6">
            <h3 className="font-display text-xl font-semibold">Verify next</h3>
            <p className="mt-3 text-sm text-ink-soft">
              Governance, security, and transparency pages show the published framework behind each decision.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-700/15 p-6">
            <h3 className="font-display text-xl font-semibold">Act with context</h3>
            <p className="mt-3 text-sm text-ink-soft">
              The site pages provide useful context before any action or contact.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Want to go further?"
        description="Explore the technology, governance, and transparency pages to understand CeloHT's choices."
        primary={{ label: "Explore the technology", href: "/technology" }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
