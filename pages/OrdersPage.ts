import { Page } from '@playwright/test';
import { OrdersPageLocators } from '../locators/ordersPageLocators';

export class OrdersPage {
  page: Page;
  locators: OrdersPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new OrdersPageLocators(page);
  }

  // Methods

  async fetchAllOrderIDs() {
    // Fetch all order IDs
    const orderIDs = await this.locators.AllOrderIDs.allInnerTexts();
    return orderIDs;
  }
}
