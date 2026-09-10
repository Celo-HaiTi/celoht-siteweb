# Development Guide

## Prerequisites

- Node.js 20+
- npm

## Setup

```bash
git clone https://github.com/Celo-HaiTi/celoht-siteweb.git
cd celoht-siteweb
npm install
npm run dev
```

## Environment Variables

The repository uses a public-only configuration model for this website. No secrets are required.

The supported public variables are documented in `.env.example`:

| Variable               | Required?                                 | Purpose                             |
| ---------------------- | ----------------------------------------- | ----------------------------------- |
| `NEXT_PUBLIC_DAPP_URL` | No - defaults to `https://app.celoht.com` | Where the Launch dApp button points |
| `NEXT_PUBLIC_SITE_URL` | No - defaults to `https://celoht.com`     | Canonical site URL for metadata      |
| `NEXT_PUBLIC_USE_PROJECT_BASE_PATH` | No - defaults to `false` | Enables GitHub Pages project-path hosting in non-default scenarios |

No private credentials are required to build or run this site.

## Available Scripts

| Command                           | Purpose                       |
| --------------------------------- | ----------------------------- |
| `npm run dev`                     | Local dev server              |
| `npm run build`                   | Production build              |
| `npm run start`                   | Serve the production build    |
| `npm run lint`                    | ESLint                        |
| `npm run typecheck`               | `tsc --noEmit`                |
| `npm run format` / `format:check` | Prettier                      |
| `npm run test`                    | Unit tests (Vitest)           |
| `npm run test:e2e`                | End-to-end tests (Playwright) |

## Working with the Design System

Colors, fonts, and other tokens are defined once in
`src/app/globals.css` under the `@theme` block. Don't hardcode hex values
in components; use the generated Tailwind utility classes (`bg-navy-950`,
`text-gold-500`, `font-display`, etc.).

## Adding a Page

1. Create `src/app/<route>/page.tsx`.
2. Export a `metadata` object (title + description at minimum).
3. Use `Breadcrumbs`, `PageHero`, and `Section` for structural consistency.
4. Add the route to `src/lib/nav.ts` (`searchIndex`, and `primaryNav` or
   `footerNav` if it belongs in navigation).
5. Confirm it appears correctly in both light and dark mode.

## Adding a Blog Post

1. Create `src/app/blog/<slug>/page.mdx` with an `export const metadata`
   block and Markdown content.
2. Add an entry to `src/lib/blog.ts`.

## Troubleshooting

**Build fails with a Radix/context-related error after adding a
component.** Check that it has `"use client"` if it uses any Radix
primitive or React hook - see
[`../ARCHITECTURE.md`](../ARCHITECTURE.md#why-the-hero-uses-use-client-and-everything-else-defaults-to-server).
