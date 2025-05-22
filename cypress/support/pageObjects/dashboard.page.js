class Dashboard {

get hamburgerMenuBtn() {
    return cy.get(".MuiBox-root.css-0.iconify.iconify--eva");
  }
  get userIconMenu() {
    return cy.get('button [data-testid="PersonIcon"]');
  }
  get userProfileMenu() {
    return cy.get('[class*="MuiTypography-root MuiTypography-in"]');
  }
  get firstNameInp() {
    return cy.get('[name="username"]');
  }
  get lastNameInp() {
    return cy.get('[name="user_surname"]');
  }
  get emailInp() {
    return cy.get('[name="email"]');
  }
  get logoutBtn() {
    return cy.contains("Logout");
  }
  get fullName() {
    return cy.get("h6");
  }
  get roleLabel() {
    return cy.get("a p");
  }
  clickUserIconMenuButton(){
    this.userIconMenu.click();
  }
  clickLogoutButton(){
    this.logoutBtn.click();
  }
}
export default new Dashboard();