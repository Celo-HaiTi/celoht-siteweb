import type { Metadata } from "next";
import { DocumentationArticle } from "@/components/DocumentationArticle";

export const metadata: Metadata = {
  title: "Project Vision",
  description:
    "The long-term project vision connecting financial access, education, community trust, and environmental care.",
  alternates: { canonical: "/project-vision" },
};

export default function ProjectVisionPage() {
  return (
    <DocumentationArticle
      eyebrow="Governance and legal"
      title="Project Vision"
      lead="CeloHT aims for a Haiti, and eventually a wider Caribbean, where financial access is not determined by distance from a bank branch and economic progress does not ignore the land communities depend on."
      sections={[
        {
          title: "A connected vision",
          children: (
            <p className="max-w-3xl text-ink-soft">
              The vision is not only about putting a wallet on a phone. It
              connects understanding, trusted local support, practical payments,
              entrepreneurship, community governance, and environmental
              restoration.
            </p>
          ),
        },
        {
          title: "What progress would look like",
          children: (
            <ul className="max-w-3xl list-disc space-y-3 pl-6 text-ink-soft">
              <li>
                More people completing financial and Web3 education in Haitian
                Creole.
              </li>
              <li>
                A capable community agent network operating where the model is
                validated.
              </li>
              <li>
                Reforestation work that is measured and reported rather than
                presented as an unverified claim.
              </li>
              <li>
                A governance model that becomes more decentralized as the
                community and operating evidence mature.
              </li>
            </ul>
          ),
        },
        {
          title: "A plan, not a promise",
          children: (
            <p className="max-w-3xl text-ink-soft">
              The roadmap is phased because later expansion depends on earlier
              validation. CeloHT publishes ambition separately from completed
              results so visitors can understand both the direction and the
              current limits.
            </p>
          ),
        },
      ]}
      previous={{ label: "History", href: "/history" }}
      next={{ label: "Architecture", href: "/technology/architecture" }}
    />
  );
}
