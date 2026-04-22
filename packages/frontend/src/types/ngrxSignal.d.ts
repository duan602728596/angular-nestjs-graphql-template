import type { Signal, Type } from '@angular/core';
import type { StateSource, WritableStateSource } from '@ngrx/signals';

type SignalStateToState<T> = {
  [K in keyof T]: T[K] extends Signal<infer U> ? U : T[K];
};

export interface ISignalStore<ISignalState = {}, ISignalComputed = {}, ISignalMethods = {}> {
  // 原始 signal state
  SignalState: ISignalState;

  // 还原后的普通 state
  State: SignalStateToState<this['SignalState']>;

  // 对外只读 store
  Store: ISignalState & ISignalComputed & ISignalMethods & StateSource<SignalStateToState<ISignalState>>;

  // signalStore() 返回的类型
  TypeStore: Type<this['Store']>;

  // withMethods 回调的store的类型
  WritableStore: ISignalState & ISignalComputed & WritableStateSource<SignalStateToState<ISignalState>>;
}