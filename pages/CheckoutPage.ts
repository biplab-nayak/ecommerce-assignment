import { expect, Page } from '@playwright/test';
import { CheckoutPageLocators } from '../locators/checkoutPageLocators';

export class CheckoutPage {
  page: Page;
  locators: CheckoutPageLocators;


  constructor(page: Page) {
    this.page = page;
    this.locators = new CheckoutPageLocators(page);
  }

  // Methods

  async selectCountry(country: string) {
    // Click on Checkout button
    await this.locators.SelectCountryInput.pressSequentially(country, { delay: 100 });
    await this.page.waitForLoadState('networkidle');
    await this.locators.SelectCountryDropdownOption.click();
    await this.page.waitForLoadState('networkidle');
  }

    async placeOrder() {    
    // Click on Place Order button
    await this.locators.PlaceOrderButton.click({ force: true });
    await this.page.waitForLoadState('networkidle');
  }

  async clickOnSpaceAbovePlaceOrderButton() {
    // Click on the space above Place Order button to trigger any potential UI issues
    await this.locators.SpaceAbovePlaceOrderButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}
