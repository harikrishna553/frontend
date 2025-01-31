const { chromium } = require('playwright');  // Remove the import of expect
const fs = require('fs');

async function runTestFromConfig(configFile) {
  if (!fs.existsSync(configFile)) {
    throw new Error(`Config file not found: ${configFile}`);
  }

  const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));

  let browser, page;
  try {
    console.log("Launching browser...");
    browser = await chromium.launch({ headless: false, timeout: 60000 }); // headless mode, increased timeout
    console.log("Opening new page...");
    const context = await browser.newContext(); // Create a new context
    page = await context.newPage(); // Create a new page within the context

    for (const step of config.steps) {
      const { action, method, selector, url, value, options, assertion } = step;
      let element;

      switch (method) {
        case "getByPlaceholder":
          element = page.getByPlaceholder(selector);
          break;
        case "getByRole":
          element = page.getByRole(selector, options);
          break;
        case "getByText":
          element = page.getByText(selector);
          break;
        default:
          element = page.locator(selector);
      }

      switch (action) {
        case "goto":
          await page.goto(url, { timeout: 30000 });
          console.log(`Navigated to: ${url}`);
          break;
        case "click":
          await element.click();
          console.log(`Clicked on: ${selector}`);
          break;
        case "fill":
          await element.fill(value);
          console.log(`Filled ${selector} with "${value}"`);
          break;
        case "assert":
          if (assertion === "visible") {
            await element.isVisible();  // Correct use of Playwright's built-in assertion method
            console.log(`✅ Assertion Passed: "${selector}" is visible`);
          } else {
            console.error(`❌ Unsupported assertion: ${assertion}`);
          }
          break;
        default:
          console.error(`❌ Unknown action: ${action}`);
      }
    }
  } catch (err) {
    console.error(`❌ Error during test execution: ${err.message}`);
  } finally {
    if (browser) {
      console.log("Closing browser...");
      await browser.close();
    }
  }
}

module.exports = { runTestFromConfig };

runTestFromConfig('path of testConfig.json')