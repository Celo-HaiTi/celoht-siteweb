"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/lib/nav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchDialog } from "@/components/SearchDialog";
import { LaunchDappButton } from "@/components/LaunchDappButton";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-navy-700/10 bg-parchment/90 backdrop-blur dark:border-parchment-100/10 dark:bg-navy-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 rounded-md">
          <Image src="/celoht-logo.png" alt="CeloHT" width={32} height={32} priority />
          <span className="font-display text-xl font-semibold tracking-tight">CeloHT</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3 py-2 text-sm transition-colors ${
                      active
                        ? "bg-gold-500/15 text-gold-800 dark:text-gold-300"
                        : "text-ink-soft hover:bg-navy-700/5 hover:text-ink dark:text-parchment-100/70 dark:hover:bg-parchment-100/5 dark:hover:text-parchment-100"
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
          <SearchDialog />
          <ThemeToggle />
          <LaunchDappButton size="sm" className="hidden md:inline-flex" />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-700/20 lg:hidden dark:border-parchment-100/20"
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
          className="border-t border-navy-700/10 px-4 pb-4 lg:hidden dark:border-parchment-100/10"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-ink-soft hover:bg-navy-700/5 hover:text-ink dark:text-parchment-100/70 dark:hover:bg-parchment-100/5 dark:hover:text-parchment-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <LaunchDappButton size="md" className="w-full justify-center" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
