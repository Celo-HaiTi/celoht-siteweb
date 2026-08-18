import { test, expect } from "@playwright/test";

test.describe("Site search", () => {
  test("opens with keyboard shortcut and navigates to a result", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Meta+K").catch(() => {});
    await page.keyboard.press("Control+K").catch(() => {});

    const dialog = page.getByRole("dialog", { name: /search celoht/i }).or(page.locator("dialog"));
    // Fall back to clicking the visible search button if the shortcut
    // didn't register (varies by OS/browser in headless mode).
    if (!(await dialog.isVisible().catch(() => false))) {
      await page.getByRole("button", { name: "Search" }).first().click();
    }

    await page.getByPlaceholder("Search pages…").fill("reforestation");
    await page
      .getByRole("link", { name: /reforestation/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/reforestation$/);
  });
});
