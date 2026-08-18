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
    title: "Take a course",
    detail: "Join a community education session covering financial literacy and Web3 fundamentals.",
    action: "Find a session",
    href: "/education",
  },
  {
    title: "Become an agent",
    detail: "Complete education, demonstrate competency, and get coordinator sign-off.",
    action: "Learn the path",
    href: "/agent-network",
  },
  {
    title: "Contribute to the repository",
    detail: "Documentation, examples, and tooling improvements  -  all welcome.",
    action: "See contributing guide",
    href: "/contributing",
  },
  {
    title: "Join the discussion",
    detail: "Ask questions, share ideas, and connect with other community members.",
    action: "Open GitHub Discussions",
    href: "https://github.com/celo-ht/celoht/discussions",
  },
];

const channels = [
  { label: "Discord", href: "https://discord.gg/celoht" },
  { label: "Telegram", href: "https://t.me/celoht" },
  { label: "X / Twitter", href: "https://twitter.com/CeloHtOfficial" },
  { label: "LinkedIn", href: "https://linkedin.com/company/celoht" },
  { label: "GitHub", href: "https://github.com/Celo-HT" },
];

export default function CommunityPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Community" }]} />
      <PageHero
        eyebrow="Community"
        title="There's a way in, whoever you are"
        lead="CeloHT's growth strategy treats community participation as infrastructure, not marketing. Here are the paths people actually take."
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

      <Section eyebrow="Ambassador & partner programs" title="Deeper ways to participate">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gold-500/30 p-5">
            <h3 className="font-semibold">Ambassador Program</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              For community members who want to represent CeloHT locally  -  organizing sessions,
              translating material, and connecting new agents to the network.
            </p>
          </div>
          <div className="rounded-xl border border-gold-500/30 p-5">
            <h3 className="font-semibold">Partner Program</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
              For organizations  -  see our{" "}
              <a href="/partners" className="underline underline-offset-2">
                Partners
              </a>{" "}
              page for categories and how to start a conversation.
            </p>
          </div>
        </div>
      </Section>

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

      <CTASection
        title="Have a specific question first?"
        description="Check our FAQ, or reach out through one of our official contact channels."
        primary={{ label: "Read the FAQ", href: "/faq" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
