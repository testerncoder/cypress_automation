// Validate current page title
export const validatePageTitle = value => {
  if (value) {
    cy.title().should('include', `${value} - Bunnings`)
  } else {
    cy.title().should('include', 'Bunnings')
  }
}
// Validate current page URL
export const validatePageUrl = value => {
  if (value) {
    cy.url().should('include', value)
  } else {
    cy.url().location()
  }
}
// Scroll page to top by clicking on 'Top' arrow, not generic page scroller function for every page it should have 'Top' button/link.
export const verifyScrolledToTop = () => {
  cy.document()
    .its('documentElement.scrollTop')
    .should('eq', 0)
}
// Wait for file download or page load after a click of download button/ link
export const waitForDownload = value => {
  cy.waitUntil(() => cy.url().should('include', value))
}
// validate record/data value in displayed table after search
export const tableContainsData = (value = 'table') => {
  cy.get(value)
    .find('tr')
    .should($tr => {
      expect($tr.length).to.be.greaterThan(0)
    })
}
// Navigate to another tab when page has multiple tabs to work on
export const navigateToTabs = value => {
  if (value) {
    cy.get('ul.nav-tabs>li')
      .contains(value)
      .click()
  } else {
    cy.get('ul.nav-tabs>li.active')
      .find('a')
      .should('have.attr', 'href', '#')
  }
}

// Click on ItemNumber to open product detail page
export const clickOnItemNumber = value => {
  cy.contains(value).click()
}
