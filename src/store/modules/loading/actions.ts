import state from './state';

export default {
  start(message: string): void {
    state.loading = true;
    state.message = message
  },
  finish(): void {
    state.loading = false;
    state.message = ''
  },
};
