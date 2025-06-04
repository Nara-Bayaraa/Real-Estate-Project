class HeaderComponentPage {
  get pageBody() {
    return cy.get("body");
  }
  get themeToggleSwitch() {
    return cy.get(
      '[class="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]'
    );
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
  get hamburgerMenuButton() {
    return cy.get(".MuiBox-root.css-0.iconify.iconify--eva");
  }
  get dhLogo() {
    return cy.get('[class="MuiBox-root css-7f92zp"]');
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

  toggleTheme() {
    this.themeToggleSwitch.click();
  }
  enableDarkTheme() {
    this.pageBody.should("not.have.class", "dark-theme");
    this.toggleTheme();
  }
  verifyDarkThemeIsEnabled() {
    this.pageBody.should("have.css", "background-color", "rgb(22, 28, 36)");
  }
  enableLightTheme() {
    this.toggleTheme();
  }
  verifyLightThemeIsEnabled() {
    this.pageBody.should("have.css", "background-color", "rgb(255, 255, 255)");
  }
  clickHamburgerButton() {
    this.hamburgerMenuButton.click();
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
  clickDashboardLink() {
    this.dashboardLink.click();
  }
  clickUserIconMenuButton() {
    this.userIconMenu.click();
  }
  clickLogoutButton() {
    this.logoutButton.click();
  }
}
export default new HeaderComponentPage();
