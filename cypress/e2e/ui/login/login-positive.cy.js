import LoginPage from "../../../support/pageObjects/login.page.js";

describe("", () => {
  beforeEach(() => {
    cy.visit("auth/login");
    cy.fixture("userCredentials.json").as("userCredentials");
  });
  
  it("[LOGIN-UI-001] should successfully login with valid credentials", function() {
    LoginPage.login(
      this.userCredentials.valid.email,
      this.userCredentials.valid.password
    );
    cy.url().should("include", "dashboard/user/profile");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });
  
});
