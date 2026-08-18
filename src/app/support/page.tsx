import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { GITHUB_FLAGSHIP_URL, GITHUB_WEBSITE_URL, GITHUB_DAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support",
  description: "How to get help with CeloHT  -  general questions, bug reports, and security issues.",
  alternates: { canonical: "/support" },
};

const channels = [
  { purpose: "General questions", contact: "hello@celoht.com" },
  { purpose: "Partnerships and investors", contact: "partnerships@celoht.com" },
  { purpose: "Media and press", contact: "press@celoht.com" },
  { purpose: "Security reports (private)", contact: "security@celoht.com" },
];

export default function SupportPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Support" }]} />
      <PageHero
        eyebrow="Support"
        title="Get help"
        lead="Where to go depends on what you need  -  here's the fastest path for each."
      />

      <Section eyebrow="Bug reports" title="Repository issues">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            Website bug:{" "}
            <a href={`${GITHUB_WEBSITE_URL}/issues`} className="underline underline-offset-2">
              open an issue
            </a>{" "}
            on the website repository
          </li>
          <li>
            dApp or contract bug:{" "}
            <a href={`${GITHUB_DAPP_URL}/issues`} className="underline underline-offset-2">
              open an issue
            </a>{" "}
            on the dApp repository
          </li>
          <li>
            Documentation or governance question:{" "}
            <a href={`${GITHUB_FLAGSHIP_URL}/discussions`} className="underline underline-offset-2">
              start a discussion
            </a>{" "}
            on the flagship repository
          </li>
        </ul>
      </Section>

      <Section eyebrow="Direct contact" title="Email channels">
        <div className="overflow-hidden rounded-2xl border border-navy-700/15 dark:border-parchment-100/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy-700/5 dark:bg-parchment-100/5">
              <tr>
                <th scope="col" className="px-5 py-3 font-medium">
                  Purpose
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody>
              {channels.map((channel) => (
                <tr
                  key={channel.purpose}
                  className="border-t border-navy-700/10 dark:border-parchment-100/10"
                >
                  <td className="px-5 py-3 text-ink-soft dark:text-parchment-100/70">
                    {channel.purpose}
                  </td>
                  <td className="px-5 py-3">
                    <a href={`mailto:${channel.contact}`} className="underline underline-offset-2">
                      {channel.contact}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Response time" title="">
        <p className="max-w-2xl text-sm text-ink-soft dark:text-parchment-100/70">
          We aim for 3–5 business days on general questions and 48 hours on security reports. See{" "}
            <Link href="/security" className="underline underline-offset-2">
            Security
            </Link>{" "}
          for the full vulnerability disclosure policy.
        </p>
      </Section>
    </>
  );
}
