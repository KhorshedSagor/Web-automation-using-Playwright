const { test, expect, beforeAll, afterAll } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
require('dotenv').config() // read variables from .env file

 
 test.describe('Orange HRM Login', () => {
    test('Positive Test - Successful login with valid credentials', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.gotoLoginPage();
      await loginPage.login(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD); 
      await expect(page).toHaveTitle(/OrangeHRM/);
      await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });
  
    test('Negative Test - Unsuccessful login with invalid credentials', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.gotoLoginPage();
      await loginPage.login('invalid_user', 'invalid_password');
      const invalidMessage = page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]');
      await expect(invalidMessage).toHaveText('Invalid credentials');
    });
  
  });




 test.beforeAll(async () => {
     // Delay before all tests start (1 seconds)
     await new Promise((resolve) => setTimeout(resolve, 1000));
 });

 test.afterAll(async () => {
     // Delay after all tests complete (2 seconds)
     await new Promise((resolve) => setTimeout(resolve, 2000));
 });