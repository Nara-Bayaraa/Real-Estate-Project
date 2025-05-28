describe("Delete property listing", () => {
  let listingId = 19759;

  it("Delete property listing", () => {
    const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
    cy.request({
      method: "DELETE",
      url: `/api/estate-objects/${listingId}`,
      headers: {
        Authorization: bearerToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(200); //
    });
  });
});
