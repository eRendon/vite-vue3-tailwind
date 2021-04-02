import { Toast } from '@/interface/Toast';
import mutations from './mutations';

export default {
  presentToast(toast: Toast, time = 1000): void {
    mutations.setToast(toast);
    setTimeout(() => {
      const toastLocal = {
        show: false,
        type: '',
        tittle: '',
        body: '',
      };
      mutations.setToast(toastLocal);
    }, time);
  },
};
