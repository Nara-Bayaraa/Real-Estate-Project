import HeaderComponentPage from "../../../support/page-objects/header-component.page";

describe("User Logout Functionality - Positive Test Case", () => {
  beforeEach(function () {
    cy.userLogin();
    // saves the accessToken for USER_EMAIL in localStorage, before the page loads
    cy.visit("/dashboard/user/profile");
    // loads the profile page with the token already saved, so you are logged in
  });

  it("[LOGOUT-001] should successfully logout and redirect the user to login page", () => {
    HeaderComponentPage.clickUserIconMenuButton();
    HeaderComponentPage.clickLogoutButton();
    cy.url().should("include", "/auth/login");
  });
});
