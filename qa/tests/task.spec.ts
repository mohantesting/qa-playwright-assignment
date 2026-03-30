import { test, expect } from '@playwright/test';

test('Create Task', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // login first (reuse later properly)
  
  await page.click('text=New Task');
  await page.fill('input[placeholder="Task title"]', 'My Task');
  await page.click('text=Save');

  await expect(page.locator('text=My Task')).toBeVisible();
});