import { computed } from 'vue';
import state from './state';

const getters = {
  getLoading: computed(() => state.loading),
};

export default getters;
