import DashboardPage from "../../../support/page-objects/dashboard.page";
import HeaderComponentPage from "../../../support/page-objects/header-component.page";

describe("Dashboard Profile Page: Theme Toggle & User Info Verification", () => {
  beforeEach(() => {
    cy.userLogin();
    cy.visit("/dashboard/user/profile");
    cy.fixture("userCredentials.json").as("userCredential");
  });

  it("[DASH-PROFILE-001] Should switch to dark theme when the toggle is clicked", () => {
    HeaderComponentPage.enableDarkTheme();
    HeaderComponentPage.verifyDarkThemeIsEnabled();
  });

  it("[DASH-PROFILE-002] Should switch to light theme when the toggle is clicked", () => {
    HeaderComponentPage.enableDarkTheme();
    HeaderComponentPage.enableLightTheme();
    HeaderComponentPage.verifyLightThemeIsEnabled();
  });

  it("[DASH-PROFILE-003] Should display the Profile page title", () => {
    DashboardPage.verifyProfilePageTitleIsVisible();
  });

  it("[DASH-PROFILE-004] Should display the user's full name on Profile page", () => {
    DashboardPage.verifyUserFullNameIsDisplayed();
  });

  it("[DASH-PROFILE-005] Should display the correct user role on Profile page", function () {
    DashboardPage.verifyRole(this.userCredential.userData.role);
  });

  it("[DASH-PROFILE-006] Should display the Management label in the sidebar", () => {
    DashboardPage.verifyManagementLabelIsDisplayed();
  });

  it("[DASH-PROFILE-007] Should display the profile banner card on Profile page", () => {
    DashboardPage.verifyProfileBannerCardIsDisplayed();
  });
});
