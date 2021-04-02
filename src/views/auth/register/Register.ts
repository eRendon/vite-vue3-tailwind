import { ref } from 'vue';

export default {
  setup() {
    const github = ref<string>('@/assets/img/github.svg');
    const google = ref<string>('@/assets/img/google.svg');

    return {
      github,
      google,
    };
  },
};
