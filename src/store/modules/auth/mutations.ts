import state from './state';
import { Profile } from '../../../interface/Profile';

const mutations = {
  setAuth(stateLogin: boolean, profile: Profile): void {
    state.isLogged = stateLogin;
    state.profile = profile;
  },
};

export default mutations;
