import * as Selector from '../app.selectors/app.home.page.selectors'

export const searchItemNumber = value => {
  cy.get(Selector.homePageSelector.searchBox)
    .clear()
    .type(value)
    .type('{enter}')
}
export const clickItemNumberByAutoCompleteSearch = value => {
  cy.get(Selector.homePageSelector.searchBox)
    .clear()
    .type(value)
    .then(() => {
      cy.get(Selector.homePageSelector.autoCompleteListItem)
        .invoke('text')
        .then(text => {
          const pattern = /[0-9]+/g
          const number = text.match(pattern)
          const itemNumber = number[0]
          window.localStorage.setItem('prodId', itemNumber)
          cy.get(Selector.homePageSelector.autoCompleteListItem)
            .click()
            .then(() => {
              expect(
                cy
                  .url()
                  .should('include', window.localStorage.getItem('prodId'))
              )
            })
        })
    })
}

export const selectProduct = value => {
  cy.get(Selector.homePageSelector.productsDropdown)
    .find('.dropdown-css')
    .invoke('show')
  cy.get(`[href="/${value}"]`).click()
}
