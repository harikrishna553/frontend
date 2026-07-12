import { test, expect } from "@playwright/test";

test("Visibility Test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const logoElement = page.locator("//a[@id='nava']//img");
  await expect(logoElement).toBeVisible();
});
