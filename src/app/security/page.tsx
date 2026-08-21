import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How to report a vulnerability, and the security practices behind CeloHT's repositories.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Security" }]} />
      <PageHero
        eyebrow="Security"
        title="Report privately, never in a public issue"
        lead="Voici les protections principales du site et la manière confidentielle de signaler un problème."
      />

      <Section eyebrow="Reporting" title="Where to send a vulnerability report">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            Email:{" "}
            <a
              href="mailto:security@celoht.com"
              className="underline underline-offset-2"
            >
              security@celoht.com
            </a>
          </li>
          <li>
            Pour un problème sensible, utilisez l&apos;adresse privée ci-dessus
            et ne partagez jamais de données personnelles, de clé privée ou de
            phrase de récupération.
          </li>
        </ul>
      </Section>

      <Section eyebrow="This website" title="Practices">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            Strict Content Security Policy and standard security headers (see
            next.config.ts)
          </li>
          <li>No secrets committed - environment variables only</li>
          <li>CodeQL static analysis and Dependabot on every change</li>
        </ul>
      </Section>

      <Section eyebrow="The dApp and contracts" title="Practices">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            OpenZeppelin&rsquo;s audited AccessControl, Pausable, and
            ReentrancyGuard base contracts
          </li>
          <li>
            DonationManager&rsquo;s platform fee is hard-capped at 5% directly
            in the contract code
          </li>
          <li>Every contract has pause/unpause gated to an admin role</li>
          <li>
            30 passing tests across the contract suite, run on every Pull
            Request
          </li>
        </ul>
      </Section>

      <Section
        eyebrow="Protection des utilisateurs"
        title="Des règles simples et vérifiables"
      >
        <p className="max-w-2xl text-sm leading-6 text-ink-soft dark:text-parchment-100/70">
          CeloHT ne demande jamais une phrase de récupération, une clé privée ou
          un mot de passe. Les pages{" "}
          <Link href="/support" className="underline underline-offset-2">
            Support
          </Link>{" "}
          et
          <Link href="/contact" className="underline underline-offset-2">
            {" "}
            Contact
          </Link>{" "}
          indiquent les bons canaux pour chaque demande.
        </p>
      </Section>
    </>
  );
}
