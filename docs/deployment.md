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

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes
`out/` on every push to `main`. During that build, `GITHUB_REPOSITORY` is
used to set the repository `basePath`, so internal links and assets work at
`/<repository-name>/` as well as at the root on custom domains.

Enable **Settings > Pages > GitHub Actions** once in the repository settings.

### Custom domain

Before connecting `celoht.com`, update the `Build site` environment values in
`.github/workflows/deploy-pages.yml`:

```yaml
NEXT_PUBLIC_SITE_URL: https://celoht.com
NEXT_PUBLIC_USE_PROJECT_BASE_PATH: false
```

Then configure `celoht.com` as the custom domain in **Settings > Pages** and
add the DNS records GitHub provides. Keep the project-path values enabled until
the custom domain is ready, because project URLs need the `/celoht-siteweb/`
asset prefix while custom domains need root paths.

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

Only `NEXT_PUBLIC_DAPP_URL` is relevant, and it has a working default  - 
see [`development.md`](development.md).

## Security Headers & CSP

Set in `next.config.ts`. If you add a third-party script or font
provider, update the relevant CSP directive there rather than loosening
it broadly.

## CI/CD

Every push and Pull Request to `main` runs:

- **`ci.yml`**  -  typecheck, lint, format check, build, unit tests
- **`codeql.yml`**  -  static security analysis
- **`secret-scanning.yml`**  -  Gitleaks scan
- **`dependency-review.yml`**  -  blocks high-severity vulnerable dependencies
- **`e2e.yml`**  -  Playwright end-to-end tests (requires a runner with
  internet access to install browser binaries  -  GitHub-hosted runners
  have this by default)
- **`lighthouse.yml`**  -  Lighthouse CI budget check
