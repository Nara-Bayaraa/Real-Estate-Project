import FeaturedListingsPage from "../../../support/page-objects/featured-listings.page.js";
import PropertyDetailsPage from "../../../support/page-objects/property-details.page.js";
import HomePage from "../../../support/page-objects/home.page.js";
import FormData from "../../../fixtures/form-data.json";
import SearchFormData from "../../../fixtures/search-form-data.json";
import ValidateDetails from "../../../fixtures/validation-property-details.json";
describe("Property Details Page: UI and Form Functionality", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.errorHandler();
    HomePage.fillHomeSearchForm({
      keyword: SearchFormData.homePageSearchFormData.searchByKeyword,
      bedrooms: SearchFormData.homePageSearchFormData.searchByBedrooms,
      city: SearchFormData.homePageSearchFormData.searchByCity,
      state: SearchFormData.homePageSearchFormData.searchByState,
    });
  });

  it("[PROPDET-001] should display all property details correctly", () => {
    FeaturedListingsPage.clickMoreButton();
    PropertyDetailsPage.verifyAllDetails(
      ValidateDetails.expectedPropertyDetails
    );
    PropertyDetailsPage.verifyRealtorName();
  });

  it("[PROPDET-002] should allow users to submit an inquiry form and redirect back to featured listings", () => {
    FeaturedListingsPage.clickMoreButton();
    PropertyDetailsPage.clickMakeAnInquiryButton();
    PropertyDetailsPage.fillInquiryForm(FormData.inquiryFormData);
    cy.reload();
    cy.url().should("include", "featured-listings");
  });
});
