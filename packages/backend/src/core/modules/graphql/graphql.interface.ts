import type { Request } from 'express'

export interface IGraphQLRequestFuncContext {
  readonly req: Request
}

export interface IGraphQLContext extends IGraphQLRequestFuncContext {}
