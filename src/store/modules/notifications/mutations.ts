import { Toast } from '@/interface/Toast';
import state from './state';

const mutations = {
  setToast(toast: Toast): void {
    state.toast = toast;
  },
};

export default mutations;
