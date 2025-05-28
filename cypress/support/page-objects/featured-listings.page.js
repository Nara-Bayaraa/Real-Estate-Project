class FeaturedListingsPage {
  get mainContentContainer() {
    return cy.get(
      '[class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb"]'
    );
  }
  get propertyCard() {
    return cy.get('[class="MuiCardContent-root css-lmipfk"]');
  }
  get searchInput() {
    return cy.contains("Search");
  }
  get bedroomInput() {
    return cy
      .get(
        '[class="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-184p1yy"]'
      )
      .first();
  }
  get cityInput() {
    return cy.get('input[type="text"]').last();
  }
  get bedroomsDropdown() {
    return cy.get("div[id=':r2:']");
  }
  get priceRange() {
    return cy.get('[class="MuiBox-root css-x2h1kl"]');
  }
  get selectBedroomsOption() {
    return cy.get(
      '[class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters css-1e98n2x"]'
    );
  }
  get allBedroomsValues() {
    return cy.xpath("//div[text()=' Bedrooms: ']");
  }
  get allTitlesValues() {
    return cy.get("h5");
  }
  get allPropertyPriceValues() {
    return cy.get('[class="MuiBox-root css-dc9kff"]');
  }
  get allCitiesValues() {
    return cy.xpath("//div[text()=' City: ']");
  }
  get allStatesValues() {
    return cy.xpath("//div[contains(text(),' State: ')]");
  }
  get moreInfoButton() {
    return cy.contains("More Info");
  }
  get postSuccessMessage() {
    return cy.contains("Post success!");
  }

  clickMoreButton() {
    this.moreInfoButton.click();
  }
  assertSearchResultDisplayed(expectedText) {
    this.mainContentContainer.should("contain.text", expectedText);
  }
  verifyAllResultsIncludeKeyword(keyword) {
    this.allTitlesValues.each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          expect(text).to.include(keyword);
        });
    });
  }

  verifyAllResultsIncludeBedroom(expectedBedroom) {
    this.allBedroomsValues.each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          const match = text.match(/\d+/);
          expect(match, `Bedrooms present in "${text}"`).to.not.be.null;
          const bedroomCount = Number(match[0]);
          expect(bedroomCount, `Found ${bedroomCount} bedrooms`).to.be.at.least(
            Number(expectedBedroom)
          );
        });
    });
  }
  verifyResultsIncludePriceRange() {
    this.priceRange.each(($price) => {
      const priceText = $price.text().replace(/[$,]/g, "");
      const price = parseInt(priceText, 10);
      expect(price).to.be.gte(500000);
      expect(price).to.be.lte(10000000);
    });
  }
  verifyAllResultsIncludeCity(keyword) {
    this.allCitiesValues.each(($el) => {
      cy.wrap($el).invoke("text").should("include", keyword);
    });
  }

  verifyAllResultsIncludeState(keywords) {
    const keywordsArr = Array.isArray(keywords) ? keywords : [keywords];
    this.allStatesValues.each(($el) => {
      const text = $el
        .text()
        .replace(/\u00a0/g, "")
        .trim();
      const hasMatch = keywordsArr.some((keyword) => text.includes(keyword));
      expect(
        hasMatch,
        `Actual: "${text}" includes one of: ${keywordsArr.join(", ")}`
      ).to.be.true;
    });
  }

  verifyResultOfThePropertyDetails(expectedDetails) {
    Object.values(expectedDetails).forEach((value) => {
      this.propertyCard.contains(value).should("be.visible");
    });
  }
}
export default new FeaturedListingsPage();
