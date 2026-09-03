import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Globe2,
  Leaf,
  LockKeyhole,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { StatGrid } from "@/components/StatGrid";
import { DISCORD_URL, SITE_URL, DAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CeloHT | Open-source Haitian Web3 infrastructure",
  description:
    "CeloHT is an open-source Haitian Web3 initiative grounded in three pillars: education, an agent network, and reforestation, built on the Celo ecosystem.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CeloHT",
  url: SITE_URL,
  logo: `${SITE_URL}/celoht-logo.png`,
  description:
    "An open-source Haitian Web3 initiative grounded in three pillars: education, an agent network, and reforestation, built on the Celo ecosystem.",
  sameAs: [DISCORD_URL, "https://medium.com/@celoht3"],
};

const ecosystemPaths = [
  {
    icon: BookOpen,
    label: "Education",
    title: "Start with understanding.",
    copy: "Financial literacy, blockchain fundamentals, and digital security education delivered primarily in Haitian Creole.",
    href: "/education",
    iconClass: "text-gold-300",
  },
  {
    icon: UsersRound,
    label: "Agent Network",
    title: "Put people in the loop.",
    copy: "A trained, community-rooted network helps users access digital payment tools and local support with confidence.",
    href: "/agent-network",
    iconClass: "text-parchment-100",
  },
  {
    icon: Leaf,
    label: "Reforestation",
    title: "Build for the long term.",
    copy: "Environmental restoration is designed as a transparent community program, measured over time and tied to local resilience.",
    href: "/reforestation",
    iconClass: "text-forest-400",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <section className="bg-white">
        <Section
          eyebrow="Why CeloHT"
          title="Digital tools only work when people can actually enter them."
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <p className="font-display text-3xl leading-tight text-ink dark:text-parchment-50 sm:text-4xl">
              A Haitian approach to practical digital infrastructure.
            </p>
            <div className="max-w-2xl space-y-5 text-base leading-7 text-ink-soft dark:text-parchment-100/70">
              <p>
                CeloHT exists because access is not only about software. It is
                about literacy, trust, local support, and a path that makes
                sense in everyday life. We build the conditions for people to
                understand, use, and benefit from digital tools with more
                confidence.
              </p>
              <p>
                That is why our work starts with education, grows through
                community agents, and connects to reforestation and measurable
                impact. The goal is not a single feature. It is a working
                ecosystem people can participate in with clarity.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-semibold text-ink underline-offset-4 hover:underline dark:text-parchment-50"
              >
                Read the CeloHT story
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Section>
      </section>

      <section className="border-y border-navy-700/10 bg-navy-950 text-parchment-50 dark:border-parchment-100/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-300">
              Three pillars. One mission.
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              Education, local access, and long-term resilience.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-parchment-100/15 bg-parchment-100/15 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemPaths.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="celoht-pillar-card group bg-navy-950 p-6 transition-colors hover:bg-navy-800 sm:p-7"
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className={item.iconClass}
                    aria-hidden="true"
                  />
                  <p className="mt-12 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-parchment-100/45">
                    {item.label}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-parchment-100/65">
                    {item.copy}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
                    Explore{" "}
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-parchment-100 bg-parchment-100/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-800">
              The CeloHT product layer
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              A usable platform for learning, wallets, payments, and community
              participation.
            </h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="rounded-[1.75rem] border border-navy-700/15 bg-white p-6 shadow-[0_24px_80px_rgba(2,12,24,0.08)] sm:p-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gold-800">
                Product foundations
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Connect a wallet in a familiar mobile-first flow.",
                  "Learn through practical education and wallet onboarding.",
                  "Use trusted local support through the agent network.",
                  "Participate in reforestation and community impact programs.",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-ink-soft"
                  >
                    <span
                      className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-gold-500"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/dapp"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-ink underline-offset-4 hover:underline"
              >
                Learn more about the platform
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="celoht-phone-stage flex justify-center lg:justify-end">
              <div className="celoht-phone-shell relative w-full max-w-[24rem] rounded-[3rem] border border-white/20 bg-[#111b2b] p-2 shadow-[0_32px_90px_rgba(2,12,24,0.32)] sm:p-2.5">
                <div
                  className="celoht-phone-frame pointer-events-none absolute inset-0 rounded-[3rem] border border-gold-300/15"
                  aria-hidden="true"
                />
                <div className="celoht-phone-screen relative overflow-hidden rounded-[2.45rem] border border-white/10 bg-navy-950">
                  <div
                    className="celoht-phone-island absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-[#050b14] shadow-inner shadow-white/5"
                    aria-hidden="true"
                  />
                  <div className="px-5 pb-6 pt-12 sm:px-6">
                    <div className="flex items-center justify-between text-[0.58rem] text-parchment-100/55">
                      <span className="font-mono">09:41</span>
                      <span className="inline-flex items-center gap-1.5">
                        <LockKeyhole size={10} aria-hidden="true" /> Secure
                        preview
                      </span>
                    </div>
                    <div className="mt-7 flex items-end justify-between gap-3">
                      <div>
                        <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-gold-300">
                          CeloHT Platform
                        </p>
                        <p className="mt-2 font-display text-2xl font-semibold text-parchment-50">
                          Your access layer.
                        </p>
                        <p className="mt-1 text-[0.62rem] leading-5 text-parchment-100/60">
                          Wallet access and community tools
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="celoht-demo-badge rounded-full border border-gold-300/25 bg-gold-500/10 px-2 py-1 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-gold-300">
                          Preview
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[0.55rem] text-forest-400">
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-forest-400"
                            aria-hidden="true"
                          />
                          Celo Mainnet
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-gold-300/20 bg-[linear-gradient(145deg,rgba(248,211,79,0.16),rgba(13,33,55,0.86))] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[0.58rem] uppercase tracking-[0.16em] text-parchment-100/55">
                          Wallet
                        </p>
                        <div className="flex items-center gap-2">
                          <WalletCards
                            size={15}
                            className="text-gold-300"
                            aria-hidden="true"
                          />
                          <Link
                            href={DAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-gold-500 px-2.5 py-1.5 text-[0.52rem] font-semibold uppercase tracking-[0.1em] text-navy-950 hover:bg-gold-300"
                          >
                            Open Wallet
                          </Link>
                        </div>
                      </div>
                      <p className="mt-5 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-parchment-100/55">
                        Available balance
                      </p>
                      <p className="mt-1 font-display text-3xl font-semibold text-parchment-50">
                        —
                      </p>
                      <p className="mt-2 text-xs text-parchment-100/60">
                        No wallet connected yet.
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-parchment-100/10 bg-navy-900 p-3">
                        <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-parchment-100/50">
                          CELO
                        </p>
                        <p className="mt-2 font-display text-lg font-semibold text-parchment-50">
                          —
                        </p>
                      </div>
                      <div className="rounded-xl border border-parchment-100/10 bg-navy-900 p-3">
                        <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-parchment-100/50">
                          USDm
                        </p>
                        <p className="mt-2 font-display text-lg font-semibold text-parchment-50">
                          —
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-parchment-100/10 bg-navy-900/75 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-parchment-100/50">
                            Sessions
                          </p>
                          <p className="mt-2 font-display text-xl font-semibold text-parchment-50">
                            03{" "}
                            <span className="text-sm font-normal text-parchment-100/55">
                              Active
                            </span>
                          </p>
                        </div>
                        <span
                          className="h-2 w-2 rounded-full bg-forest-400 shadow-[0_0_0_4px_rgba(111,196,155,0.12)]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-4 space-y-2">
                        {[
                          ["CeloHT Preview", "Celo Mainnet"],
                          ["Valora Preview", "Celo Mainnet"],
                          ["MiniPay Preview", "Celo Mainnet"],
                        ].map(([name, network]) => (
                          <div
                            key={name}
                            className="flex items-center justify-between gap-2 border-t border-parchment-100/10 pt-2 text-[0.62rem]"
                          >
                            <span className="text-parchment-100/80">
                              {name}
                            </span>
                            <span className="text-forest-400">{network}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="mt-5 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-parchment-100/45">
                      Quick actions
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {[
                        ["Learn", "/education"],
                        ["Agents", "/agent-network"],
                        ["Reforest", "/reforestation"],
                      ].map(([label, href]) => (
                        <Link
                          key={label}
                          href={href}
                          className="rounded-xl border border-parchment-100/10 bg-navy-900 px-2 py-2.5 text-center text-[0.62rem] font-semibold text-parchment-50 hover:border-gold-500/40 hover:text-gold-300"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 rounded-xl border border-parchment-100/10 bg-navy-900 px-3 py-3">
                      <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-parchment-100/50">
                        Education
                      </p>
                      <p className="mt-2 text-sm font-semibold text-parchment-50">
                        Continue learning
                      </p>
                      <p className="mt-1 text-[0.62rem] leading-5 text-parchment-100/60">
                        Course modules and wallet foundations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Section
          eyebrow="How it works"
          title="Learn, access, participate, create impact."
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              {
                number: "01",
                label: "Learn",
                text: "Build basic understanding in Haitian Creole.",
              },
              {
                number: "02",
                label: "Access",
                text: "Use wallet-compatible tools in a trusted setup.",
              },
              {
                number: "03",
                label: "Use",
                text: "Send, receive, and participate in local flows.",
              },
              {
                number: "04",
                label: "Build",
                text: "Support community action and local entrepreneurship.",
              },
              {
                number: "05",
                label: "Impact",
                text: "Contribute to measurable environmental and social progress.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="celoht-step-card rounded-2xl border border-navy-700/15 bg-parchment-100/30 p-5"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold-800">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {step.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <section className="border-y border-parchment-100 bg-white">
        <Section
          eyebrow="Impact, honestly reported"
          title="Progress you can inspect"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <p className="max-w-md text-base leading-7 text-ink-soft dark:text-parchment-100/70">
              CeloHT publishes what is known, distinguishes plans from results,
              and keeps evidence tied to real milestones rather than inflated
              claims.
            </p>
            <StatGrid
              stats={[
                { value: "Phase 1", label: "Current roadmap phase" },
                { value: "Léogâne", label: "Pilot region" },
                { value: "Creole-first", label: "Curriculum language" },
                { value: "3", label: "Permanent pillars" },
              ]}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-soft dark:text-parchment-100/60">
            <span>Education</span>
            <span>Agent network</span>
            <span>Reforestation</span>
            <Link
              href="/impact"
              className="font-semibold underline-offset-4 hover:underline"
            >
              See the impact framework →
            </Link>
          </div>
        </Section>
      </section>

      <section className="border-y border-navy-700/10 bg-navy-950 text-parchment-50 dark:border-parchment-100/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold-300">
              <Globe2 size={15} aria-hidden="true" /> Open and transparent
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
              Public work, clear standards, accountable growth.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-parchment-100/70">
              The project makes its mission, governance, security expectations,
              and open-source work visible so people can evaluate the ecosystem
              with context rather than hype.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-parchment-100/15 bg-parchment-100/15 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: WalletCards,
                title: "CeloHT DApp",
                copy: "The product layer for payments and participation.",
                href: DAPP_URL,
                external: true,
              },
              {
                icon: BookOpen,
                title: "Documentation",
                copy: "Public explanations of the project and its technology.",
                href: "/documentation",
              },
              {
                icon: UsersRound,
                title: "Community",
                copy: "How people get involved and learn together.",
                href: "/community",
              },
              {
                icon: Leaf,
                title: "Impact",
                copy: "What is measured and how progress is explained.",
                href: "/impact",
              },
              {
                icon: Code2,
                title: "Open Source",
                copy: "Independent access to the public code and project methods.",
                href: "/open-source",
              },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-gold-300"
                    aria-hidden="true"
                  />
                  <h3 className="mt-8 font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-parchment-100/65">
                    {item.copy}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
                    Explore <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </>
              );
              if (item.external) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="celoht-pillar-card group bg-navy-950 p-6 transition-colors hover:bg-navy-800"
                  >
                    {content}
                  </a>
                );
              }
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="celoht-pillar-card group bg-navy-950 p-6 transition-colors hover:bg-navy-800"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
