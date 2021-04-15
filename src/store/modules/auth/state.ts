import { reactive } from 'vue';
import { Profile } from '../../../interface/Profile';

interface storageAuth {
  isLogged: boolean;
  profile?: Profile
}

const state = reactive<storageAuth>({
  isLogged: false,
  profile: {
    email: '',
    firstName: '',
    jwtToken: '',
    isVerified: false,
    lastName: '',
    updated: '',
    role: '',
    title: ''
  }
});

export default state;
