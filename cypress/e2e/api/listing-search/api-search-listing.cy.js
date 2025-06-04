import HomePage from "../../../support/page-objects/home.page";
import FeaturedListingsPage from "../../../support/page-objects/featured-listings.page";
import ListingData from "../../../fixtures/new-property-listing-data.json";
import StateAbbreviations from "../../../support/helpers/state-abbreviations";

describe("End-to-End: property listing creation , search created property , and delete created property listing  by ID via API", () => {
  const image = "images/luxuryApartment.png";
  let createdListingId;
  beforeEach(() => {
    cy.visit("https://dev.delekhomes.com/");
    cy.errorHandler();
  });
  before(() => {
    cy.createListing({
      listingData: ListingData.newRealEstateAPI,
      imagePath: image,
    }).then((id) => {
      createdListingId = id;
    });
  });

  it("[LISTING-001] should display search results matching the entered keyword", () => {
    HomePage.searchKeyword(ListingData.newRealEstateAPI.title);
    FeaturedListingsPage.verifyAllResultsIncludeKeyword(
      ListingData.newRealEstateAPI.title
    );
  });

  it("[LISTING-002] should filter and display listings based on selected bedroom count", () => {
    HomePage.searchBedroom(ListingData.newRealEstateAPI.bedrooms);
    FeaturedListingsPage.verifyAllResultsIncludeBedroom(
      ListingData.newRealEstateAPI.bedrooms
    );
  });

  it("[LISTING-003] should display search results matching the entered city", () => {
    HomePage.searchCity(ListingData.newRealEstateAPI.city);
    FeaturedListingsPage.verifyAllResultsIncludeCity(
      ListingData.newRealEstateAPI.city
    );
  });

  it.only("[LISTING-004] Should filter and display listings based on selected state", () => {
    HomePage.searchState(ListingData.newRealEstateAPI.state);
    const fullState = ListingData.newRealEstateAPI.state; // "California"
    const abbrState = StateAbbreviations[fullState]; //"CA"
    FeaturedListingsPage.verifyAllResultsIncludeState([fullState, abbrState]);
  });
  it("[LISTING-005] should search using all filters together", () => {
    HomePage.fillHomeSearchForm({
      keyword: ListingData.newRealEstateAPI.title,
      bedrooms: ListingData.newRealEstateAPI.bedrooms,
      city: ListingData.newRealEstateAPI.city,
      state: ListingData.newRealEstateAPI.state,
    });
    FeaturedListingsPage.verifyAllResultsIncludeKeyword(
      ListingData.newRealEstateAPI.title
    );
    FeaturedListingsPage.verifyAllResultsIncludeBedroom(
      ListingData.newRealEstateAPI.bedrooms
    );
    FeaturedListingsPage.verifyAllResultsIncludeCity(
      ListingData.newRealEstateAPI.city
    );
    FeaturedListingsPage.verifyAllResultsIncludeState(
      ListingData.newRealEstateAPI.state
    );
  });

  after(() => {
    if (createdListingId) {
      cy.deleteListing(createdListingId);
      expect(deleteResponse.status).to.be.oneOf([200, 204]);
    }
  });
});
