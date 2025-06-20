import RegisterPage from "../../../support/page-objects/register.page.js";
import {firstName, lastName, email, password,} from "../../../support/helpers/generate-user.js";

describe("Register Page: User Positive Test Cases", () => {

  beforeEach(() => {
    cy.visit("auth/register");
  });

  it("[REG-USER-001] should allow user to input all required registration fields and verify values", () => {
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

  it("[REG-USER-002] should register user with valid new credentials and redirect to profile page", () => {
    RegisterPage.fillRegistrationForm(firstName, lastName, email, password);
    RegisterPage.clickRegisterButton()
    cy.url().should("include", "dashboard/user/profile");
  });
  
  it.only("[REG-USER-003] should toggle password visibility on the registration form", () => {
     RegisterPage.fillRegistrationForm(firstName, lastName, email, password);
    RegisterPage.verifyPasswordVisibilityToggleShowsPassword();
    RegisterPage.verifyPasswordVisibilityToggleHidesPassword();
  });
});
