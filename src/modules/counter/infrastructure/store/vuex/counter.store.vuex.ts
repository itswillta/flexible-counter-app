import { createStore } from 'vuex';
import mutations from './counter.store.vuex.mutations';

export interface CounterState {
  count: number;
}

const state: CounterState = {
  count: 0
};

export default createStore({
  state,
  mutations
});
