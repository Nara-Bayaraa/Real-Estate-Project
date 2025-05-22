import Dashboard from "../../../support/pageObjects/dashboard.page.js";

describe("User Logout Functionality", () => {
  beforeEach(function () {
    cy.login();
    cy.visit("/dashboard/user/profile");
  });
  it("[LOGOUT-UI-001] should successfully logout and redirect to login page", () => {
    Dashboard.clickUserIconMenuButton();
    Dashboard.clickLogoutButton();
    cy.url().should("includes", "/auth/login");
  });
});
