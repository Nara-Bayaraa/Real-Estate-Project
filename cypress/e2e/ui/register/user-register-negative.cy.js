import RegisterPage from "../../../support/page-objects/register.page.js";
import {
  firstName,
  lastName,
  email,
  password,
} from "../../../support/helpers/generate-user.js";
describe("Register Page: User Negative Test Cases", () => {
  let errorMessage;
  let existingEmail;

  beforeEach(() => {
    cy.visit("auth/register");

    cy.fixture("validation-messages.json").then((data) => {
      errorMessage = data.registration;
    });

    cy.fixture("userCredentials.json").then((data) => {
      existingEmail = data.validLoginData.email;
    });
  });

  it("[REG-USER-001] should display error when First Name field is empty", () => {
    RegisterPage.fillRegistrationForm("", lastName, email, password);
    RegisterPage.assertErrorMessageVisible(errorMessage.FIRSTNAME_REQUIRED);
  });

  it("[REG-USER-002] should display error when Last Name field is empty", () => {
    RegisterPage.fillRegistrationForm(firstName, "", email, password);
    RegisterPage.assertErrorMessageVisible(errorMessage.LASTNAME_REQUIRED);
  });

  it("[REG-USER-003] should display error when Email field is empty", () => {
    RegisterPage.fillRegistrationForm(firstName, lastName, "", password);
    RegisterPage.assertErrorMessageVisible(errorMessage.EMAIL_REQUIRED);
  });

  it("[REG-USER-004] should display error when Password field is empty", () => {
    RegisterPage.fillRegistrationForm(firstName, lastName, email, "");
    RegisterPage.assertErrorMessageVisible(errorMessage.PASSWORD_REQUIRED);
  });

  it("[REG-USER-005] should display errors for all fields when submitting an empty form", () => {
    RegisterPage.fillRegistrationForm("", "", "", "");
    const requiredFields = [
      errorMessage.FIRSTNAME_REQUIRED,
      errorMessage.LASTNAME_REQUIRED,
      errorMessage.EMAIL_REQUIRED,
      errorMessage.PASSWORD_REQUIRED,
    ];
    requiredFields.forEach((errorMessages) => {
      RegisterPage.assertErrorMessageVisible(errorMessages);
    });
  });

  it("[REG-USER-006] should display error when registering with an already registered email", () => {
    RegisterPage.fillRegistrationForm(
      firstName,
      lastName,
      existingEmail,
      password
    );
    RegisterPage.assertInputErrorMessageIsDisplayed(
      errorMessage.INPUT_DATA_FAILED
    );
  });
});
