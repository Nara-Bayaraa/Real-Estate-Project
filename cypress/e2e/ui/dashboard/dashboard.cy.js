import DashboardPage from "../../../support/page-objects/dashboard.page";
import HeaderComponentPage from "../../../support/page-objects/header-component.page";

describe("Dashboard Profile Page: Theme Toggle & User Info Verification", () => {
  beforeEach(() => {
    cy.errorHandler();
    // registers the uncaught:exception listener before the page loads
    cy.userLogin();
    cy.visit("/dashboard/user/profile");
  });

  it("[DASH-PROFILE-001] should switch to dark theme when the toggle is clicked", () => {
    HeaderComponentPage.enableDarkTheme();
    HeaderComponentPage.verifyDarkThemeIsEnabled();
  });

  it("[DASH-PROFILE-002] should switch to light theme when the toggle is clicked", () => {
    HeaderComponentPage.enableDarkTheme();
    HeaderComponentPage.enableLightTheme();
    HeaderComponentPage.verifyLightThemeIsEnabled();
  });

  it("[DASH-PROFILE-003] should display the Profile page title", () => {
    DashboardPage.verifyProfilePageTitleIsVisible();
  });

  it("[DASH-PROFILE-004] should display the user's full name on Profile page", () => {
    DashboardPage.verifyUserFullNameIsDisplayed();
  });

  it("[DASH-PROFILE-005] should display the correct user role on Profile page", () => {
    DashboardPage.verifyRole("user");
    // "user" is the role of the USER_EMAIL account that cy.userLogin() logs in with
  });

  it("[DASH-PROFILE-006] should display the Management label in the sidebar", () => {
    DashboardPage.verifyManagementLabelIsDisplayed();
  });

  it("[DASH-PROFILE-007] should display the profile banner card on Profile page", () => {
    DashboardPage.verifyProfileBannerCardIsDisplayed();
  });
});
