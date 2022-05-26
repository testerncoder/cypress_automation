import * as util from '../../com.utils'
import * as pageUtil from '../../pageobject/app.utils/app.home.page.util'
import data from '../../data/app.data/app.home.data.json'

const {
  It,
  Describe,
  roles,
  hasAccess,
  userAccess,
  beforeEachHook,
  validatePageTitle,
  validatePageUrl,
} = util

roles.forEach(role => {
  const username = Cypress.env(`${role}_USERNAME`)
  const password = Cypress.env(`${role}_PASSWORD`)
  const accessParams = {
    role,
    username,
    password,
    header: null,
    menuItem: null,
  }

  // Check user role and access before login
  const isAccess = userAccess(accessParams)
  // Home page validation scenario
  Describe(
    `Navigate to 'Home' page after login with ${role} user`,
    isAccess,
    () => {
      beforeEachHook(accessParams)

      it('validate home page title', () => {
        validatePageTitle(data.PageTitle)
      })

      it('validate home page url', () => {
        validatePageUrl(data.PageUrl)
      })
    }
  )
  // Search product scenario
  Describe(
    `Search a product from Home page quick search with ${role} user`,
    isAccess,
    () => {
      beforeEachHook(accessParams)

      it('with a valid ItemNumber', () => {
        pageUtil.searchItemNumber(data.ItemNumber)
      })

      it('with full product name', () => {
        pageUtil.searchItemNumber(data.ProductName)
      })

      it('with partial text with the help of autocomplete feature of search', () => {
        pageUtil.clickItemNumberByAutoCompleteSearch(data.ProductPartialText)
      })
    }
  )
})
