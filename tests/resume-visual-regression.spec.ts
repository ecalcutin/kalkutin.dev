import { test, expect } from '@playwright/test';

test('renders resume page with stable layout', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100, fullPage: true });
});
