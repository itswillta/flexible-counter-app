export default interface CounterRepositoryInterface {
  getCount: () => Promise<number>;
  increment: (by: number) => Promise<void>;
  decrement: (by: number) => Promise<void>;
};
