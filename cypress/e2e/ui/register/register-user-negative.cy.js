import RegisterPage from "../../../support/pageObjects/register.page.js";
import {
  firstName,
  lastName,
  email,
  password,
} from "../../../support/helpers/generateUser.js";
describe("Register-page negative-tests ", () => {
  beforeEach(() => {
    cy.visit("auth/register");
    cy.fixture("validationMessages.json").as("message");
    cy.fixture("userCredentials.json").as("userCredentials");
  });

  it("[LOGOUT-NEG-001] Should required field errors should appear when submitting the Registration Form empty First name field", function () {
    RegisterPage.fillRegistrationForm("", lastName, email, password);
    RegisterPage.assertErrorMessageVisible(
      this.message.firstNameRequired
    );
  });

  it("[LOGOUT-NEG-002] Should required field errors should appear when submitting the Registration Form empty Last name field", function () {
    RegisterPage.fillRegistrationForm(firstName, "", email, password);
    RegisterPage.assertErrorMessageVisible(
      this.message.lastNameRequired
    );
  });
  it("[LOGOUT-NEG-003] Should required field errors should appear when submitting the Registration Form empty Email address field ", function () {
    RegisterPage.fillRegistrationForm(firstName, lastName, "", password);
    RegisterPage.assertErrorMessageVisible(
      this.message.emailRequired
    );
  });

  it("[LOGOUT-NEG-004] Should required field errors should appear when submitting the Registration Form empty Password field ", function () {
    RegisterPage.fillRegistrationForm(firstName, lastName, email, ""); 
    RegisterPage.assertErrorMessageVisible(
      this.message.passwordRequired
    );
  });

  it("[LOGOUT-NEG-005] required field errors should appear when submitting the Registration Form without input ", function () {
    RegisterPage.fillRegistrationForm("", "", "", "");
    const requiredFields = [
      this.message.firstNameRequired,
      this.message.lastNameRequired,
      this.message.emailRequired,
      this.message.passwordRequired,
    ];
    requiredFields.forEach((msg) => {
      RegisterPage.assertErrorMessageVisible(msg);
    }); 
  });

  it("[REG-UI-NEG-001]should register with a unique (Not previously used) email", function () {
    RegisterPage.fillRegistrationForm(
      firstName,
      lastName,
      this.userCredentials.valid.email,
      password
    );
    RegisterPage.assertInputErrorMessageIsDisplayed();
  });
});
