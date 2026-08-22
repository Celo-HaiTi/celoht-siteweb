import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { DISCORD_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Ways to get involved with CeloHT  -  as a learner, a community agent, or simply someone following along.",
  alternates: { canonical: "/community" },
};

const paths = [
  {
    title: "Learn",
    detail: "Discover Web3, digital payments, blockchain, and the CeloHT ecosystem.",
  },
  {
    title: "Participate",
    detail: "Take part in community, education, environmental, and entrepreneurship initiatives.",
  },
  {
    title: "Become an agent",
    detail: "Discover how to bring digital and financial services closer to local communities.",
  },
  {
    title: "Share an initiative",
    detail: "Propose an idea, initiative, or collaboration that could advance CeloHT's mission.",
  },
];

const channels = [
  { label: "Discord", href: DISCORD_URL },
  { label: "LinkedIn", href: "https://linkedin.com/company/celoht" },
];

export default function CommunityPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Community" }]} />
      <PageHero
        eyebrow="CeloHT community"
        title="Build with us"
        lead="CeloHT evolves with the people who learn, use, and participate in the ecosystem."
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
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Join CeloHT"
        description="Tell us about your interest, initiative, or how you would like to take part in the ecosystem."
        primary={{ label: "Join CeloHT →", href: "/contact" }}
      />

      <Section eyebrow="Stay connected" title="Channels">
        <ul className="flex flex-wrap gap-3">
          {channels.map((channel) => (
            <li key={channel.href}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={channel.label === "Discord" ? "Join CeloHT on Discord" : channel.label}
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
