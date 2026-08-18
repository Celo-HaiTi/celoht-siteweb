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
  title: "CeloHT  -  Financial Inclusion, Education, Agent Network, Reforestation",
  description:
    "CeloHT is a community-driven, open-source initiative expanding financial inclusion through education, a community agent network, and reforestation, built on the Celo ecosystem.",
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

      <Section eyebrow="A global open-source ecosystem" title="Built around people, tools, and shared impact">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-navy-700/10 bg-parchment-50 p-8 shadow-sm dark:border-parchment-100/10 dark:bg-navy-900">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-800 dark:text-gold-300">
              Why CeloHT stands out
            </p>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft dark:text-parchment-100/75">
              CeloHT combines practical financial literacy, community-first access infrastructure,
              and environmental action in one open-source effort. The work is documented, the
              governance is public, and the path to contribute is clear.
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
              Open-source credibility
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft dark:text-parchment-100/80">
              <li>• Public GitHub repositories and contributor paths</li>
              <li>• Governance, roadmap, and transparency documentation</li>
              <li>• Security reporting, code of conduct, and open contribution rules</li>
              <li>• A public product story rooted in community and impact</li>
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

      <Section eyebrow="Not what you might assume" title="What CeloHT is  -  and isn’t">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-forest-500/30 p-6">
            <h3 className="font-display text-2xl font-semibold text-forest-600 dark:text-forest-400">
              CeloHT is
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
              <li>A community-driven, open-source initiative</li>
              <li>Built on the Celo ecosystem</li>
              <li>A user of CELO for network transactions where appropriate</li>
              <li>A promoter of USDm for accessible digital payments</li>
              <li>A developer of tools compatible with the Valora wallet</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-navy-700/20 p-6 dark:border-parchment-100/15">
            <h3 className="font-display text-2xl font-semibold">CeloHT is not</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
              <li>A blockchain, Layer 1, or cryptocurrency</li>
              <li>A token, an ICO, or an IDO</li>
              <li>An NFT project or a staking platform</li>
              <li>An investment or trading platform</li>
              <li>The owner or operator of Valora</li>
            </ul>
          </div>
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
