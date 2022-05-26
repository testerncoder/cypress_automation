import * as util from '../../com.utils'
import * as hpSelector from '../../pageobject/app.selectors/home.page.selectors'
import * as pageUtil from '../../pageobject/app.utils/{name}.page.util'
import * as selector from '../../pageobject/app.selectors/{name}.page.selector'
import data from '../../data/app.data/{name}.data.json'
import crud from '../../com.const/crud.operation.json'

const header = hpSelector.menuHeaders.Home
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
const { READ, CREATE, UPDATE, DELETE } = crud
roles.array.forEach(role => {
  const username = Cypress.env(`${role}_USERNAME`)
  const password = Cypress.env(`${role}_PASSWORD`)
  const accessParams = {
    role,
    username,
    password,
    header,
    menuItem: null,
  }

  // Check user role and access before login
  const isAccess = userAccess(accessParams)

  // Page validation scenario
  Describe(`Page navigation after login with ${role} user`, isAccess, () => {
    // Login with valid user role and access
    beforeEachHook(accessParams)

    it('validate product Type page title', () => {
      validatePageTitle(data.PageTitle)
    })

    It('validate product Type page url', () => {
      validatePageUrl(data.PageUrl)
    })
  })
  // CRUD scenarios
  Describe(`Page navigation after login with ${role} user`, isAccess, () => {
    // Login with valid user role and access
    beforeEachHook(accessParams)

    it('Create', hasAccess(accessParams, CREATE), () => {
      // TODO
    })

    It('Update', hasAccess(accessParams, UPDATE), () => {
      // TODO
    })
  })
})
