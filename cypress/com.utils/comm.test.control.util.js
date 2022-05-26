import { loginUtil, hoverOverOn, clickOnMenuItem, clickOnHeaderItem } from '.'

/**
 * @param {*} name : test case name or description as a string
 * @param {*} condition : condition or function which returns true and helps to decide whether or not test case
 * should be executed if condition is true. e.g. call hasAccess() to check if user has access to run - DELETE or CREATE
 * test.
 * @param {*} fn : need to pass function to modify original 'it' block of chai library.
 * @It : Recommended, to use 'It instead of it' for all the test cases which are not accessesible for every user.
 * @describeAccess : Recommended, to use 'describeAccess instead of describe' if you want to skip some scenarios
 * on the basis of certain condition
 */

export const It = (name, condition, fn) => {
  return condition ? it(name, fn) : it.skip(name, fn)
}

export const Describe = (name, condition = true, fn) => {
  return condition ? describe(name, fn) : describe.skip(name, fn)
}

export const beforeEachHook = ({
  role,
  username,
  password,
  header,
  menuItem,
}) => {
  // login before each test as per the user access permission
  beforeEach(`Login with valid ${role} user access role`, () => {
    if (header && menuItem) {
      loginUtil({ username, password })
      hoverOverOn(header)
      clickOnMenuItem(menuItem)
    } else if (header || menuItem === null) {
      loginUtil({ username, password })
      clickOnHeaderItem(header)
    } else if (header === null || menuItem) {
      loginUtil({ username, password })
      clickOnMenuItem(menuItem)
    } else {
      return false
    }
  })
}
