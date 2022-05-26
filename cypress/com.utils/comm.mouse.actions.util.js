// Hover over on any list header or list element to display it's option
export const hoverOverOn = value => {
  if (value) {
    cy.get(`[data-menu-header="${value}"]`)
      .find('.dropdown-css')
      .invoke('show')
  }
}
// Click on any option of list element
export const clickOnMenuItem = value => {
  if (value) {
    cy.get(`[data-menu-item="${value}"] > a`).click()
  }
}
// Click on Header items
export const clickOnHeaderItem = value => {
  if (value === 'Home' || value === null) {
    cy.get('a[href="/"]')
      .and('have.attr', 'class', 'first')
      .click()
  } else {
    cy.get(`[data-menu-header="${value}"]>a`).click()
  }
}
// Submit the form element
export const submitForm = selector => {
  cy.get(selector).submit()
}
// Send text to any text box and clear it before sending the text
export const clearAndSendKeys = (selector, value) => {
  cy.get(selector)
    .clear()
    .type(value)
}
// Select any value from drop down element
export const selectDropDownOption = (selector, option, value) => {
  cy.get(selector)
    .select(option)
    .should('have.value', value)
}
// Click any button
export const clickAddButton = value => {
  if (value) {
    cy.get('input.btn')
      .contains(`Add ${value}`)
      .click()
  } else {
    cy.get('a')
      .contains('Add')
      .click()
  }
}

export const clickRefershButton = selector => {
  cy.get(selector)
    .contains('Refresh')
    .and('have.attr', 'value', 'Refresh')
    .click()
}

export const clickSearchButton = value => {
  if (value) {
    submitForm(value)
  } else {
    cy.get('input.btn')
      .contains('Search')
      .and('have.attr', 'value', 'Search')
      .click()
  }
}

export const clickDownload = (value = null) => {
  if (value) {
    if (value.toLowerCase() === 'button') {
      cy.get('input.btn')
        .contains('Download')
        .and('have.attr', 'value', 'Download')
        .click()
    } else if (value.toLowerCase() === 'link') {
      cy.get('a')
        .contains('Download')
        .click()
    } else {
      submitForm(value)
    }
  } else {
    cy.get('a')
      .contains('Download')
      .click()
  }
}
