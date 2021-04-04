import state from './state';

const getters = {
  getToastState: (): boolean => state.isLogged,
};

export default getters;
