import { ref } from 'vue';
import { auth } from '../../../store';

export default {
  setup() {
    const github = ref<string>('@/assets/img/github.svg');
    const google = ref<string>('@/assets/img/google.svg');

    const logIn = (): void => {
      auth.actions.logIn();
    }

    return {
      github,
      google,
      logIn
    };
  },
};
