import type { Metadata } from "next";
import { TreePlantingGuide } from "@/components/TreePlantingGuide";
import { SITE_URL, assetPath } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Comment planter et faire grandir un arbre",
  description:
    "Un guide pratique pour choisir, planter, protéger et suivre un jeune arbre jusqu'à son établissement.",
  alternates: {
    canonical: "/reforestation/planter-un-arbre",
    languages: {
      fr: `${SITE_URL}/reforestation/planter-un-arbre/`,
      en: `${SITE_URL}/en/reforestation/plant-a-tree/`,
      "x-default": `${SITE_URL}/reforestation/planter-un-arbre/`,
    },
  },
  openGraph: {
    title: "Comment planter et faire grandir un arbre",
    description: "Un guide pratique pour planter, protéger et suivre un jeune arbre.",
    url: `${SITE_URL}/reforestation/planter-un-arbre/`,
    images: [{ url: assetPath("/og-image.svg"), alt: "Guide de reboisement CeloHT" }],
  },
};

export default function TreePlantingPage() {
  return <TreePlantingGuide language="fr" />;
}
