import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PillarCard } from "@/components/PillarCard";
import { CTASection } from "@/components/CTASection";
import {
  SITE_URL,
  DAPP_URL,
  GITHUB_ORG_URL,
  GITHUB_DAPP_URL,
  GITHUB_FLAGSHIP_URL,
  GITHUB_WEBSITE_URL,
} from "@/lib/constants";

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
    "A community-driven, open-source initiative expanding financial inclusion through education, a community agent network, and reforestation, built on the Celo ecosystem.",
  sameAs: ["https://twitter.com/CeloHtOfficial", GITHUB_ORG_URL, "https://medium.com/@celoht3"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <Section
        eyebrow="The CeloHT ecosystem"
        title="A practical stack for participation"
        className="pt-16 sm:pt-20"
      >
        <div className="grid gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 dark:border-parchment-100/10 dark:bg-parchment-100/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              index: "01",
              title: "Learn",
              copy: "Creole-first financial literacy and Web3 education before any tool is introduced.",
              href: "/education",
            },
            {
              index: "02",
              title: "Access",
              copy: "Community agents help bridge everyday users to digital payments and wallet support.",
              href: "/agent-network",
            },
            {
              index: "03",
              title: "Build",
              copy: "Open repositories, documentation, and contribution paths for people who want to make the system better.",
              href: "/developers",
            },
            {
              index: "04",
              title: "Regenerate",
              copy: "Reforestation connects environmental action with transparent, community-led programs.",
              href: "/reforestation",
            },
          ].map((item) => (
            <Link
              key={item.index}
              href={item.href}
              className="group bg-parchment-50 p-6 transition-colors hover:bg-gold-500/10 dark:bg-navy-900 dark:hover:bg-navy-800"
            >
              <span className="font-mono text-xs text-gold-800 dark:text-gold-300">{item.index}</span>
              <h3 className="mt-10 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft dark:text-parchment-100/65">{item.copy}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-ink underline-offset-4 group-hover:underline dark:text-parchment-100">
                Explore {item.title.toLowerCase()}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="A global open-source ecosystem" title="Built in public, ready to be examined">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-navy-700/10 bg-parchment-50 p-8 shadow-sm dark:border-parchment-100/10 dark:bg-navy-900">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-800 dark:text-gold-300">
              A clear point of view
            </p>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft dark:text-parchment-100/75">
              CeloHT connects education, community access, and digital tools around a simple
              principle: useful infrastructure should be understandable, inspectable, and shaped
              with the people who rely on it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={DAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-600"
              >
                Launch CeloHT DApp
              </Link>
              <Link
                href="/documentation"
                className="rounded-full border border-navy-700/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-gold-500 hover:bg-gold-500/10 dark:border-parchment-100/20 dark:text-parchment-100"
              >
                Explore documentation
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-forest-500/20 bg-forest-500/10 p-8 dark:border-forest-400/25">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-600 dark:text-forest-300">
              What is open today
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft dark:text-parchment-100/80">
              <li>• The flagship repository and product documentation</li>
              <li>• A public dApp codebase and technical roadmap</li>
              <li>• Governance, security, and contribution policies</li>
              <li>• A live website with a direct path to the CeloHT DApp</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Three permanent pillars" title="One initiative, three ways to grow">
        <div className="grid gap-6 sm:grid-cols-3">
          <PillarCard
            number="01"
            title="Education"
            description="Financial literacy and Web3 fundamentals, taught in Haitian Creole before any tool is introduced."
            href="/education"
            accent="gold"
            icon="📘"
          />
          <PillarCard
            number="02"
            title="Agent Network"
            description="Trained community members who handle cash-in, cash-out, and hands-on Valora support."
            href="/agent-network"
            accent="navy"
            icon="🤝"
          />
          <PillarCard
            number="03"
            title="Reforestation"
            description="Tree planting tied to verified action and rewarded in USDm  -  growth you can see."
            href="/reforestation"
            accent="forest"
            icon="🌱"
          />
        </div>
      </Section>

      <Section eyebrow="Build with CeloHT" title="Developer resources and contribution paths">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <a href={GITHUB_FLAGSHIP_URL} target="_blank" rel="noreferrer" className="rounded-2xl border border-navy-700/10 bg-parchment-50 p-5 transition-colors hover:border-gold-500 dark:border-parchment-100/10 dark:bg-navy-900">
            <h3 className="font-display text-xl font-semibold">Flagship repo</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">View the main open-source project and its documentation.</p>
          </a>
          <a href={GITHUB_DAPP_URL} target="_blank" rel="noreferrer" className="rounded-2xl border border-navy-700/10 bg-parchment-50 p-5 transition-colors hover:border-gold-500 dark:border-parchment-100/10 dark:bg-navy-900">
            <h3 className="font-display text-xl font-semibold">dApp repository</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">Explore the app layer and its product roadmap.</p>
          </a>
          <a href={GITHUB_WEBSITE_URL} target="_blank" rel="noreferrer" className="rounded-2xl border border-navy-700/10 bg-parchment-50 p-5 transition-colors hover:border-gold-500 dark:border-parchment-100/10 dark:bg-navy-900">
            <h3 className="font-display text-xl font-semibold">Website repo</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">See the source of this presentation and contribution workflow.</p>
          </a>
          <Link href="/developers" className="rounded-2xl border border-navy-700/10 bg-parchment-50 p-5 transition-colors hover:border-gold-500 dark:border-parchment-100/10 dark:bg-navy-900">
            <h3 className="font-display text-xl font-semibold">Developer docs</h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">Architecture, contributing, governance, and support guidance.</p>
          </Link>
        </div>
      </Section>

      <Section eyebrow="For partners, builders, and institutions" title="Start with the evidence">
        <div className="grid gap-px overflow-hidden border border-navy-700/15 bg-navy-700/15 dark:border-parchment-100/10 dark:bg-parchment-100/10 md:grid-cols-3">
          {[
            {
              title: "Read the thesis",
              copy: "Understand the mission, the community context, and the product direction before you engage.",
              href: "/documentation",
              label: "Open documentation",
            },
            {
              title: "Inspect the build",
              copy: "Review the repositories, architecture, roadmap, and contribution standards in the open.",
              href: GITHUB_FLAGSHIP_URL,
              label: "View GitHub",
              external: true,
            },
            {
              title: "Use the product",
              copy: "Go directly to the CeloHT DApp and experience the product layer for yourself.",
              href: DAPP_URL,
              label: "Launch DApp",
              external: true,
            },
          ].map((item) => (
            item.external ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group bg-parchment-50 p-6 transition-colors hover:bg-gold-500/10 dark:bg-navy-900 dark:hover:bg-navy-800"
              >
                <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft dark:text-parchment-100/65">{item.copy}</p>
                <span className="mt-8 inline-flex text-sm font-semibold underline-offset-4 group-hover:underline dark:text-parchment-100">
                  {item.label} <span aria-hidden="true" className="ml-2">↗</span>
                </span>
              </a>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-parchment-50 p-6 transition-colors hover:bg-gold-500/10 dark:bg-navy-900 dark:hover:bg-navy-800"
              >
                <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft dark:text-parchment-100/65">{item.copy}</p>
                <span className="mt-8 inline-flex text-sm font-semibold underline-offset-4 group-hover:underline dark:text-parchment-100">
                  {item.label} <span aria-hidden="true" className="ml-2">→</span>
                </span>
              </Link>
            )
          ))}
        </div>
      </Section>

      <CTASection
        title="Start with the product"
        description="Explore the CeloHT dApp, then follow the documentation and community pathways that make the ecosystem understandable and useful."
        primary={{ label: "Launch CeloHT DApp", href: DAPP_URL }}
        secondary={{ label: "Explore the community", href: "/community" }}
        external
      />
    </>
  );
}
