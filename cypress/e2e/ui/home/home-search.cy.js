import HomePage from "../../../support/page-objects/home.page";
import FeaturedListingsPage from "../../../support/page-objects/featured-listings.page";

describe("Home Page: Property Search Functionality", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.errorHandler();
    cy.fixture("search-form-data.json").as("searchFormData");
    cy.fixture("validation-property-details.json").as(
      "validationDetails" );
  });

  it("[HOME-001] should display search results matching the entered keyword", function () {
    HomePage.searchKeyword(
      this.searchFormData.homePageSearchFormData.searchByKeyword
    );
    FeaturedListingsPage.verifyAllResultsIncludeKeyword(
      this.validationDetails.expecteHomeSearchdResults.byKeyword
    );
  });

  it("[HOME-002] should filter and display listings based on selected number of bedrooms", function () {
    HomePage.searchBedroom(
      this.searchFormData.homePageSearchFormData.searchByBedrooms
    );
    FeaturedListingsPage.verifyAllResultsIncludeBedroom(
      this.validationDetails.expecteHomeSearchdResults.byBedroom
    );
  });

  it.only("[HOME-003] should filter and display listings within the selected price range", function () {
});

  it("[HOME-005] should display listings based on the selected state", function () {
    HomePage.searchState(
      this.searchFormData.homePageSearchFormData.searchByState
    );
    FeaturedListingsPage.verifyAllResultsIncludeState(
      this.validationDetails.expecteHomeSearchdResults.byState
    );
  });
});





