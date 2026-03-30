import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('testuser', 'password');

  await expect(page).toHaveURL(/dashboard/);
});