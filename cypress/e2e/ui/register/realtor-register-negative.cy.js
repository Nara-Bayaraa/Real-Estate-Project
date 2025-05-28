import RegisterPage from "../../../support/page-objects/register.page.js";
import {firstName,lastName, email, password,} from "../../../support/helpers/generate-user.js";
describe("Register Page: Realtor Negative Test Cases", () => {
  beforeEach(() => {
    cy.visit("auth/register");
     cy.fixture("userCredentials.json").as("userCredential");
  });

  it("[REG-REALTOR-NEG-001] Should display error when attempting to register with an already registered email", function(){
    RegisterPage.fillRegistrationForm(
      firstName,
      lastName,
      this.userCredential.validLoginData.email,
      password
    );
    RegisterPage.assertInputErrorMessageIsDisplayed();
  });
});