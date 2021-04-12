import { proxy, subscribe } from 'valtio';

export const valtioStore = proxy({ count: 0 });

export { subscribe };
