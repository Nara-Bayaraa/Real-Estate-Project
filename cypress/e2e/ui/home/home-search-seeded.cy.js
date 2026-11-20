import ListingData from "../../../fixtures/new-property-listing-data.json";
import StateAbbreviations from "../../../support/helpers/state-abbreviations";
import FeaturedListingsPage from "../../../support/page-objects/featured-listings.page";
import HomePage from "../../../support/page-objects/home.page";

describe("Home Page: Property Search with an API-Seeded Listing", () => {
  const image = "images/luxuryApartment.png";
  // image holds the fixture image uploaded with the seeded listing
  let createdListingId;
  // createdListingId holds the ID of the listing created in before()

  before(() => {
    cy.createListing({
      listingData: ListingData.newRealEstateAPI,
      imagePath: image,
    }).then((id) => {
      createdListingId = id;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    cy.errorHandler();
  });

  it("[HOME-005] should display search results matching the entered keyword", () => {
    HomePage.searchKeyword(ListingData.newRealEstateAPI.title);
    FeaturedListingsPage.verifyAllResultsIncludeKeyword(
      ListingData.newRealEstateAPI.title,
    );
  });

  it("[HOME-006] should filter and display listings based on selected bedroom count", () => {
    HomePage.searchBedroom(ListingData.newRealEstateAPI.bedrooms);
    FeaturedListingsPage.verifyAllResultsIncludeBedroom(
      ListingData.newRealEstateAPI.bedrooms,
    );
  });

  it("[HOME-007] should display search results matching the entered city", () => {
    HomePage.searchCity(ListingData.newRealEstateAPI.city);
    FeaturedListingsPage.verifyAllResultsIncludeCity(
      ListingData.newRealEstateAPI.city,
    );
  });

  it("[HOME-008] should filter and display listings based on selected state", () => {
    HomePage.searchState(ListingData.newRealEstateAPI.state);
    const fullState = ListingData.newRealEstateAPI.state; // "California"
    const abbrState = StateAbbreviations[fullState]; //"CA"
    FeaturedListingsPage.verifyAllResultsIncludeState([fullState, abbrState]);
  });

  it("[HOME-009] should search using all filters together", () => {
    HomePage.fillHomeSearchForm({
      keyword: ListingData.newRealEstateAPI.title,
      bedrooms: ListingData.newRealEstateAPI.bedrooms,
      city: ListingData.newRealEstateAPI.city,
      state: ListingData.newRealEstateAPI.state,
    });
    FeaturedListingsPage.verifyAllResultsIncludeKeyword(
      ListingData.newRealEstateAPI.title,
    );
    FeaturedListingsPage.verifyAllResultsIncludeBedroom(
      ListingData.newRealEstateAPI.bedrooms,
    );
    FeaturedListingsPage.verifyAllResultsIncludeCity(
      ListingData.newRealEstateAPI.city,
    );
    FeaturedListingsPage.verifyAllResultsIncludeState(
      ListingData.newRealEstateAPI.state,
    );
  });

  after(() => {
    if (createdListingId) {
      cy.deleteListing(createdListingId);
    }
  });
});
