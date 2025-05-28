import HomePage from "./page-objects/home.page";

Cypress.Commands.add(
  "userLogin",
  (email = "waped44366@gianes.com", password = "DontTestMe") => {
    cy.api({
      method: "POST",
      url: "/api/users/login",
      body: {
        email,
        password,
      },
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
  }
);

Cypress.Commands.add("login", (email, password) => {
  cy.api({
    method: "POST",
    url: "/api/users/login",
    email: email,
    password: password,
  }).then((response) => {
    window.localStorage.setItem("accessToken", response.body.accessToken);
    expect(response.status).to.eq(200);
  });
});
// Error handler
Cypress.Commands.add("errorHandler", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});
//Toggle Theme
Cypress.Commands.add("toggleTheme", () => {
  HomePage.toggleTheme();
});

//Create new listing
Cypress.Commands.add("createListing", ({ listingData, imagePath }) => {
  cy.fixture(imagePath, "binary").then((image) => {
    const blob = Cypress.Blob.binaryStringToBlob(image);

    const formData = new FormData();
    formData.append("images", blob);

    //Dynamically append all listingData fields
    Object.entries(listingData).forEach(([key, value]) => {
      formData.append(key, value);
    });
   
    const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
    cy.api({
      method: "POST",
      url: "/api/estate-objects",
      body: formData,
      headers: {
        Authorization: bearerToken,
      },
    }).then((postResponse) => {
      expect(postResponse.status).to.eq(201);
      const decoder = new TextDecoder("utf-8");
      const decodedString = decoder.decode(new Uint8Array(postResponse.body));
      const listingObj = JSON.parse(decodedString);
      cy.wrap(listingObj.id);
    });
  });
});

//Delete lisiting
Cypress.Commands.add("deleteListing", (listingId) => {
  const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
  cy.api({
    method: "DELETE",
    url: `/api/estate-objects/${listingId}`,
    headers: {
      Authorization: bearerToken,
    },
  });
});
