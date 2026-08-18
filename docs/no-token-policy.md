# No Token Policy

CeloHT has never created, issued, or planned a token of its own, in this
repository or any other CeloHT repository. This page exists as an
explicit, standalone policy statement, separate from general FAQ or
about-page copy, so it can be linked to directly.

## What this means concretely

- No smart contract in the [CeloHT dApp repository](https://github.com/celo-ht/dapp)
  inherits from `ERC20` or represents a fungible, transferable balance of
  anything CeloHT controls (the one exception, `MockERC20.sol`, is
  explicitly test-only and never deployed).
- No page on this website, in the dApp, or in any CeloHT documentation
  offers, sells, or facilitates the purchase of a CeloHT token.
- Governance voting (see the dApp's `GovernanceVoting` contract) is
  role-based, one-address-one-vote — not token-weighted — specifically
  because there is no token to weight votes by.

## Why we publish this as its own policy

Fintech and crypto-adjacent projects have historically pivoted to token
issuance after building a community. We publish this policy separately,
and reference it from multiple pages, so that any future change would be
a visible, deliberate departure from a stated commitment — not a quiet
addition.

## Changing this policy

Any change to this policy follows the governance process in
[`../GOVERNANCE.md`](../GOVERNANCE.md), including the 14-day public
comment period.
