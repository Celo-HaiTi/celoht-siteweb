import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Globe2,
  Leaf,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { StatGrid } from "@/components/StatGrid";
import { GITHUB_ORG_URL, SITE_URL, DAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CeloHT | Open-source Haitian Web3 infrastructure",
  description:
    "CeloHT is an open-source Haitian Web3 initiative building practical pathways through financial inclusion, education, digital payments, and community action on Celo.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CeloHT",
  url: SITE_URL,
  logo: `${SITE_URL}/celoht-logo.png`,
  description:
    "An open-source Haitian Web3 initiative building practical pathways through financial inclusion, education, digital payments, and community action on Celo.",
  sameAs: ["https://twitter.com/CeloHtOfficial", "https://medium.com/@celoht3"],
};

const ecosystemPaths = [
  {
    icon: WalletCards,
    label: "Financial inclusion",
    title: "Access should feel practical.",
    copy: "CeloHT focuses on the knowledge, community access, and digital payment pathways that make participation possible.",
    href: "/mission",
    iconClass: "text-gold-300",
  },
  {
    icon: BookOpen,
    label: "Web3 education",
    title: "Start with understanding.",
    copy: "Financial literacy, blockchain fundamentals, and digital security education delivered primarily in Haitian Creole.",
    href: "/education",
    iconClass: "text-parchment-100",
  },
  {
    icon: UsersRound,
    label: "Agent network",
    title: "Put people in the loop.",
    copy: "A trained, community-rooted network helps users interact with digital payment tools and local cash access.",
    href: "/agent-network",
    iconClass: "text-forest-400",
  },
  {
    icon: Leaf,
    label: "Reforestation",
    title: "Build for the long term.",
    copy: "Environmental restoration is designed as a transparent community program, measured over time.",
    href: "/reforestation",
    iconClass: "text-forest-400",
  },
];

const projectLinks = [
  {
    label: "CeloHT DApp",
    description: "The interactive product layer for the CeloHT ecosystem.",
    href: DAPP_URL,
    external: true,
  },
  {
    label: "Education",
    description: "Learning resources for financial literacy and Web3 fundamentals.",
    href: "/education",
  },
  {
    label: "Agent Network",
    description: "A community-led access layer for digital payments and wallet support.",
    href: "/agent-network",
  },
  {
    label: "Reforestation",
    description: "Environmental action connected to transparent community programs.",
    href: "/reforestation",
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
      <Section eyebrow="The CeloHT proposition" title="Technology is only useful when people can enter it">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <p className="font-display text-3xl leading-tight text-ink dark:text-parchment-50 sm:text-4xl">
            A Haitian point of view on open financial infrastructure.
          </p>
          <div className="max-w-2xl space-y-5 text-base leading-7 text-ink-soft dark:text-parchment-100/70">
            <p>
              CeloHT is an open-source initiative built on the Celo ecosystem. It brings together
              education, digital payments, entrepreneurship, and community development in a way
              that is practical, public, and grounded in Haiti.
            </p>
            <p>
              The work starts with understanding. From there, people can access tools, participate
              in a community, and contribute to the systems being built around them.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 font-semibold text-ink underline-offset-4 hover:underline dark:text-parchment-50"
            >
              Read the CeloHT story
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>
      </section>

      <section className="border-y border-navy-700/10 bg-navy-950 text-parchment-50 dark:border-parchment-100/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-300">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              Four connected pathways.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-parchment-100/15 bg-parchment-100/15 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemPaths.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group bg-navy-950 p-6 transition-colors hover:bg-navy-800"
                >
                  <Icon size={24} strokeWidth={1.5} className={item.iconClass} aria-hidden="true" />
                  <p className="mt-12 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-parchment-100/45">
                    {item.label}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-parchment-100/65">{item.copy}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
                    Explore <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
      <Section eyebrow="The ecosystem" title="A product story with more than one entry point">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-ink-soft dark:text-parchment-100/70">
              The CeloHT ecosystem is designed as a progression: learn the context, access the
              tools, build with others, and create community value over time.
            </p>
            <div className="mt-10 divide-y divide-navy-700/15 border-y border-navy-700/15 dark:divide-parchment-100/10 dark:border-parchment-100/10">
              {projectLinks.map((item, index) => {
                const content = (
                  <>
                    <span className="font-mono text-xs text-gold-800 dark:text-gold-300">0{index + 1}</span>
                    <span className="ml-6 flex-1">
                      <strong className="block font-display text-xl font-semibold">{item.label}</strong>
                      <span className="mt-1 block text-sm text-ink-soft dark:text-parchment-100/60">{item.description}</span>
                    </span>
                    {item.external ? <ArrowUpRight size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
                  </>
                );
                return item.external ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="group flex items-center py-5 transition-colors hover:text-gold-700 dark:hover:text-gold-300">
                    {content}
                  </a>
                ) : (
                  <Link key={item.label} href={item.href} className="group flex items-center py-5 transition-colors hover:text-gold-700 dark:hover:text-gold-300">
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="border-l-2 border-gold-500 pl-6 lg:mt-8">
            <Globe2 size={28} strokeWidth={1.5} className="text-gold-700 dark:text-gold-300" aria-hidden="true" />
            <h3 className="mt-6 font-display text-3xl font-semibold">Local roots. Global standards.</h3>
            <p className="mt-4 text-sm leading-6 text-ink-soft dark:text-parchment-100/65">
              Haitian identity is not a decorative layer. It is the context that shapes what CeloHT
              chooses to explain, build, and make accessible.
            </p>
            <Link href="/community" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">
              Meet the community <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>
      </section>

      <section className="border-y border-parchment-100 bg-parchment">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-800 dark:text-gold-300">Digital payments</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">A clear path from learning to use.</h2>
          </div>
          <div className="max-w-2xl text-base leading-7 text-ink-soft dark:text-parchment-100/70">
            <p>
              CeloHT uses Celo as infrastructure, USDm as a payment medium, CELO for network gas,
              and wallet-compatible tools such as Valora. CeloHT does not issue or control these assets.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 sm:grid-cols-5 dark:border-parchment-100/15 dark:bg-parchment-100/15">
              {["User", "CeloHT DApp", "Wallet", "USDm", "Payment"].map((step, index) => (
                <div key={step} className="bg-white px-3 py-4 text-center sm:px-2">
                  <span className="font-mono text-[0.62rem] text-gold-800 dark:text-gold-300">0{index + 1}</span>
                  <strong className="mt-2 block text-xs font-semibold text-ink dark:text-parchment-50">{step}</strong>
                </div>
              ))}
            </div>
            <Link href="/technology" className="mt-7 inline-flex items-center gap-2 font-semibold text-ink underline-offset-4 hover:underline dark:text-parchment-50">
              Explore the technology <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-parchment-100 bg-white">
      <Section eyebrow="Impact, honestly reported" title="Progress you can inspect">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <p className="max-w-md text-base leading-7 text-ink-soft dark:text-parchment-100/70">
            CeloHT publishes what is known, distinguishes plans from results, and leaves room for
            the evidence to catch up with the ambition.
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
          <span>Measured: education</span>
          <span>Measured: agent network</span>
          <span>Measured: reforestation</span>
          <Link href="/impact" className="font-semibold underline-offset-4 hover:underline">See the impact framework →</Link>
        </div>
      </Section>
      </section>

      <section className="border-y border-navy-700/10 bg-navy-950 text-parchment-50 dark:border-parchment-100/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold-300">
              <Globe2 size={15} aria-hidden="true" /> L&apos;écosystème CeloHT
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">Explorez l&apos;écosystème CeloHT</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-parchment-100/70">
              CeloHT est une initiative haïtienne Web3 open source qui relie outils numériques,
              apprentissage, participation communautaire et impact local.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-parchment-100/15 bg-parchment-100/15 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: WalletCards, title: "CeloHT DApp", copy: "Paiements, connexions aux wallets et services Web3.", href: "/dapp" },
              { icon: BookOpen, title: "Éducation Web3", copy: "Ressources pour apprendre la blockchain, les actifs numériques, les paiements numériques et l'écosystème Celo.", href: "/education" },
              { icon: UsersRound, title: "Réseau d'agents", copy: "Une infrastructure communautaire pour rapprocher les services numériques et financiers des utilisateurs.", href: "/agent-network" },
              { icon: Leaf, title: "Reboisement et impact", copy: "Des initiatives communautaires liées à la plantation d'arbres, à leur suivi et à l'impact environnemental.", href: "/reforestation" },
              { icon: Code2, title: "GitHub CeloHT", copy: "Code source, documentation, dépôts et ressources pour comprendre et contribuer au projet.", href: GITHUB_ORG_URL, external: true },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon size={24} strokeWidth={1.5} className="text-gold-300" aria-hidden="true" />
                  <h3 className="mt-8 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-parchment-100/65">{item.copy}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
                    Explorer <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </>
              );
              return item.external ? (
                <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group bg-navy-950 p-6 transition-colors hover:bg-navy-800">{content}</a>
              ) : (
                <Link key={item.title} href={item.href} className="group bg-navy-950 p-6 transition-colors hover:bg-navy-800">{content}</Link>
              );
            })}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300">
              Explorer CeloHT <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href={GITHUB_ORG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-parchment-100/25 px-5 py-3 text-sm font-semibold text-parchment-50 transition-colors hover:border-gold-300 hover:text-gold-300">
              Voir sur GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-parchment-100 bg-parchment-100/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:py-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-800">Reboisement et impact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Plantez un arbre</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft dark:text-parchment-100/75">
              Apprenez comment choisir un jeune arbre, préparer le terrain, le planter correctement, l&apos;arroser, le protéger et assurer son suivi jusqu&apos;à sa croissance.
            </p>
          </div>
          <Link href="/reforestation/planter-un-arbre" className="inline-flex w-fit items-center gap-2 rounded-full bg-navy-950 px-5 py-3 text-sm font-semibold text-parchment-50 transition-colors hover:bg-navy-800">
            Apprendre à planter un arbre <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CTASection
        title="There is a place to begin."
        description="Learn the context, explore the product, and follow the work as CeloHT builds in public from Haiti toward a wider digital economy."
        primary={{ label: "Launch CeloHT DApp", href: DAPP_URL }}
        secondary={{ label: "Explore CeloHT", href: "/about" }}
        external
      />
    </>
  );
}