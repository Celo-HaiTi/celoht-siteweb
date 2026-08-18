# Roadmap

This roadmap covers the website specifically. For the ecosystem-wide
roadmap, see the flagship repository's
[`ROADMAP.md`](https://github.com/celo-ht/celoht/blob/main/ROADMAP.md).

## Phase 1  -  Foundation (current)

- [x] Full 33-page site: all core pages, blog (MDX), Launch dApp entry points
- [x] Light/dark theme, site search, PWA manifest + service worker
- [x] SEO: metadata, sitemap, robots.txt, JSON-LD (Organization, FAQPage)
- [x] Security headers and Content Security Policy
- [x] Unit test suite (Vitest) and e2e test suite (Playwright, config + specs)
- [x] CI/CD: build/lint/typecheck/test workflow, CodeQL, Dependabot

## Phase 2  -  Validation

- [ ] Automated accessibility auditing (axe-core) in CI
- [ ] Lighthouse CI running against key pages with a defined score budget
- [ ] Real e2e test execution in CI (this repo ships the Playwright
      config and specs; running them requires downloading browser
      binaries, which isn't possible in every build environment)
- [ ] Internationalization: Spanish translation, following the flagship
      repository's Caribbean expansion plan

## Phase 3  -  Growth

- [ ] Real map integration on any location-based content (coordinating
      with the dApp's agent map)
- [ ] Expanded blog cadence with contributor posts
- [ ] Newsletter signup wired to a real provider

See [`docs/testing.md`](docs/testing.md) for exactly what's verified
today versus planned.
