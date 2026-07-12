import { test, expect } from "@playwright/test";

test("Locate By Role", async ({ page }) => {
    test.slow();
    
  // Navigate to the application
  await page.goto("https://opensource-demo.orangehrmlive.com");

  // Locate and interact with input fields by their placeholders
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  // Interact with elements using roles and accessible names
  await page.getByRole("button", { type: "submit" }).click();

  // Verify that the user is logged in by checking for a specific text
  const dashboard = page.getByText("My Actions");
  await expect(dashboard).toBeVisible();
});
