<div align="center">
  <img width="220" height="220" alt="CeloHT logo" src="https://raw.githubusercontent.com/Celo-HaiTi/celoht-siteweb/main/public/celoht-logo.png" />

# CeloHT Website

The official public website for CeloHT: a community-driven, open-source
initiative for education, agent networks, and reforestation on the Celo
ecosystem.

[![CI](https://github.com/Celo-HaiTi/celoht-siteweb/actions/workflows/ci.yml/badge.svg)](.github/workflows/ci.yml)
[![Pages](https://github.com/Celo-HaiTi/celoht-siteweb/actions/workflows/deploy-pages.yml/badge.svg)](.github/workflows/deploy-pages.yml)
[![CodeQL](https://img.shields.io/badge/CodeQL-Analyzed-181717?logo=github&logoColor=white)](https://github.com/Celo-HaiTi/celoht-siteweb/security/code-scanning)
[![Next.js](https://img.shields.io/badge/Next.js-16.x-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Apache%202.0-0B1120.svg)](LICENSE)
[![Static Export](https://img.shields.io/badge/Build-Static%20Export-2EA44F?logo=githubactions&logoColor=white)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-FF6B35?logo=progressivewebapps&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

[Live site](https://celoht.com) · [Launch DApp](https://app.celoht.com) · [Flagship repository](https://github.com/Celo-HaiTi/CeloHT) · [DApp repository](https://github.com/Celo-HaiTi/celoht-dapp)

</div>

---

## Overview

This repository contains the public-facing website for CeloHT. The site is
built with Next.js App Router, statically exported, and configured for the
custom root domain at https://celoht.com.

The homepage and navigation are intentionally organized around the three core
pillars:

- Education
- Agent Network
- Reforestation

CeloHT is a community-driven, open-source initiative on the Celo ecosystem.
It is not a blockchain, token project, ICO, or investment platform.

## Why this project exists

The site presents CeloHT as a mission-led public platform for:

- relevant education and ecosystem onboarding
- practical agent-network infrastructure
- community-driven reforestation and climate-aligned action
- transparent governance and public information

The website also promotes access to the CeloHT dApp while keeping the public
site distinct from product functionality and live network data.

## Key features

- premium, static marketing website with strong product narrative
- custom-domain production setup for https://celoht.com
- static export compatible with GitHub Pages and other static hosts
- content-driven pages for mission, governance, docs, blog, and resources
- live market information preserved for CELO and USDm where required
- clean metadata, sitemap, robots, manifest, and root-safe asset handling
- PWA and service worker support with conservative caching behavior

## Tech stack

- [Next.js 16](https://nextjs.org)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [MDX](https://mdxjs.com)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev)

## Getting started

```bash
git clone https://github.com/Celo-HaiTi/celoht-siteweb.git
cd celoht-siteweb
npm install
npm run dev
```

Then open http://localhost:3000.

For local development guidance, see [docs/development.md](docs/development.md).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run format
```

## Deployment

### Production domain

This project is configured for the root domain:

- https://celoht.com

The site is intentionally built without project-path assumptions in production.
If a project-hosted GitHub Pages path is ever needed for a non-production test,
it must be explicitly enabled via the environment flag documented in the app
configuration instead of being the default behavior.

### GitHub Pages

Every push to `main` runs the deployment workflow in
[.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).
The workflow builds the static export and publishes it for the custom domain.

### Static hosting and previews

Run:

```bash
npm run build
```

Then serve the generated `out/` directory with any static host or local preview
tool. Local development remains `npm run dev`.

## Project structure

- `src/app` — pages, metadata, routing, and site-level layouts
- `src/components` — reusable UI components
- `src/lib` — shared logic, constants, and data helpers
- `public` — static assets, manifest, service worker, and custom-domain files
- `docs` — project documentation
- `scripts` — validation and build helper scripts

See [ARCHITECTURE.md](ARCHITECTURE.md) for a deeper breakdown.

## Testing and validation

The project includes unit and end-to-end checks for the site behavior:

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
```

Details for the validation workflow are documented in
[docs/testing.md](docs/testing.md).

## Contributing

If you want to help improve content, documentation, or the site itself:

1. create a feature branch
2. install dependencies with `npm install`
3. validate locally with the relevant lint/test commands
4. open a pull request with a clear summary of the change

## Security

If you discover a security issue, do not open a public issue. Follow the
process in [SECURITY.md](SECURITY.md).

## License

This project is licensed under the [Apache 2.0 License](LICENSE).
