import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import testData from '../../testData.json';


let loginPage: LoginPage;
let dashboardPage: DashboardPage; 

test.beforeEach(async ({ page }) => {
    // Initialize Login Page
  loginPage = new LoginPage(page);

  // Initialize Dashboard Page
    dashboardPage = new DashboardPage(page); 

  // Navigate to Login Page
  await loginPage.navigateToLoginPage();
  // Verify Login Page is visible
  expect(await loginPage.isLoginPageVisible()).toBeTruthy();
  
  
});

test('Successful Login Test', async ({ page }) => {
    // Perform login with valid credentials
  await loginPage.loginWithValidCredentials();
  // Verify successful login
  await loginPage.waitForNavigation(testData.urls.dashboard);
  const currentUrl = await loginPage.getCurrentUrl();
  expect(currentUrl).toBe(testData.urls.dashboard);
  await dashboardPage.signout();
  
});

test('Unsuccessful Login Test', async ({ page }) => {
    // Perform login with invalid credentials
  await loginPage.loginWithInvalidCredentials();
  await page.waitForLoadState('networkidle');
  const currentUrl = await loginPage.getCurrentUrl();
  expect(currentUrl).not.toBe(testData.urls.dashboard);
  expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
});
