describe("Create New Property Listing via API", () => {
   
  it("[LISTING-001] should successfully create a new property listing via API", () => {
    cy.fixture("new-property-listing-data.json").then((data) => {
      cy.createListing({
        listingData: data.newRealEstateAPI,
        imagePath: "images/luxuryApartment.png",
      }).then((listingId) => {
        cy.log(`✅ New listing created! Listing ID: ${listingId}`);
      });
    });
  });
});
