/**
 * 为angular的http的response body额外添加一个context
 * @typeParam T
 */
export interface INgResponseBodyContext<T> {
  context: T
}

/**
 * ng的injectAsync的异步加载
 * @typeParam T
 */
export type TNgInjectAsync<T> = () => Promise<T>

/**
 * 定义mcp服务的execute的返回类型
 */
export interface IMcpExecuteTextContent {
  type: 'text'
  text: string
}

export interface IMcpContentExecuteReturnType {
  content: Array<IMcpExecuteTextContent>
}
