import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the CeloHT website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms" }]} />
      <PageHero
        eyebrow="Terms"
        title="Terms of use"
        lead="These terms apply to this website and the documentation it links to."
      />

      <Section title="Acceptable use">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Read, share, and cite our documentation</li>
          <li>Use and share our public documentation responsibly</li>
          <li>Adapt code and documents under the Apache 2.0 License</li>
        </ul>
      </Section>

      <Section title="Restrictions">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            Presenting yourself as an official CeloHT representative without
            authorization
          </li>
          <li>
            Using the &ldquo;CeloHT&rdquo; name or logo in a misleading way
          </li>
          <li>
            Modifying our documentation to create a false impression of an
            investment promise
          </li>
        </ul>
      </Section>

      <Section title="No token, no investment">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          Nothing on this website offers, sells, or facilitates the purchase of
          any token, security, or investment product. CELO and USDm are existing
          Celo ecosystem assets; CeloHT doesn&rsquo;t issue or control either.
        </p>
      </Section>

      <Section title="No warranty">
        <p className="max-w-3xl text-ink-soft dark:text-parchment-100/75">
          This website and its content are provided &ldquo;as is,&rdquo; without
          warranty of any kind, to the extent permitted by applicable law.
        </p>
      </Section>
    </>
  );
}
