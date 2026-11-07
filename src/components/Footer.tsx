import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Github,
  Globe,
  Instagram,
  Music2,
} from "lucide-react";
import {
  GITHUB_ORG_URL,
  INSTAGRAM_URL,
  MEDIUM_URL,
  TIKTOK_URL,
  WEBSITE_URL,
  assetPath,
} from "@/lib/constants";
import { footerNav } from "@/lib/nav";
import { NewsletterForm } from "@/components/NewsletterForm";

const socialLinks = [
  { label: "Website", href: WEBSITE_URL, icon: Globe },
  { label: "GitHub", href: GITHUB_ORG_URL, icon: Github },
  { label: "Instagram", href: INSTAGRAM_URL, icon: Instagram },
  { label: "TikTok", href: TIKTOK_URL, icon: Music2 },
  { label: "Medium", href: MEDIUM_URL, icon: BookOpen },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-navy-700/10 bg-navy-950 text-parchment-100">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-parchment-100/10 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.12),_transparent_35%),linear-gradient(180deg,rgba(12,19,33,0.96),rgba(8,16,28,0.98))] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_2.8fr] lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <Image
                  src={assetPath("/celoht-logo.png")}
                  alt="CeloHT logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-xl ring-1 ring-gold-500/30"
                />
                <span className="font-display text-2xl font-semibold tracking-tight text-parchment-100">
                  CeloHT
                </span>
              </div>
              <p className="max-w-md text-sm leading-6 text-parchment-100/70">
                CeloHT is a community-driven, open-source initiative rooted in Haiti,
                building practical digital access, education, and local infrastructure within the Celo ecosystem.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {footerNav.map((group) => (
                <div key={group.heading}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                    {group.heading}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-parchment-100/70 transition-colors duration-200 hover:text-parchment-100"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                  Connect With Us
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-parchment-100/10 bg-navy-900/80 text-parchment-100/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400/50 hover:bg-gold-500/10 hover:text-gold-300"
                    >
                      <Icon size={16} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[24px] border border-parchment-100/10 bg-navy-900/70 p-5 sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                Stay Connected with CeloHT
              </p>
              <p className="mt-2 max-w-md text-sm leading-6 text-parchment-100/65">
                Get updates on our initiatives, educational resources, community activities,
                and ecosystem developments.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-10 border-t border-parchment-100/10 pt-6 text-sm text-parchment-100/60">
          <p className="text-center sm:text-left">© 2026 CeloHT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
