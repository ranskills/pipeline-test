import { setWorldConstructor, World } from '@cucumber/cucumber';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

export class CustomWorld extends World {
  //   driver = new seleniumWebdriver.Builder().forBrowser('firefox').build();
  // @ts-ignore
  public browser: Browser;
  // @ts-ignore
  public currentPage: Page;

  constructor(options: any) {
    super(options);
    let ctxt: BrowserContext;
  }

  public async gotoPage(url: string): Promise<puppeteer.Page> {
    console.debug(`# of opened pages ${this.browser.pages.length}`);
    const page = await this.browser.newPage();
    await page.goto(url);

    this.currentPage = page;
    return page;
  }

  // Returns a promise that resolves to the element
  //   async waitForElement(locator) {
  //     const condition = seleniumWebdriver.until.elementLocated(locator);
  //     return await this.driver.wait(condition);
  //   }
}

setWorldConstructor(CustomWorld);
