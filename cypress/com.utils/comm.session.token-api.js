import tokenRequestBody from '../data/xml.data/tokenRequestBody'

const getToken = () => {
  cy.request({
    method: 'POST',
    url: 'API_URL',
    body: tokenRequestBody,

    headers: {
      'Content-Type': 'text/xml',
      SOAPAction: 'xtk:session#logon',
    },
  }).then(response => {
    assert.equal(response.status, 200, 'status was 200')
    const xml = Cypress.$.parseXML(response.body)
    const xmlAttribute = xml.getElementsByTagName('pstrSessionToken')
    const token = xmlAttribute[0].innerHTML
    Cypress.env('token', token)
  })

  return Cypress.env('token')
}

export default getToken
