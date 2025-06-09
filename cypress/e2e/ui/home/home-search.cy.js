import HomePage from "../../../support/page-objects/home.page";
import FeaturedListingsPage from "../../../support/page-objects/featured-listings.page";

describe("Home Page: Property Search Functionality", () => {

  let searchFormData;
  let validationDetails;

  before(() => {
    cy.fixture("search-form-data.json").then((data) => {
      searchFormData = data;
    });
    cy.fixture("validation-property-details.json").then((data) => {
      validationDetails = data;
    });
  });
  
  beforeEach(() => {
    cy.visit("/");
    cy.errorHandler();
  });

  it("[HOME-001] should display search results matching the entered keyword", () => {
    HomePage.searchKeyword(
      searchFormData.homePageSearchFormData.searchByKeyword
    );
    FeaturedListingsPage.verifyAllResultsIncludeKeyword(
      validationDetails.expecteHomeSearchdResults.byKeyword
    );
  });

  it("[HOME-002] should filter and display listings based on selected number of bedrooms", () => {
    HomePage.searchBedroom(
      searchFormData.homePageSearchFormData.searchByBedrooms
    );
    FeaturedListingsPage.verifyAllResultsIncludeBedroom(
      validationDetails.expecteHomeSearchdResults.byBedroom
    );
  });

  it("[HOME-003] should filter and display listings within the selected price range", () => {
    FeaturedListingsPage.verifyResultsIncludePriceRange();
  });

  it("[HOME-005] should display listings based on the selected state", () => {
    HomePage.searchState(searchFormData.homePageSearchFormData.searchByState);
    FeaturedListingsPage.verifyAllResultsIncludeState(
      validationDetails.expecteHomeSearchdResults.byState
    );
  });
});
