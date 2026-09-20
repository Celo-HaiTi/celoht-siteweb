import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "CeloHT is a community-driven, open-source initiative built on the Celo ecosystem  -  here's who we are, and, just as importantly, who we're not.",
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
            CeloHT is a community-driven, open-source initiative built on top of
            the Celo ecosystem. It exists to expand financial inclusion through
            three permanent pillars: education, a decentralized network of
            community agents, and reforestation. This website is the public
            place to understand the mission, programs, safeguards, and progress.
            CeloHT is rooted in Haiti, with Haiti as its starting point and
            real-world context, while its open-source infrastructure is designed
            for broader applicability as the ecosystem develops.
          </p>
          <p>
            We&rsquo;re explicit about what CeloHT is not, because the
            distinction matters - both legally and to the communities we serve,
            many of whom have seen fintech and crypto projects overpromise
            before.
          </p>
        </div>
      </Section>

      <Section eyebrow="Clarity first" title="What CeloHT is not">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "A blockchain or a Layer 1 network",
            "A native project token or memecoin",
            "An ICO or token sale",
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
              <span
                aria-hidden="true"
                className="mt-0.5 text-navy-500 dark:text-parchment-100/40"
              >
                -
              </span>
              <span className="text-ink-soft dark:text-parchment-100/70">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Origin" title="From Léogâne outward">
        <div className="max-w-3xl space-y-4 text-ink-soft dark:text-parchment-100/75">
          <p>
            Johnny Dubic — Founder — identified Celo as a suitable technical
            environment because of its mobile-first design, public wallet access,
            and ecosystem compatibility. CeloHT builds on that foundation through
            education, agent support, and reforestation work while keeping
            governance, treasury authority, and operational decisions within the
            project&apos;s documented collective process.
          </p>
          <p>
            CeloHT was featured in a Celo Forum &ldquo;Founders&rdquo; post in
            March 2026 - a small but real marker of recognition within the
            broader Celo ecosystem.
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
          <Link href="/transparency" className="underline underline-offset-2">
            transparency pages
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
