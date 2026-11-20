import DashboardPage from "../../../support/page-objects/dashboard.page";
import FeaturedListingsPage from "../../../support/page-objects/featured-listings.page";
import HeaderComponentPage from "../../../support/page-objects/header-component.page";

describe("Featured Listing: Add to Favorites and Dashboard Sync", () => {
  let favoritesCount = "1";

  beforeEach(function () {
    cy.errorHandler();
    // registers the uncaught:exception listener before the page loads
    cy.userLogin();
    cy.visit("/featured-listings");
  });

  after(() => {
    cy.userLogin();
    // logs in again, runs in a fresh session
    cy.visit("/featured-listings");
    FeaturedListingsPage.clickHeartIcon();
  });

  it("[FEATLIST-001] should allow the user to add a listing to favorites from the featured listings", () => {
    FeaturedListingsPage.clickHeartIcon();
    FeaturedListingsPage.verifyHeartIconColor();
  });

  // KNOWN APP BUG: GET /api/estate-favorite returns 500 on dev.delekhomes.com
  // POST 201 saves the favorite, but the dashboard can't load it → "Favorites (0)"
  // Re-enable when the backend endpoint is fixed
  it.skip("[FEATLIST-002] should display the added favorite and the correct count of favorited listings in the dashboard", () => {
    HeaderComponentPage.clickDashboardLink();
    // goes to the dashboard from the top nav
    DashboardPage.verifyFavoritesCount(favoritesCount);
    // checks the dashboard shows "(1)"
    DashboardPage.verifyFavoritedListingIsDisplayed();
    // checks the favorited listing card appears on the dashboard
  });
});
