import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { LaunchDappButton } from "@/components/LaunchDappButton";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { DAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CeloHT DApp",
  description:
    "The CeloHT DApp is the product layer for digital payments, learning, agent support, donations, and community participation on Celo.",
  alternates: { canonical: "/dapp" },
};

const features = [
  {
    title: "Wallet connection",
    description:
      "Connect an approved wallet and use the app in a way that matches the Celo ecosystem’s mobile-first access model.",
  },
  {
    title: "Send and receive",
    description:
      "Support for transfer flows and digital payments is the core practical layer that turns wallet knowledge into everyday use.",
  },
  {
    title: "Education and onboarding",
    description:
      "The DApp fits within a wider learning model, combining use of USDm, wallet safety, and practical financial literacy.",
  },
  {
    title: "Agent support",
    description:
      "The agent model ties into the product experience by helping users understand how to access assistance locally.",
  },
  {
    title: "Donations",
    description:
      "The donation flow is designed to channel support toward specific community and ecosystem goals with transparent public visibility where applicable.",
  },
  {
    title: "Reforestation and impact",
    description:
      "Environment and impact tracking are part of the public-facing value proposition and should be independently readable in context.",
  },
];

export default function DAppPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "DApp" }]} />
      <PageHero
        eyebrow="CeloHT DApp"
        title="The product layer for the ecosystem"
        lead="The CeloHT DApp is the user-facing application where the education, payment, agent, donation, and impact model come together."
      />

      <Section
        eyebrow="What it does"
        title="Built to help real people participate"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-navy-700/15 p-6"
            >
              <h2 className="font-display text-2xl font-semibold">
                {feature.title}
              </h2>
              <p className="mt-3 text-sm text-ink-soft">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Product positioning"
        title="A core CeloHT experience, not a side feature"
      >
        <div className="max-w-3xl space-y-4 text-ink-soft">
          <p>
            The DApp is not a technical appendix to the website. It is one of
            the core public experiences through which people can learn, connect,
            transact, support initiatives, and participate in community
            processes.
          </p>
          <p>
            It works best in relation to the wider CeloHT ecosystem: education
            teaches the fundamentals, agents provide trusted local support,
            payments flow through wallet-compatible tools, and transparent
            reporting keeps the larger mission understandable.
          </p>
        </div>
      </Section>

      <Section eyebrow="Launch" title="Try the product">
        <div className="rounded-2xl border border-gold-500/30 bg-gold-500/10 p-6 sm:p-8">
          <p className="max-w-2xl text-ink-soft">
            Use the DApp to explore the product experience, connect a wallet,
            and continue into the broader CeloHT ecosystem with appropriate
            wallet and network guidance.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <LaunchDappButton size="lg" />
            <a
              href={DAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold underline-offset-4 hover:underline"
            >
              Open directly
            </a>
          </div>
        </div>
      </Section>

      <CTASection
        title="Need the bigger picture?"
        description="Read the ecosystem architecture, impact model, and governance before using the DApp in context."
        primary={{ label: "Explore technology", href: "/technology" }}
        secondary={{ label: "Read governance", href: "/governance" }}
      />
    </>
  );
}
