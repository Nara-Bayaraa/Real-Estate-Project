import RegisterPage from "../../../support/page-objects/register.page.js";
import {firstName,lastName, email, password,} from "../../../support/helpers/generate-user.js";

describe("Register Page: Realtor Negative Test Cases", () => {
  let errorMessage;
  let existingEmail

  beforeEach(() => {
    cy.visit("auth/register");
    
    cy.fixture("validation-messages.json").then((data) => {
      errorMessage = data.registration;
    });

      cy.fixture("userCredentials.json").then((data) => {
      existingEmail = data.validLoginData.email;
    });
  });

  it("[REG-REALTOR-001] Should display error when attempting to register with an already registered email",()=>{
    RegisterPage.fillRegistrationForm(
      firstName,
      lastName,
      existingEmail,
      password
    );
    RegisterPage.assertInputErrorMessageIsDisplayed(
      errorMessage.EMAIL_REQUIRED);
  });
});
  //add more negative test cases 