# Security Policy

## Reporting a Vulnerability

Please **don't** open a public GitHub issue for a security vulnerability.

- **Email**: security@celoht.com
- **GitHub Security Advisories**: use ["Report a vulnerability"](https://github.com/Celo-HaiTi/celoht-siteweb/security/advisories/new)

## Response Timeline

| Step                | Target           |
| ------------------- | ---------------- |
| Acknowledge receipt | 48 hours         |
| Initial assessment  | 5 business days  |
| Remediation plan    | 10 business days |

## Scope

This repository is a static-first Next.js website with no backend, no
database, and no user authentication. Relevant scope includes:

- Cross-site scripting (XSS) or content-injection vectors
- Dependency vulnerabilities (tracked via Dependabot and `npm audit` in CI)
- Misconfigured security headers or Content Security Policy (see
  `next.config.ts`)
- Service worker cache-poisoning or scope issues (`public/sw.js`)
- Supply-chain issues in the GitHub Actions workflows

## Security Practices

- A strict Content Security Policy and standard security headers
  (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`, `Strict-Transport-Security`) are set in
  `next.config.ts`.
- No secrets are committed - environment variables only, and none are
  currently required for this repository to build or run.
- CodeQL static analysis and Gitleaks secret scanning run on every change.
- The service worker only caches a small, explicit allowlist of static
  assets and never intercepts non-GET requests.

## Out of Scope

The security of the Celo network, the Valora application, the CeloHT
dApp, and the flagship repository's infrastructure are out of scope
here - see their respective `SECURITY.md` files.

## Supported Versions

Only the `main` branch (the live production deployment) receives
security fixes.
