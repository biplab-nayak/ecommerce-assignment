import { Page, Locator } from '@playwright/test';

export class CartPageLocators {
  page: Page;


  CheckoutButton: Locator;
  


  constructor(page: Page) {
    this.page = page;

    // Initialize all locators for Cart Page
    this.CheckoutButton = page.getByRole('button', { name: 'Checkout❯' });
  }
}
