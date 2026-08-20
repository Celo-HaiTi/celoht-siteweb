import { test, expect } from "@playwright/test";

test.describe("Site search", () => {
  test("opens with keyboard shortcut and navigates to a result", async ({ page }) => {
    await page.goto("/");
    const dialog = page.locator('dialog[aria-label="Search CeloHT"]');
    await page.locator('button[aria-label="Search the site"]:visible').first().click();
    await expect(dialog).toBeVisible();
    await page.getByPlaceholder("Search pages…").fill("reforestation");
    await page
      .getByRole("link", { name: /reforestation/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/reforestation$/);
  });
});
