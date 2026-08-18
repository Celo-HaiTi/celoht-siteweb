import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { GITHUB_ORG_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Official CeloHT contact channels — general questions, partnerships, press, security, and conduct.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { purpose: "General questions", contact: "hello@celoht.com" },
  { purpose: "Partnerships and investors", contact: "partnerships@celoht.com" },
  { purpose: "Media and press", contact: "press@celoht.com" },
  { purpose: "Security reports (private)", contact: "security@celoht.com" },
  { purpose: "Community conduct", contact: "conduct@celoht.com" },
];

const social = [
  { label: "Website", href: "https://celoht.com" },
  { label: "Medium", href: "https://medium.com/@celoht3" },
  { label: "X / Twitter", href: "https://twitter.com/CeloHtOfficial" },
  { label: "GitHub", href: GITHUB_ORG_URL },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Real channels, clearly labeled"
        lead="CeloHT will never ask for your seed phrase, private key, or Valora password, under any circumstance. If someone contacts you claiming to represent CeloHT and asks for that information, it's a phishing attempt."
      />

      <Section eyebrow="Official channels" title="Reach the right team">
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

      <Section eyebrow="Elsewhere" title="Social and platforms">
        <ul className="flex flex-wrap gap-3">
          {social.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex items-center rounded-full border border-navy-700/20 px-4 py-2 text-sm hover:bg-navy-700/10 dark:border-parchment-100/20 dark:hover:bg-parchment-100/10"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Prefer public discussion?" title="">
        <p className="max-w-2xl text-sm text-ink-soft dark:text-parchment-100/70">
          For public discussion, use{" "}
          <a
            href="https://github.com/celo-ht/celoht/discussions"
            className="underline underline-offset-2"
          >
            GitHub Discussions
          </a>{" "}
          instead of private email when possible — it helps other people with the same question.
        </p>
      </Section>
    </>
  );
}
