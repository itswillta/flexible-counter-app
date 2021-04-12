import CounterRepositoryInterface from '../domain/counter.repository.interface';
import counterStore from './store/counter.store';

class CounterRepository implements CounterRepositoryInterface {
  public async getCount(): Promise<number> {
    // call HTTP requests

    // or get count in store (cache)
    return counterStore.getCount();
  }

  public async increment(by: number): Promise<void> {
    // call HTTP requests

    // increment count in store
    counterStore.setCount(counterStore.getCount() + by);
  }

  public async decrement(by: number): Promise<void> {
    // call HTTP requests

    // decrement count in store
    counterStore.setCount(counterStore.getCount() - by);
  }
}

export default new CounterRepository();
