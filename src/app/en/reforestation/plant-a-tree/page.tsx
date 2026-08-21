import type { Metadata } from "next";
import { TreePlantingGuide } from "@/components/TreePlantingGuide";
import { SITE_URL, assetPath } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Plant and Grow a Tree",
  description: "A practical guide to choosing, planting, protecting, and monitoring a young tree through establishment.",
  alternates: {
    canonical: "/en/reforestation/plant-a-tree",
    languages: {
      fr: `${SITE_URL}/reforestation/planter-un-arbre/`,
      en: `${SITE_URL}/en/reforestation/plant-a-tree/`,
      "x-default": `${SITE_URL}/reforestation/planter-un-arbre/`,
    },
  },
  openGraph: {
    title: "How to Plant and Grow a Tree",
    description: "A practical guide to planting, protecting, and monitoring a young tree.",
    url: `${SITE_URL}/en/reforestation/plant-a-tree/`,
    images: [{ url: assetPath("/og-image.svg"), alt: "CeloHT reforestation guide" }],
  },
};

export default function PlantATreePage() {
  return <TreePlantingGuide language="en" />;
}