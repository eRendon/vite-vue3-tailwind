import { Item } from '@/server/models/Item';
import state from './state';

const mutations = {
  setItems(items: Item[]): void {
    state.items = items;
  },
  setBag(items: Item[]): void {
    state.bag = items;
  },
};

export default mutations;
