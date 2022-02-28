import { ref } from 'vue';
import { auth } from '../../../store';
import { LogIn } from '@/interface/Auth';
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Field,
    Form,
    ErrorMessage
  },

  setup() {

    const github = ref<string>('@/assets/img/github.svg');
    const google = ref<string>('@/assets/img/google.svg');

    const schema = {
      email: 'required|email',
      password: 'required|min:6',
    };

    const logIn = async (data: LogIn): Promise<void> => {
      console.log(data)
      await auth.actions.logIn(data);
    }

    return {
      github,
      google,
      logIn,
      schema
    };
  }
};
