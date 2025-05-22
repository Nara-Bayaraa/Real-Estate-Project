import LoginPage from "../../../support/pageObjects/login.page.js";

describe("Login Negative Tests", () => {
  beforeEach(() => {
    cy.visit("auth/login");
     cy.fixture("userCredentials.json").as("userCredentials");
    cy.fixture("validationMessages.json").as("message");
  });

  it.only("Should not login with invalid Email and Password format", function () {
    LoginPage.login(
      this.userCredentials.invalidFormat.email,
      this.userCredentials.invalidFormat.password
    );
    LoginPage.assertErrorMessageVisible(this.message.emailMustValid)
  });

  it("Should not login with null Email and Password", function () {
    LoginPage.login("", this.userCredentials.valid.password);
       LoginPage.assertErrorMessageVisible(this.message.emailRequired);
  });

  it("Should not login with null Email and Password", function () {
    LoginPage.login(this.userCredentials.valid.email, "");
    LoginPage.assertErrorMessageVisible(this.message.passwordRequired);
  });
});
