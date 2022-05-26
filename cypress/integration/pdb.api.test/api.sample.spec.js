import * as util from '../../com.utils'
import data from '../../data/api.data/api.sample.data.json'

const { ResponseTimeMaxLimit } = data.testData

describe('Sample API', () => {
  const getItems = () =>
    util.apiRequest({
      endpoint: data.endPoint,
      method: 'POST',
      headers: {
        Authorization: `Basic ${Cypress.env(data.headers)}`,
      },
      body: data.body,
    })

  it('should return response status code as 200', () => {
    getItems()
      .its('status')
      .should('eq', 200)
  })

  it(`should have response time less than ${ResponseTimeMaxLimit} ms`, () => {
    getItems()
      .its('duration')
      .should('be.lessThan', ResponseTimeMaxLimit)
  })
})
