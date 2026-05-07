import { Page, Locator } from '@playwright/test';

export class LoginPageLocators {
  page: Page;

  // Login Page Locators
  emailInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  unsuccessfulErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize all locators for Login Page
    this.emailInput = page.locator('input[id="userEmail"]');
    this.passwordInput = page.locator('input[id="userPassword"]');
    this.loginButton = page.locator('input[type="submit"]');
    this.unsuccessfulErrorMessage = page.getByRole('alert', { name: 'Incorrect email or password.' });
  }
}
