import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements and updates from CeloHT.",
  alternates: { canonical: "/news" },
};

const posts = [
  {
    date: "2026-07",
    title: "Official website relaunched",
    body: "CeloHT's public website has been rebuilt from the ground up, with a prominent Launch dApp entry point, full documentation portal, and a dedicated blog.",
  },
  {
    date: "2026-07",
    title: "CeloHT dApp repository published",
    body: "Five open-source smart contracts  -  agent registry, certificates, donations, reforestation impact, and governance voting  -  with a full test suite, are now public.",
  },
  {
    date: "2026-07",
    title: "Flagship repository published",
    body: "Notre espace public de gouvernance et de documentation rassemble désormais la feuille de route, la sécurité et les parcours de participation.",
  },
  {
    date: "2026-03",
    title: "Featured in Celo Forum \u2018Founders\u2019",
    body: "CeloHT was featured in a Celo Forum \u2018Founders\u2019 post, a marker of recognition within the broader Celo ecosystem.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "News" }]} />
      <PageHero
        eyebrow="News"
        title="Updates as they actually happen"
        lead="We post here when something real ships  -  not on a content calendar. For deeper reading, see our Blog."
      />

      <Section>
        <ol className="max-w-2xl space-y-8 border-l border-navy-700/15 pl-6 dark:border-parchment-100/15">
          {posts.map((post) => (
            <li key={post.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-gold-500"
              />
              <time className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-parchment-100/50">
                {post.date}
              </time>
              <h2 className="mt-1 font-display text-2xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">{post.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTASection
        title="Don't want to miss an update?"
        description="Suivez CeloHT sur X ou Medium, et consultez régulièrement les pages News et Blog pour les évolutions publiques."
        primary={{ label: "Follow on X", href: "https://twitter.com/CeloHtOfficial" }}
        secondary={{ label: "Read the blog", href: "/blog" }}
        external
      />
    </>
  );
}
