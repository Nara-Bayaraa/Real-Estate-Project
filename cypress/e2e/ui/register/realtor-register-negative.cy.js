import {
  firstName,
  lastName,
  password,
} from "../../../support/helpers/generate-user.js";
import RegisterPage from "../../../support/page-objects/register.page.js";

describe("Register Page: Realtor Negative Test Cases", () => {
  let errorMessage;
  // errorMessage holds the "registration" messages from validation-messages.json
  const existingEmail = Cypress.env("userEmail");
  // existingEmail holds USER_EMAIL from .env, an email that is already registered

  before(() => {
    cy.fixture("validation-messages.json").then((data) => {
      errorMessage = data.registration;
      // data.registration holds all register-page error texts
    });
  });

  beforeEach(() => {
    cy.visit("auth/register");
  });

  it("[REG-REALTOR-003] should display error when attempting to register with an already registered email", () => {
    RegisterPage.checkRegisterRealtor();
    // ticks the "register as realtor" checkbox, so this is a real realtor attempt
    RegisterPage.fillRegistrationForm(
      firstName,
      lastName,
      existingEmail,
      password,
    );
    // fills the form with random names/password and the already-used email
    RegisterPage.clickRegisterButton();
    // submits the form, which was the missing step
    RegisterPage.assertInputErrorMessageIsDisplayed(
      errorMessage.INPUT_DATA_FAILED,
    );
    // expects the same "already registered" alert that REG-USER-006 checks
  });
});
