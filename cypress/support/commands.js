import HeaderComponentPage from "./page-objects/header-component.page";
// Error handler
Cypress.Commands.add("errorHandler", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});
//Toggle Theme
Cypress.Commands.add("enableDarkTheme", () => {
  HeaderComponentPage.toggleTheme();
});

//LOGIN 
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

Cypress.Commands.add("realtorLogin", () => {
  cy.api({
    method: "POST",
    url: "/api/users/login",
    body: {
      email: Cypress.env("email"),
      password: Cypress.env("password"),
    },
  }).then((response) => {
    window.localStorage.setItem("accessToken", response.body.accessToken);
    expect(response.status).to.eq(200);
  });
});

//CREATE
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

//GET
Cypress.Commands.add(
  "verifyListingDetails",
  (fixturePath, idPath, listingData) => {
    cy.fixture(idPath).then(({ createdListingId }) => {
      const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
      cy.api({
        method: "GET",
        url: `/api/estate-objects/${createdListingId}`,
        headers: {
          Authorization: bearerToken,
        },
      }).then((getResponse) => {
        getResponse.body.estateObject.city.to.eq(listingData.city);
      });
    });
  }
);
// PUT
Cypress.Commands.add("updateListing", (listingId, updatedData) => {
  const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
  return cy.api({
    method: "PUT",
    url: `/api/estate-objects/${listingId}`,
    body: updatedData,
    headers: {
      Authorization: bearerToken,
    },
  });
});

//DELETE
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
