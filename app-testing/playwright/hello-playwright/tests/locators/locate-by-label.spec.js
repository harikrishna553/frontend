const { test, expect } = require('@playwright/test');

test('Form Submission Test with Labels', async ({ page }) => {
  // Set sample HTML content
  await page.setContent(`
    <form id="register-form">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" />

      <label for="password">Password</label>
      <input type="password" id="password" name="password" />

      <label for="confpassword">Confirm Secret</label>
      <input type="password" id="confpassword" name="confpassword" />

      <button type="submit">Register</button>
      <p id="success-message" style="display: none;">Registration Successful!</p>
    </form>
    <script>
      document.querySelector('#register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('#success-message').style.display = 'block';
      });
    </script>
  `);

  // Fill out the form using labels
  await page.getByLabel('Username').fill('testuser');
  await page.getByLabel('Password').fill('password123');
  await page.getByLabel('Confirm Secret').fill('password123');

  // Click the Register button
  await page.locator('button:has-text("Register")').click();

  // Verify the success message
  const successMessage = await page.locator('#success-message');
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toHaveText('Registration Successful!');
});
