class Dashboard {
  get profilePageTitle() {
    return cy.contains("Profile");
  }
  get userFullName() {
    return cy.get(
      '[class="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap css-1k96qjc"]'
    );
  }
  get role() {
    return cy.get(
      '[class*="MuiTypography-root MuiTypography-body2 MuiTypography-noWrap css"]'
    );
  }
  get managementLabel() {
    return cy.contains("management");
  }
  get profileBannerCard() {
    return cy.get(
      '[class*="MuiPaper-root MuiPaper-elevation MuiPaper-rounded"]'
    );
  }
  get Breadcrumbs() {
    return cy.get('[class="MuiBreadcrumbs-ol css-nhb8h9"]');
  }
  get favoritesSectionHeader() {
    return cy.contains("Favorites");
  }
  get favoriteListing() {
    return cy.get(
      '[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid"]'
    );
  }
  verifyProfilePageTitleIsVisible() {
    this.profilePageTitle.should("be.visible");
  }
  verifyUserFullNameIsDisplayed() {
    this.userFullName.should("be.visible");
  }
  verifyRole(expectedRole) {
    this.role.should("contain", expectedRole);
  }
  verifyManagementLabelIsDisplayed() {
    this.managementLabel.should("be.visible");
  }
  verifyProfileBannerCardIsDisplayed() {
    this.profileBannerCard.should("be.visible");
  }
  verifyFavoritedListingIsDisplayed() {
    cy.waitUntil(() => this.favoriteListing.should("be.visible"));
  }
  verifyFavoritesCount(expectedCount) {
    this.favoritesSectionHeader.should("contain", `(${expectedCount})`);
  }
}
export default new Dashboard();
