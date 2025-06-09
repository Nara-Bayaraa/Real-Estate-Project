import LoginPage from "../../../support/page-objects/login.page.js";

describe("Login Functionality: Positive Test Cases", () => {
  
  before(() => {
    cy.visit("auth/login");
  });

  it("[LOGIN-001] should successfully login with valid credentials", () => {
    cy.fixture("userCredentials.json").then((data) => {
      LoginPage.login(data.validLoginData.email, data.validLoginData.password);
      cy.url().should("include", "dashboard/user/profile");
      cy.title().should("eq", "User: Profile | Delek Homes");
    });
  });
});
