<div align="center">
  <img width="220" height="220" alt="CeloHT logo" src="https://raw.githubusercontent.com/Celo-HaiTi/celoht-siteweb/main/public/celoht-logo.png" />

# CeloHT Website

**The official public website for CeloHT** a community-driven,
open-source initiative for financial inclusion, education, agent
networks, and reforestation on the Celo ecosystem.

[![CI](https://github.com/Celo-HaiTi/celoht-siteweb/actions/workflows/ci.yml/badge.svg)](.github/workflows/ci.yml)
[![Pages](https://github.com/Celo-HaiTi/celoht-siteweb/actions/workflows/deploy-pages.yml/badge.svg)](.github/workflows/deploy-pages.yml)
[![CodeQL](https://img.shields.io/badge/CodeQL-Analyzed-181717?logo=github&logoColor=white)](https://github.com/Celo-HaiTi/celoht-siteweb/security/code-scanning)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Apache%202.0-0B1120.svg)](LICENSE)
[![Static Export](https://img.shields.io/badge/Build-Static%20Export-2EA44F?logo=githubactions&logoColor=white)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-FF6B35?logo=progressivewebapps&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

[![Open in Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Celo-HaiTi/celoht-siteweb)

[Live site](https://celoht.com) · [GitHub Pages](https://celo-haiti.github.io/celoht-siteweb/) · [Launch DApp](https://app.celoht.com) · [Flagship repository](https://github.com/Celo-HaiTi/CeloHT) · [DApp repository](https://github.com/Celo-HaiTi/celoht-dapp)

</div>

---

## 🌍 What this is

The public information platform for CeloHT, with all routes statically
exported for local hosting, GitHub Pages, and Vercel. It covers our
mission, three pillars (Education, Agent Network, Reforestation),
governance, transparency, developer docs, a blog, and every standard
legal/community page a mature open-source project needs, with a
prominent **Launch DApp** entry point in the header, hero, and footer.

CeloHT is a community-driven, open-source initiative built on the Celo
ecosystem. It is **not** a blockchain, a cryptocurrency, a token, an ICO,
or an investment platform. See [`/about`](https://celoht.com/about) and
[`docs/no-token-policy.md`](docs/no-token-policy.md).

### ✨ Project highlights

- 🌱 Public-facing website for CeloHT with a clear mission, governance, and
  transparency-first positioning.
- 🏗️ Multi-page static site architecture optimized for GitHub Pages, Vercel,
  and other static hosting platforms.
- 📚 Dedicated sections for education, agent network, reforestation, media,
  and community resources.
- ⚙️ Built for maintainability with TypeScript, MDX, automated testing, and a
  lightweight static export workflow.

### 🤝 Contributing

If you want to improve content, documentation, or site behavior:

1. Fork the repository and create a feature branch.
2. Install dependencies with `npm install`.
3. Run the app locally with `npm run dev`.
4. Validate your work with `npm run typecheck`, `npm run lint`, and the
   relevant tests before opening a pull request.

## 🧰 Tech stack

- [Next.js](https://nextjs.org) (App Router, Turbopack build)
- [TypeScript](https://www.typescriptlang.org) (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com)
- CSS animations for the lightweight animated hero
- [MDX](https://mdxjs.com) for the blog
- [Vitest](https://vitest.dev) + Testing Library for unit tests
- [Playwright](https://playwright.dev) for end-to-end tests
- A minimal, hand-written service worker for PWA support

## 🚀 Getting started

```bash
git clone https://github.com/Celo-HaiTi/celoht-siteweb.git
cd celoht-siteweb
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

See [`docs/DEVELOPMENT.md`](docs/development.md) for the full local
development guide.

## 🌐 Deployment

### GitHub Pages

Every push to `main` runs [Deploy to GitHub Pages](.github/workflows/deploy-pages.yml).
The workflow builds the static `out/` directory with the repository base path and publishes it
through GitHub Pages. Enable **Settings > Pages > GitHub Actions** in the repository settings.

### Vercel

Use the **Open in Vercel** button above, or import this repository in Vercel. The default build
command is `npm run build`; no special environment variable is required. Set
`NEXT_PUBLIC_DAPP_URL` only when the production DApp URL changes from `https://app.celoht.com`.

### Static hosting

Run `npm run build`, then serve the generated `out/` directory. The static export is also suitable
for other hosts that support static files. Local development uses `npm run dev`; local production
preview uses `npx serve out`.

## 🧪 Available scripts

| Script              | What it does                                                                |
| ------------------- | --------------------------------------------------------------------------- |
| `npm run dev`       | Start the local development server                                          |
| `npm run build`     | Production build                                                            |
| `npm run start`     | Serve the production build locally                                          |
| `npm run lint`      | Run ESLint                                                                  |
| `npm run typecheck` | Run the TypeScript compiler in check-only mode                              |
| `npm run test`      | Run unit tests (Vitest)                                                     |
| `npm run test:e2e`  | Run end-to-end tests (Playwright requires `npx playwright install` first) |
| `npm run format`    | Format the codebase with Prettier                                           |

## ✅ Verified before every release

- ✅ `npm install` completes cleanly
- ✅ `npm run typecheck` - zero errors
- ✅ `npm run lint` - zero errors
- ✅ `npm run build` - all 38 routes generated successfully
- ✅ `npm run test` - unit test suite passing

See [`docs/TESTING.md`](docs/testing.md) for exactly what's automatically
verified versus what requires a full browser environment (e.g. Lighthouse
scores, Playwright e2e execution) that this repository's CI is configured
to run but that can't be executed in every environment.

## 🗂️ Repository structure

See [`ARCHITECTURE.md`](ARCHITECTURE.md).

## 🔒 Security

Found a vulnerability? Don't open a public issue; see
[`SECURITY.md`](SECURITY.md).

## 📄 License

Code in this repository is available under the
[Apache 2.0 License](LICENSE).
