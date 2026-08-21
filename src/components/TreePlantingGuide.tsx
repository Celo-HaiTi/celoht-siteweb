import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  Droplets,
  Leaf,
  MapPin,
  ScanLine,
  ShieldCheck,
  Shovel,
  Sprout,
  TreePine,
  Wrench,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

type GuideStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  detail: string;
};

type TreePlantingContent = {
  language: "fr" | "en";
  breadcrumbHome: string;
  breadcrumbPillar: string;
  breadcrumbPage: string;
  pillarHref: string;
  switchLabel: string;
  switchHref: string;
  switchLanguage: string;
  eyebrow: string;
  title: string;
  lead: string;
  sectionEyebrow: string;
  sectionTitle: string;
  steps: GuideStep[];
  calloutEyebrow: string;
  calloutTitle: string;
  calloutBody: string;
  backLink: string;
};

const icons = [
  Sprout,
  MapPin,
  Shovel,
  Leaf,
  Droplets,
  ShieldCheck,
  Wrench,
  ScanLine,
  TreePine,
  ClipboardCheck,
] as const;

const frenchSteps = [
  ["Choisir le bon arbre", "Choisissez un jeune arbre sain, avec des racines bien formées, qui convient au climat, au sol et aux usages de l'environnement local."],
  ["Choisir le bon emplacement", "Vérifiez l'ensoleillement, l'espace disponible à maturité, le drainage et la possibilité de protéger l'arbre des passages et des activités voisines."],
  ["Préparer le terrain", "Dégagez la zone, ameublissez le sol et préparez un trou assez large pour les racines. Gardez la terre fertile à proximité pour reboucher."],
  ["Planter correctement", "Placez l'arbre à la même profondeur que dans son contenant ou sa motte. Étalez les racines sans les forcer, rebouchez doucement et tassez légèrement la terre."],
  ["Arroser", "Arrosez après la plantation, puis adaptez la fréquence aux pluies, au sol et aux conditions locales. L'objectif est de maintenir une humidité régulière sans détremper le terrain."],
  ["Protéger le jeune arbre", "Utilisez une protection adaptée contre les animaux, les dommages accidentels, les mauvaises herbes et les conditions qui pourraient fragiliser le jeune plant."],
  ["Entretenir", "Observez l'état du sol, retirez la végétation concurrente autour du tronc et maintenez une humidité appropriée pendant la période d'établissement."],
  ["Suivre la croissance", "Revenez régulièrement vérifier la santé de l'arbre, sa croissance, les signes de stress et l'état de sa protection. Des notes et des photos peuvent aider à comparer son évolution."],
  ["Laisser l'arbre devenir autonome", "À mesure que l'arbre s'établit, adaptez progressivement l'arrosage et l'entretien aux conditions du site plutôt que d'appliquer un calendrier identique partout."],
  ["Documenter l'impact", "Lorsque cela est utile et possible, partagez la date, le lieu général, l'espèce et les observations de croissance. CeloHT ne présente pas ce guide comme un système de certification."],
] as const;

const englishSteps = [
  ["Choose the right tree", "Choose a healthy young tree with well-formed roots that suits the local climate, soil, and surrounding land use."],
  ["Choose the right location", "Check sunlight, the space available at maturity, drainage, and whether the tree can be protected from traffic and nearby activity."],
  ["Prepare the ground", "Clear the area, loosen the soil, and dig a hole wide enough for the roots. Keep fertile topsoil nearby for backfilling."],
  ["Plant it correctly", "Set the tree at the same depth as it was in its container or root ball. Spread the roots without forcing them, backfill gently, and lightly firm the soil."],
  ["Water", "Water after planting, then adjust frequency to rainfall, soil, and local conditions. The goal is consistent moisture without waterlogging the ground."],
  ["Protect the young tree", "Use suitable protection against animals, accidental damage, competing weeds, and conditions that could weaken the young plant."],
  ["Maintain it", "Watch the soil, clear competing vegetation around the trunk, and maintain suitable moisture during the establishment period."],
  ["Monitor growth", "Return regularly to check the tree's health, growth, signs of stress, and protection. Notes and photos can help compare its progress over time."],
  ["Let the tree become established", "As the tree takes hold, gradually adapt watering and maintenance to site conditions instead of applying the same schedule everywhere."],
  ["Document the impact", "When useful and possible, share the planting date, general location, species, and growth observations. CeloHT does not present this guide as a certification system."],
] as const;

function makeSteps(values: readonly (readonly [string, string])[]): GuideStep[] {
  return values.map(([title, detail], index) => ({
    number: String(index + 1).padStart(2, "0"),
    icon: icons[index],
    title,
    detail,
  }));
}

const frenchContent: TreePlantingContent = {
  language: "fr",
  breadcrumbHome: "Accueil",
  breadcrumbPillar: "Reboisement",
  breadcrumbPage: "Planter un arbre",
  pillarHref: "/reforestation",
  switchLabel: "English",
  switchHref: "/en/reforestation/plant-a-tree",
  switchLanguage: "Changer de langue",
  eyebrow: "Guide de reboisement",
  title: "Comment planter et faire grandir un arbre",
  lead: "Un parcours simple pour passer de la préparation du terrain aux premiers signes d'établissement, en tenant compte des conditions propres à chaque site.",
  sectionEyebrow: "Le parcours en dix étapes",
  sectionTitle: "De la plantation à l'établissement",
  steps: makeSteps(frenchSteps),
  calloutEyebrow: "Observer avant d'agir",
  calloutTitle: "Chaque site demande une attention différente.",
  calloutBody: "Les conditions du sol, les pluies, l'espace, les animaux et les usages du terrain doivent guider les décisions d'entretien. En cas de doute, demandez conseil à une personne qui connaît l'environnement local.",
  backLink: "Retour au reboisement",
};

const englishContent: TreePlantingContent = {
  language: "en",
  breadcrumbHome: "Home",
  breadcrumbPillar: "Reforestation",
  breadcrumbPage: "Plant a Tree",
  pillarHref: "/reforestation",
  switchLabel: "Français",
  switchHref: "/reforestation/planter-un-arbre",
  switchLanguage: "Change language",
  eyebrow: "Reforestation guide",
  title: "How to Plant and Grow a Tree",
  lead: "A practical path from preparing the ground to the first signs of establishment, shaped by the conditions of each site.",
  sectionEyebrow: "The ten-step journey",
  sectionTitle: "From planting to establishment",
  steps: makeSteps(englishSteps),
  calloutEyebrow: "Observe before you act",
  calloutTitle: "Every site needs a different kind of care.",
  calloutBody: "Soil conditions, rainfall, available space, animals, and how the land is used should guide maintenance decisions. When in doubt, seek advice from someone who understands the local environment.",
  backLink: "Back to reforestation",
};

export function TreePlantingGuide({ language }: { language: "fr" | "en" }) {
  const content = language === "en" ? englishContent : frenchContent;

  return (
    <>
      <div className="mx-auto flex max-w-6xl justify-end px-4 pt-5 sm:px-6">
        <nav aria-label={content.switchLanguage} className="flex items-center gap-2 text-sm">
          <span className="text-muted">{content.language === "en" ? "English" : "Français"}</span>
          <span aria-hidden="true" className="text-muted">|</span>
          <a href={content.switchHref} className="font-semibold text-gold-300 underline-offset-4 hover:underline">
            {content.switchLabel}
          </a>
        </nav>
      </div>
      <Breadcrumbs
        homeLabel={content.breadcrumbHome}
        items={[{ label: content.breadcrumbPillar, href: content.pillarHref }, { label: content.breadcrumbPage }]}
      />
      <PageHero eyebrow={content.eyebrow} title={content.title} lead={content.lead} tone="forest" />

      <Section eyebrow={content.sectionEyebrow} title={content.sectionTitle}>
        <div className="relative grid gap-4 sm:grid-cols-2">
          <div className="pointer-events-none absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-forest-500/20 sm:block" aria-hidden="true" />
          {content.steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="relative rounded-2xl border border-forest-500/25 bg-parchment-50/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] dark:bg-navy-900/60">
                <div className="flex items-start gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-700 text-parchment-50">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-xs tracking-[0.18em] text-forest-600 dark:text-forest-400">{step.number}</p>
                    <h2 className="mt-1 font-display text-xl font-semibold">{step.title}</h2>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-ink-soft dark:text-parchment-100/70">{step.detail}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <section className="border-y border-forest-500/20 bg-forest-700 text-parchment-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:py-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-100">{content.calloutEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">{content.calloutTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-forest-50/80">{content.calloutBody}</p>
          </div>
          <Link href={content.pillarHref} className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300">
            {content.backLink} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}