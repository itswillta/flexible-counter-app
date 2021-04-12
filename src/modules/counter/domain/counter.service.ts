import CounterRepositoryInterface from './counter.repository.interface';

export default class CounterService {
  constructor(protected counterRepository: CounterRepositoryInterface) {}

  public async increment(by: number): Promise<void> {
    return this.counterRepository.increment(by);
  }

  public async decrement(by: number): Promise<void> {
    return this.counterRepository.decrement(by);
  }
}
