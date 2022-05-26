import { ObjectSchema, versionSchemas } from '@cypress/schema-tools'
import { productsItemNumberResponseExample } from '../api.schema.example/api.sample.{itemnumber}.example'

type Variant = {
  Type: string
  IsPrimary: boolean
  SubType: string
  Data: string
}

type BrochureDocument = {
  Primary: string
  Secondary: string
}

type Video = {
  VideoSource: string
  VideoId: string
  Thumbnail: BrochureDocument
  Duration: number
  Title: string
  Type: string
}

export type ApiSampleItemNumberSchema = {
  Id: string
  DateCreated: string
  DateModified: string
  Material: string
  Colour: string
}

const productsItemNumberResponse: ObjectSchema = {
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },

  schema: {
    title: 'ProductsItemNumberResponse',
    type: 'object',
    description: 'Products description',
    properties: {
      Id: {
        type: 'string',
        format: 'uuid',
      },
      DateCreated: {
        type: 'string',
        format: 'date-time',
      },
      DateModified: {
        type: 'string',
        format: 'date-time',
      },
  
      Colour: {
        type: 'string',
      },
      Variants: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      Dimensions: {
        type: 'array',
        items: {
          type: 'object',
        },
      },
    },
    required: [
      'Id',
      'Variants',
      'Video',
      'Videos',
      'Volume',
      'Dimensions',
    ],
    additionalProperties: false,
  },
  example: productsItemNumberResponseExample,
}

export const ProductsItemNumberApiResponse = versionSchemas(
  productsItemNumberResponse
)
