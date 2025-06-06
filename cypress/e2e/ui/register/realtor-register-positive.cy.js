import RegisterPage from "../../../support/page-objects/register.page.js";
import {firstName, lastName, email, password,} from "../../../support/helpers/generate-user.js";

describe("Register Page: Realtor Positive Test Cases", () => {

  beforeEach(() => {
    cy.visit("auth/register");
  });

  it("[REG-REALTOR-001] should register as a realtor when the checkbox is checked and display a welcome message", () => {
    RegisterPage.checkRegisterRealtor();
    RegisterPage.fillRegistrationForm(firstName, lastName, email, password);
    RegisterPage.assertWelcomeMessageIsDisplayed();
  });

  it("[REG-REALTOR-002] should keep realtor registration option unchecked when the checkbox is not selected", () => {
    RegisterPage.uncheckedRegisterRealtor();
    RegisterPage.verifyRegisterRealtorIsUnchecked();
  });
});
