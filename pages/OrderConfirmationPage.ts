import { Page } from '@playwright/test';
import { LoginPageLocators } from '../locators/loginPageLocators';
import testData from '../testData.json';
import { DashboardPageLocators } from '../locators/dashboardPageLocators';
import { CartPageLocators } from '../locators/cartPageLocators';
import { OrderConfirmationPageLocators } from '../locators/orderConfirmationPageLocators';

export class OrderConfirmationPage {
  page: Page;
  locators: OrderConfirmationPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new OrderConfirmationPageLocators(page);
  }

  // Methods

  async validateOrderConfirmationPage() {
    // Validate order confirmation page
    await this.locators.ThankYouMessage.waitFor({ state: 'visible' });
  }
  async fetchOrderID() {
    // Fetch Order ID
    const orderIDText = await this.locators.OrderID.innerText();
    const orderID = orderIDText.split("|")[1].trim();
   
    console.log('Order ID:', orderID);
    return orderID;
  }

  async navigateToOrderHistory() {
    // Click on Order History Link
    await this.locators.OrderHistoryLink.click();
  }
}
