import { createStore } from 'redux';

export interface CounterState {
  count: number;
}

export const REDUX_MUTATION_SET_COUNT = 'SET_COUNT';

function counterReducer(state: CounterState = { count: 0 }, action: any) {
  switch (action.type) {
    case REDUX_MUTATION_SET_COUNT:
      return { count: action.payload.newCount };
    default:
      return state;
  }
}

const store = createStore(counterReducer)

export default store;
