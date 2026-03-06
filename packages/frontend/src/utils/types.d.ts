/* service返回的数据类型 */
export interface IServiceDataReturnType<T> {
  errorMessage?: string;
  data: T
}