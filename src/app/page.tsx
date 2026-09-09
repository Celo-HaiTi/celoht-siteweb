import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDownToLine,
  ArrowUpFromLine,
  BookOpen,
  Code2,
  Globe2,
  Leaf,
  LockKeyhole,
  Sprout,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { StatGrid } from "@/components/StatGrid";
import { assetPath, DISCORD_URL, SITE_URL, DAPP_URL } from "@/lib/constants";
import { publicProjects } from "@/lib/open-source-professional";

export const metadata: Metadata = {
  title: "CeloHT | Open-source Haitian Web3 infrastructure",
  description:
    "CeloHT is an open-source Web3 initiative rooted in Haiti, building practical infrastructure for education, financial access, community participation, and real-world use.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CeloHT",
  url: SITE_URL,
  logo: `${SITE_URL}${assetPath("/celoht-logo.png")}`,
  description:
    "An open-source Web3 initiative rooted in Haiti, building practical infrastructure for education, financial access, community participation, and real-world use.",
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

      <section className="bg-white">
        <Section
          eyebrow="Open-source ecosystem"
          title="Public infrastructure that can be inspected, discussed, and improved."
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <p className="max-w-xl text-base leading-7 text-ink-soft dark:text-parchment-100/70">
              CeloHT is not only a public website or an application. Its
              documentation, backend, indexer, data layer, governance tools,
              research, and community resources are developed in public.
            </p>
            <div className="grid gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 sm:grid-cols-3 dark:border-parchment-100/10 dark:bg-parchment-100/10">
              {publicProjects.slice(0, 3).map((project) => (
                <div
                  key={project.name}
                  className="bg-white p-5 dark:bg-navy-950"
                >
                  <p className="font-display font-semibold">{project.name}</p>
                  <p className="mt-2 text-xs leading-5 text-ink-soft dark:text-parchment-100/65">
                    {project.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-ink underline-offset-4 hover:underline dark:text-parchment-50"
          >
            Explore Projects &amp; Public Infrastructure
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
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

              <div className="mt-8 rounded-[1.4rem] border border-gold-300/25 bg-[linear-gradient(145deg,rgba(248,211,79,0.12),rgba(13,33,55,0.82))] p-4 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-gold-300">
                      CeloHT · Finance
                    </p>
                    <p className="mt-2 text-sm leading-6 text-parchment-100/80">
                      A premium access layer for learning, wallets, and
                      real-world participation.
                    </p>
                  </div>
                  <span className="celoht-demo-badge rounded-full border border-gold-300/30 bg-gold-500/10 px-2.5 py-1.5 font-mono text-[0.5rem] uppercase tracking-[0.12em] text-gold-300">
                    Live preview
                  </span>
                </div>
              </div>

              <Link
                href="/dapp"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-ink underline-offset-4 hover:underline"
              >
                Learn more about the platform
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="celoht-phone-stage flex justify-center lg:justify-end">
              <div className="celoht-phone-shell relative w-full max-w-[20.5rem] rounded-[3rem] border border-white/20 bg-[#111b2b] p-2 shadow-[0_30px_90px_rgba(2,12,24,0.36)] ring-1 ring-white/10 sm:max-w-[22rem] sm:p-2.5 md:max-w-[23rem] lg:max-w-[24rem]">
                <div
                  className="celoht-phone-frame pointer-events-none absolute inset-0 rounded-[3rem] border border-gold-300/10"
                  aria-hidden="true"
                />

                <div className="celoht-phone-screen relative overflow-hidden rounded-[2.45rem] border border-white/10 bg-gradient-to-b from-[#081827] via-[#0c1f31] to-[#071525] shadow-inner">
                  <div
                    className="celoht-island absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-[#040b13] shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),_0_0_12px_rgba(111,196,155,0.08)]"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,211,79,0.15),_transparent_32%),radial-gradient(circle_at_bottom,_rgba(111,196,155,0.12),_transparent_38%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071525] to-transparent opacity-90" />

                  <div className="relative z-10 flex h-full flex-col overflow-y-auto px-2.5 pb-2.5 pt-7 sm:px-3 sm:pb-3">
                    <div className="flex items-center justify-between text-[0.52rem] font-medium text-parchment-100/60">
                      <span className="font-mono tracking-[0.2em]">09:41</span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-forest-400/20 bg-forest-400/10 px-1.25 py-0.5 text-[0.42rem] font-medium uppercase tracking-[0.12em] text-forest-300">
                        <LockKeyhole size={9} aria-hidden="true" /> Wallet
                        connected
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-300/30 bg-[linear-gradient(135deg,rgba(248,211,79,0.2),rgba(13,33,55,0.75))] text-[0.7rem] font-bold text-gold-300">
                          C
                        </div>
                        <div>
                          <p className="font-display text-sm font-semibold leading-none text-parchment-50">
                            CeloHT
                          </p>
                          <p className="mt-1 font-mono text-[0.48rem] uppercase tracking-[0.16em] text-parchment-100/60">
                            Finance
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="rounded-full border border-parchment-100/15 bg-parchment-100/5 px-2.5 py-1.5 text-[0.5rem] font-medium uppercase tracking-[0.12em] text-parchment-100/75 transition-colors hover:border-gold-300/40 hover:text-gold-300"
                      >
                        Apps
                      </button>
                    </div>

                    <div className="mt-2.5 rounded-[1.08rem] border border-gold-300/20 bg-[linear-gradient(135deg,rgba(248,211,79,0.12),rgba(31,56,77,0.92),rgba(9,21,35,0.98))] p-2.25 shadow-[0_14px_26px_rgba(248,211,79,0.10),0_16px_28px_rgba(5,13,24,0.22)] ring-1 ring-white/5 backdrop-blur-[1px]">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-parchment-100/55">
                            Connected wallet
                          </p>
                          <p className="mt-1 font-mono text-[0.52rem] text-parchment-50/90">
                            0xAC4F2AE7…9c94Bb66
                          </p>
                        </div>
                        <span className="rounded-full border border-gold-300/20 bg-gold-500/10 px-1.75 py-0.75 text-[0.42rem] font-medium uppercase tracking-[0.12em] text-gold-300">
                          Connected
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 rounded-[1.18rem] border border-parchment-100/10 bg-[linear-gradient(180deg,rgba(17,43,64,0.86),rgba(10,27,43,0.98),rgba(6,17,29,1))] p-2.25 shadow-[0_16px_28px_rgba(5,13,24,0.30),inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span
                            className="inline-flex h-2.5 w-2.5 rounded-full bg-forest-400 shadow-[0_0_0_5px_rgba(111,196,155,0.12)]"
                            aria-hidden="true"
                          />
                          <p className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-parchment-100/70">
                            Celo Sepolia
                          </p>
                        </div>
                        <span className="rounded-full border border-gold-300/20 bg-gold-500/10 px-1.5 py-0.5 font-mono text-[0.46rem] uppercase tracking-[0.12em] text-gold-300">
                          Live
                        </span>
                      </div>

                      <p className="mt-3 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-parchment-100/55">
                        Portfolio balance
                      </p>
                      <div className="mt-2 flex items-end justify-between gap-3">
                        <p className="font-display text-[2.05rem] font-semibold leading-none text-parchment-50">
                          $0.00
                        </p>
                        <p className="font-mono text-[0.46rem] uppercase tracking-[0.14em] text-gold-300">
                          USDm
                        </p>
                      </div>
                      <p className="mt-2 text-[0.56rem] leading-4 text-parchment-100/60">
                        ≈ Local currency estimate unavailable until a price feed
                        is configured.
                      </p>
                    </div>

                    <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                      <div className="rounded-[1.02rem] border border-parchment-100/10 bg-navy-900/55 p-2.5 shadow-sm">
                        <p className="font-mono text-[0.46rem] uppercase tracking-[0.14em] text-parchment-100/50">
                          CELO
                        </p>
                        <p className="mt-1.5 font-display text-lg font-semibold leading-none text-parchment-50">
                          0.85
                        </p>
                        <p className="mt-1 text-[0.42rem] uppercase tracking-[0.12em] text-parchment-100/55">
                          Celo Sepolia
                        </p>
                      </div>

                      <div className="rounded-[1.02rem] border border-parchment-100/10 bg-navy-900/55 p-2.5 shadow-sm">
                        <p className="font-mono text-[0.46rem] uppercase tracking-[0.14em] text-parchment-100/50">
                          USDm
                        </p>
                        <p className="mt-1.5 font-display text-lg font-semibold leading-none text-parchment-50">
                          0.00
                        </p>
                        <p className="mt-1 text-[0.42rem] uppercase tracking-[0.12em] text-parchment-100/55">
                          Stable value
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-1 rounded-xl border border-gold-300/25 bg-gold-500/12 px-2 py-2 text-[0.56rem] font-semibold text-gold-300 transition-all hover:border-gold-300 hover:bg-gold-500/18 active:scale-95"
                      >
                        <ArrowUpFromLine size={13} aria-hidden="true" />
                        Send
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-1 rounded-xl border border-parchment-100/15 bg-parchment-100/5 px-2 py-2 text-[0.56rem] font-semibold text-parchment-50 transition-all hover:border-gold-300/40 hover:text-gold-300 active:scale-95"
                      >
                        <ArrowDownToLine size={13} aria-hidden="true" />
                        Receive
                      </button>
                    </div>

                    <div className="mt-2.5 rounded-[1rem] border border-parchment-100/10 bg-navy-900/50 p-2 shadow-sm">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-mono text-[0.5rem] uppercase tracking-[0.14em] text-parchment-100/55">
                          Timeline
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-[0.46rem] uppercase tracking-[0.12em] text-parchment-100/60">
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-forest-400"
                            aria-hidden="true"
                          />
                          Live
                        </span>
                      </div>

                      <div className="mt-3 space-y-2.5">
                        {[
                          {
                            label: "Received",
                            amount: "+$250.00",
                            meta: "Jean • 10:42 AM",
                          },
                          {
                            label: "Sent",
                            amount: "-$75.00",
                            meta: "Marie • 09:12 AM",
                          },
                          {
                            label: "Pending",
                            amount: "-$35.00",
                            meta: "Agent payment • 07:54 AM",
                          },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="flex items-center justify-between gap-3 rounded-xl border border-parchment-100/8 bg-parchment-100/[0.02] p-2"
                          >
                            <div>
                              <p className="font-mono text-[0.46rem] uppercase tracking-[0.12em] text-parchment-100/55">
                                {item.label}
                              </p>
                              <p className="mt-1 text-[0.54rem] text-parchment-100/70">
                                {item.meta}
                              </p>
                            </div>
                            <p
                              className={`font-display text-sm font-semibold ${
                                item.amount.startsWith("+")
                                  ? "text-gold-300"
                                  : item.amount.startsWith("-")
                                    ? "text-parchment-100"
                                    : "text-gold-300"
                              }`}
                            >
                              {item.amount}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-2.5 grid grid-cols-2 gap-1.5 md:grid-cols-4">
                      {[
                        ["USDm transferred", "$1,280.50"],
                        ["Transactions completed", "18"],
                        ["Education progress", "72%"],
                        ["Trees supported", "640"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="min-h-[4.75rem] rounded-[0.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,39,58,0.9),rgba(9,22,37,0.96))] p-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                        >
                          <p className="font-display text-[0.8rem] font-semibold leading-tight text-parchment-50 sm:text-base">
                            {value}
                          </p>
                          <p className="mt-1 text-[0.38rem] leading-[1.15] text-parchment-100/60 sm:text-[0.47rem]">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <nav
                      aria-label="CeloHT preview navigation"
                      className="mt-auto grid grid-cols-4 gap-1 border-t border-parchment-100/10 pt-2"
                    >
                      {[
                        { icon: WalletCards, label: "Wallet", href: "/dapp" },
                        { icon: BookOpen, label: "Learn", href: "/education" },
                        {
                          icon: UsersRound,
                          label: "Agents",
                          href: "/agent-network",
                        },
                        {
                          icon: Sprout,
                          label: "Reforest",
                          href: "/reforestation",
                        },
                      ].map(({ icon: NavIcon, label, href }, index) => {
                        return (
                          <Link
                            key={label}
                            href={href}
                            aria-current={index === 0 ? "page" : undefined}
                            className={`flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-xl text-[0.5rem] font-semibold transition-colors ${
                              index === 0
                                ? "bg-gold-500/12 text-gold-300 shadow-sm"
                                : "text-parchment-100/50 hover:bg-parchment-100/5 hover:text-parchment-50"
                            }`}
                          >
                            <NavIcon size={14} aria-hidden="true" />
                            {label}
                          </Link>
                        );
                      })}
                    </nav>
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
