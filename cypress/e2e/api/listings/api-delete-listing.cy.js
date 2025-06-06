describe('Delete Property Listing via API', () => {
const listingIds = [19970 ];

it("should delete multiple listings individually", () => {
  const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
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
