import { Before, After, BeforeAll, AfterAll, AfterStep, Status } from '@cucumber/cucumber';
import puppeteer, { BrowserConnectOptions, BrowserLaunchArgumentOptions } from 'puppeteer';
import { Browser } from 'puppeteer';

const { CI } = process.env;

let launchConfig: BrowserConnectOptions & BrowserLaunchArgumentOptions = {
  headless: false,
  slowMo: 200,
};

if (CI) {
  launchConfig = {
    headless: true,
  };
}

let browser: Browser;
BeforeAll(async function () {
  console.log('BeforeAll: Opening browser');

  browser = await puppeteer.launch({
    defaultViewport: { width: 1024, height: 800 },
    ...launchConfig,
  });
});

AfterAll(function () {
  console.log('AfterAll: Closing browser');
  browser.close();
});

Before(function () {
  console.log('After...');
  // @ts-ignore
  this.browser = browser;
});

After(async function () {
  console.log('After Scenario');
  // @ts-ignore
  this.currentPage && (await this.currentPage.close());
});

AfterStep(function ({ result }) {
  // this.page.
  // console.debug(`${this.name} after step`);
  // This hook will be executed after all steps, and take a screenshot on step failure
  // if (result.status === Status.FAILED) {
  //   this.driver.takeScreenshot();
  // }
});
