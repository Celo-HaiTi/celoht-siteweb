# Production Readiness

## Repository

`Celo-HaiTi/celoht-siteweb`

## Role

This repository owns the public, informational CeloHT website: identity,
public program information, documentation links, public navigation, SEO, and
static deployment assets. It does not own wallets, contracts, treasury
operations, a database, an indexer, authentication, or privileged actions.

## Audit Summary

The site is a Next.js App Router application with static export enabled. Route
inventory and navigation integrity are covered by unit and Playwright tests.
Cross-repository links use the current `Celo-HaiTi` organization. No current
Alfajores, cUSD, legacy organization, contract address, or private credential
is configured by this website.

The homepage includes an explicitly labelled product preview. It must not be
read as a live wallet, balance, transaction, network, or impact dashboard.

## Changes Made

- Added this repository-specific readiness record with evidence-oriented status
  labels.
- Removed the unconnected `Celo Mainnet` label from the homepage preview and
  replaced it with `Network not connected`.
- Preserved the website boundary: blockchain and wallet functionality remain
  owned by the external dApp repository.

## Security

- Critical: none identified in this repository's static website scope.
- High: none identified in this repository's static website scope.
- Medium: none identified in the reviewed source.
- Low: external links, hosted assets, and content claims require normal review
  before publication.

No secrets, private keys, seed phrases, backend credentials, or privileged
operations belong in this repository. The website does not process wallet
signatures or user identity documents.

## Treasury

**PLANNED**: no Treasury, Safe, withdrawal, accounting, governance authority,
or contract integration is implemented here. Treasury facts must come from the
authoritative contracts and governance repositories.

## Smart Contracts

**PLANNED**: no Solidity source, ABI, deployment manifest, contract address,
or contract test is implemented here. Contract status belongs to
`Celo-HaiTi/celoht-smart-contracts`.

## Application

- **IMPLEMENTED**: static public pages, shared navigation, metadata, sitemap,
  robots configuration, responsive layouts, accessibility pages, and links to
  the external dApp.
- **PLANNED**: wallet connection, blockchain reads, transaction state,
  balances, allowances, transaction history, and live agent or impact data in
  this repository. These are outside the website boundary.
- **MOCK / DEMO**: the homepage product preview is visual content only and
  displays no live data.

## Documentation

- **IMPLEMENTED**: repository README, architecture guidance, development and
  testing documentation, no-token policy, security guidance, and this
  readiness record.
- **HISTORICAL / DEPRECATED**: any legacy organization or network references
  retained in explicitly historical context only.

## Cross-Repository Synchronization

- Website links point to `Celo-HaiTi` repositories.
- The external dApp URL is `https://app.celoht.com` and is not implemented or
  verified by this repository.
- Celo Sepolia (`11142220`), Celo Mainnet (`42220`), CELO, and USDm may be
  described informationally, but no network or asset configuration is owned by
  this site.
- No `celoht-backend` repository, production API, database, or indexer was
  created.

## Tests

Run after installing dependencies:

```text
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

The repository also provides `npm run format:check` and the brand asset
validator through `npm run build`. Playwright browsers are installed in the
validation environment, and the full suite completed with 173 passing tests
and one transient WebKit navigation failure; the isolated rerun passed.

## Remaining Blockers

- **BLOCKED**: live dApp, wallet, contract, Treasury, indexer, and impact
  verification cannot be established from this informational website. Verify
  those claims in their authoritative repositories before publishing them as
  current.
- **BLOCKED**: production deployment health and external URL availability
  require an environment outside this repository.

## Production Status

**TESTNET READY** for the website's static-site responsibility, subject to
the repository checks passing in the target CI/deployment environment. This is
not a statement that the dApp, smart contracts, Treasury, or impact programs
are production-ready.
