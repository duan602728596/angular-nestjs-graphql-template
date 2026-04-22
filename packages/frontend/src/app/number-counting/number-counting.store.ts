import { computed, type Signal } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import type { ISignalStore } from '../../types/ngrxSignal';

export type NumberCountingStoreTypes = ISignalStore<
  {
    count: Signal<number>;
  },
  {
    isOdd: Signal<boolean>;
  },
  {
    add(): void;
    sub(): void;
  }
>

export const NumberCountingStore: NumberCountingStoreTypes['TypeStore'] = signalStore(
  { providedIn: 'root' },

  withState({
    count: 0
  }),

  withComputed((state: NumberCountingStoreTypes['SignalState']) => ({
    isOdd: computed((): boolean => state.count() % 2 !== 0)
  })),

  withMethods((store: NumberCountingStoreTypes['WritableStore']) => ({
    add(): void {
      patchState(store, (state: NumberCountingStoreTypes['State']): Pick<NumberCountingStoreTypes['State'], 'count'> => ({
        count: state.count + 1
      }));
    },
    sub(): void {
      patchState(store, (state: NumberCountingStoreTypes['State']): Pick<NumberCountingStoreTypes['State'], 'count'> => ({
        count: state.count - 1
      }));
    }
  }))
);