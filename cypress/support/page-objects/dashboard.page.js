class Dashboard {
  get hamburgerMenuButton() {
    return cy.get(".MuiBox-root.css-0.iconify.iconify--eva");
  }
  get userIconMenu() {
    return cy.get('button [data-testid="PersonIcon"]');
  }
  get userProfileMenu() {
    return cy.get('[class*="MuiTypography-root MuiTypography-in"]');
  }
  get firstNameInput() {
    return cy.get('[name="username"]');
  }
  get lastNameInput() {
    return cy.get('[name="user_surname"]');
  }
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get logoutButton() {
    return cy.contains("Logout");
  }
  get fullName() {
    return cy.get("h6");
  }
  get roleLabel() {
    return cy.get("a p");
  }
  clickUserIconMenuButton() {
    this.userIconMenu.click();
  }
  clickLogoutButton() {
    this.logoutButton.click();
  }
}
export default new Dashboard();
