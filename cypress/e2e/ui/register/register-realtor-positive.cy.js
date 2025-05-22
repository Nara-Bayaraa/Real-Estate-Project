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
  it("REG-REALTOR-001] should register as realtor when checkbox is checked", () => {
    RegisterPage.checkRegisterRealtor();
    RegisterPage.fillRegistrationForm(firstName, lastName, email, password);
    RegisterPage.assertWelcomeMessageIsDisplayed();
  });
  it("[REG-REALTOR-002] should not register as realtor when checkbox is unchecked", () => {
    RegisterPage.uncheckedRegisterRealtor();
    RegisterPage.verifyRegisterRealtorIsUnchecked();
  });
});
