<div align="center">
  <img width="998" height="1000" alt="celoht-logo" src="https://github.com/user-attachments/assets/7c1df832-0218-40b8-97ca-5203e78f5970" />

# CeloHT Website

**The official public website for CeloHT** a community-driven,
open-source initiative for financial inclusion, education, agent
networks, and reforestation on the Celo ecosystem.

[![CI](https://github.com/celo-ht/website/actions/workflows/ci.yml/badge.svg)](.github/workflows/ci.yml)
[![CodeQL](https://github.com/celo-ht/website/actions/workflows/codeql.yml/badge.svg)](.github/workflows/codeql.yml)
[![License](https://img.shields.io/badge/license-Apache%202.0-0B1120.svg)](LICENSE)

[Live site](https://celoht.com) · [Launch dApp](https://app.celoht.com) · [Flagship repository](https://github.com/celo-ht/celoht) · [dApp repository](https://github.com/celo-ht/dapp)

</div>

---

## What this is

The public information platform for CeloHT 33 pages covering our
mission, three pillars (Education, Agent Network, Reforestation),
governance, transparency, developer docs, a blog, and every standard
legal/community page a mature open-source project needs, with a
prominent **Launch dApp** entry point in the header, hero, and footer.

CeloHT is a community-driven, open-source initiative built on the Celo
ecosystem. It is **not** a blockchain, a cryptocurrency, a token, an ICO,
or an investment platform see [`/about`](https://celoht.com/about) and
[`docs/no-token-policy.md`](docs/no-token-policy.md).

## Tech stack

- [Next.js](https://nextjs.org) (App Router, Turbopack build)
- [TypeScript](https://www.typescriptlang.org) (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) (Framer Motion) for the animated hero
- [MDX](https://mdxjs.com) for the blog
- [Vitest](https://vitest.dev) + Testing Library for unit tests
- [Playwright](https://playwright.dev) for end-to-end tests
- A minimal, hand-written service worker for PWA support

## Getting started

```bash
git clone https://github.com/celo-ht/website.git
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

See [`docs/DEVELOPMENT.md`](docs/development.md) for the full local
development guide.

## Available scripts

| Script              | What it does                                                                |
| ------------------- | --------------------------------------------------------------------------- |
| `npm run dev`       | Start the local development server                                          |
| `npm run build`     | Production build                                                            |
| `npm run start`     | Serve the production build locally                                          |
| `npm run lint`      | Run ESLint                                                                  |
| `npm run typecheck` | Run the TypeScript compiler in check-only mode                              |
| `npm run test`      | Run unit tests (Vitest)                                                     |
| `npm run test:e2e`  | Run end-to-end tests (Playwright requires `npx playwright install` first) |
| `npm run format`    | Format the codebase with Prettier                                           |

## Verified before every release

- ✅ `npm install` completes cleanly
- ✅ `npm run typecheck` - zero errors
- ✅ `npm run lint` - zero errors
- ✅ `npm run build` - all 38 routes generated successfully
- ✅ `npm run test` - unit test suite passing

See [`docs/TESTING.md`](docs/testing.md) for exactly what's automatically
verified versus what requires a full browser environment (e.g. Lighthouse
scores, Playwright e2e execution) that this repository's CI is configured
to run but that can't be executed in every environment.

## Repository structure

See [`ARCHITECTURE.md`](ARCHITECTURE.md).

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Security

Found a vulnerability? Don't open a public issue  see
[`SECURITY.md`](SECURITY.md).

## License

Code in this repository is available under the
[Apache 2.0 License](LICENSE).
