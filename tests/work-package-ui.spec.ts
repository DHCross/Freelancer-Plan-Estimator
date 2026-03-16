import { test, expect } from '@playwright/test';

test('Verify Work Package Planner and Finance', async ({ page }) => {
  // Navigate to dashboard
  await page.goto('http://localhost:3000');

  // Login
  await page.fill('input[type="password"]', 'hoskbrew');
  await page.click('button[type="submit"]');

  // Wait for dashboard to load
  await expect(page.locator('text=Production Health')).toBeVisible();

  // Navigate to Planning -> Work Packages
  await page.click('text=Planning');
  // It defaults to "Work Packages" now based on my change
  await expect(page.locator('text=Work Packages')).toBeVisible();

  // Verify Create Button exists
  await expect(page.locator('button:has-text("New Package")')).toBeVisible();

  // Create a new package
  await page.click('button:has-text("New Package")');
  await page.selectOption('select:has-text("Select Project...")', { index: 1 }); // Select first project
  await page.fill('input[value=""]', 'Test Feature A'); // Title
  await page.click('button:has-text("Create")');

  // Verify it appears in list
  await expect(page.locator('h3:has-text("Test Feature A")')).toBeVisible();

  // Navigate to Finance
  await page.click('text=Finance');
  await expect(page.locator('text=Development Cost')).toBeVisible();

  // Verify Development Cost is auto-populated (check for "Auto-populated" badge)
  await expect(page.locator('text=Auto-populated')).toBeVisible();

  // Take screenshot
  await page.screenshot({ path: 'work_package_verification.png', fullPage: true });
});
