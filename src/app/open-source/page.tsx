import type { Metadata } from "next";
import { BookOpen, Code2, GitBranch, Search } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Explore the CeloHT repositories, documentation, research, contracts, brand system, and contribution paths built in public.",
  alternates: { canonical: "/open-source" },
};

const repositories = [
  { name: "Mission et vision", detail: "Comprendre pourquoi CeloHT existe et où il veut aller.", category: "Fondation", href: "/mission" },
  { name: "Documentation publique", detail: "Lire les explications destinées aux utilisateurs et à la communauté.", category: "Documentation", href: "/documentation" },
  { name: "CeloHT DApp", detail: "Comprendre les services Web3 et les parcours proposés aux utilisateurs.", category: "Produit", href: "/dapp" },
  { name: "Architecture", detail: "Voir comment les différentes briques techniques s'articulent.", category: "Infrastructure", href: "/technology/architecture" },
  { name: "Recherche et impact", detail: "Explorer les principes de mesure, de transparence et d'apprentissage.", category: "Recherche", href: "/research" },
  { name: "Identité CeloHT", detail: "Consulter les ressources de marque et les informations média.", category: "Identité", href: "/media-kit" },
  { name: "Feuille de route", detail: "Suivre les priorités publiques et les étapes annoncées.", category: "Direction", href: "/roadmap" },
  { name: "Transparence", detail: "Lire les pages qui expliquent les décisions et les limites du projet.", category: "Confiance", href: "/transparency" },
];

const actions = [
  { icon: Search, title: "Explore", detail: "Start with the repository that matches your question." },
  { icon: BookOpen, title: "Read", detail: "Use the canonical documentation for the full context." },
  { icon: Code2, title: "Build", detail: "Run the projects locally and understand the architecture." },
  { icon: GitBranch, title: "Contribute", detail: "Open an issue, propose a change, or improve the record." },
];

export default function OpenSourcePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Open Source" }]} />
      <PageHero
        eyebrow="Built in public"
        title="Technology built by people, in the open."
        lead="CeloHT publishes its code, documentation, research, brand system, and project direction so the ecosystem can be understood, questioned, and improved by the people around it."
      />

      <Section eyebrow="A simple way in" title="Choose your next move">
        <div className="grid gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 dark:border-parchment-100/10 dark:bg-parchment-100/10 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-parchment-50 p-6 dark:bg-navy-900">
                <Icon size={22} strokeWidth={1.5} className="text-gold-700 dark:text-gold-300" aria-hidden="true" />
                <h2 className="mt-10 font-display text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink-soft dark:text-parchment-100/65">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="CeloHT en pratique" title="Les ressources publiques pour comprendre le travail">
        <div className="grid gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 dark:border-parchment-100/10 dark:bg-parchment-100/10 sm:grid-cols-2 lg:grid-cols-4">
          {repositories.map((repo) => (
            <a key={repo.href} href={repo.href} className="group flex min-h-56 flex-col bg-parchment-50 p-6 transition-colors hover:bg-gold-500/10 dark:bg-navy-900 dark:hover:bg-navy-800">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-gold-800 dark:text-gold-300">{repo.category}</span>
              <h2 className="mt-8 flex items-center justify-between font-display text-xl font-semibold">
                {repo.name}
                <span aria-hidden="true">→</span>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft dark:text-parchment-100/65">{repo.detail}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink dark:text-parchment-50">Lire la page <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
      </Section>

      <CTASection
        title="Comprendre avant de contribuer"
        description="Lisez le contexte public, explorez les programmes et choisissez une manière utile de participer à CeloHT."
        primary={{ label: "Lire la documentation", href: "/documentation" }}
        secondary={{ label: "Rejoindre CeloHT", href: "/community" }}
      />
    </>
  );
}