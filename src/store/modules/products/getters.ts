import state from './state';

const getters = {
  getItems: () => state.items,
  getBag: () => state.bag,
};

export default getters;
