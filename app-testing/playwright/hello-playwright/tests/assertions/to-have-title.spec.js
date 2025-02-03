import { test, expect } from '@playwright/test';

test('Test Page Title', async ({page}) => {
    await page.goto('https://demoblaze.com/')
    
    await expect(page).toHaveTitle('STORE')
})