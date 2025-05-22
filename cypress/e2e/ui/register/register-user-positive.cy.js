import RegisterPage from "../../../support/pageObjects/register.page.js";
import {
  firstName,
  lastName,
  email,
  password,
} from "../../../support/helpers/generateUser.js";

describe("Register Page - Positive Scenarios", () => {
  beforeEach(() => {
    cy.visit("auth/register");
  });

  it("[REG-UI-POS-001] should allow user to enter all required fields in register form", () => {
    RegisterPage.fillFirstName(firstName);
    RegisterPage.fillLastName(lastName);
    RegisterPage.fillEmail(email);
    RegisterPage.fillPassword(password);
    RegisterPage.assertRegisterFieldsContainValues(
      firstName,
      lastName,
      email,
      password
    );
  });

  it("[REG-UI-POS-002] should user register with new credentials ", () => {
    RegisterPage.fillRegistrationForm(firstName, lastName, email, password);
    cy.url().should("include", "dashboard/user/profile");
  });
  
  it("[REG-UX-POS-003] verify password visibility toggle works", () => {
    RegisterPage.fillFirstName(firstName);
    RegisterPage.fillLastName(lastName);
    RegisterPage.fillEmail(email);
    RegisterPage.fillPassword(password);
    RegisterPage.verifyPasswordVisibilityToggleShowsPassword(password);
    RegisterPage.verifyPasswordVisibilityToggleHidesPassword();
  });
});
