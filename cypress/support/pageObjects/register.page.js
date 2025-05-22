class RegisterPage {
  get firstNameInput() {
    return cy.get('[name="firstName"]');
  }
  get lastNameInput() {
    return cy.get('[name="lastName"]');
  }
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get passwordInput() {
    return cy.get('[name="password"]');
  }
  get registerButton() {
    return cy.get('[type="submit"]');
  }
  get passwordVisibilityToggleShow() {
    return cy.get('[class*="MuiButtonBase-root MuiIconButton" ]');
  }
  get verifyPasswordVisibilityToggleHide() {
    return cy.get('[class*="MuiInputAdornment"]');
  }
  get errorMessage() {
    return cy.get('[class="MuiAlert-message css-2shwac"]');
  }
  get firstNameRequired() {
    return cy.get('[id=":r8:-helper-text"]');
  }
  get lastNameRequired() {
    return cy.get('[id=":r9:-helper-text"]');
  }
  get emailAddressRequired() {
    return cy.get('[id=":ra:-helper-text"]');
  }
  get passwordRequired() {
    return cy.get('[id=":rb:-helper-text"]');
  }
  get registerRealtorCheckBox() {
    return cy.get('[class*="PrivateSwitchBase-input"]');
  }
  get welcomeMessage() {
    return cy.get('[id=":r0:"]');
  }
  fillFirstName(firstName) {
    if (firstName && firstName.length > 0) {
      this.firstNameInput.type(firstName);
    } else {
      this.firstNameInput.clear();
    }
  }
  fillLastName(lastName) {
    if (lastName && lastName.length > 0) {
      this.lastNameInput.type(lastName);
    } else {
      this.lastNameInput.clear();
    }
  }
  fillEmail(email) {
    if (email && email.length > 0) {
      this.emailInput.type(email);
    } else {
      this.emailInput.clear();
    }
  }
  fillPassword(password) {
    if (password && password.length > 0) {
      this.passwordInput.type(password);
    } else {
      this.passwordInput.clear();
    }
  }
  assertRegisterFieldsContainValues(
    expectedFirstName,
    expectedLastName,
    expectedEmail,
    expectedPassword
  ) {
    this.firstNameInput.should("have.value", expectedFirstName);
    this.lastNameInput.should("have.value", expectedLastName);
    this.emailInput.should("have.value", expectedEmail);
    this.passwordInput.should("have.value", expectedPassword);
  }

  fillRegistrationForm(firstName, lastName, email, password) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillEmail(email);
    this.fillPassword(password);
    this.registerButton.click();
  }

  submitRegistrationForm() {
    this.registerButton.click();
  }

  assertInputErrorMessageIsDisplayed(expectedMessage) {
    this.errorMessage.should("be.visible", expectedMessage);
  }

  verifyPasswordVisibiltyToggleVisible() {
    this.passwordVisibilityToggleShow.should("be.visible");
  }

  verifyPasswordVisibilityToggleShowsPassword(expectedValue) {
    this.passwordVisibilityToggleShow.click();
    this.passwordInput.should("have.value", expectedValue);
  }

  verifyPasswordVisibilityToggleHidesPassword() {
    this.verifyPasswordVisibilityToggleHide.click();
    this.passwordInput.should("be.visible");
  }

 assertErrorMessageVisible(expectedMessage) {
    cy.contains(expectedMessage).should("be.visible");
  }

  checkRegisterRealtor() {
    this.registerRealtorCheckBox.check();
  }

  assertWelcomeMessageIsDisplayed(expectedMessage) {
    this.welcomeMessage.should("be.visible", expectedMessage);
  }

  checkRegisterRealtor() {
    this.registerRealtorCheckBox.check();
  }

  uncheckedRegisterRealtor() {
    this.registerRealtorCheckBox.uncheck();
  }

  verifyRegisterRealtorIsChecked() {
    this.registerRealtorCheckBox.should("be.checked");
  }
  
  verifyRegisterRealtorIsUnchecked() {
    this.registerRealtorCheckBox.should("not.be.checked");
  }
}
export default new RegisterPage();
