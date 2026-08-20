import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

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

      <Section eyebrow="Demandes et incidents" title="Un parcours clair pour chaque besoin">
        <ul className="max-w-2xl space-y-2 text-sm text-ink-soft dark:text-parchment-100/70">
          <li>
            Problème sur le site : décrivez-le à <a href="mailto:hello@celoht.com" className="underline underline-offset-2">hello@celoht.com</a>.
          </li>
          <li>
            Problème lié à la DApp : indiquez l&apos;écran concerné, le navigateur et les étapes suivies à la même adresse.
          </li>
          <li>
            Question sur la documentation ou la gouvernance : consultez la <a href="/faq" className="underline underline-offset-2">FAQ</a> ou écrivez à hello@celoht.com.
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
