import HeaderComponentPage from "../../../support/page-objects/header-component.page";
describe("User Logout Functionality - Positive Test Case", () => {
  
  beforeEach(function () {
    cy.userLogin();
    cy.visit("/dashboard/user/profile");
  });

  it("[LOGOUT-POS-001] should successfully logout and redirect the user to login page", () => {
   HeaderComponentPage.clickUserIconMenuButton();
   HeaderComponentPage.clickLogoutButton();
    cy.url().should("include", "/auth/login");
  });
});
