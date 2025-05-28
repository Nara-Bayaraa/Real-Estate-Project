class HomePage {
   get theme() {
    return cy.get('[type="checkbox"]');
  }
  get heroTitle() {
    return cy.get("h1");
  }
  get introText() {
    return cy.get('[class*="MuiTypography-root MuiTypography-body1 css-n"]');
  }
  get searchKeywordInput() {
    return cy.get('input[type="text"]').first();
  }
  get startSearchButton() {
    return cy.contains("Start Search");
  }
  get searchCityInput() {
    return cy.get('input[type="text"]').last();
  }
  get bedroomsDropdown() {
    return cy.get("div[id=':r2:']");
  }
  get searchBedroomOptionList() {
    return cy
      .get('[class*="MuiSelect-select MuiSelect-outlined MuiInputBase"]')
      .first();
  }
  get selectedBedroomsValue() {
    return cy.contains("div", "Bedrooms:").siblings();
  }
  get priceRange() {
    return cy.get('[class="MuiBox-root css-1qtrbix"]');
  }
  get seachStateDropDown() {
    return cy
      .get('[class*="MuiSelect-select MuiSelect-outlined MuiInputBase"]')
      .last();
  }
  get stateOptionsList() {
    return cy.get('li[role="option"]');
  }
  get minPriceSlider() {
    return cy.get('[class="MuiSlider-valueLabel css-1sd01xo"]').first(); 
    // first handle (min)
  }
  get maxPriceSlider() {
    return cy.get('[class="MuiSlider-valueLabel css-1sd01xo"]').last(); 
  }

  toggleTheme(){
    this.theme.click({ force: true });
  }

  verifyTitleIsVisible() {
    this.heroTitle.should("be.visible");
  }

  verifyintroTextIsVisible() {
    this.introText.should("be.visible");
  }

  fillHomeSearchForm({ keyword, bedrooms, city, state }) {
  if (keyword) this.searchKeyword(keyword);
  if (bedrooms) this.searchBedroom(bedrooms);
  if (city) this.searchCity(city);
  if (state) this.searchState(state);
}

  searchKeyword(text) {
    this.searchKeywordInput.type(text, { force: true });
    this.startSearchButton.click();
  }

  searchBedroom(expectedNumber) {
    this.searchBedroomOptionList.type(`${expectedNumber}{enter}`);
    this.startSearchButton.click();
  }

  searchCity(cityName) {
    this.searchCityInput.type(cityName).click();
    this.startSearchButton.click();
  }

  typePriceRange(expectePriceRange) {
    this.priceRange.type(expectePriceRange);
  }

  searchState(stateName) {
    this.seachStateDropDown.click();
    this.stateOptionsList.each(($el) => {
      if ($el.text().trim() === stateName) {
        cy.wrap($el).click();
      }
    });
    this.startSearchButton.click({ force: true });
  }

  clickStartSearch() {
    this.startSearchButton.click();
  }

}
export default new HomePage();
