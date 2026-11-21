describe("Delete Property Listing via API", () => {
  const images = ["images/beautifulHouse.png", "images/luxuryApartment.png"];
  // images holds one fixture image per listing, so before() creates two listings
  const listingIds = [];
  // listingIds holds the IDs of the listings created in before()

  before(() => {
    cy.fixture("new-property-listing-data.json").then((data) => {
      images.forEach((imagePath) => {
        cy.createListing({
          listingData: data.newRealEstateAPI,
          imagePath: imagePath,
        }).then((id) => {
          listingIds.push(id);
          cy.log(`New Listing Created! ID: ${id}`);
        });
      });
    });
  });

  it("[API-LISTING-004] should delete multiple listings individually", () => {
    const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
    expect(listingIds).to.have.length(2);
    listingIds.forEach((listingId) => {
      cy.api({
        method: "DELETE",
        url: `/api/estate-objects/${listingId}`,
        headers: {
          Authorization: bearerToken,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
