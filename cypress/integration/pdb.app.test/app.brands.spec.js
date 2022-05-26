import cons from '../../com.const/env.variable.json'
import * as util from '../../com.utils'
import * as pageUtil from '../../pageobject/app.utils/app.brands.page.util'
import * as hpSelector from '../../pageobject/app.selectors/app.home.page.selectors'
import * as selector from '../../pageobject/app.selectors/app.brands.page.selector'
import data from '../../data/app.data/app.brands.data.json'
import crud from '../../com.const/crud.operation.json'

const { READ, CREATE, UPDATE, DELETE } = crud
const header = hpSelector.menuHeaders.Products
const menuItem = hpSelector.subMenuItems.Brands
const {
  It,
  roles,
  hasAccess,
  userAccess,
  beforeEachHook,
  validatePageTitle,
  validatePageUrl,
  Describe,
} = util

roles.forEach(role => {
  const username = Cypress.env(`${role}_USERNAME`)
  const password = Cypress.env(`${role}_PASSWORD`)
  const accessParams = {
    role,
    username,
    password,
    header,
    menuItem,
  }

  // Check user role and access before login
  const isAccess = userAccess(accessParams)

  // Brands page validation scenario
  Describe(
    `Navigate to 'Brands' page after login with ${role} user`,
    isAccess,
    () => {
      // Login with valid user role and access
      beforeEachHook(accessParams)
      // Validate brand page title after login with valid user and access
      it('validate Brands page title', () => {
        validatePageTitle(data.PageTitle)
      })
      // Validate brand page url after login with valid user and access
      it('validate Brands page url', () => {
        validatePageUrl(data.PageUrl)
      })
    }
  )
  // // Search and View scenarios
  Describe(
    `Search and View scenarios after login with ${role} user`,
    isAccess,
    () => {
      // Search brands test case
      it('validate that Brand page search by keywords is working as expected', () => {
        // To handle uncaught:exception
        Cypress.on('uncaught:exception', (_err, _runnable) => {
          pageUtil.enterBrandKeyword(data.searchBrand.Name)
          pageUtil.selectBrandStatus(data.searchBrand.Status)
          pageUtil.clickOnSearchButton()
          cy.get('tbody')
            .find('a')
            .should('have.attr', 'href')
            .and('include', data.searchBrand.Id)
        })
      })
    }
  )

  // // Create, Edit, and Delete scenarios
  Describe(
    `Create or Add new brand scenario after login with ${role} user`,
    isAccess,
    () => {
      // Create or Add new brand only when user has RW access
      It('Create new Brand', hasAccess(accessParams, CREATE), () => {
        // to handle uncaught:exception
        Cypress.on('uncaught:exception', (_err, _runnable) => {
          pageUtil.clickAddNewBrandButton(selector.addNewBtn)
          validatePageUrl(data.newBrand.PageUrl)
          validatePageTitle(data.newBrand.PageTitle)
          return false
        })
      })
      // Update brand only when user has full RW access including deleting brands
      It('Update Brand', hasAccess(accessParams, UPDATE), () => {
        // Todo
      })
      // Delete brand only when user has full RW access including deleting brands
      It('Delete Brand', hasAccess(accessParams, DELETE), () => {
        // Todo
      })
    }
  )
})
