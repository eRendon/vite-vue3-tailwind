import state from './state';

const getters = {
  getLoading: ():boolean => state.loading,
};

export default getters;
