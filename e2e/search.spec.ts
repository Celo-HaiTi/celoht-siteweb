import { test, expect } from "@playwright/test";

test.describe("Header navigation", () => {
  test("keeps the primary header focused on navigation and the dApp", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByRole("banner").getByRole("link", { name: /open celoht dapp/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("banner").getByRole("button", { name: /search/i }),
    ).toHaveCount(0);
  });
});
