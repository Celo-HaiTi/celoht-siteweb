# Repository Product Readiness

## Repository Purpose

This repository is the public website for CeloHT. Its responsibility is informational and marketing-facing: presenting the mission, education, agent network, reforestation, governance, transparency, legal, blog, and documentation content for the CeloHT ecosystem. It does not manage wallet funds, treasury operations, or blockchain transactions. The repository is intentionally a static-first front-end that links to the external dApp at app.celoht.com.

## Architecture

- Next.js App Router site
- Static export build for GitHub Pages, Vercel, and static hosting
- Server-rendered and prerendered pages with `output: "export"`
- MDX-based blog content
- Shared UI patterns through reusable components in `src/components/`
- Centralized constants and navigation in `src/lib/constants.ts` and `src/lib/nav.ts`
- No backend, database, or user-authentication layer
- No on-chain wallet integration or contract deployment logic in this repository

## Technology Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- MDX
- Vitest + Testing Library
- Playwright for end-to-end tests
- ESLint + Prettier

## Dependencies

Production dependencies are limited to the website stack. No blockchain dependencies, wallet SDKs, or smart-contract packages are present in this repository.

## Cross-Repository Integrations

- External dApp: `https://app.celoht.com`
- Canonical GitHub org: `https://github.com/Celo-HaiTi`
- Flagship repo: `https://github.com/Celo-HaiTi/CeloHT`
- DApp repo: `https://github.com/Celo-HaiTi/celoht-dapp`
- This website is designed to be informational and reference-based, not a blockchain application itself.

## Changes Made

- Corrected repository links to the canonical Celo-HaiTi GitHub org.
- Replaced outdated legacy `celo-ht` references in README, docs, changelog, roadmap, and support material.
- Updated roadmap language from outdated Alfajores phrasing to Celo Sepolia wording.
- Installed and remediated dependency vulnerabilities using the repository’s package manager.
- Verified lint, typecheck, test, and production build status.

## Contradictions Found

- Stale GitHub org references used the old `celo-ht` / `Celo-HT` patterns instead of the canonical `Celo-HaiTi` organization.
- Roadmap wording still referenced Alfajores, which is no longer the current CeloHT testnet expectation.
- Some historical package metadata and docs still reflected older repository naming conventions.

## Contradictions Resolved

- Updated all active repository links to `Celo-HaiTi` canonical URLs.
- Replaced outdated testnet claim with the current Celo Sepolia plan wording.
- Ensured the repository’s local source now matches the canonical ecosystem identity.

## Network Status

- Celo Mainnet chain ID: `42220`
- Celo Sepolia testnet chain ID: `11142220`
- This website does not deploy or configure on-chain contracts or wallets itself.
- Network references in the site are informational only.

## USDm Status

- USDm is referenced as the operational stable-value asset in public content.
- This repository does not implement USDm wallet balance reads, on-chain transfers, or token contracts.
- USDm configuration on-chain: NOT CONFIGURED in this repository.

## Treasury Status

- Treasury address references are not implemented in this repository.
- Treasury management and custody logic: NOT CONFIGURED.
- Any treasury data must be sourced from the appropriate contract or governance repository rather than inferred locally.

## Contract Status

- Smart contracts: NOT PRESENT in this repository.
- No Solidity compiler or deployment tooling is included.
- No contract tests, deployment scripts, or on-chain configuration are managed here.

## Wallet Status

- The repository does not contain a live wallet integration layer.
- Wallet compatibility for Valora, MiniPay, and WalletConnect is not implemented in this repository.
- The website directs users to an external dApp, which is expected to handle wallet interaction separately.

## Backend Status

- Backend: NOT APPLICABLE
- Database: NOT APPLICABLE
- API: NOT APPLICABLE
- Indexer: NOT APPLICABLE

## Security Status

- Security headers and CSP are configured in `next.config.ts`.
- No secrets are committed to the repository.
- Dependency audit was run and the remaining findings were remediated with package updates.
- This repository is a static website with no user-authentication orprivileged data layer.

## Tests

Executed successfully:

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`

Result: 7 test files passed, 14 tests passed, production build succeeded.

## Build

- `npm run build` succeeded.
- Static routes generated successfully.
- Brand asset validation script passed.

## Deployment Status

- GitHub Pages deployment configuration is present in CI and supporting docs.
- Production deployment is configured for this static website.
- No smart-contract deployment is performed by this repository.

## Remaining External Dependencies

DEPENDENCY
Repository: Celo-HaiTi/celoht-dapp
Required change: wallet functionality and blockchain interaction flows live there, not in this website repository.
Reason: This website is informational and links to the live dApp rather than implementing wallet features itself.
Status: VERIFIED / EXTERNAL

## Remaining Blockers

- No known blocker remains for this repository’s defined scope.
- Any wallet, treasury, or contract functionality must be implemented in the proper blockchain-facing repository, not here.

## Final Product Readiness Status

READY

This repository is ready for its actual responsibility: serving as the public website for the CeloHT ecosystem, with correct canonical references, verified build/test status, and no known fixable blocker in its intended scope.
