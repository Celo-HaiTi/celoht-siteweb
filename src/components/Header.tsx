"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { primaryNav } from "@/lib/nav";
import { DAPP_URL, assetPath } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-parchment-100/15 bg-navy-950 text-parchment-50 shadow-[0_8px_30px_rgba(8,18,37,0.12)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2 rounded-md">
          <Image
            src={assetPath("/celoht-logo.png")}
            alt="CeloHT"
            width={38}
            height={38}
            className="rounded-lg"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-parchment-50 transition-colors group-hover:text-gold-300">CeloHT</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3 py-2 text-sm transition-colors ${
                      active
                        ? "bg-gold-500 text-navy-950"
                        : "text-parchment-100/75 hover:bg-navy-800 hover:text-parchment-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={DAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Open CeloHT dApp"
            className="group inline-flex items-center gap-1.5 rounded-full border border-gold-400 bg-gold-500 px-2.5 py-1.5 font-mono text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-navy-950 shadow-[0_0_0_1px_rgba(247,208,70,0.25),0_10px_24px_rgba(247,208,70,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-[0_0_0_1px_rgba(247,208,70,0.32),0_14px_30px_rgba(247,208,70,0.35)] motion-safe:animate-pulse sm:px-3 sm:py-2 sm:text-[0.65rem]"
          >
            Open CeloHT dApp
            <ArrowUpRight
              size={14}
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-parchment-100/25 text-parchment-50 transition-colors hover:border-gold-500 hover:text-gold-300 lg:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-parchment-100/15 bg-navy-950 px-4 pb-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm text-parchment-100/75 hover:bg-navy-800 hover:text-parchment-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
