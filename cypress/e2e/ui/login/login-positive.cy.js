import LoginPage from "../../../support/page-objects/login.page.js";

describe("Login Functionality: Positive Test Cases", () => {
  before(() => {
    cy.visit("auth/login");
  });

  it("[LOGIN-001] should successfully login with valid credentials", () => {
    LoginPage.login(Cypress.env("userEmail"), Cypress.env("userPassword"));
    // Cypress.env("userEmail") holds USER_EMAIL from .env
    // Cypress.env("userPassword") holds USER_PASSWORD from .env
    cy.url().should("include", "dashboard/user/profile");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });
});
