import { SchemaCollection, bind, combineSchemas } from '@cypress/schema-tools'
import { ProductsItemNumberApiResponse } from './api.schema/api.sample.schema'

export const schemas: SchemaCollection = combineSchemas(
  ProductsItemNumberApiResponse
)

export const api = bind({ schemas })
/*
  api has methods to validate, sanitize, etc. objects against "schemas"
  {
    assertSchema: [Function],
    schemaNames: [ 'postTodoRequest' ],
    getExample: [Function],
    sanitize: [Function],
    validate: [Function]
  }
*/
