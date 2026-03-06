import { Injectable } from '@angular/core';
import { query } from 'gql-query-builder';
import { requestGraphql, type IQuery, type IGraphQLQuerySchema, type IGraphQLResBody } from '../../utils/request';
import type { IServiceDataReturnType } from '../../utils/types';

@Injectable()
export class MilitaryGeneralsService {
  async getMilitaryGenerals(): Promise<IServiceDataReturnType<IGraphQLQuerySchema['militaryGenerals']>> {
    const queryString: IQuery = query([{
      operation: 'militaryGenerals',
      fields: ['id', 'name', 'influence']
    }]);
    const res: IGraphQLResBody = await requestGraphql(queryString);

    return {
      data: res.data?.militaryGenerals ?? [],
      errorMessage: res?.errors?.[0].message
    };
  }
}
