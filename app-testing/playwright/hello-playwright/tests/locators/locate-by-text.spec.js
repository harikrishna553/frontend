import { test, expect } from "@playwright/test";

test("Locate By Placeholder", async ({ page }) => {
  // Navigate to the application
  await page.goto("https://opensource-demo.orangehrmlive.com");

  // Locate and interact with input fields by their placeholders
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  // Click the login button
  await page.getByRole("button", { type: "submit" }).click();

  await expect(page.getByText("Actions")).toBeVisible();
});
