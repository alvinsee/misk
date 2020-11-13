import { IActionTypes } from "src/form-builder"

export const HIBERNATE_QUERY_WEBACTION_PATH = "/api/database/query/hibernate"

// Maps from a functionName for the constraint, order, or select to the return Type string identifier
export interface IFunctionMetadata {
  name: string
  parametersType: string
}

export interface IConstraintMetadata extends IFunctionMetadata {
  path: string
  operator?: string
}

export interface IOrderMetadata extends IFunctionMetadata {
  path: string
  ascending: boolean
}

export interface ISelectMetadata extends IFunctionMetadata {
  paths: string[]
}

export interface IRunQueryAPIRequest {
  queryClass: String
  query: any
}

export interface IDatabaseQueryMetadataAPI {
  queryWebActionPath: string
  allowedCapabilities: string[]
  allowedServices: string[]
  accessAnnotation: string
  table: string
  entityClass: string
  queryClass: string
  constraints: IConstraintMetadata[]
  orders: IOrderMetadata[]
  selects: ISelectMetadata[]
  types?: IActionTypes
}
