import * as lp from '../pageobject/app.utils/app.login.page.util'
import Env from '../com.config/env.json'

const envValues = Env[Cypress.env().configFile]

// Login with valid username and password
export const loginUtil = ({ username, password }) => {
  cy.visit(envValues.baseUrl)
  lp.enterUsername(username)
  lp.enterPassword(password)
  lp.clickLogon()
  cy.contains(`Welcome, ${username}`)
}
// Logout when user is already logged in
export const logoutUtil = () => {
  cy.waitUntil(() => {
    cy.get('[href="/Account/LogOff"]').click()
    cy.url().should('include', 'LogOn')
  })
}
