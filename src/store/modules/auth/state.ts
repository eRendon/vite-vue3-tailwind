import { reactive } from 'vue';

interface storageAth {
  isLogged: boolean;
}

const state = reactive<storageAth>({
  isLogged: false,
});

export default state;
