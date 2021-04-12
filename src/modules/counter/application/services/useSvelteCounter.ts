import { writable } from 'svelte/store';
import CounterService from '../../domain/counter.service';
import counterRepository from '../../infrastructure/counter.repository';
import counterStore from '../../infrastructure/store/counter.store';

const counterService = new CounterService(counterRepository);

export const count = writable(counterStore.getCount());

counterStore.subscribeToCount((storeCount: number) => {
  count.set(storeCount);
});

export const increment = async (by: number) => {
  await counterService.increment(by);
};

export const decrement = async (by: number) => {
  await counterService.decrement(by);
};
