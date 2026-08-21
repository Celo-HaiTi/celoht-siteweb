import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Cookies",
  description: "CeloHT's cookie policy  -  we use no tracking cookies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Cookies" }]} />
      <PageHero
        eyebrow="Cookies"
        title="We don't use tracking cookies"
        lead="This page exists to say plainly what we do and don't store in your browser."
      />

      <Section title="What we store">
        <div className="max-w-2xl space-y-4 text-sm text-ink-soft dark:text-parchment-100/70">
          <p>
            <strong className="text-ink dark:text-parchment-100">Visual identity</strong>  -  CeloHT
            uses one permanent navy and gold visual system; no theme preference is stored
            between visits. Never transmitted to a server.
          </p>
          <p>
            <strong className="text-ink dark:text-parchment-100">Service worker cache</strong>  -  a
            small set of static assets (logo, icons) cached locally for offline resilience, per our{" "}
            <Link href="/accessibility" className="underline underline-offset-2">
              Progressive Web App support
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section title="What we don't use">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>No third-party analytics scripts</li>
          <li>No advertising cookies or pixels</li>
          <li>No cross-site tracking of any kind</li>
        </ul>
      </Section>

      <Section title="Third parties">
        <p className="max-w-2xl text-sm text-ink-soft dark:text-parchment-100/70">
          Links to X, Medium, and the CeloHT DApp lead to sites with their own cookie practices,
          outside our control.
        </p>
      </Section>
    </>
  );
}
