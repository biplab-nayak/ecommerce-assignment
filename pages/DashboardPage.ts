import { Page } from '@playwright/test';
import { LoginPageLocators } from '../locators/loginPageLocators';
import testData from '../testData.json';
import { DashboardPageLocators } from '../locators/dashboardPageLocators';

export class DashboardPage {
  page: Page;
  locators: DashboardPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new DashboardPageLocators(page);
  }

  // Methods

  async addProductToCart() {
    // Add first product to the cart
    await this.locators.AddToCartButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async viewCart() {
    // Click on Cart Icon to view cart
    await this.locators.CartIcon.click();
    await this.page.waitForLoadState('networkidle');
  }


  async getCurrentUrl() {
    return this.page.url();
  }

  async signout() {
    // Click Sign Out button
    await this.locators.SignOutButton.click();
  }
}
