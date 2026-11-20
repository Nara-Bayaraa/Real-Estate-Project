import LoginPage from "../../../support/page-objects/login.page.js";

describe("Login Functionality: Negative Test Cases", () => {
  let errorMessage;
  let invalidEmail;
  let invalidPassword;
  const validEmail = Cypress.env("userEmail");
  // validEmail holds USER_EMAIL from .env
  const validPassword = Cypress.env("userPassword");
  // validPassword holds USER_PASSWORD from .env

  before(() => {
    cy.fixture("validation-messages.json").then((data) => {
      errorMessage = data.login;
      // errorMessage holds the login error texts from validation-messages.json
    });
    cy.fixture("userCredentials.json").then((data) => {
      invalidEmail = data.invalidLoginData.email;
      // invalidEmail holds the fake "wrongexample.com" from the fixture
      invalidPassword = data.invalidLoginData.password;
      // invalidPassword holds the fake "WrongPassword123" from the fixture
    });
  });

  beforeEach(() => {
    cy.visit("auth/login");
  });

  it("[LOGIN-002] should display error for invalid email and password format", () => {
    LoginPage.login(invalidEmail, invalidPassword);
    LoginPage.assertErrorMessageVisible(errorMessage.INVALID_EMAIL);
  });

  it("[LOGIN-003] should display error when email field is empty", () => {
    LoginPage.login("", validPassword);
    LoginPage.assertErrorMessageVisible(errorMessage.EMAIL_REQUIRED);
  });

  it("[LOGIN-004] should display error when password field is empty", () => {
    LoginPage.login(validEmail, "");
    LoginPage.assertErrorMessageVisible(errorMessage.PASSWORD_REQUIRED);
  });
});