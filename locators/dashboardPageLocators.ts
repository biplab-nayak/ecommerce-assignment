import { Page, Locator } from '@playwright/test';

export class DashboardPageLocators {
  page: Page;


  SignOutButton: Locator;
  SearchInput: Locator;
  ViewProductButton: Locator;
  AddToCartButton: Locator;
  CartIcon: Locator;


  constructor(page: Page) {
    this.page = page;

    // Initialize all locators for Dashboard Page
    this.SignOutButton = page.getByRole('button', { name: 'Sign Out' });
    this.SearchInput = page.getByRole('textbox', { name: 'search' });
    this.ViewProductButton = page.getByRole('button', { name: 'View' }).first();
    this.AddToCartButton = page.locator(`//h5/b[text()='ADIDAS ORIGINAL']/../following-sibling::button`).last();
    this.CartIcon = page.locator(`//button[@routerlink='/dashboard/cart']`);
  }
}
