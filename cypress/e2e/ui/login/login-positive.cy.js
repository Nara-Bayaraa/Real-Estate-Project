import LoginPage from "../../../support/page-objects/login.page.js";
describe("Login Functionality: Positive Test Cases", () => {
  beforeEach(() => {
    cy.visit("auth/login");
    cy.fixture("userCredentials.json").as("userCredential");
  });
  
  it("[LOGIN-POS-001] should successfully login with valid credentials", function() {
    LoginPage.login(
      this.userCredential.validLoginData.email,
      this.userCredential.validLoginData.password
    );
    cy.url().should("include", "dashboard/user/profile");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });
  
});
