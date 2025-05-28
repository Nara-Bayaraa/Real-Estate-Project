class SidebarMenuPage{

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
  get personIcon() {return cy.get('[data-testid="PersonIcon"]')}


}
}
export default new SidebarMenuPage();