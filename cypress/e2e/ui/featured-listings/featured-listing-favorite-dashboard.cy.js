import FeaturedListingsPage from "../../../support/page-objects/featured-listings.page";
import DashboardPage from "../../../support/page-objects/dashboard.page";
import HeaderComponentPage from "../../../support/page-objects/header-component.page";

describe("Featured Listing: Add to Favorites and Dashboard Sync", () => {

  let favoritesCount = "1";
  
  beforeEach(function () {
    cy.userLogin();
    cy.visit("/featured-listings");
  });

  it("[FEATLIST-001] should allow the user to add a listing to favorites from the featured listings", () => {
    FeaturedListingsPage.clickHeartIcon();
    FeaturedListingsPage.verifyHeartIconIsRed();
  });

  it("[FEATLIST-002] should display the added favorite and the correct count of favorited listings in the dashboard", () => {
    HeaderComponentPage.clickDashboardLink();
    DashboardPage.verifyFavoritesCount(favoritesCount);
    DashboardPage.verifyFavoritedListingIsDisplayed();
  });
});
