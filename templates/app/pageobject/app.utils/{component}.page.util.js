import * as selector from '../../pageobject/app.selectors/{name}.page.selector'

const { testSelector } = selector

const testFunction = value => {
  cy.get(testSelector).contains(value)
}
export default testFunction
