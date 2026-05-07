import { Page, Locator } from '@playwright/test';

export class OrdersPageLocators {
  page: Page;

  AllOrderIDs: Locator;
  


  constructor(page: Page) {
    this.page = page;

    // Initialize all locators for Cart Page
    this.AllOrderIDs = page.locator('//table/tbody/tr/th');

  }
}
