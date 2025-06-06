describe("API: Create and Get Listing", () => {
  let listingData;
  const path = "cypress/fixtures/created-listing-ID.json";

  beforeEach(function () {

    cy.fixture("new-property-listing-data.json").then((data) => {
      listingData = data.newRealEstateAPI;

      cy.createListing({
        listingData: listingData,
        imagePath: "images/beautifulHouse.png",
      }).then((createdListingId) => {
        cy.log(`New Listing Created! ID: ${createdListingId}`);
        cy.writeFile(path, { createdListingId });
      });
    });
  });

  it("[LISTING-001] should get the created listing and verify details", () => {
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
        expect(getResponse.body.estateObject.title).to.eq(
        listingData.title
        );
      });
    });
  });

  after(function () {
    cy.fixture("created-listing-ID.json").then(({ createdListingId }) => {
      if (createdListingId) {
        cy.deleteListing(createdListingId).then((deleteResponse) => {
          expect(deleteResponse.status).to.be.oneOf([200, 204]);
        });
      }
    });
  });
});
