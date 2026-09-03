import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "CeloHT's accessibility commitment and current status against WCAG 2.1 AA.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Accessibility" }]} />
      <PageHero
        eyebrow="Accessibility Statement"
        title="Built to be usable by everyone"
        lead="This site targets WCAG 2.1 AA. Here's specifically what that means in this codebase."
      />

      <Section title="What we've implemented">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>A skip-to-content link for keyboard and screen reader users</li>
          <li>
            Semantic HTML - nav, main, section, and headings that increment
            logically
          </li>
          <li>
            A visible focus outline on every interactive element, not just
            default browser styling
          </li>
          <li>
            Full keyboard operability, including the search dialog and mobile
            menu
          </li>
          <li>
            Color contrast checked against WCAG AA ratios for every
            text/background pairing in our palette
          </li>
          <li>
            <code>prefers-reduced-motion</code> respected globally, including in
            the animated hero section
          </li>
          <li>ARIA labels on icon-only buttons, including the mobile menu</li>
        </ul>
      </Section>

      <Section title="Known gaps">
        <p className="max-w-2xl text-sm text-ink-soft dark:text-parchment-100/70">
          Automated accessibility auditing (e.g. axe-core in CI) is not yet
          wired into our pipeline. We track this point in the site&apos;s
          technical roadmap.
        </p>
      </Section>

      <Section title="Reporting an issue">
        <p className="max-w-2xl text-sm text-ink-soft dark:text-parchment-100/70">
          Have you encountered an accessibility barrier? Contact us through the{" "}
          <Link href="/support" className="underline underline-offset-2">
            Support
          </Link>{" "}
          page.
        </p>
      </Section>
    </>
  );
}
