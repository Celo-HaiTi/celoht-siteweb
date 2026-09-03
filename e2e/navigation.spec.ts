import { test, expect } from "@playwright/test";

test.describe("Primary navigation", () => {
  test("home page loads with the expected title and hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/CeloHT/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("Launch dApp button is visible and points to the dApp", async ({
    page,
  }) => {
    await page.goto("/");
    const launchButtons = page.getByRole("link", { name: /launch dapp/i });
    await expect(launchButtons.first()).toBeVisible();
    const href = await launchButtons.first().getAttribute("href");
    expect(href).toMatch(/^https?:\/\//);
  });

  test("primary nav links navigate to the correct pages", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: "About", exact: true })
      .first()
      .click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("Open Source page exposes its public ecosystem", async ({ page }) => {
    await page.goto("/open-source");
    await expect(page).toHaveTitle(/CeloHT Open Source/);
    await expect(
      page.getByRole("heading", { name: /Open by design/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "The CeloHT ecosystem", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Explore Public Resources" }),
    ).toHaveAttribute("href", "#public-resources");
  });

  test("Contributing route no longer exists", async ({ page }) => {
    const response = await page.goto("/contributing");
    expect(response?.status()).toBe(404);
  });

  test("reforestation guide is English on both supported routes", async ({
    page,
  }) => {
    await page.goto("/en/reforestation/plant-a-tree");
    await expect(
      page.getByRole("heading", { name: "How to Plant and Grow a Tree" }),
    ).toBeVisible();

    await page.goto("/en/reforestation/plant-a-tree");
    await expect(
      page.getByRole("heading", { name: "How to Plant and Grow a Tree" }),
    ).toBeVisible();
  });

  test("404 page renders for an unknown route", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByText(/hasn.t taken root yet/i)).toBeVisible();
  });
});
