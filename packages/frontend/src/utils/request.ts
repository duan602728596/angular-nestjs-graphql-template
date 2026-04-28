import { GraphQLError, type ExecutionResult } from 'graphql';
import type { Query as IGraphQLQuerySchema } from '@backend/graphql/schema.js';

export interface IQuery {
  variables: any;
  query: string;
}

export type IGraphQLResBody = ExecutionResult<IGraphQLQuerySchema>
export { IGraphQLQuerySchema };

/**
 * 发送一个请求
 * @param { IQuery } body - graphql的语句
 * @return { IGraphQLQuerySchema } 返回graphql的数据
 */
export async function requestGraphql(body: IQuery): Promise<IGraphQLResBody> {
  try {
    const abortController: AbortController = new AbortController();
    const reqTimeoutTimer: number = setTimeout((): void => {
      abortController.abort();
    }, 60_000);
    const res: Response = await fetch('http://localhost:5157/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123456'
      },
      body: JSON.stringify(body),
      signal: abortController.signal
    });

    clearTimeout(reqTimeoutTimer);

    return res.json();
  } catch (err: unknown) {
    const e: Error = err instanceof Error ? err : new Error(String(err));

    return {
      data: null,
      errors: [new GraphQLError(e.message, { originalError: e })]
    };
  }
}