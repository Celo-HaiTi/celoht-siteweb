import type { Metadata } from "next";
import Link from "next/link";
import { DocumentationArticle } from "@/components/DocumentationArticle";

export const metadata: Metadata = {
  title: "Developer Guide",
  description:
    "A practical CeloHT developer guide covering architecture, validation, security, and contribution paths.",
  alternates: { canonical: "/developers/guide" },
};

export default function DeveloperGuidePage() {
  return (
    <DocumentationArticle
      eyebrow="DApp technical documentation"
      title="Developer Guide"
      lead="Start with the public explanation, then move through architecture, code quality, security, and contribution standards."
      sections={[
        {
          title: "Understand the layers",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Read the{" "}
              <Link
                href="/technology/architecture"
                className="font-semibold text-gold-300 hover:text-gold-500"
              >
                architecture
              </Link>{" "}
              first, then the{" "}
              <Link
                href="/dapp/services"
                className="font-semibold text-gold-300 hover:text-gold-500"
              >
                DApp services
              </Link>{" "}
              page and the{" "}
              <Link
                href="/technology/smart-contracts"
                className="font-semibold text-gold-300 hover:text-gold-500"
              >
                smart-contract overview
              </Link>
              . This sequence keeps implementation details connected to the user
              and governance context.
            </p>
          ),
        },
        {
          title: "Validate every change",
          children: (
            <pre className="overflow-x-auto rounded-xl bg-navy-900 p-4 text-sm text-parchment-100">
              <code>{`npm ci
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e`}</code>
            </pre>
          ),
        },
        {
          title: "Contribute with context",
          children: (
            <p className="max-w-3xl text-ink-soft">
              Changes should preserve the project&apos;s no-token policy,
              security guidance, accessibility standards, and distinction
              between confirmed work and future plans. Read the{" "}
              <Link
                href="/contributing"
                className="font-semibold text-gold-300 hover:text-gold-500"
              >
                contribution guide
              </Link>{" "}
              before opening a change.
            </p>
          ),
        },
      ]}
      previous={{ label: "Deployment", href: "/dapp/deployment" }}
      next={{ label: "Security policy", href: "/security" }}
    />
  );
}
