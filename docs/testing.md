# Testing Strategy

## Unit Tests (Vitest)

```bash
npm run test
```

Covers pure logic and small component rendering: `src/lib/utils.ts`,
`src/lib/nav.ts`'s data integrity (no duplicate routes, every nav item
resolves to a real page), `src/lib/constants.ts`'s URL validity, and
rendering of `PillarCard` / `StatGrid`. **These run in CI on every Pull
Request and are fully verified as part of this repository's quality
gates**  -  see `.github/workflows/ci.yml`.

## End-to-End Tests (Playwright)

```bash
npx playwright install   # once, downloads browser binaries
npm run test:e2e
```

Specs live in `e2e/`:

- `navigation.spec.ts`  -  homepage loads, Launch dApp button is present
  and points to an absolute URL, primary nav works, 404 renders correctly
- `theme-toggle.spec.ts`  -  light/dark mode toggles and persists across reload
- `search.spec.ts`  -  search dialog opens and navigates to a result

**Important caveat**: these specs are written and structurally complete,
and are configured to run in CI (`.github/workflows/e2e.yml`), which has
normal internet access to download Playwright's browser binaries.
Depending on your local environment, `npx playwright install` may not be
able to reach Playwright's CDN (for example, in a network-restricted
sandbox)  -  in that case, the specs can be read and reviewed, but not
executed, until run somewhere with normal internet access.

## Lighthouse

A `lighthouse.yml` workflow runs Lighthouse CI against key pages on every
Pull Request, with warn/error thresholds defined in `lighthouserc.json`.
Actual Lighthouse scores depend on the deployed environment (CDN,
caching, real network conditions) and can't be meaningfully claimed as a
fixed number in this documentation  -  the workflow is how we track it
continuously instead.

## What "fully verified" means in this repository, honestly

| Check                                            | Verified how                                                                                                                |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `npm install` succeeds                           | Run directly, including a clean-room reinstall from the packaged release                                                    |
| `npm run typecheck`  -  zero errors                | Run directly                                                                                                                |
| `npm run lint`  -  zero errors                     | Run directly                                                                                                                |
| `npm run build`  -  succeeds, all routes generated | Run directly                                                                                                                |
| `npm run test`  -  unit tests pass                 | Run directly                                                                                                                |
| `npm run test:e2e`                               | Config and specs are correct; execution requires a browser environment with internet access to download Playwright binaries |
| Lighthouse scores                                | Workflow configured; actual scores depend on the deployed environment                                                       |
