import { test, expect } from 'playwright/test';

test('homepage should have h1 with "FrontDev"', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Remplace par l'URL correcte si nécessaire
  const h1 = await page.locator('h1');
  await expect(h1).toHaveText('FrontDev');
});
