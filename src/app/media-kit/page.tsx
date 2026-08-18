import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "Logo, brand colors, and standard descriptions of CeloHT for press and content creators.",
  alternates: { canonical: "/media-kit" },
};

export default function MediaKitPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Media Kit" }]} />
      <PageHero
        eyebrow="Media Kit"
        title="Logo, palette, and standard descriptions"
        lead="Everything a journalist or content creator needs to accurately represent CeloHT."
      />

      <Section eyebrow="Logo" title="">
        <div className="flex items-center gap-6 rounded-2xl border border-navy-700/15 p-6 dark:border-parchment-100/10">
          <Image src="/celoht-logo.png" alt="CeloHT logo" width={96} height={96} />
          <p className="max-w-md text-sm text-ink-soft dark:text-parchment-100/70">
            Use the logo unmodified, with adequate clear space. See our full logo usage policy in
            the flagship repository&rsquo;s documentation for what requires written permission.
          </p>
        </div>
      </Section>

      <Section eyebrow="Colors" title="Palette">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { name: "Navy", hex: "#0B1120" },
            { name: "Gold", hex: "#F5C842" },
            { name: "Forest", hex: "#2F6B4F" },
            { name: "Parchment", hex: "#F7F8FA" },
          ].map((color) => (
            <div
              key={color.hex}
              className="overflow-hidden rounded-xl border border-navy-700/15 dark:border-parchment-100/10"
            >
              <div className="h-16" style={{ backgroundColor: color.hex }} />
              <div className="p-3 text-sm">
                <p className="font-medium">{color.name}</p>
                <p className="font-mono text-xs text-ink-soft dark:text-parchment-100/60">
                  {color.hex}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Standard descriptions" title="For republication">
        <div className="max-w-2xl space-y-4 text-sm text-ink-soft dark:text-parchment-100/70">
          <div>
            <p className="font-medium text-ink dark:text-parchment-100">Short (one sentence)</p>
            <p className="mt-1">
              CeloHT is a community-driven, open-source initiative built on the Celo ecosystem to
              expand financial inclusion in Haiti and the wider Caribbean.
            </p>
          </div>
          <div>
            <p className="font-medium text-ink dark:text-parchment-100">Medium (one paragraph)</p>
            <p className="mt-1">
              CeloHT combines financial education in Haitian Creole, a decentralized network of
              community agents, and environmental reforestation programs  -  all built on Celo, USDm,
              and Valora-compatible infrastructure. Founded by Johnny Dubic in Léogâne, Haiti,
              CeloHT aims to make modern financial tools accessible to communities with limited
              access to traditional banking.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
