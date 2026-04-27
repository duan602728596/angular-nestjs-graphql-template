import { Injectable } from '@angular/core';
import { query } from 'gql-query-builder';
import { requestGraphql, type IQuery, type IGraphQLQuerySchema, type IGraphQLResBody } from '../../utils/request';
import type { IServiceDataReturnType } from '../../types/response';

@Injectable()
export class MilitaryGeneralsService {
  async getMilitaryGenerals(): Promise<IServiceDataReturnType<IGraphQLQuerySchema['militaryGenerals']['list']>> {
    const queryString: IQuery = query([{
      operation: 'militaryGenerals',
      fields: [{
        list: ['id', 'name', 'influence']
      }]
    }]);
    const res: IGraphQLResBody = await requestGraphql(queryString);

    return {
      data: res.data?.militaryGenerals.list ?? [],
      errorMessage: res?.errors?.[0].message
    };
  }
}
