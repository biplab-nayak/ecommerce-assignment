import { expect, Page } from '@playwright/test';
import { LoginPageLocators } from '../locators/loginPageLocators';
import testData from '../testData.json';
import { DashboardPageLocators } from '../locators/dashboardPageLocators';
import { CartPageLocators } from '../locators/cartPageLocators';
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
    // await this.locators.SelectCountryInput.press('ArrowDown');
    // await this.locators.SelectCountryInput.press('ArrowDown');
    // await this.locators.SelectCountryInput.press('Enter');
    // await this.page.waitForLoadState('networkidle');
    // expect(await this.locators.MessageAfterAddingShippingInfo).toBeHidden();
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
