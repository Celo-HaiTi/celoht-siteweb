import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Comment planter et faire grandir un arbre",
  description:
    "Un guide pratique pour choisir, planter, protéger et suivre un jeune arbre jusqu'à son établissement.",
  alternates: { canonical: "/reforestation/planter-un-arbre" },
};

const steps = [
  {
    number: "01",
    icon: Sprout,
    title: "Choisir le bon arbre",
    detail:
      "Choisissez un jeune arbre sain, avec des racines bien formées, qui convient au climat, au sol et aux usages de l'environnement local.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Choisir le bon emplacement",
    detail:
      "Vérifiez l'ensoleillement, l'espace disponible à maturité, le drainage et la possibilité de protéger l'arbre des passages et des activités voisines.",
  },
  {
    number: "03",
    icon: Shovel,
    title: "Préparer le terrain",
    detail:
      "Dégagez la zone, ameublissez le sol et préparez un trou assez large pour les racines. Gardez la terre fertile à proximité pour reboucher.",
  },
  {
    number: "04",
    icon: Leaf,
    title: "Planter correctement",
    detail:
      "Placez l'arbre à la même profondeur que dans son contenant ou sa motte. Étalez les racines sans les forcer, rebouchez doucement et tassez légèrement la terre.",
  },
  {
    number: "05",
    icon: Droplets,
    title: "Arroser",
    detail:
      "Arrosez après la plantation, puis adaptez la fréquence aux pluies, au sol et aux conditions locales. L'objectif est de maintenir une humidité régulière sans détremper le terrain.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Protéger le jeune arbre",
    detail:
      "Utilisez une protection adaptée contre les animaux, les dommages accidentels, les mauvaises herbes et les conditions qui pourraient fragiliser le jeune plant.",
  },
  {
    number: "07",
    icon: Wrench,
    title: "Entretenir",
    detail:
      "Observez l'état du sol, retirez la végétation concurrente autour du tronc et maintenez une humidité appropriée pendant la période d'établissement.",
  },
  {
    number: "08",
    icon: ScanLine,
    title: "Suivre la croissance",
    detail:
      "Revenez régulièrement vérifier la santé de l'arbre, sa croissance, les signes de stress et l'état de sa protection. Des notes et des photos peuvent aider à comparer son évolution.",
  },
  {
    number: "09",
    icon: TreePine,
    title: "Laisser l'arbre devenir autonome",
    detail:
      "À mesure que l'arbre s'établit, adaptez progressivement l'arrosage et l'entretien aux conditions du site plutôt que d'appliquer un calendrier identique partout.",
  },
  {
    number: "10",
    icon: ClipboardCheck,
    title: "Documenter l'impact",
    detail:
      "Lorsque cela est utile et possible, partagez la date, le lieu général, l'espèce et les observations de croissance. CeloHT ne présente pas ce guide comme un système de certification.",
  },
];

export default function TreePlantingPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Reboisement", href: "/reforestation" }, { label: "Planter un arbre" }]}
      />
      <PageHero
        eyebrow="Guide de reboisement"
        title="Comment planter et faire grandir un arbre"
        lead="Un parcours simple pour passer de la préparation du terrain aux premiers signes d'établissement, en tenant compte des conditions propres à chaque site."
        tone="forest"
      />

      <Section eyebrow="Le parcours en dix étapes" title="De la plantation à l'établissement">
        <div className="relative grid gap-4 sm:grid-cols-2">
          <div className="pointer-events-none absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-forest-500/20 sm:block" aria-hidden="true" />
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="relative rounded-2xl border border-forest-500/25 bg-white/70 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] dark:bg-navy-900/60"
              >
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
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-100">Observer avant d&apos;agir</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Chaque site demande une attention différente.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-forest-50/80">
              Les conditions du sol, les pluies, l&apos;espace, les animaux et les usages du terrain doivent guider les décisions d&apos;entretien. En cas de doute, demandez conseil à une personne qui connaît l&apos;environnement local.
            </p>
          </div>
          <Link
            href="/reforestation"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300"
          >
            Retour au reboisement <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
