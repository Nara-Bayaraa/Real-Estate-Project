class LoginPage{
 get emailInput() {
    return cy.get('[name="email"]');
  }
  get passwordInput() {
    return cy.get('[name="password"]');
  }
  get loginBtn() {
    return cy.get('[type="submit"]');
  }
login(email, password) {
  if (email && email.length > 0) {
    this.emailInput.type(email);
  } else {
    this.emailInput.clear();
  }
  if (password && password.length > 0) {
    this.passwordInput.type(password);
  } else {
    this.passwordInput.clear();
  }
  this.loginBtn.click();
}
 assertErrorMessageVisible(expectedMessage) {
    cy.contains(expectedMessage).should("be.visible");
  }
}
export default new LoginPage();