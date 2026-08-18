import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Longer-form posts from the CeloHT team on our mission, technology, and programs.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <PageHero
        eyebrow="Blog"
        title="Longer-form thinking from the CeloHT team"
        lead="For quick updates, see News. This is where we go deeper on why we make the choices we make."
      />

      <Section>
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-2xl border border-navy-700/15 p-6 transition-colors hover:border-gold-500/50 dark:border-parchment-100/10"
            >
              <time className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-parchment-100/50">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2 font-display text-2xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-ink-soft dark:text-parchment-100/70">
                {post.excerpt}
              </p>
              <p className="mt-3 text-sm font-medium text-gold-800 dark:text-gold-300">
                Read more →
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
