import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "CeloHT's public documentation portal, designed to explain the project directly on the site.",
  alternates: { canonical: "/documentation" },
};

const groups = [
  {
    heading: "Identity & vision",
    links: [
      { label: "Vision", href: "/vision" },
      { label: "Mission", href: "/mission" },
      { label: "Values", href: "/values" },
      { label: "History", href: "/history" },
    ],
  },
  {
    heading: "Governance & legal",
    links: [
      { label: "Governance", href: "/governance" },
      { label: "Status and no-token policy", href: "/no-token-policy" },
      { label: "Brand identity", href: "/brand-identity" },
      { label: "Project vision", href: "/project-vision" },
    ],
  },
  {
    heading: "dApp technical docs",
    links: [
      { label: "Architecture", href: "/technology/architecture" },
      { label: "Services DApp", href: "/dapp/services" },
      { label: "Deployment and availability", href: "/dapp/deployment" },
      { label: "Technical architecture", href: "/technology/architecture" },
    ],
  },
  {
    heading: "Security & funding",
    links: [
      { label: "Security policy", href: "/security" },
      { label: "Risks and protections", href: "/security/risks" },
      { label: "Funding model", href: "/funding" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
];

export default function DocumentationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Documentation" }]} />
      <PageHero
        eyebrow="Documentation"
        title="A public explanation, directly on CeloHT"
        lead="This portal brings together the context, decisions, programs, and technical information needed to understand CeloHT without leaving the site."
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.heading}>
              <h2 className="font-display text-xl font-semibold">
                {group.heading}
              </h2>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-soft underline underline-offset-2 hover:text-ink dark:text-parchment-100/70 dark:hover:text-parchment-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Explore the public technical record"
        description="Architecture, security, governance, and project direction are available through CeloHT's public documentation."
        primary={{
          label: "Read the Open Source center",
          href: "/open-source",
        }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
