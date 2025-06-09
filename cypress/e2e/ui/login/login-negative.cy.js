import LoginPage from "../../../support/page-objects/login.page.js";

describe("Login Functionality: Negative Test Cases", () => {
  
  let errorMessage;
  let invalidEmail;
  let invalidPassword;
  let validEmail;
  let validPassword;

  before(() => {
    cy.fixture("validation-messages.json").then((data) => {
      errorMessage = data.login;
    });
    cy.fixture("userCredentials.json").then((data) => {
      invalidEmail = data.invalidLoginData.email;
      invalidPassword = data.invalidLoginData.password;
      validEmail = data.validLoginData.email;
      validPassword = data.validLoginData.password;
    });
  });

  beforeEach(() => {
    cy.visit("auth/register");
  });

  it("LOGIN-001] should display error for invalid email and password format", () => {
    LoginPage.login(invalidEmail, invalidPassword);
    LoginPage.assertErrorMessageVisible(errorMessage.INVALID_EMAIL);
  });

  it("[LOGIN-002] should display error when email filed is empty", () => {
    LoginPage.login("", validPassword);
    LoginPage.assertErrorMessageVisible(errorMessage.EMAIL_REQUIRED);
  });

  it("[LOGIN-003] should display error when password field is empty", () => {
    LoginPage.login(validEmail, "");
    LoginPage.assertErrorMessageVisible(errorMessage.PASSWORD_REQUIRED);
  });
});
