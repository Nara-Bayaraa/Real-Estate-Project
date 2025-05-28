class PropertyDetailsPage {
  get propertyImage() {
    return cy.get("img[alt='large image']");
  }
  get title() {
    return cy.get(".MuiTypography-root.MuiTypography-h3.css-1d0zdzo");
  }
  get address() {
    return cy.get("h3.MuiTypography-root + p");
  }
  get askingPrice() {
    return cy
      .get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]')
      .eq(0);
  }
  get squareFeet() {
    return cy
      .get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]')
      .eq(1);
  }
  get lotSize() {
    return cy
      .get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]')
      .eq(2);
  }
  get ListingDate() {
    return cy
      .get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]')
      .eq(3);
  }
  get garage() {
    return cy
      .get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]')
      .eq(4);
  }
  get bedrooms() {
    return cy
      .get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]')
      .eq(5);
  }
  get bathrooms() {
    return cy
      .get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]')
      .eq(6);
  }
  get realtor() {
    return cy
      .get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]')
      .eq(7);
  }
  get propertyRealtorTitle() {
    return cy.get("h4");
  }
  get realtorName() {
    return cy.get('[class="MuiTypography-root MuiTypography-h4 css-wwriog"]');
  }
  get description() {
    return cy.get("div[class='css-1h9vx9l'] p");
  }
  get makeAnInquiryButton() {
    return cy.get("div[class='MuiBox-root css-1v3caum'] button[type='button']");
  }

  get propertyInput() {
    return cy.xpath("//input[@name='property']");
  }
  get nameInput() {
    return cy.xpath("//input[@name='name']");
  }
  get emailInput() {
    return cy.xpath("//input[@name='email']");
  }
  get phoneInput() {
    return cy.xpath("//input[@name='phone']");
  }
  get messageInput() {
    return cy.xpath("//input[@name='message']");
  }
  get submitButton() {
    return cy.get('[type="submit"]');
  }

  verifyAllDetails(expected) {
    this.title.should("contain", expected.title);
    this.address.should("contain", expected.address);
    this.askingPrice.should("contain", expected.askingPrice);
    this.lotSize.should("contain", expected.lotSize);
    this.garage.should("contain", expected.garage);
    this.bathrooms.should("contain", expected.bathrooms);
    this.squareFeet.should("contain", expected.squareFeet);
    this.ListingDate.should("contain", expected.listingDate);
    this.bedrooms.should("contain", expected.bedrooms);
    this.realtor.should("contain", expected.realtor);
    this.propertyRealtorTitle.should("contain", expected.propertyRealtorTitle);
    this.propertyImage.should("be.visible");
    this.description.should("be.visible");
  }
  verifyRealtorName() {
    this.realtorName.should("be.visible");
  }
  clickMakeAnInquiryButton() {
    this.makeAnInquiryButton.click();
  }

  fillInquiryForm({ property, name, email, phone, message }) {
    if (property) {
      this.propertyInput.clear().type(property);
    }
    if (name) {
      this.nameInput.clear().type(name);
    }
    if (email) {
      this.emailInput.clear().type(email);
    }
    if (phone) {
      this.phoneInput.clear().type(phone);
    }
    if (message) {
      this.messageInput.clear().type(message);
    }
    this.submitButton.click();
  }
    
}
export default new PropertyDetailsPage();
