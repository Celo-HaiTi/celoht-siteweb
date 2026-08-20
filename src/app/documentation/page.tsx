import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Le portail de documentation public de CeloHT, conçu pour comprendre le projet directement sur le site.",
  alternates: { canonical: "/documentation" },
};

const groups = [
  {
    heading: "Identity & vision",
    links: [
      { label: "Vision", href: "/vision" },
      { label: "Mission", href: "/mission" },
      { label: "Valeurs", href: "/mission" },
      { label: "Histoire", href: "/about" },
    ],
  },
  {
    heading: "Governance & legal",
    links: [
      { label: "Gouvernance", href: "/governance" },
      { label: "Statut et politique sans token", href: "/about" },
      { label: "Identité de marque", href: "/media-kit" },
      { label: "Vision du projet", href: "/vision" },
    ],
  },
  {
    heading: "dApp technical docs",
    links: [
      { label: "Architecture", href: "/technology/architecture" },
      { label: "Services DApp", href: "/dapp" },
      { label: "Déploiement et disponibilité", href: "/technology" },
      { label: "Guide développeur", href: "/developers" },
    ],
  },
  {
    heading: "Security & funding",
    links: [
      { label: "Politique de sécurité", href: "/security" },
      { label: "Risques et protections", href: "/security" },
      { label: "Modèle de financement", href: "/transparency/financial" },
      { label: "Feuille de route", href: "/roadmap" },
    ],
  },
];

export default function DocumentationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Documentation" }]} />
      <PageHero
        eyebrow="Documentation"
        title="Une explication publique, directement sur CeloHT"
        lead="Ce portail rassemble le contexte, les décisions, les programmes et les informations techniques nécessaires pour comprendre CeloHT sans quitter le site."
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
        primary={{ label: "Visiter le portail développeur", href: "/developers" }}
        secondary={{ label: "Lire la FAQ", href: "/faq" }}
      />
    </>
  );
}
