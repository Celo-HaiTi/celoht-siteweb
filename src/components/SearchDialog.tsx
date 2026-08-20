"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchIndex } from "@/lib/nav";

export function SearchDialog() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 8);
    return searchIndex
      .filter(
        (item) =>
          item.label.toLowerCase().includes(q) ||
          (item.description ?? "").toLowerCase().includes(q),
      )
      .sort((left, right) => {
        const leftMatchesLabel = left.label.toLowerCase().includes(q);
        const rightMatchesLabel = right.label.toLowerCase().includes(q);
        return Number(rightMatchesLabel) - Number(leftMatchesLabel);
      })
      .slice(0, 8);
  }, [query]);

  const open = () => {
    dialogRef.current?.showModal();
    setQuery("");
    requestAnimationFrame(() => inputRef.current?.focus());
  };
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const modifierPressed = isMac ? event.metaKey : event.ctrlKey;
      if (modifierPressed && event.key.toLowerCase() === "k") {
        event.preventDefault();
        open();
      }
    }
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="hidden items-center gap-2 rounded-full border border-navy-700/20 px-4 py-2 text-sm text-ink-soft transition-colors hover:bg-navy-700/10 sm:inline-flex dark:border-parchment-100/20 dark:text-parchment-100/80 dark:hover:bg-parchment-100/10"
      >
        <Search size={16} aria-hidden="true" />
        Search
        <kbd className="ml-2 rounded border border-current/30 px-1.5 py-0.5 font-mono text-[10px]">
          ⌘K
        </kbd>
      </button>
      <button
        type="button"
        onClick={open}
        aria-label="Search the site"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-700/20 text-ink transition-colors hover:bg-navy-700/10 sm:hidden dark:border-parchment-100/20 dark:text-parchment-100 dark:hover:bg-parchment-100/10"
      >
        <Search size={18} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Search CeloHT"
        className="w-full max-w-lg rounded-xl border border-navy-700/20 bg-parchment-50 p-0 text-ink shadow-2xl backdrop:bg-navy-950/60 dark:border-parchment-100/10 dark:bg-navy-900 dark:text-parchment-100"
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className="flex items-center gap-3 border-b border-navy-700/10 px-4 py-3 dark:border-parchment-100/10">
          <Search size={18} aria-hidden="true" className="shrink-0 opacity-60" />
          <input
            ref={inputRef}
            type="text"
            aria-label="Search pages"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-ink-soft/60"
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close search"
            className="rounded border border-current/30 p-1 text-ink-soft"
          >
            <X size={12} aria-hidden="true" />
          </button>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-ink-soft">
              No pages match &ldquo;{query}&rdquo;.
            </li>
          )}
          {results.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  close();
                  router.push(item.href);
                }}
                className="block rounded-lg px-3 py-2 hover:bg-gold-500/10 focus:bg-gold-500/10"
              >
                <span className="block text-sm font-medium">{item.label}</span>
                {item.description && (
                  <span className="block text-xs text-ink-soft">{item.description}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}
