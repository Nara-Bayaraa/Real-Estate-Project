describe("API: Create and Get Listing", () => {
  const path = "cypress/fixtures/created-listing-ID.json";

  beforeEach(function () {
    cy.fixture("new-property-listing-data.json").then((data) => {
      this.listingData = data.newRealEstateAPI;
    });
  });

  it("[LISTING-001] should create a new property listing via API", function () {
    cy.createListing({
      listingData: this.listingData,   
      imagePath: "images/beautifulHouse.png",
    }).then((createdListingId) => {
      cy.log(`New Listing Created! ID: ${createdListingId}`);
      cy.writeFile(path, { createdListingId });
    });
  });

  it("[LISTING-002] should GET the created listing and verify details", function () {
    const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
    cy.fixture("created-listing-ID.json").then(({ createdListingId }) => {
      cy.api({
        method: "GET",
        url: `/api/estate-objects/${createdListingId}`,
        headers: {
          Authorization: bearerToken,
        },
      }).then((getResponse) => {
        expect(getResponse.status).to.eq(200);
        expect(getResponse.body.estateObject.title).to.eq(this.listingData.title);
      });
    });
  });
});
