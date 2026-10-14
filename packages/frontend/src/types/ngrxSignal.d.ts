import type { Signal, Type } from '@angular/core'
import type { StateSource, WritableStateSource } from '@ngrx/signals'

type SignalStateToState<T> = {
  [K in keyof T]: T[K] extends Signal<infer U> ? U : T[K];
}

/**
 * @typeParam ISignalState - state: 一个值的类型是Signal的object
 * @typeParam ISignalComputed - computed: 一个值的类型是Signal的object
 * @typeParam ISignalMethods - methods: store的methods函数
 */
export interface ISignalStore<ISignalState = object, ISignalComputed = object, ISignalMethods = object> {
  /**
   * signal state
   */
  SignalState: ISignalState

  /**
   * signal computed
   */
  SignalComputed: ISignalComputed

  /**
   * methods
   */
  Methods: ISignalMethods

  /**
   * signal state 转换成的普通的 state类型，用于patchState
   * eg:
   * ```
   * patchState(store, (state: TExampleSignalStore['State']): TExampleSignalStore['State'] => ({
   *   ...state,
   *   key: payload,
   * }))
   * ```
   */
  State: SignalStateToState<ISignalState>

  /**
   * 对外只读的 store
   * eg:
   * ```
   * @Component()
   * class Example {
   *   exampleStore: TExampleSignalStore['Store'] = inject<TExampleSignalStore['Store']>(ExampleStore)
   * }
   * ```
   */
  Store: ISignalState & ISignalComputed & ISignalMethods & StateSource<this['State']>

  /**
   * signalStore() 返回的类型
   * ```
   * eg:
   * const ExampleStore: TExampleSignalStore['TypeStore'] = signalStore()
   * ```
   */
  TypeStore: Type<this['Store']>

  /**
   * withMethods 回调的store的类型
   * eg:
   * ```
   * withMethods((store: TExampleSignalStore['WritableStore']): TExampleSignalStore['Methods'] => ({
   * }))
   * ```
   */
  WritableStore: ISignalState & ISignalComputed & WritableStateSource<this['State']>
}
