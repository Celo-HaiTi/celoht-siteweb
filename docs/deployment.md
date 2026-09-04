# Deployment

## Production Target

`celoht.com`, deployable to GitHub Pages, Vercel, Netlify, Cloudflare Pages,
or any static-hosting-capable platform, since this is a fully static Next.js
site with no server-side runtime requirements.

## Local

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. To preview the production export locally:

```bash
npm run build
npx serve out
```

## GitHub Pages

Because this site uses Next.js static export, `headers()` in `next.config.ts`
is not applied by GitHub Pages. Production security headers such as CSP,
`X-Frame-Options`, and HSTS must therefore be configured at the custom domain
CDN or reverse proxy. Do not treat the headers declared in `next.config.ts` as
active protection for the static GitHub Pages deployment.

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes
`out/` on every push to `main` with the `/celoht-siteweb` project base path.
GitHub Pages mounts this artifact at the repository URL, so all internal links
and assets resolve correctly there.

Enable **Settings > Pages > GitHub Actions** once in the repository settings.

### Custom domain

The custom domain is a separate root deployment of this same repository. Use
Vercel, Netlify, Cloudflare Pages, or another static host for `celoht.com` and
build it without `GITHUB_PAGES`:

```yaml
NEXT_PUBLIC_SITE_URL: https://celoht.com
```

The GitHub Pages workflow uses `GITHUB_PAGES: true` and publishes the project
variant. Do not configure `celoht.com` as the GitHub Pages custom domain: one
GitHub Pages artifact cannot expose two different base paths at once, and that
setting redirects or breaks the project URL. Point `celoht.com` to the root
deployment host instead. `NEXT_PUBLIC_USE_PROJECT_BASE_PATH` remains supported
as a backwards-compatible alias.

## Vercel

Import the repository into Vercel and keep the default build command:

```bash
npm run build
```

Vercel serves the generated static export directly. No environment variables
are required unless the DApp URL changes; in that case set
`NEXT_PUBLIC_DAPP_URL` in the Vercel project settings.

## Build

```bash
npm ci
npm run build
```

## Environment Variables

`NEXT_PUBLIC_DAPP_URL` has a working default. `NEXT_PUBLIC_SITE_URL` and
`GITHUB_PAGES` control custom-domain versus project-path builds as described
above. `NEXT_PUBLIC_USE_PROJECT_BASE_PATH` remains a backwards-compatible
alias for `GITHUB_PAGES`.

## Security Headers & CSP

For static hosting, configure security headers at the hosting provider or
reverse proxy. If you add a third-party script or font provider, update the
CSP there rather than loosening it broadly.

## CI/CD

Every push and Pull Request to `main` runs:

- **`ci.yml`** - typecheck, lint, format check, build, unit tests
- **`codeql.yml`** - static security analysis
- **`secret-scanning.yml`** - Gitleaks scan
- **`dependency-review.yml`** - blocks high-severity vulnerable dependencies
- **`e2e.yml`** - Playwright end-to-end tests (requires a runner with
  internet access to install browser binaries - GitHub-hosted runners
  have this by default)
- **`lighthouse.yml`** - Lighthouse CI budget check
