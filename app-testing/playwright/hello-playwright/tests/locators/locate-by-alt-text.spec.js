import { test, expect } from "@playwright/test";

test('Locate By Alt Text', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://demoblaze.com/');

  // Locate the image by its alt text
  const secondSlide = await page.getByAltText('Second slide');

  // Retrieve attributes of the image
  const clazz = await secondSlide.getAttribute('class');
  const src = await secondSlide.getAttribute('src');

  // Log the results
  console.log('----------------------');
  console.log(`Class: ${clazz}`);
  console.log(`Source: ${src}`);
  console.log('----------------------');
});
