# Deployment

## Production Target

`celoht.com`, deployable to Vercel, Netlify, Cloudflare Pages, or any
static-hosting-capable platform, since this is a fully static Next.js
site with no server-side runtime requirements.

## Build

```bash
npm ci
npm run build
```

## Environment Variables

Only `NEXT_PUBLIC_DAPP_URL` is relevant, and it has a working default —
see [`development.md`](development.md).

## Security Headers & CSP

Set in `next.config.ts`. If you add a third-party script or font
provider, update the relevant CSP directive there rather than loosening
it broadly.

## CI/CD

Every push and Pull Request to `main` runs:

- **`ci.yml`** — typecheck, lint, format check, build, unit tests
- **`codeql.yml`** — static security analysis
- **`secret-scanning.yml`** — Gitleaks scan
- **`dependency-review.yml`** — blocks high-severity vulnerable dependencies
- **`e2e.yml`** — Playwright end-to-end tests (requires a runner with
  internet access to install browser binaries — GitHub-hosted runners
  have this by default)
- **`lighthouse.yml`** — Lighthouse CI budget check
