import {
  subMenuItems,
  menuHeaders,
} from '../pageobject/app.selectors/app.home.page.selectors'

const { Home, ToolsAndReports } = menuHeaders
const {
  Feedback,
  Users,
} = subMenuItems
export const isAdmin = (header, menuItem) => {
  if (
    (header === null && menuItem === null) ||
    (header === Home && menuItem === null) ||
    (header === ToolsAndReports && menuItem === Feedback) ||
    (header === null && menuItem === Users)
  ) {
    return true
  } else {
    return false
  }
}
export const isViewer = (header, menuItem) => {
  if (
    (header === null && menuItem === null) ||
    (header === Home && menuItem === null) ||
    (header === ToolsAndReports && menuItem === Feedback) ||
    (header === null && menuItem === Users)
  ) {
    return true
  } else {
    return false
  }
}
