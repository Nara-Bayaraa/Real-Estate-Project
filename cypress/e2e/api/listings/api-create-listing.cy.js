describe('End-to-End: Create and Delete Property Listing via API', () => {
  const path = 'cypress/fixtures/last-listing-ID.json';
  
it('[LISTING-001] should create a new property listing via API', () => {
  cy.fixture('new-property-listing-data.json').then((data) => {
    cy.createListing({
      listingData: data.newRealEstateAPI,
      imagePath: 'images/beautifulHouse.png'
    }).then((listingId) => {
      cy.log(`New Listing Created! ID: ${listingId}`);
    cy.writeFile(path, { listingId });
    });
  });
});

it('[LISTING-002] should delete the created property listing by ID via API', () => {
 cy.fixture('last-listing-ID.json').then(({ listingId }) => {
  cy.deleteListing(listingId).then((response) => {
    cy.log(`Deleted Listing ID: ${listingId}`);
    expect(response.status).to.eq(200); 
  });
});
});
});
