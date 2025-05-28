class NavigationbarPage {
  get darkTheme() {
    return cy.get('[type="checkbox"]');
  }
  get homeLink() {
    return cy.contains("Home");
  }
  get featureLink() {
    return cy.contains("Featured Listings");
  }
  get dashboardLink() {
    return cy.contains("Dashboard");
  }
  get registerLink() {
    return cy.contains("Register");
  }
  get loginLink() {
    return cy.contains("Login");
  }
  get logo() {
    return cy.get('[class="MuiBox-root css-7f92zp"]');
  }

  toggleDarkTheme() {
    this.darkTheme.click();
  }

  verifyRegisterLinkVisible() {
    this.homeLink.should("be.visible");
  }

  clickRegisterLink() {
    this.registerLink.click();
  }

  clickLoginLink() {
    this.registerLink.click();
  }
}
export default new NavigationbarPage();
