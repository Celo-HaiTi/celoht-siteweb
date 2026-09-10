# Repository Audit

## Repository Role

This repository is the public CeloHT website. Its role is informational and marketing-facing: presenting the mission, education, agent network, reforestation, governance, transparency, legal, blog, and documentation content for the CeloHT ecosystem.

It does not own wallets, tokens, treasury operations, smart contracts, a backend, a database, an indexer, or privileged user actions. The live product experience is expected to be handled by the external dApp repository, while this site serves as the public-facing identity and documentation layer.

## Architecture

- Framework: Next.js App Router
- Language: TypeScript + React
- Build model: static export (`output: "export"`) for GitHub Pages and static hosts
- Routing: file-based App Router routes under `src/app/`
- Content: MDX blog posts under `src/app/blog/`
- Shared UI: reusable components under `src/components/`
- Shared logic: constants, navigation, and helpers under `src/lib/`
- Static assets: `public/` and `scripts/`
- Runtime behavior: browser-only client code for search, service worker registration, and live market data display
- Deployment: GitHub Actions workflows in `.github/workflows/`

## Existing Functionality

- Static public website for CeloHT mission, governance, education, reforestation, and resources
- Responsive layouts and accessibility pages
- MDX-driven blog content
- Search dialog and navigation structure
- PWA support through `public/manifest.json`, `public/sw.js`, and `ServiceWorkerRegistration.tsx`
- Live CELO and USDm market cards driven by external CoinGecko data via `src/lib/live-data.ts`
- SEO metadata, sitemap, robots, manifest, and static export support
- Brand asset validation during build (`scripts/validate-brand-assets.mjs`)
- CI coverage for lint, typecheck, unit tests, build, and Playwright E2E configuration

## Incomplete Functionality

- No `.env.example` file is present for public environment configuration
- No backend, database, or authenticated user flow exists in this repository
- No on-chain wallet integration, transaction flow, or balance handling is implemented here
- Live dApp availability and external repository health are not verified from this repository itself
- Full end-to-end browser execution is configured but not independently validated in this session

## Mock/Simulated Functionality

- The homepage product preview is visual content only. It does not expose live wallet, network, contract, transaction, or impact state.
- The live market cards show externally fetched market data for CELO and USDm; they are not on-chain wallet balances or verified impact records.
- Service worker registration is a progressive enhancement and is not a backend or deployment guarantee.

## Dependencies

- External dApp: `https://app.celoht.com`
- Landed public ecosystem references: Celo, CELO, USDm, Valora, MiniPay, WalletConnect (as informational ecosystem infrastructure)
- Public market data source: CoinGecko
- GitHub Pages deployment target for static hosting
- External repositories for broader CeloHT ecosystem content and governance references

## Security

- Security headers and CSP are configured in `next.config.ts`
- No private keys, secrets, tokens, or privileged credentials are present in the repository
- No authentication, authorization, or server-side privileged actions exist in the app scope
- Client-side code is limited to static rendering, browser-only UI behavior, and external public data fetching

Risks and observations:

- `LiveInfoBar` depends on a third-party public market API and should degrade gracefully when the API is unavailable
- External links and public content require normal editorial review before publication
- The repository does not validate or enforce wallet/network state, so any live blockchain functionality must remain in the external dApp repository

## Deployment

- Deployment workflow exists for GitHub Pages in `.github/workflows/deploy-pages.yml`
- CI workflow exists in `.github/workflows/ci.yml`
- Static export is configured via `next.config.ts`
- Production deployment is a static-site concern; no contract deployment, backend deployment, or database migration is performed here

## Documentation

- README, architecture, development, testing, security, and governance docs are present
- Documentation is generally consistent with the public website role
- Documentation gaps remain around explicit environment-variable samples and the boundary between website responsibilities and external dApp responsibilities

## Production Blockers

### P0 — Critical production blocker

- None identified for this repository’s actual scope.

### P1 — Important production issue

- Live dApp, wallet, contract, and impact claims must be verified in their authoritative repositories before being presented as current production facts.
- End-to-end browser verification should be confirmed in the target deployment environment, especially if the repository is being promoted beyond the static website role.

### P2 — Improvement

- Add a public `.env.example` to document any supported public environment variables.
- Clarify the public website boundary in deployment and contribution docs to reduce accidental overreach into wallet, contract, or backend responsibilities.

## Current Status

READY FOR STAGING

This repository is ready for staging as a static CeloHT website with verified lint, typecheck, unit tests, and production build. It is not a claim that the external dApp, contracts, treasury, impact program, or other blockchain-facing components are production-ready.
