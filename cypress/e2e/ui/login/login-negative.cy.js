import LoginPage from "../../../support/page-objects/login.page.js";
describe("Login Functionality: Negative Test Cases", () => {
  beforeEach(() => {
    cy.visit("auth/login");
     cy.fixture("userCredentials.json").as("userCredential");
    cy.fixture("validation-messages.json").as("message");
  });

  it("LOGIN-NEG-001] should display error for invalid email and password format", function () {
    LoginPage.login(
      this.userCredential.invalidLoginData.email,
      this.userCredential.invalidLoginData.password
    );
    LoginPage.assertErrorMessageVisible(this.message.login.invalidEmail)
  });

  it("[LOGIN-NEG-002] should display error when email filed is empty", function () {
    LoginPage.login("" , this.userCredential.validLoginData.password);
       LoginPage.assertErrorMessageVisible(this.message.login.emailRequired);
  });

  it("[LOGIN-NEG-003] should display error when password field is empty", function () {
    LoginPage.login(this.userCredential.validLoginData.email, "" );
    LoginPage.assertErrorMessageVisible(this.message.login.passwordRequired);
  });
});
