describe("API: Create and Get Listing", () => {
  let listingData;
  // listingData holds newRealEstateAPI from new-property-listing-data.json
  let createdListingId;
  // createdListingId holds the ID of the listing created in beforeEach

  beforeEach(function () {
    cy.fixture("new-property-listing-data.json").then((data) => {
      listingData = data.newRealEstateAPI;

      cy.createListing({
        listingData: listingData,
        imagePath: "images/beautifulHouse.png",
      }).then((id) => {
        createdListingId = id;
        cy.log(`New Listing Created! ID: ${createdListingId}`);
      });
    });
  });

  it("[API-LISTING-003] should get the created listing and verify details", () => {
    const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
    cy.api({
      method: "GET",
      url: `/api/estate-objects/${createdListingId}`,
      headers: {
        Authorization: bearerToken,
      },
    }).then((getResponse) => {
      expect(getResponse.status).to.eq(200);
      expect(getResponse.body.estateObject.title).to.eq(listingData.title);
    });
  });

  after(function () {
    if (createdListingId) {
      cy.deleteListing(createdListingId).then((deleteResponse) => {
        expect(deleteResponse.status).to.be.oneOf([200, 204]);
      });
    }
  });
});
