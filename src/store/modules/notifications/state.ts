import { reactive } from 'vue';
import { Toast } from '@/interface/Toast';

interface StorageNotifications {
  toast: Toast;
}

const state = reactive<StorageNotifications>({
  toast: {},
});

export default state;
