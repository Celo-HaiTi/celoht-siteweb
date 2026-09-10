# CeloHT Production Readiness

## Repository

`celoht-siteweb`

## Repository Type

Website

## Status

READY FOR STAGING

## What Works

- Public CeloHT website with responsive layouts, metadata, navigation, documentation pages, and static export
- MDX blog support and routed content under `src/app/`
- Search dialog, shared layout components, and brand asset validation
- PWA registration and static asset handling
- Live CELO and USDm market cards using public CoinGecko data with graceful fallback behavior
- CI and deployment workflows for lint, typecheck, unit tests, build, and GitHub Pages publishing

## What Was Changed

- Added a repository-specific `AUDIT.md` capturing the real website scope, architecture, dependencies, blockers, and production-readiness status
- Added `.env.example` to document the supported public environment variables for the static website
- Kept the repository aligned with CeloHT’s actual role: informational website, not a wallet, backend, indexer, treasury, or contract deployment system

## Tests

Executed successfully:

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- `npm run test:e2e -- --reporter=line`

Observed results:

- `npm run lint`: passed
- `npm run typecheck`: passed
- `npm test`: passed (`8` test files, `15` tests)
- `npm run build`: succeeded and generated static routes
- `npm run test:e2e -- --reporter=line`: the suite executed and reported `176 passed`; one WebKit test was flaky in this environment and timed out once, but the suite itself completed successfully

## Security

Completed checks:

- Verified no secrets, private keys, service-role credentials, or privileged tokens are committed
- Reviewed `next.config.ts` for security headers and CSP
- Confirmed the repository contains no authentication, authorization, or backend credential handling

Remaining considerations:

- The live market data fetch relies on a third-party public API (`api.coingecko.com`) and should be treated as best-effort public data
- External links and public content claims should continue to receive standard editorial review

## Deployment

Verified deployment information:

- GitHub Pages deployment workflow exists in `.github/workflows/deploy-pages.yml`
- CI workflow exists in `.github/workflows/ci.yml`
- Static export build was verified locally via `npm run build`

Deployment scope is limited to the public website. No contract, backend, database, or indexer deployment is performed by this repository.

## External Dependencies

- External dApp: `https://app.celoht.com`
- Public market API: CoinGecko
- External ecosystem repositories referenced in docs and links for broader CeloHT content, governance, and tooling

## P0

- None identified for this repository’s actual scope.

## P1

- Live dApp, wallet, contract, treasury, and impact claims must be verified in their authoritative CeloHT repositories before being described as current production facts.
- The Playwright WebKit timeout should be rechecked in CI or another environment if this repository is being promoted beyond staging.

## P2

- Add an explicit `.env.example` document for supported public config (completed in this session)
- Keep clarifying the website/dApp boundary in contributor documentation
- Add a deployment checklist for maintainers when publishing the public site

## Remaining Blockers

### WHAT IS MISSING

- Verified production status for external dApp, contracts, treasury, and impact components.

### WHY IT MATTERS

- This repository references those ecosystem components, but it cannot establish their live production readiness from the site alone.

### WHAT IS REQUIRED

- Verify the authoritative CeloHT dApp, smart contract, governance, treasury, and impact repositories before publishing any live production claims outside the public website scope.

## Evidence

- `package.json`: verified scripts and stack
- `next.config.ts`: static export configuration and security headers
- `.github/workflows/ci.yml`: CI checks
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment path
- `AUDIT.md`: current repository audit
- `.env.example`: documented public configuration
- Local verification commands run successfully:
  - `npm run lint`
  - `npm run typecheck`
  - `npm test`
  - `npm run build`
  - `npm run test:e2e -- --reporter=line`
