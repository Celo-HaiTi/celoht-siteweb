import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "CeloHT is a community-driven, open-source initiative built on the Celo ecosystem — here's who we are, and, just as importantly, who we're not.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <PageHero
        eyebrow="About CeloHT"
        title="Built from within the community it serves"
        lead="CeloHT started in Léogâne, Haiti, out of a simple observation: a lot of people in rural and semi-rural communities don't have easy access to a traditional bank, but more and more of them carry a smartphone. That gap is where CeloHT lives."
      />

      <Section title="A community initiative, not a company">
        <div className="max-w-3xl space-y-4 text-ink-soft dark:text-parchment-100/75">
          <p>
            CeloHT is a community-driven, open-source initiative built on top of the Celo ecosystem.
            It exists to expand financial inclusion through three permanent pillars: education, a
            decentralized network of community agents, and reforestation. This website, along with
            our{" "}
            <a href="https://github.com/Celo-HT" className="underline underline-offset-2">
              GitHub repositories
            </a>
            , is the public record of how we do that.
          </p>
          <p>
            We&rsquo;re explicit about what CeloHT is not, because the distinction matters — both
            legally and to the communities we serve, many of whom have seen fintech and crypto
            projects overpromise before.
          </p>
        </div>
      </Section>

      <Section eyebrow="Clarity first" title="What CeloHT is not">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "A blockchain or a Layer 1 network",
            "A cryptocurrency, token, or memecoin",
            "An ICO or an IDO",
            "An NFT project",
            "A staking platform",
            "An investment or trading platform",
            "A DeFi protocol",
            "The owner or operator of Valora",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-navy-700/15 p-4 text-sm dark:border-parchment-100/10"
            >
              <span aria-hidden="true" className="mt-0.5 text-navy-500 dark:text-parchment-100/40">
                —
              </span>
              <span className="text-ink-soft dark:text-parchment-100/70">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Origin" title="From Léogâne outward">
        <div className="max-w-3xl space-y-4 text-ink-soft dark:text-parchment-100/75">
          <p>
            The founder, Johnny Dubic, identified Celo as a good technical fit because of its low
            transaction fees and mobile-first design — its native token, CELO, and its stablecoin,
            cUSD, are both accessible through the Valora wallet. From there, CeloHT built outward:
            first education material in Haitian Creole, then the framework for a trained agent
            network, then a reforestation program tying environmental action to financial reward.
          </p>
          <p>
            CeloHT was featured in a Celo Forum &ldquo;Founders&rdquo; post in March 2026 — a small
            but real marker of recognition within the broader Celo ecosystem.
          </p>
        </div>
      </Section>

      <CTASection
        title="Want the full picture?"
        description="Read our mission, our vision for 2030, and the values that shape every program we build."
        primary={{ label: "Read our mission", href: "/mission" }}
        secondary={{ label: "Read our vision", href: "/vision" }}
      />

      <Section eyebrow="Keep reading" title="">
        <p className="text-sm text-ink-soft dark:text-parchment-100/60">
          For the legal detail behind these claims, see{" "}
          <Link href="/governance" className="underline underline-offset-2">
            Governance
          </Link>{" "}
          and our{" "}
          <a
            href="https://github.com/celo-ht/celoht/blob/main/docs/legal-status.md"
            className="underline underline-offset-2"
          >
            legal status documentation
          </a>
          .
        </p>
      </Section>
    </>
  );
}
