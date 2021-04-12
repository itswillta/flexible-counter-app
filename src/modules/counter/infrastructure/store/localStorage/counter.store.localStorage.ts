const COUNTER_LOCAL_STORAGE_KEY = 'counter_count';

localStorage.setItem(COUNTER_LOCAL_STORAGE_KEY, '0');

class LocalStorageCounter {
  #listeners: Function[] = [];

  constructor() {
    window.addEventListener('storage', e => {
      if (e.storageArea !== localStorage || e.key !== COUNTER_LOCAL_STORAGE_KEY) return;
    
      this.#listeners.forEach(listener => {
        listener(e.newValue);
      });
    });
  }

  public getCount() {
    return Number(localStorage.getItem(COUNTER_LOCAL_STORAGE_KEY));
  }

  public setCount(newCount: number) {
    localStorage.setItem(COUNTER_LOCAL_STORAGE_KEY, String(newCount));

    const storageEvent = new Event('storage') as any;

    storageEvent.key = COUNTER_LOCAL_STORAGE_KEY;
    storageEvent.storageArea = localStorage;
    storageEvent.newValue = newCount;

    window.dispatchEvent(storageEvent);
  }

  public subscribe(listener: Function) {
    this.#listeners.push(listener);
  }
}

export default new LocalStorageCounter();
