import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

type ArticleSection = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

type Props = {
  title: string;
  eyebrow: string;
  lead: string;
  sections: ArticleSection[];
  previous?: { label: string; href: string };
  next?: { label: string; href: string };
};

export function DocumentationArticle({
  title,
  eyebrow,
  lead,
  sections,
  previous,
  next,
}: Props) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Documentation", href: "/documentation" },
          { label: title },
        ]}
      />
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      {sections.map((section) => (
        <Section
          key={section.title}
          eyebrow={section.eyebrow}
          title={section.title}
        >
          {section.children}
        </Section>
      ))}
      <nav
        aria-label="Documentation navigation"
        className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-parchment-100/10 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <Link
          href={previous?.href ?? "/documentation"}
          className="text-sm font-semibold text-gold-300 hover:text-gold-500"
        >
          ← {previous?.label ?? "Documentation"}
        </Link>
        <Link
          href="/"
          className="text-sm text-parchment-100/70 hover:text-parchment-50"
        >
          Home
        </Link>
        <Link
          href={next?.href ?? "/documentation"}
          className="text-sm font-semibold text-gold-300 hover:text-gold-500"
        >
          {next?.label ?? "Documentation"} →
        </Link>
      </nav>
    </>
  );
}
