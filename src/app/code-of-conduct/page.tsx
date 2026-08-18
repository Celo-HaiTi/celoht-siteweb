import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { GITHUB_WEBSITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "The community standards that apply across every CeloHT space.",
  alternates: { canonical: "/code-of-conduct" },
};

export default function CodeOfConductPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Code of Conduct" }]} />
      <PageHero
        eyebrow="Code of Conduct"
        title="A harassment-free experience for everyone"
        lead="This applies across every CeloHT space  -  GitHub repositories, community sessions, and social channels."
      />

      <Section title="The short version">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>Be respectful of differing opinions, viewpoints, and experiences</li>
          <li>Give and gracefully accept constructive feedback</li>
          <li>Focus on what&rsquo;s best for the community as a whole</li>
          <li>
            No harassment, personal attacks, or sexualized language or imagery, in any CeloHT space
          </li>
        </ul>
      </Section>

      <Section title="Enforcement">
        <p className="max-w-2xl text-sm text-ink-soft dark:text-parchment-100/70">
          Reports go to{" "}
          <a href="mailto:conduct@celoht.com" className="underline underline-offset-2">
            conduct@celoht.com
          </a>{" "}
          and are reviewed promptly and fairly. The full policy, including our enforcement
          guideline, is maintained as the canonical <code>CODE_OF_CONDUCT.md</code> in each
          repository  -  see the{" "}
          <a
            href={`${GITHUB_WEBSITE_URL}/blob/main/CODE_OF_CONDUCT.md`}
            className="underline underline-offset-2"
          >
            website repository&rsquo;s copy
          </a>{" "}
          for the complete text.
        </p>
      </Section>
    </>
  );
}
