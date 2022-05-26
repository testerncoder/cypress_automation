import xmlBody from '../../data/xml.data/deliveriesRequestBody'
import getToken from '../../com.utils/comm.session.token-api'

describe('Main API', () => {
  it('API should return 200, for valid access token', () => {
    if (getToken()) {
      cy.request({
        method: 'POST',
        url:
          'API_URL_Endpoint',
        body: xmlBody,
        headers: {
          'Content-Type': 'text/xml',
          SOAPAction: 'xtk:queryDef#ExecuteQuery',
        },
      }).then(response => {
        assert.equal(response.status, 200, 'status was 200')
      })
    }
  })
})
