const { test, expect } = require('@playwright/test');

test('Locate element using page.getByTestId() and validate success message', async ({ page }) => {
  // Set the HTML content of the page
  await page.setContent(`
    <html>
      <body>
        <button data-testid="register" onclick="addMessage()">Register Me</button>
        <div id="message" style="display: none;">Registration Successful!</div>

        <script>
          function addMessage() {
            const messageDiv = document.getElementById('message');
            messageDiv.style.display = 'block';
          }
        </script>
      </body>
    </html>
  `);

  // Locate the button using its test id and click it
  const button = page.getByTestId('register');
  await button.click();

  // Assert the button is visible
  await expect(button).toBeVisible();

  // Locate the success message and validate its presence
  const message = page.locator('#message');
  await expect(message).toBeVisible();
  await expect(message).toHaveText('Registration Successful!');
});
