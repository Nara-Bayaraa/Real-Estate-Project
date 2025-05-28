import RegisterPage from "../../../support/page-objects/register.page.js";
import { firstName,lastName,email, password,} from "../../../support/helpers/generate-user.js";
describe("Register Page: User Negative Test Cases", () => {
  beforeEach(() => {
    cy.visit("auth/register");
    cy.fixture("validation-messages.json").as("message");
    cy.fixture("userCredentials.json").as("userCredential");
  });

  it("[REG-USER-NEG-001] should display error when First Name field is empty", function () {
    RegisterPage.fillRegistrationForm("", lastName, email, password);
    RegisterPage.assertErrorMessageVisible(
      this.message.registration.firstNameRequired
    );
  });

  it("[REG-USER-NEG-002] should display error when Last Name field is empty", function () {
    RegisterPage.fillRegistrationForm(firstName, "", email, password);
    RegisterPage.assertErrorMessageVisible(
      this.message.registration.lastNameRequired
    );
  });

  it("[REG-USER-NEG-003] should display error when Email field is empty", function () {
    RegisterPage.fillRegistrationForm(firstName, lastName, "", password);
    RegisterPage.assertErrorMessageVisible(
      this.message.registration.emailRequired
    );
  });

  it("[REG-USER-NEG-004] should display error when Password field is empty", function () {
    RegisterPage.fillRegistrationForm(firstName, lastName, email, ""); 
    RegisterPage.assertErrorMessageVisible(
      this.message.registration.passwordRequired
    );
  });

  it("[REG-USER-NEG-005] should display errors for all fields when submitting an empty form", function () {
    RegisterPage.fillRegistrationForm("", "", "", "");
    const requiredFields = [
      this.message.registration.firstNameRequired,
      this.message.registration.lastNameRequired,
      this.message.registration.emailRequired,
      this.message.registration.passwordRequired,
    ];
    requiredFields.forEach((msg) => {
      RegisterPage.assertErrorMessageVisible(msg);
    }); 
  });

  it("[REG-USER-NEG-006] should display error when registering with an already registered email", function () {
    RegisterPage.fillRegistrationForm(
      firstName,
      lastName,
      this.userCredential.validLoginData.email,
      password
    );
    RegisterPage.assertInputErrorMessageIsDisplayed();
  });
});
