class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.locator('[name="username"]');
    this.password_textbox = page.locator('[name="password"]');
    this.login_button = page.locator('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
  }


  async gotoLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
  }


  async login(username, password) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}

module.exports = LoginPage;
