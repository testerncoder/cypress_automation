import { isAdmin, isViewer } from '.'
import role from '../com.const/role.json'

const { ADMIN, VIEWER } = role

// Call login before test execution and then logout after test execution
/**
 * @param  {} role: PDB user roles. e.g. 'ADMIN'
 * @param  {} header: PDB website headers
 * @param  {} menuItem : PDB functionalies/webpages
 * @param  {} =>{switch(role)} : checks user role and decides usertype has access of menuItem
 */

export const userAccess = ({ role, header, menuItem }) => {
  switch (role) {
    case ADMIN:
    case VIEWER:
      if (
        (role === ADMIN && isAdmin(header, menuItem)) ||
        (role === VIEWER && isViewer(header, menuItem))
      ) {
        return true
      } else {
        return false
      }
  }
  return false
}
