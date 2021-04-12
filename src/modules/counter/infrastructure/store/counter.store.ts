import vuexStore from './vuex/counter.store.vuex';
import { VUEX_MUTATION_SET_COUNT } from './vuex/counter.store.vuex.mutations';
import reduxStore from './redux/counter.store.redux';
import { REDUX_MUTATION_SET_COUNT } from './redux/counter.store.redux';
import { mobXStore, observe } from './mobX/counter.store.mobX';
import { valtioStore, subscribe } from './valtio/counter.store.valtio';
import localStorageCounter from './localStorage/counter.store.localStorage';

// ================== VUEX ==================

// class CounterStore {
//   public subscribeToCount(callback: Function) {
//     vuexStore.subscribe((mutation, state) => {
//       callback(state.count);
//     });
//   }

//   public getCount() {
//     return vuexStore.state.count;
//   }

//   public setCount(newCount: number) {
//     vuexStore.commit(VUEX_MUTATION_SET_COUNT, newCount);
//   }
// }

// ================== REDUX ==================

// class CounterStore {
//   public subscribeToCount(callback: Function) {
//     reduxStore.subscribe(() => {
//       callback(reduxStore.getState().count);
//     });
//   }

//   public getCount() {
//     return reduxStore.getState().count;
//   }

//   public setCount(newCount: number) {
//     reduxStore.dispatch({ type: REDUX_MUTATION_SET_COUNT, payload: { newCount } });
//   }
// }

// ================== MOBX ==================


// class CounterStore {
//   public subscribeToCount(callback: Function) {
//     observe(mobXStore, change => {
//       callback(change.object[change.name]);
//     });
//   }

//   public getCount() {
//     return mobXStore.count;
//   }

//   public setCount(newCount: number) {
//     mobXStore.count = newCount;
//   }
// }

// ================== VALTIO ==================

// class CounterStore {
//   public subscribeToCount(callback: Function) {
//     subscribe(valtioStore, () => {
//       callback(valtioStore.count);
//     });
//   }

//   public getCount() {
//     return valtioStore.count;
//   }

//   public setCount(newCount: number) {
//     valtioStore.count = newCount;
//   }
// }

// ================== LOCAL STORAGE ==================

class CounterStore {
  public subscribeToCount(callback: Function) {
    localStorageCounter.subscribe((newCount: number) => {
      callback(newCount);
    });
  }

  public getCount() {
    return localStorageCounter.getCount();
  }

  public setCount(newCount: number) {
    localStorageCounter.setCount(newCount);
  }
}

export default new CounterStore();
