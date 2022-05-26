import { subMenuItems } from '../pageobject/app.selectors/app.home.page.selectors'
import { menuHeaders } from '../pageobject/app.selectors/app.home.page.selectors'
import role from '../com.const/role.json'
import crud from '../com.const/crud.operation.json'
import cons from '../com.const/env.variable.json'
import Env from '../com.config/env.json'

const envValues = Env[Cypress.env().configFile]
const { ADMIN, VIEWER } = role
const { CREATE, READ, UPDATE, DELETE } = crud
const { Home} = menuHeaders
const {
  Feedback,
  Users,
} = subMenuItems

/**
 * @param  {} testType==='DELETE'||testType==='CREATE'||testType==='EDIT'||testType==='VIEW'
 */
const hasROAccess = (testType, env) => {
  if (
    envValues.env.Platform === env ||
    envValues.env.Platform === cons.REGRESSION ||
    envValues.env.Platform === cons.SANITY
  ) {
    return testType === READ
  } else {
    return testType === READ
  }
}

const hasRWAccess = (testType, env) => {
  if (
    envValues.env.Platform === env ||
    envValues.env.Platform === cons.REGRESSION ||
    envValues.env.Platform === cons.SANITY
  ) {
    return testType === CREATE || testType === UPDATE || testType === READ
  } else {
    return testType === READ
  }
}
// undefined -or- cons.REGRESSION/Test - run in Test
// cons.PVT - run in both = Test and PVT

const hasFullAccess = (testType, env) => {
  if (
    envValues.env.Platform === env ||
    envValues.env.Platform === cons.REGRESSION ||
    envValues.env.Platform === cons.SANITY
  ) {
    return (
      testType === DELETE ||
      testType === CREATE ||
      testType === UPDATE ||
      testType === READ
    )
  } else {
    return testType === READ
  }
}
/**
 * @param  {} {role : user role which is being used to decide the access of feature
 * @param  {} menuItem : feature/page of PDB application
 * @param  {} testType= READ
 * @param  {} =>{switch(menuItem
 * @param  {caseProductAttributes:caseBundles:caseTags:caseFeedback:if(role===ADMIN} {caseProductType
 */

export const hasAccess = ({ role, menuItem, header }, testType = READ, env) => {
  switch (menuItem || header) {
    case Feedback:
    case UserReports:
    case ImportProductsReport:
      if (role === ADMIN) {
        return hasFullAccess(testType, env)
      } else if (role === VIEWER) {
        return hasROAccess(testType, env)
      } else if (role === 'ABC' || role === "YXZ" ) {
        return false
      }
    case Home:
      if (role === ADMIN) {
        return hasFullAccess(testType, env)
      } else if (role === MARKETING || role === SUPPLIER || role === MERCHANT) {
        return hasRWAccess(testType, env)
      } else if (role === VIEWER) {
        return hasROAccess(testType, env)
      } else {
        return false
      }
  }
  return false
}
