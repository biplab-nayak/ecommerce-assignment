import { Page, Locator } from '@playwright/test';

export class OrderConfirmationPageLocators {
  page: Page;


  ThankYouMessage: Locator;
  OrderID: Locator;
  OrderHistoryLink: Locator;
  


  constructor(page: Page) {
    this.page = page;

    // Initialize all locators for Cart Page
    this.ThankYouMessage = page.locator(`//table/tbody/tr/td/h1[text()=' Thankyou for the order. ']`);
    this.OrderID = page.locator('//table/tbody/tr/td/label').last();
    this.OrderHistoryLink = page.getByText('Orders History Page');

  }
}
