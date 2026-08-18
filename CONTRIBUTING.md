# Contributing to the CeloHT Website

Thanks for considering a contribution.

## Code of Conduct

Everyone participating in this project is expected to follow
[`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Local Setup

```bash
git clone https://github.com/celo-ht/website.git
cd website
npm install
npm run dev
```

## Before Opening a Pull Request

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
npm run test
```

All five must pass with zero errors before requesting review.

## Coding Standards

- **Server Components by default** — only add `"use client"` when a
  component genuinely needs interactivity (state, effects, event
  handlers, or a browser API). Forgetting this on a component that uses a
  React context internally (e.g. anything built on a Radix primitive)
  causes a hard build failure — see [`ARCHITECTURE.md`](ARCHITECTURE.md).
- **No placeholder content.** Every page must contain real, accurate copy.
- **Never describe CeloHT as a blockchain, cryptocurrency, token, ICO, or
  investment platform**, and never imply CeloHT owns or operates Valora.
- **The Launch dApp button must stay reachable from the header, hero, and
  footer** on every page — don't remove it while restructuring a layout.
- New pages: use the shared `PageHero`, `Section`, `Breadcrumbs`, and
  `CTASection` components, and register the route in `src/lib/nav.ts`.
- New blog posts: add an `.mdx` file under `src/app/blog/<slug>/page.mdx`
  and an entry in `src/lib/blog.ts`.

## Testing

- **Unit tests** (Vitest + Testing Library): add a `*.test.ts(x)` file
  next to the code it covers, or under a `__tests__/` folder.
- **End-to-end tests** (Playwright): add a `*.spec.ts` file under `e2e/`.
  Run `npx playwright install` once before `npm run test:e2e` locally.

See [`docs/testing.md`](docs/testing.md) for the full testing strategy.

## Commit Style

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat(blog): add post on reforestation as infrastructure
fix(header): correct mobile menu focus trap
docs: update deployment guide
```

## Questions?

Open a [Discussion](https://github.com/celo-ht/celoht/discussions) on the
flagship repository, or see [`SUPPORT.md`](SUPPORT.md).
