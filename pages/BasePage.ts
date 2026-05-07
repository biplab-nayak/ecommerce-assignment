import { Page } from '@playwright/test';

/**
 * Base Page class for common page operations
 * All page objects should extend this class
 */
export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async waitForNavigation(url: string, timeout: number = 5000) {
    await this.page.waitForURL(url, { timeout });
  }

  async waitForElement(selector: string, timeout: number = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  async getTitle() {
    return await this.page.title();
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async takeScreenshot(fileName: string) {
    await this.page.screenshot({ path: `screenshots/${fileName}.png` });
  }
}
