import { test, expect } from "@playwright/test";

const publicRoutes = [
  "/",
  "/about",
  "/accessibility",
  "/agent-network",
  "/agents",
  "/blog",
  "/blog/choosing-celo",
  "/blog/reforestation-as-infrastructure",
  "/blog/why-education-comes-first",
  "/brand-identity",
  "/code-of-conduct",
  "/community",
  "/contact",
  "/contributing",
  "/cookies",
  "/dapp",
  "/dapp/deployment",
  "/dapp/services",
  "/developers",
  "/developers/guide",
  "/docs",
  "/documentation",
  "/donate",
  "/education",
  "/faq",
  "/funding",
  "/governance",
  "/history",
  "/impact",
  "/media-kit",
  "/mission",
  "/news",
  "/no-token-policy",
  "/open-source",
  "/partners",
  "/privacy",
  "/project-vision",
  "/reforestation",
  "/reforestation/planter-un-arbre",
  "/en/reforestation/plant-a-tree",
  "/research",
  "/roadmap",
  "/security",
  "/security/risks",
  "/support",
  "/technology",
  "/technology/architecture",
  "/technology/smart-contracts",
  "/terms",
  "/transparency",
  "/transparency/financial",
  "/transparency/on-chain",
  "/values",
  "/vision",
];

test.describe("Public route audit", () => {
  for (const route of publicRoutes) {
    test(`${route} is available`, async ({ page }) => {
      const response = await page.goto(route);
      expect(
        response?.status(),
        `${route} returned an invalid status`,
      ).toBeLessThan(400);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.locator("body")).not.toContainText(
        /Application error|Internal Server Error|Page not found/i,
      );
    });
  }
});
