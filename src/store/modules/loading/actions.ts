import state from './state';

export default {
  loadingStart(): void {
    state.loading = true;
  },
  finishLoading(): void {
    state.loading = false;
  },
};
