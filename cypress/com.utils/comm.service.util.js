import Env from '../com.config/env.json'

/**
 * This is a interceptor for all api calls.
 * @param endpoint : api end point after the baseURL
 * @param method: GET, POST, DELETE, PUT
 * @param body: JSON / string
 * @param headers: baisic AUth and content type is by default. additonal headers can be added
 */

export const apiRequest = ({ endpoint, method, headers, body }) => {
  const envValues = Env[Cypress.env().configFile]
  return cy.request({
    url: `${envValues.baseUrl}${endpoint}`,
    method,
    headers: {
      accept: 'application/json',
      Authorization: `Basic ${Cypress.env('BASE_TOKEN')}`,
      // more headers can be added or overwrite the existing one
      ...headers,
    },
    body,
  })
}
