import type { IServiceDataReturnType } from '../../types/response'
import { Injectable } from '@angular/core'
import { query } from 'gql-query-builder'
import { type IGraphQLQuerySchema, type IGraphQLResBody, type IQuery, requestGraphql } from '../../utils/requestGraphql'

@Injectable()
export class MilitaryGeneralsService {
  async getMilitaryGenerals(): Promise<IServiceDataReturnType<IGraphQLQuerySchema['militaryGenerals']['list']>> {
    const queryString: IQuery = query([{
      operation: 'militaryGenerals',
      fields: [{
        list: ['id', 'name', 'influence'],
      }],
    }])
    const res: IGraphQLResBody = await requestGraphql(queryString)

    return {
      data: res.data?.militaryGenerals.list ?? [],
      errorMessage: res?.errors?.[0].message,
    }
  }
}
