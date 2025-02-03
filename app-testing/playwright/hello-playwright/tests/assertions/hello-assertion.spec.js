import { test, expect } from "@playwright/test";

test("Test Page Title", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  // Retrying assertion - Playwright will keep checking until timeout
  await expect(page).toHaveTitle("STORE");
});

test("Check page URL without retry", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  // Non-retrying assertion: Immediately checks the URL
  expect(page.url()).toBe("https://demoblaze.com/");
});

test("Soft Assertions Example", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  // Soft assertions won't stop execution on failure
  expect.soft(await page.title()).toBe("STORE");
  expect.soft(page.url()).toBe("https://demoblaze.com/");
});
