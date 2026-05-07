import { Page, Locator } from '@playwright/test';

export class CheckoutPageLocators {
  page: Page;


  SelectCountryInput: Locator;
  SelectCountryDropdownOption: Locator;
  PlaceOrderButton: Locator;
  SpaceAbovePlaceOrderButton: Locator;
  MessageAfterAddingShippingInfo: Locator;
  


  constructor(page: Page) {
    this.page = page;

    // Initialize all locators for Checkout Page
    this.SelectCountryInput = page.getByRole('textbox', { name: 'Select Country' });
    this.PlaceOrderButton = page.locator(`//a[text()='Place Order ']`);
    this.SpaceAbovePlaceOrderButton = page.locator('.actions');
    this.MessageAfterAddingShippingInfo = page.locator('div').filter({ hasText: 'Product Added To Cart' }).nth(2);
    this.SelectCountryDropdownOption = page.getByRole('button', { name: /India/i }).last();
  }
}
