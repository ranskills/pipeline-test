import { Given, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { Page } from 'puppeteer';

Given('a user is on the login page', async function () {
  // @ts-ignore
  const page: Page = await this.gotoPage('http://localhost:3000');

  // let elem = await page.waitForSelector('h1');
  const text = await page.$eval('body > div > h1', (elem) => elem.textContent);

  assert.strictEqual('Hello, World!', text);
  // assert.strictEqual('Example Domain', await page.title());
});

Given(
  'enters the username {string} and password {string}',
  async function (username: string, password: string) {}
);

Given('presses the login button', function () {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
});

Then('the login should succeed and user shown the starting page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
