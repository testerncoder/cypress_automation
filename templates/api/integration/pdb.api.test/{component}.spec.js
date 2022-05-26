import * as util from '../../com.utils'
import { api } from '../../tscompiled/schemas'
import data from '../../data/api.data/{name}.data.json'

const { ResponseTimeMaxLimit } = data.testData

describe('Scenario description', () => {
  const getItems = () =>
    util.apiRequest({
      endpoint: data.endPoint,
      method: 'GET',
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
  it('should have correct schema', () => {
    getItems()
      .its('body')
      .then(api.assertSchema(data.schemaName, data.schemaVersion))
  })
})
