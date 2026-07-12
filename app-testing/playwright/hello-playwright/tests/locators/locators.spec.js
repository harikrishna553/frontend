import { test, expect } from "@playwright/test";

test("Locators Demo 1", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  // BY property
  await page.locator("id=login2").click();

  // By css
  await page.locator("#loginusername").fill("test");

  // By Xpath
  await page.locator("//input[@id='loginpassword']").fill("test");

  // Click on Log In button using xpath
  await page.locator("//button[normalize-space()='Log in']").click();

  const nameOfUser = page.locator("#nameofuser");
  await expect(nameOfUser).toHaveText("Welcome test");
});

test("Locators Demo 2", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  // BY property
  await page.click("#login2");

  // By css
  await page.fill("#loginusername", "test");

  // By Xpath
  await page.fill("//input[@id='loginpassword']", "test");

  // Click on Log In button using xpath
  page.click("//button[normalize-space()='Log in']");

  const nameOfUser = page.locator("#nameofuser");
  await expect(nameOfUser).toHaveText("Welcome test");
});
