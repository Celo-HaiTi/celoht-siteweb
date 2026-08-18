import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { GITHUB_FLAGSHIP_URL, GITHUB_DAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Documentation",
  description: "The full CeloHT documentation portal, mirrored from our GitHub repositories.",
  alternates: { canonical: "/documentation" },
};

const groups = [
  {
    heading: "Identity & vision",
    links: [
      { label: "Vision", href: `${GITHUB_FLAGSHIP_URL}/blob/main/docs/vision.md` },
      { label: "Mission", href: `${GITHUB_FLAGSHIP_URL}/blob/main/docs/mission.md` },
      { label: "Values", href: `${GITHUB_FLAGSHIP_URL}/blob/main/docs/values.md` },
      { label: "History", href: `${GITHUB_FLAGSHIP_URL}/blob/main/docs/history.md` },
    ],
  },
  {
    heading: "Governance & legal",
    links: [
      { label: "Governance", href: `${GITHUB_FLAGSHIP_URL}/blob/main/GOVERNANCE.md` },
      {
        label: "Legal status / No token policy",
        href: `${GITHUB_FLAGSHIP_URL}/blob/main/docs/legal-status.md`,
      },
      { label: "Trademark", href: `${GITHUB_FLAGSHIP_URL}/blob/main/docs/trademark.md` },
      { label: "Whitepaper", href: `${GITHUB_FLAGSHIP_URL}/blob/main/WHITEPAPER.md` },
    ],
  },
  {
    heading: "dApp technical docs",
    links: [
      { label: "Architecture", href: `${GITHUB_DAPP_URL}/blob/main/ARCHITECTURE.md` },
      { label: "API", href: `${GITHUB_DAPP_URL}/blob/main/docs/api.md` },
      { label: "Deployment", href: `${GITHUB_DAPP_URL}/blob/main/docs/deployment.md` },
      { label: "Development guide", href: `${GITHUB_DAPP_URL}/blob/main/docs/development.md` },
    ],
  },
  {
    heading: "Security & funding",
    links: [
      { label: "Security policy", href: `${GITHUB_FLAGSHIP_URL}/blob/main/SECURITY.md` },
      { label: "Threat model", href: `${GITHUB_FLAGSHIP_URL}/blob/main/docs/threat-model.md` },
      {
        label: "Business model / funding policy",
        href: `${GITHUB_FLAGSHIP_URL}/blob/main/docs/business-model.md`,
      },
      { label: "Roadmap", href: `${GITHUB_FLAGSHIP_URL}/blob/main/ROADMAP.md` },
    ],
  },
];

export default function DocumentationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Documentation" }]} />
      <PageHero
        eyebrow="Documentation"
        title="One source of truth, mirrored here for convenience"
        lead="This website's copy is written for a general audience. Our GitHub repositories are the canonical, continuously maintained source for governance, policy, and technical detail."
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.heading}>
              <h2 className="font-display text-xl font-semibold">{group.heading}</h2>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink-soft underline underline-offset-2 hover:text-ink dark:text-parchment-100/70 dark:hover:text-parchment-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Looking to build something?"
        description="Our developer portal covers the local environment, repository structure, and how to run validation checks."
        primary={{ label: "Visit the developer portal", href: "/developers" }}
        secondary={{ label: "View the flagship repository", href: GITHUB_FLAGSHIP_URL }}
      />
    </>
  );
}
