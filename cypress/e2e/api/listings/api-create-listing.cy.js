describe("End-to-End: Create and Delete Property Listing via API", () => {
  it("[API-LISTING-001] should create and then delete a property listing via API", () => {
    cy.fixture("new-property-listing-data.json").then((data) => {
      // data holds the listing payloads from new-property-listing-data.json
      cy.createListing({
        listingData: data.newRealEstateAPI,
        imagePath: "images/beautifulHouse.png",
      }).then((listingId) => {
        // listingId holds the ID the API returned for the new listing
        cy.log(`New Listing Created! ID: ${listingId}`);
        cy.deleteListing(listingId).then((response) => {
          // response holds the DELETE result for that same listing
          expect(response.status).to.eq(200);
        });
      });
    });
  });
});
