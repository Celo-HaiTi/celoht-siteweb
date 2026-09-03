import { test, expect } from "@playwright/test";

test.describe("Header navigation", () => {
  test("opens search and navigates to a result", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("banner").getByRole("link", { name: /open celoht dapp/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("banner").getByRole("button", { name: /search/i }),
    ).toBeVisible();
    await page
      .getByRole("banner")
      .getByRole("button", { name: /search the site/i })
      .first()
      .click();
    await expect(
      page.getByRole("dialog", { name: /search celoht/i }),
    ).toBeVisible();
    await page.getByRole("textbox", { name: /search pages/i }).fill("About");
    await page.getByRole("dialog").getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about\/?$/);
  });
});
