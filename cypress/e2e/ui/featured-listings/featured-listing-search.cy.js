import HomePage from "../../../support/page-objects/home.page";
import FeaturedListingsPage from "../../../support/page-objects/featured-listings.page";
import SearchFormData from "../../../fixtures/search-form-data.json";
import ValidateDetails from "../../../fixtures/validation-property-details.json";
describe("Featured Listings Page: Property Search Functionality and Results Validation", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.errorHandler();
  });
  
  it("[FEATLIST-001] should display correct property details after performing a featured listing search", () => {
    HomePage.fillHomeSearchForm({
      keyword: SearchFormData.homePageSearchFormData.searchByKeyword,
      bedrooms: SearchFormData.homePageSearchFormData.searchByBedrooms,
      city: SearchFormData.homePageSearchFormData.searchByCity,
      state: SearchFormData.homePageSearchFormData.searchByState,
    });
    cy.url().should("include", "featured-listings");
    FeaturedListingsPage.verifyResultOfThePropertyDetails(
      ValidateDetails.expectedFeaturedCardDetails
    );
  });
});
