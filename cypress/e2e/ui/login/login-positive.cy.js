import LoginPage from "../../../support/page-objects/login.page.js";
describe("Login Functionality: Positive Test Cases", () => {
  beforeEach(() => {
    cy.visit("auth/login");
    cy.fixture("form-data.json").as("loginTestUsers");
  });
  
  it("[LOGIN-POS-001] should successfully login with valid credentials", function() {
    LoginPage.login(
      this.loginTestUsers.validLoginFormData.email,
      this.loginTestUsers.validLoginFormData.password
    );
    cy.url().should("include", "dashboard/user/profile");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });
  
});
