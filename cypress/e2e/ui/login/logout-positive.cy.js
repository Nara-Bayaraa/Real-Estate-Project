import Dashboard from "../../../support/page-objects/dashboard.page.js";
describe("User Logout Functionality - Positive Test Case", () => {
  beforeEach(function () {
    cy.userLogin();
    cy.visit("/dashboard/user/profile");
  });

  it("[LOGOUT-POS-001] should successfully logout and redirect the user to login page", () => {
    Dashboard.clickUserIconMenuButton();
    Dashboard.clickLogoutButton();
    cy.url().should("include", "/auth/login");
  });
});
