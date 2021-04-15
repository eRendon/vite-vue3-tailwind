import github from '@/assets/img/github.svg';
import google from '@/assets/img/google.svg';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { auth } from '../../../store';
import { Register } from '../../../interface/Auth';

export default {

  components: {
    Field,
    Form,
    ErrorMessage
  },

  setup() {

    const schema = {
      email: 'required|email',
      password: 'required|min:6',
      title: 'required',
      firstName: 'required',
      lastName: 'required',
      confirmPassword: 'required|confirmed:@password',
      acceptTerms: 'required'
    };

    const register = async (registerForm: Register): Promise<void> => {
      console.info(registerForm)
      await auth.actions.register(registerForm)
    }
    
    return {
      github,
      google,
      register,
      schema
    };
  },
};
