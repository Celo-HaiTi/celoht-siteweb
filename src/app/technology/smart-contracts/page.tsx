import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  Blocks,
  Check,
  CircleDollarSign,
  Eye,
  FileCheck2,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sprout,
  UsersRound,
  WalletCards,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { GITHUB_CONTRACTS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CeloHT Smart Contracts | Programmable Blockchain Infrastructure",
  description:
    "Explore the CeloHT smart-contract architecture for programmable payments, agents, education, donations, reforestation, governance, and measurable impact on the Celo ecosystem.",
  alternates: { canonical: "/technology/smart-contracts" },
};

type ArchitectureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const architectureItems: ArchitectureItem[] = [
  {
    title: "Agent Registry",
    description:
      "Provides an onchain structure for registering and managing CeloHT agents and their operational status.",
    icon: UsersRound,
  },
  {
    title: "Service Payments",
    description:
      "Provides programmable infrastructure for service-related payments and community transactions using supported assets within the Celo ecosystem.",
    icon: HandCoins,
  },
  {
    title: "Education",
    description:
      "Supports blockchain-based education infrastructure, including verifiable participation, learning records, and credential-oriented functionality where applicable.",
    icon: GraduationCap,
  },
  {
    title: "Donations & Impact",
    description:
      "Provides programmable mechanisms for connecting contributions with CeloHT community and impact initiatives while enabling transparent onchain records.",
    icon: HeartHandshake,
  },
  {
    title: "Reforestation",
    description:
      "Supports onchain structures for recording and coordinating environmental initiatives and measurable reforestation-related impact.",
    icon: Sprout,
  },
  {
    title: "Governance & Access Control",
    description:
      "Provides permission and administrative controls for managing authorized protocol operations and protecting privileged functionality.",
    icon: LockKeyhole,
  },
];

const principles: ArchitectureItem[] = [
  {
    title: "Transparency",
    description: "Onchain interactions should be independently verifiable.",
    icon: Eye,
  },
  {
    title: "Modularity",
    description: "Contract responsibilities should remain clearly separated.",
    icon: Blocks,
  },
  {
    title: "Security",
    description:
      "Privileged operations should be protected by explicit access controls.",
    icon: ShieldCheck,
  },
  {
    title: "Interoperability",
    description:
      "The architecture should integrate with the Celo ecosystem and compatible wallets and applications.",
    icon: Network,
  },
  {
    title: "Non-Custodial Design",
    description:
      "User interactions should avoid unnecessary custody of user assets.",
    icon: WalletCards,
  },
  {
    title: "Upgrade Discipline",
    description:
      "Changes to critical contract logic should follow controlled review, testing, and governance processes.",
    icon: FileCheck2,
  },
];

function FlowStep({
  children,
  icon: Icon,
}: {
  children: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex min-h-16 items-center justify-center gap-3 rounded-xl border border-parchment-100/12 bg-navy-900/75 px-4 py-3 text-center text-sm font-semibold text-parchment-50 shadow-[0_12px_30px_rgba(2,8,20,0.16)]">
      <Icon size={18} className="shrink-0 text-gold-300" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function DownArrow() {
  return (
    <ArrowDown
      className="mx-auto text-gold-300/70"
      size={18}
      aria-hidden="true"
    />
  );
}

function ContractLayerVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-parchment-100/12 bg-[radial-gradient(circle_at_50%_45%,rgba(255,212,59,0.12),transparent_24%),linear-gradient(145deg,#102640,#061426)] p-5 shadow-[0_24px_80px_rgba(2,8,20,0.35)] sm:p-8"
      aria-label="CeloHT smart contract layer connected to six protocol components"
      role="img"
    >
      <div
        className="pointer-events-none absolute inset-8 rounded-full border border-gold-300/10 sm:inset-16"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-16 rounded-full border border-parchment-100/10 sm:inset-28"
        aria-hidden="true"
      />
      <div className="relative grid gap-3 sm:grid-cols-3 sm:items-center">
        <div className="order-2 grid gap-3 sm:order-1">
          {architectureItems.slice(0, 3).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-2 rounded-lg border border-parchment-100/10 bg-navy-950/70 px-3 py-2 text-xs text-parchment-100/80"
              >
                <Icon
                  size={15}
                  className="shrink-0 text-gold-300"
                  aria-hidden="true"
                />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="celoht-core-glow relative order-1 flex min-h-36 items-center justify-center rounded-2xl border border-gold-300/35 bg-gold-500/10 px-5 text-center shadow-[0_0_45px_rgba(255,212,59,0.14)] sm:order-2">
          <div>
            <Network
              className="mx-auto mb-3 text-gold-300"
              size={28}
              aria-hidden="true"
            />
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold-300">
              CeloHT
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-parchment-50">
              Smart Contract Layer
            </p>
          </div>
        </div>
        <div className="order-3 grid gap-3">
          {architectureItems.slice(3).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-2 rounded-lg border border-parchment-100/10 bg-navy-950/70 px-3 py-2 text-xs text-parchment-100/80"
              >
                <Icon
                  size={15}
                  className="shrink-0 text-gold-300"
                  aria-hidden="true"
                />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function SmartContractsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Technology", href: "/technology" },
          { label: "Smart Contracts" },
        ]}
      />
      <PageHero
        eyebrow="Programmable infrastructure"
        title="CeloHT Smart Contracts"
        lead="Programmable infrastructure for transparent digital payments, community services, education, and measurable impact across the Celo ecosystem."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-parchment-100/80">
              CeloHT uses smart contracts as a programmable infrastructure layer
              for coordinating digital payments, agent-based services, education
              initiatives, donations, and impact-oriented activities. The
              architecture is designed to provide transparent, verifiable, and
              permission-aware interactions onchain.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-gold-300">
              <span className="rounded-full border border-gold-500/25 bg-gold-500/8 px-3 py-2">
                Modular by design
              </span>
              <span className="rounded-full border border-parchment-100/15 px-3 py-2 text-parchment-100/70">
                Permission-aware
              </span>
            </div>
          </div>
          <ContractLayerVisual />
        </div>
      </Section>

      <Section eyebrow="Core components" title="Smart Contract Architecture">
        <p className="max-w-3xl text-parchment-100/70">
          The CeloHT smart-contract layer is organized around modular components
          that support different parts of the ecosystem while maintaining clear
          separation of responsibilities.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {architectureItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-parchment-100/12 bg-navy-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-navy-900"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-300">
                  <Icon size={21} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-parchment-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-parchment-100/68">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Interaction model"
        title="How the Smart Contract Layer Works"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-2xl border border-gold-500/20 bg-gold-500/5 p-6 sm:p-8">
            <div className="grid gap-3">
              <FlowStep icon={UsersRound}>User / Agent</FlowStep>
              <DownArrow />
              <FlowStep icon={Blocks}>CeloHT Application</FlowStep>
              <DownArrow />
              <FlowStep icon={WalletCards}>Wallet</FlowStep>
              <DownArrow />
              <FlowStep icon={Network}>Celo Network</FlowStep>
              <DownArrow />
              <FlowStep icon={ShieldCheck}>CeloHT Smart Contracts</FlowStep>
              <DownArrow />
              <FlowStep icon={Eye}>Onchain Events & Records</FlowStep>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-parchment-100/70">
              <span className="rounded-full border border-parchment-100/15 px-3 py-1.5">
                Community
              </span>
              <span className="rounded-full border border-parchment-100/15 px-3 py-1.5">
                Services
              </span>
              <span className="rounded-full border border-parchment-100/15 px-3 py-1.5">
                Education
              </span>
              <span className="rounded-full border border-parchment-100/15 px-3 py-1.5">
                Impact
              </span>
            </div>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-parchment-100/75">
            CeloHT applications interact with the smart-contract layer through
            wallet-based transactions and onchain calls. Contract events and
            transaction records can provide a transparent foundation for
            applications, analytics, and impact tracking.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="User-controlled interaction"
        title="Designed for Transparent, Non-Custodial Interactions"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-parchment-100/12 bg-navy-900/55 p-6 sm:p-8">
            <WalletCards
              className="text-gold-300"
              size={24}
              aria-hidden="true"
            />
            <p className="mt-5 text-sm leading-7 text-parchment-100/75">
              The CeloHT architecture emphasizes non-custodial interaction
              patterns where appropriate, allowing users and agents to interact
              through their own wallets while smart contracts provide
              programmable coordination and verification.
            </p>
          </div>
          <div className="rounded-2xl border border-parchment-100/12 bg-navy-900/55 p-6 sm:p-8">
            <ShieldCheck
              className="text-gold-300"
              size={24}
              aria-hidden="true"
            />
            <p className="mt-5 text-sm leading-7 text-parchment-100/75">
              This architecture-level description does not assume that every
              component follows the same custody model. The appropriate
              interaction pattern depends on the service and its documented
              contract responsibilities.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Celo-native payment layer"
        title="Celo Ecosystem Integration"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Celo",
              icon: Network,
              text: "The underlying network environment for CeloHT applications and contract interactions.",
            },
            {
              title: "CELO",
              icon: CircleDollarSign,
              text: "Used for network and gas functionality where applicable, not as a CeloHT-issued asset.",
            },
            {
              title: "USDm",
              icon: CircleDollarSign,
              text: "The CeloHT payment and stable-value asset where applicable. CeloHT does not introduce its own cryptocurrency or token.",
            },
          ].map(({ title, icon: Icon, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-parchment-100/12 bg-navy-900/55 p-6"
            >
              <Icon className="text-gold-300" size={23} aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-parchment-100/70">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Protection by design" title="Security & Access Control">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Role-based permissions",
              "Controlled administrative operations",
              "Separation of responsibilities",
              "Multisignature governance where applicable",
              "Least-privilege principles",
              "Transparent onchain execution",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-parchment-100/12 bg-navy-900/55 px-4 py-4 text-sm text-parchment-100/78"
              >
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-gold-300"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm leading-7 text-parchment-100/70">
            Security is treated as a core architectural concern. The contract
            layer uses explicit roles and bounded responsibilities, with
            test-driven contract development supporting review of behavior and
            invariants. No independent audit or security certification is
            implied by this architecture overview.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Publicly inspectable foundations"
        title="Onchain Transparency"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <p className="text-lg leading-8 text-parchment-100/75">
            Blockchain transactions provide publicly verifiable records of
            contract interactions. The architecture can support transparent
            application and impact records without relying on private reporting
            alone.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Transaction verification",
              "Event tracking",
              "Agent activity records",
              "Payment records",
              "Impact records",
              "Application analytics",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-gold-500/20 bg-gold-500/5 px-4 py-4 text-sm font-semibold text-parchment-100/80"
              >
                <FileCheck2
                  size={17}
                  className="shrink-0 text-gold-300"
                  aria-hidden="true"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Composable foundation"
        title="Built as a Modular Protocol Layer"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-2xl border border-gold-500/20 bg-gold-500/5 p-6 sm:p-8">
            <div className="flex items-center gap-3 font-display text-lg font-semibold text-parchment-50">
              <Network className="text-gold-300" size={21} aria-hidden="true" />
              Agent Registry
            </div>
            <div className="ml-2 mt-4 grid gap-2 border-l border-gold-300/35 pl-5 text-sm text-parchment-100/75">
              {architectureItems.slice(1).map((item) => (
                <div
                  key={item.title}
                  className="relative py-1.5 before:absolute before:-left-[1.55rem] before:top-1/2 before:h-px before:w-5 before:bg-gold-300/35"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-parchment-100/75">
            Separating components allows CeloHT to evolve individual services
            without unnecessarily coupling every application feature to a single
            contract. Each domain can retain a clear responsibility while
            sharing a coherent access-control and payment model.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Design principles"
        title="Smart Contract Development Principles"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article
                key={principle.title}
                className="rounded-xl border border-parchment-100/12 bg-navy-900/50 p-5 transition-colors hover:border-gold-500/35"
              >
                <Icon size={20} className="text-gold-300" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-parchment-100/68">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="From people to protocol" title="Ecosystem Connection">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="rounded-2xl border border-parchment-100/12 bg-[linear-gradient(145deg,rgba(16,38,64,0.9),rgba(6,20,38,0.9))] p-5 sm:p-8">
            <div className="grid gap-3">
              <FlowStep icon={UsersRound}>CeloHT Users</FlowStep>
              <DownArrow />
              <FlowStep icon={WalletCards}>Wallets</FlowStep>
              <DownArrow />
              <FlowStep icon={Blocks}>CeloHT DApp / Applications</FlowStep>
              <DownArrow />
              <FlowStep icon={ShieldCheck}>
                CeloHT Smart Contract Layer
              </FlowStep>
              <DownArrow />
              <FlowStep icon={Network}>Celo Network</FlowStep>
              <DownArrow />
              <FlowStep icon={CircleDollarSign}>
                USDm / CELO ecosystem infrastructure
              </FlowStep>
            </div>
          </div>
          <p className="text-xl leading-9 text-parchment-100/80">
            Designed to connect CeloHT&apos;s real-world initiatives with
            programmable blockchain infrastructure.
          </p>
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="border border-navy-800 bg-navy-950 px-6 py-12 text-center text-parchment-50 shadow-[0_20px_50px_rgba(8,18,37,0.14)] sm:px-16 sm:py-14">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Explore the CeloHT Technology
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-parchment-100/75">
            See how the DApp and the public smart-contract repository fit into CeloHT&apos;s broader
            technical ecosystem.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dapp"
              className="inline-flex min-h-12 items-center rounded-md bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
            >
              Explore the DApp
            </Link>
            <a
              href={GITHUB_CONTRACTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-md border border-parchment-100/30 px-6 py-3 text-sm font-semibold text-parchment-50 transition-colors hover:border-gold-300 hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
            >
              View the Smart Contracts Repository
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
