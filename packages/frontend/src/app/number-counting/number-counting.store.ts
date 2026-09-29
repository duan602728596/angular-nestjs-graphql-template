import type { ISignalStore } from '../../types/ngrxSignal'
import { computed, type Signal } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'

export type NumberCountingStoreTypes = ISignalStore<
  {
    count: Signal<number>
  },
  {
    isOdd: Signal<boolean>
  },
  {
    add(): void
    sub(): void
  }
>

export const NumberCountingStore: NumberCountingStoreTypes['TypeStore'] = signalStore(
  { providedIn: 'root' },

  withState({
    count: 0,
  }),

  withComputed((state: NumberCountingStoreTypes['SignalState']): NumberCountingStoreTypes['SignalComputed'] => ({
    isOdd: computed((): boolean => state.count() % 2 !== 0),
  })),

  withMethods((store: NumberCountingStoreTypes['WritableStore']): NumberCountingStoreTypes['Methods'] => ({
    add(): void {
      patchState(store, (state: NumberCountingStoreTypes['State']): Pick<NumberCountingStoreTypes['State'], 'count'> => ({
        count: state.count + 1,
      }))
    },
    sub(): void {
      patchState(store, (state: NumberCountingStoreTypes['State']): Pick<NumberCountingStoreTypes['State'], 'count'> => ({
        count: state.count - 1,
      }))
    },
  })),
)
