import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Ways to get involved with CeloHT  -  as a learner, a community agent, a contributor, or simply someone following along.",
  alternates: { canonical: "/community" },
};

const paths = [
  {
    title: "Apprendre",
    detail: "Découvrez le Web3, les paiements numériques, la blockchain et l'écosystème CeloHT.",
    action: "Découvrir l'éducation",
    href: "/education",
  },
  {
    title: "Participer",
    detail: "Participez aux initiatives communautaires, éducatives, environnementales et entrepreneuriales.",
    action: "Voir les initiatives",
    href: "/impact",
  },
  {
    title: "Devenir agent",
    detail: "Découvrez comment contribuer à rapprocher les services numériques et financiers des communautés locales.",
    action: "Découvrir le réseau",
    href: "/agent-network",
  },
  {
    title: "Partager une initiative",
    detail: "Proposez une idée, une initiative ou une collaboration pouvant contribuer à la mission de CeloHT.",
    action: "Nous contacter",
    href: "/contact",
  },
];

const channels = [
  { label: "X / Twitter", href: "https://twitter.com/CeloHtOfficial" },
  { label: "LinkedIn", href: "https://linkedin.com/company/celoht" },
];

export default function CommunityPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Community" }]} />
      <PageHero
        eyebrow="Communauté CeloHT"
        title="Construisez avec nous"
        lead="CeloHT évolue avec les personnes qui apprennent, utilisent, développent et contribuent à l'écosystème."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {paths.map((path) => (
            <div
              key={path.title}
              className="flex flex-col rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10"
            >
              <h3 className="font-display text-2xl font-semibold">{path.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-soft dark:text-parchment-100/70">
                {path.detail}
              </p>
              <a
                href={path.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-800 dark:text-gold-300"
              >
                {path.action} <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Rejoindre CeloHT"
        description="Parlez-nous de votre intérêt, de votre initiative ou de la manière dont vous souhaitez prendre part à l'écosystème."
        primary={{ label: "Rejoindre CeloHT →", href: "/contact" }}
      />

      <Section eyebrow="Stay connected" title="Channels">
        <ul className="flex flex-wrap gap-3">
          {channels.map((channel) => (
            <li key={channel.href}>
              <a
                href={channel.href}
                className="inline-flex items-center rounded-full border border-navy-700/20 px-4 py-2 text-sm hover:bg-navy-700/10 dark:border-parchment-100/20 dark:hover:bg-parchment-100/10"
              >
                {channel.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

    </>
  );
}
