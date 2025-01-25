import { test, expect } from '@playwright/test';

// Sample snippet to write the test
test("Page Title Test", async ({ page }) => {
  // Step 1: Navigate to the desired webpage
  await page.goto("https://self-learning-java-tutorial.blogspot.com/");

  // Step 2: Retrieve the page title
  const title = await page.title();

  // Step 3: Verify the title is as expected
  await expect(page).toHaveTitle("Programming for beginners");
});
