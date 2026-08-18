# Changelog

All notable changes to the CeloHT website are documented here, following
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial structure for the rebuilt CeloHT website.

## [2.0.0] - 2026-07-25

### Added

- Complete rebuild from scratch: 33 pages (30 unique routes + 3 MDX blog
  posts), covering every page in the requested site structure  -  Home,
  About, Mission, Vision, Education, Agent Network, Reforestation,
  Technology, Impact, Community, Partners, Roadmap, Governance,
  Transparency, Developers, Documentation, Media Kit, Blog, News, FAQ,
  Support, Donate, Contact, Privacy, Terms, Cookies, Security,
  Accessibility, Code of Conduct, Contributing, and a custom 404.
- A prominent **Launch dApp** button in the header, hero, footer, and
  mobile menu, linking to `NEXT_PUBLIC_DAPP_URL`.
- Animated hero section using Motion (Framer Motion), respecting
  `prefers-reduced-motion`.
- MDX-powered blog with three real posts.
- PWA support: web app manifest and a minimal, hand-written service
  worker for offline resilience of static assets.
- Full SEO: per-page metadata, Open Graph and Twitter Card images,
  JSON-LD (Organization on the homepage, FAQPage on `/faq`),
  `sitemap.xml`, `robots.txt`.
- Security headers and a Content Security Policy in `next.config.ts`.
- Unit test suite (Vitest + Testing Library, 11 tests) and an end-to-end
  test suite (Playwright, 3 spec files covering navigation, theming, and
  search).
- CI/CD: build/lint/typecheck/test workflow, CodeQL, Dependabot, and a
  Lighthouse CI workflow.

### Removed

- The previous version of this website was deleted and rebuilt from
  zero at the maintainers' request, after the prior build was found not
  to meet quality expectations.

[Unreleased]: https://github.com/celo-ht/website/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/celo-ht/website/releases/tag/v2.0.0
