const { test, expect } = require('@playwright/test');

test('Locate element by title using page.getByTitle()', async ({ page }) => {
  // Set the HTML content of the page
  await page.setContent(`
    <html>
      <body>
        <span title="Issues count">25 issues</span>
      </body>
    </html>
  `);

  // Locate the element by its title attribute
  const element = page.getByTitle('Issues count');

  // Assert the text content of the element
  await expect(element).toHaveText('25 issues');
});
