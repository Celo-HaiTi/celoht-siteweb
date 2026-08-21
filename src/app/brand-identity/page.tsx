import type { Metadata } from "next";
import Image from "next/image";
import { DocumentationArticle } from "@/components/DocumentationArticle";
import { assetPath } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Brand Identity",
  description:
    "CeloHT's public brand identity, logo usage, colors, and accurate project description.",
  alternates: { canonical: "/brand-identity" },
};

export default function BrandIdentityPage() {
  return (
    <DocumentationArticle
      eyebrow="Governance and legal"
      title="Brand Identity"
      lead="CeloHT combines Haitian context, open-source technology, and institutional clarity. This page gives the public language and visual basics needed to represent the project accurately."
      sections={[
        {
          title: "The mark",
          children: (
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Image
                src={assetPath("/celoht-logo.png")}
                alt="CeloHT logo"
                width={96}
                height={96}
                className="h-24 w-24 rounded-xl"
              />
              <p className="max-w-2xl text-ink-soft">
                Use the CeloHT logo without alteration and leave clear space
                around it. The logo should communicate precision, movement,
                confidence, and a Haitian point of view without looking like a
                speculative or meme-crypto brand.
              </p>
            </div>
          ),
        },
        {
          title: "The visual system",
          children: (
            <p className="max-w-3xl text-ink-soft">
              The website uses one deep navy canvas, restrained surface
              overlays, subtle borders, readable light text, and CeloHT yellow
              as a controlled accent for primary actions and highlights. The
              system is intentionally calm, technological, and accessible.
            </p>
          ),
        },
        {
          title: "The accurate description",
          children: (
            <p className="max-w-3xl text-ink-soft">
              CeloHT is a community-driven, open-source Haitian initiative built
              within the Celo ecosystem to expand financial inclusion through
              education, community agents, digital payments, entrepreneurship,
              and reforestation.
            </p>
          ),
        },
      ]}
      previous={{ label: "No-token policy", href: "/no-token-policy" }}
      next={{ label: "Project vision", href: "/project-vision" }}
    />
  );
}
