import { Page } from '@playwright/test';
import { CartPageLocators } from '../locators/cartPageLocators';

export class CartPage {
  page: Page;
  locators: CartPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new CartPageLocators(page);
  }

  // Methods

  async clickCheckoutButton() {
    // Click on Checkout button
    await this.locators.CheckoutButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}
