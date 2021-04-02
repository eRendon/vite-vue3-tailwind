import { computed, defineComponent } from 'vue';
import { Toast } from '@/interface/Toast';
import { notifications } from '@/store';

export default defineComponent({
  name: 'Toast',
  setup() {
    const toast = computed<Toast>(() => notifications.getters.getToastState());
    const onCloseToast = () => {
      const toastLocal = {
        show: false,
        title: '',
        body: '',
        type: '',
      };
      notifications.actions.presentToast(toastLocal);
    };
    return {
      toast,
      onCloseToast,
    };
  },
});
