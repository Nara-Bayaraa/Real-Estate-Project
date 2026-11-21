describe("End-to-End: Create and Delete Property Listing via API", () => {
  let listingId;
  // listingId holds the ID returned when API-LISTING-001 creates the listing

  it("[API-LISTING-001] should create a new property listing via API", () => {
    cy.fixture("new-property-listing-data.json").then((data) => {
      cy.createListing({
        listingData: data.newRealEstateAPI,
        imagePath: "images/beautifulHouse.png",
      }).then((id) => {
        listingId = id;
        cy.log(`New Listing Created! ID: ${listingId}`);
      });
    });
  });

  it("[API-LISTING-002] should delete the created property listing by ID via API", () => {
    cy.deleteListing(listingId).then((response) => {
      cy.log(`Deleted Listing ID: ${listingId}`);
      expect(response.status).to.eq(200);
    });
  });
});
