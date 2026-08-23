# Architecture

## Overview

A Next.js App Router site, fully static where possible (every page is
prerendered at build time  -  no server-side data fetching, no database).

```text
src/
├── app/                     # One folder per route
│   ├── layout.tsx           # Root layout: theme, header, footer, SEO defaults
│   ├── page.tsx             # Home
│   ├── globals.css          # Design tokens (@theme block)
│   ├── sitemap.ts / robots.ts
│   ├── not-found.tsx
│   └── <30 route folders>/page.tsx
│   └── blog/
│       ├── page.tsx          # Index (reads src/lib/blog.ts)
│       └── <slug>/page.mdx    # Each post, real MDX content
├── components/
│   ├── Header.tsx             # Nav, search, theme toggle, Launch dApp button
│   ├── Footer.tsx               # Full nav + Launch dApp CTA
│   ├── Hero.tsx                   # CSS-animated homepage hero
│   ├── LaunchDappButton.tsx         # Single source of truth for the dApp link
│   ├── ThemeProvider.tsx              # Light/dark state (useSyncExternalStore)
│   ├── SearchDialog.tsx                # <dialog>-based site search
│   └── ...shared page building blocks (PageHero, Section, Breadcrumbs, etc.)
└── lib/
    ├── constants.ts          # DAPP_URL, SITE_URL, GitHub repo URLs
    ├── nav.ts                 # Nav + search index (single source of truth)
    ├── blog.ts                  # Blog post metadata index
    └── utils.ts                   # cn() class-name helper
```

## Design System

Shared across all three CeloHT repositories (flagship docs, this website,
the dApp): navy/gold/forest/parchment palette, defined once in
`globals.css`'s Tailwind v4 `@theme` block. System font stacks are used
instead of a remote webfont service, keeping the CSP simple and removing
an external network dependency from the build.

## Client and Server Components

The Hero uses CSS animations and remains a Server Component, keeping its
static content out of the client hydration path. Components that use React
hooks or browser APIs remain explicitly marked `"use client"`.

## The Launch dApp Button

`LaunchDappButton.tsx` is the single component used in the header, hero,
footer, and mobile menu. It reads `NEXT_PUBLIC_DAPP_URL` (defaulting to
`https://app.celoht.com`) from `src/lib/constants.ts`  -  changing the
dApp's domain means changing one constant, not four components.

## MDX Blog

Configured via `@next/mdx` in `next.config.ts` and `mdx-components.tsx`
(required by Next's App Router MDX support). Post metadata lives in
`src/lib/blog.ts`; post content lives in `src/app/blog/<slug>/page.mdx`.
The `wrapper` export in `mdx-components.tsx` constrains reading width
without needing a separate route-group layout.

## PWA Support

- `public/manifest.json`  -  installability metadata
- `public/sw.js`  -  a minimal, hand-written service worker (cache-first
  for a small static-asset allowlist, network-first with cache fallback
  for page navigations)
- `ServiceWorkerRegistration.tsx`  -  registers the worker in production
  builds only, so it never interferes with local development

## Security

See `next.config.ts` for the Content Security Policy and standard
security headers, and [`SECURITY.md`](SECURITY.md) for the reasoning.
