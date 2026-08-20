import { defineConfig, devices } from "@playwright/test";

/**
 * End-to-end tests. Run `npx playwright install` once to fetch browser
 * binaries before `npm run test:e2e`  -  see docs/TESTING.md. These are
 * NOT run as part of `npm test` (that's Vitest, for unit tests) since
 * e2e tests need a real browser and a running server.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
    { name: "mobile-chrome", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
