import { useState } from 'react';
import CounterService from '../../domain/counter.service';
import counterRepository from '../../infrastructure/counter.repository';
import counterStore from '../../infrastructure/store/counter.store';

const counterService = new CounterService(counterRepository);

export default function useCounter() {
  const [count, setCount] = useState(counterStore.getCount());

  counterStore.subscribeToCount((newCount: number) => {
    setCount(newCount);
  });

  const increment = async (by: number) => {
    await counterService.increment(by);
  };

  const decrement = async (by: number) => {
    await counterService.decrement(by);
  };

  return {
    count,
    increment,
    decrement
  };
}
