import { test, expect } from "@playwright/test";

test("Locate Multiple Paragraphs", async ({ page }) => {
    // Navigate to the target webpage
    await page.goto("https://demoblaze.com/");
  
    // Ensure all <p> elements are present in the DOM
    await page.waitForSelector("p");
  
    // Retrieve all matching <p> elements
    const paragraphElements = await page.$$("p");
    console.log(`Total Paragraphs: ${paragraphElements.length}`);
  
    // Iterate through the elements and log their text content
    for (let para of paragraphElements) {
      const textContent = await para.textContent();
      console.log("______________________________");
      console.log(`${textContent}\n`);
      console.log("______________________________");
    }
  });
  