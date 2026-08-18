import { test, expect } from "@playwright/test";

test.describe("Theme toggle", () => {
  test("switches between light and dark mode and persists across reload", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");

    const initiallyDark = (await html.getAttribute("class"))?.includes("dark") ?? false;

    await page.getByRole("button", { name: /switch to (dark|light) theme/i }).click();
    await expect(html).toHaveClass(initiallyDark ? /^((?!dark).)*$/ : /dark/);

    await page.reload();
    await expect(html).toHaveClass(initiallyDark ? /^((?!dark).)*$/ : /dark/);
  });
});
