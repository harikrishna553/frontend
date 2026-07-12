import { test, expect } from "@playwright/test";

test("Test Page Title", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  await expect(page).toHaveURL("https://demoblaze.com/");
});

test("Test URL with Regular Expression", async ({ page }) => {
  await page.goto("https://demoblaze.com");
  await expect(page).toHaveURL(/demoblaze\.com/);
});

test("Test Case-Insensitive URL Matching", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await expect(page).toHaveURL("https://DEMOBLAZE.com/", { ignoreCase: true });
});

test("Test URL with Custom Timeout", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await expect(page).toHaveURL("https://demoblaze.com/", { timeout: 5000 });
});
