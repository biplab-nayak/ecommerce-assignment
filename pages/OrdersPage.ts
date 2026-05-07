import { Page } from '@playwright/test';
import { LoginPageLocators } from '../locators/loginPageLocators';
import testData from '../testData.json';
import { DashboardPageLocators } from '../locators/dashboardPageLocators';
import { CartPageLocators } from '../locators/cartPageLocators';
import { OrderConfirmationPageLocators } from '../locators/orderConfirmationPageLocators';
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
