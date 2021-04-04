import state from './state';

const mutations = {
  setAuth(stateLogin: boolean): void {
    state.isLogged = stateLogin;
  },
};

export default mutations;
