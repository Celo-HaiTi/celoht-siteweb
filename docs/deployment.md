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
`out/` on every push to `main`. It creates both a root export for `celoht.com`
and a project-path export under `/celoht-siteweb/`, so internal links and
assets work at both public URLs.

Enable **Settings > Pages > GitHub Actions** once in the repository settings.

### Custom domain

Configure `celoht.com` as the custom domain in **Settings > Pages** and keep
the `public/CNAME` file in the repository. The deployment workflow already
builds the root and project-path variants:

```yaml
NEXT_PUBLIC_SITE_URL: https://celoht.com
NEXT_PUBLIC_USE_PROJECT_BASE_PATH: false # custom-domain build
```

The second build uses `NEXT_PUBLIC_USE_PROJECT_BASE_PATH: true` and is copied
under `/celoht-siteweb/`. Add the DNS records GitHub provides for `celoht.com`.

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
`NEXT_PUBLIC_USE_PROJECT_BASE_PATH` control custom-domain versus project-path
builds as described above.

## Security Headers & CSP

Set in `next.config.ts`. If you add a third-party script or font
provider, update the relevant CSP directive there rather than loosening
it broadly.

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
