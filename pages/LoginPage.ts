import { Page } from '@playwright/test';
import { LoginPageLocators } from '../locators/loginPageLocators';
import testData from '../testData.json';

export class LoginPage {
  page: Page;
  locators: LoginPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new LoginPageLocators(page);
  }

  // Methods
  async navigateToLoginPage() {
    await this.page.goto('');
  }

  async waitForNavigation(url: string, timeout: number = 15000) {
    await this.page.waitForURL(url, { timeout });
  }

  async enterEmail(email: string) {
    await this.locators.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.locators.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.locators.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async loginWithValidCredentials() {
    const user = testData.validCredentials;
    await this.login(user.email, user.password);
    await this.page.waitForLoadState('networkidle');
  }

  async loginWithInvalidCredentials() {
    const invalidUser = testData.invalidCredentials;
    await this.login(invalidUser.email, invalidUser.password);
    await this.page.waitForLoadState('networkidle');
  }


  async isErrorMessageVisible() {
    return await this.locators.unsuccessfulErrorMessage.isVisible();
  }

  async isLoginPageVisible() {
    return await this.locators.emailInput.isVisible() && 
           await this.locators.passwordInput.isVisible() && 
           await this.locators.loginButton.isVisible();
  }

  async getEmailValidationMessage() {
    return await this.locators.emailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
  }

  async getPasswordValidationMessage() {
    return await this.locators.passwordInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
  }

//   async logout() {
//     // Click on account dropdown/menu
//     await this.locators.accountDropdown.click();
//     // Click logout option
//     await this.locators.logoutButton.click();
//     // Wait for redirect to login page
//     await this.waitForNavigation(testData.urls.loginPage);
//   }
}
