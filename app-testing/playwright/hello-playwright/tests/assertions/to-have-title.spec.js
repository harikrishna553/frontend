import { test, expect } from "@playwright/test";

test("Test Page Title", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  await expect(page).toHaveTitle("STORE");
});

test("Test Dynamic Page Title with Regex", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await expect(page).toHaveTitle(/ORE/);
});

test("Test Page Title with Custom Timeout", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await expect(page).toHaveTitle("STORE", { timeout: 5000 });
});