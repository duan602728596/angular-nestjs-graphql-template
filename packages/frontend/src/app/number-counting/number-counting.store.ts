import type { ISignalStore } from '../../types/ngrxSignal'
import { isPlatformServer } from '@angular/common'
import { computed, inject, makeStateKey, PLATFORM_ID, type Signal, type StateKey, TransferState } from '@angular/core'
import { patchState, signalStore, watchState, withComputed, withHooks, withMethods, withState } from '@ngrx/signals'

export type TNumberCountingStoreTypes = ISignalStore<
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

const NUMBER_COUNTING_STORE_KEY: StateKey<TNumberCountingStoreTypes['State']> = makeStateKey('NumberCountingStore')

export const NumberCountingStore: TNumberCountingStoreTypes['TypeStore'] = signalStore(
  { providedIn: 'root' },

  withState({
    count: 0,
  }),

  withComputed((state: TNumberCountingStoreTypes['SignalState']): TNumberCountingStoreTypes['SignalComputed'] => ({
    isOdd: computed((): boolean => state.count() % 2 !== 0),
  })),

  withMethods((store: TNumberCountingStoreTypes['WritableStore']): TNumberCountingStoreTypes['Methods'] => ({
    add(): void {
      patchState(store, (state: TNumberCountingStoreTypes['State']): Pick<TNumberCountingStoreTypes['State'], 'count'> => ({
        count: state.count + 1,
      }))
    },
    sub(): void {
      patchState(store, (state: TNumberCountingStoreTypes['State']): Pick<TNumberCountingStoreTypes['State'], 'count'> => ({
        count: state.count - 1,
      }))
    },
  })),

  withHooks({
    onInit(store: TNumberCountingStoreTypes['WritableStore']): void {
      const transferState: TransferState = inject<TransferState>(TransferState)
      const isSSR: boolean = isPlatformServer(inject<object>(PLATFORM_ID))

      if (isSSR) {
        watchState(store, (state: TNumberCountingStoreTypes['State']): void => {
          transferState.set(NUMBER_COUNTING_STORE_KEY, state)
        })
        return
      }

      const initialState: TNumberCountingStoreTypes['State'] | undefined = transferState.get(NUMBER_COUNTING_STORE_KEY, undefined)
      initialState && patchState(store, initialState)
    },
  }),
)
