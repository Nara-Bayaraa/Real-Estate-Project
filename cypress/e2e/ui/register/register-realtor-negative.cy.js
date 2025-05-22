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
     cy.fixture("userCredentials.json").as("userCredentials");
  });
  it("[REG-REALTOR-NEG-001] should realtor register with a unique (Not previously used) email ", function(){
    RegisterPage.fillRegistrationForm(
      firstName,
      lastName,
     this.userCredentials.valid.email,
      password
    );
    RegisterPage.assertInputErrorMessageIsDisplayed();
  });
});